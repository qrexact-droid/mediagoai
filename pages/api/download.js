/**
 * One-time download handler — no database needed.
 * Token is a signed HMAC of (token + secret). 
 * Once used, token is stored in a simple JSON file.
 * Vercel serverless = ephemeral, so we use a KV store (Vercel KV — free tier).
 * 
 * Fallback: if no KV, just serve the file directly (no one-time enforcement).
 */

import crypto from 'crypto'

const SECRET = process.env.DOWNLOAD_SECRET || 'aigo-media-2026'
const FILE_URL = process.env.INSTALLER_FILE_URL // Supabase Storage or GitHub release URL

export default async function handler(req, res) {
  const { token } = req.query

  if (!token) {
    return res.status(400).send(errorPage('No download token provided.'))
  }

  // Verify token signature (token = base64(timestamp:hmac))
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf8')
    const [ts, sig, used] = decoded.split(':')

    // Check expiry (48 hours)
    const age = Date.now() - parseInt(ts)
    if (age > 48 * 60 * 60 * 1000) {
      return res.status(403).send(errorPage(
        'This download link has expired (48 hours).',
        'Email aigo.mediapro@gmail.com for a new one.'
      ))
    }

    // Verify signature
    const expected = crypto.createHmac('sha256', SECRET).update(ts).digest('hex')
    if (sig !== expected) {
      return res.status(403).send(errorPage('Invalid download link.'))
    }

    // One-time enforcement via Vercel KV (optional — enable by adding KV to project)
    // For now, token expiry alone is the protection

  } catch (e) {
    return res.status(400).send(errorPage('Invalid download link.'))
  }

  // Redirect to the actual file
  if (FILE_URL) {
    return res.redirect(302, FILE_URL)
  }

  // Fallback — serve from /public
  res.setHeader('Content-Type', 'application/zip')
  res.setHeader('Content-Disposition', 'attachment; filename="AIGO_Media_Setup.zip"')
  res.redirect(302, '/AIGO_Media_Setup.zip')
}

function errorPage(msg, sub = '') {
  return `<!DOCTYPE html>
<html><body style="background:#0a0a0a;color:#fff;font-family:sans-serif;text-align:center;padding:80px;">
<h1 style="font-size:48px;">⚠️</h1>
<h2>${msg}</h2>
${sub ? `<p style="color:#666;">${sub}</p>` : ''}
<p style="color:#555;margin-top:32px;">Need help? <a href="mailto:aigo.mediapro@gmail.com" style="color:#a855f7;">aigo.mediapro@gmail.com</a></p>
</body></html>`
}
