import crypto from 'crypto'

const SECRET = process.env.DOWNLOAD_SECRET || 'aigo-media-2026'

// Latest installer URLs
const MAC_URL = 'https://github.com/qrexact-droid/mediagoai/releases/download/v1.0.0/AIGO_Media_Setup_Mac_v1.1.3.zip'
const WIN_URL = 'https://github.com/qrexact-droid/mediagoai/releases/download/v1.0.0/AIGO_Media_Setup_Win_v1.1.3.zip'
const DEFAULT_URL = process.env.INSTALLER_FILE_URL || MAC_URL

export default async function handler(req, res) {
  const { token, platform } = req.query

  if (!token) {
    return res.status(400).send(errorPage('No download token provided.'))
  }

  try {
    // Handle both base64url and base64 encoding
    let decoded
    try {
      // Try base64url first (Python generates this)
      const padded = token.replace(/-/g, '+').replace(/_/g, '/') + '=='.slice(0, (4 - token.length % 4) % 4)
      decoded = Buffer.from(padded, 'base64').toString('utf8')
    } catch {
      decoded = Buffer.from(token, 'base64').toString('utf8')
    }

    const parts = decoded.split(':')
    const ts = parts[0]
    const sig = parts[1]

    if (!ts || !sig) {
      return res.status(400).send(errorPage('Invalid download link format.'))
    }

    // Check expiry (48 hours)
    const age = Date.now() - parseInt(ts)
    if (age > 48 * 60 * 60 * 1000) {
      return res.status(403).send(errorPage(
        'This download link has expired.',
        'Email aigo.mediapro@gmail.com for a new one.'
      ))
    }

    // Verify signature
    const expected = crypto.createHmac('sha256', SECRET).update(ts).digest('hex')
    if (sig !== expected) {
      return res.status(403).send(errorPage('Invalid download link.'))
    }

  } catch (e) {
    return res.status(400).send(errorPage('Invalid download link.'))
  }

  // Serve the file — detect platform from query or default to showing both options
  if (platform === 'windows' || platform === 'win') {
    return res.redirect(302, WIN_URL)
  } else if (platform === 'mac') {
    return res.redirect(302, MAC_URL)
  }

  // No platform specified — show download page with both options
  return res.send(`<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>MediaGoAI — Download</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{background:#07070f;color:#fff;font-family:-apple-system,sans-serif;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;}
.card{max-width:480px;width:100%;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:40px;text-align:center;}
h1{font-size:24px;margin-bottom:8px;}
p{color:#555;font-size:14px;margin-bottom:32px;}
.btn{display:block;padding:16px;border-radius:12px;font-size:16px;font-weight:700;text-decoration:none;margin-bottom:12px;transition:opacity 0.2s;}
.mac{background:linear-gradient(135deg,#7c3aed,#6366f1);color:#fff;}
.win{background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.3);color:#6366f1;}
.btn:hover{opacity:0.85;}
small{color:#333;font-size:12px;}
</style></head>
<body>
<div class="card">
  <div style="font-size:48px;margin-bottom:16px;">🤖</div>
  <h1>Download MediaGoAI</h1>
  <p>Choose your platform to start downloading</p>
  <a href="?token=${token}&platform=mac" class="btn mac">🍎 Download for Mac</a>
  <a href="?token=${token}&platform=windows" class="btn win">🪟 Download for Windows</a>
  <small>Each link downloads the correct installer for your system</small>
</div>
</body></html>`)
}

function errorPage(msg, sub = '') {
  return `<!DOCTYPE html>
<html><body style="background:#07070f;color:#fff;font-family:sans-serif;text-align:center;padding:80px;">
<div style="font-size:48px;margin-bottom:16px;">⚠️</div>
<h2 style="margin-bottom:12px;">${msg}</h2>
${sub ? `<p style="color:#666;">${sub}</p>` : ''}
<p style="color:#444;margin-top:32px;">Need help? <a href="mailto:aigo.mediapro@gmail.com" style="color:#a855f7;">aigo.mediapro@gmail.com</a></p>
</body></html>`
}
