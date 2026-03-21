/**
 * Generate a one-time download link.
 * Call this manually or from Stripe webhook.
 * Protected by ADMIN_SECRET env var.
 * 
 * GET /api/generate-link?secret=YOUR_ADMIN_SECRET&email=customer@email.com
 */

import crypto from 'crypto'

const DOWNLOAD_SECRET = process.env.DOWNLOAD_SECRET || 'aigo-media-2026'
const ADMIN_SECRET = process.env.ADMIN_SECRET || 'aigo-admin-2026'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mediagoai.com'

export default function handler(req, res) {
  const { secret, email } = req.query

  // Auth check
  if (secret !== ADMIN_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  // Generate token: base64(timestamp:hmac)
  const ts = Date.now().toString()
  const sig = crypto.createHmac('sha256', DOWNLOAD_SECRET).update(ts).digest('hex')
  const token = Buffer.from(`${ts}:${sig}`).toString('base64')

  const downloadUrl = `${BASE_URL}/api/download?token=${encodeURIComponent(token)}`

  // Also generate license key
  const seg = () => crypto.randomBytes(2).toString('hex').toUpperCase()
  const licenseKey = `AIGO-${seg()}-${seg()}-${seg()}`

  res.status(200).json({
    email,
    licenseKey,
    downloadUrl,
    expiresIn: '48 hours',
    message: `Send this to ${email}`
  })
}
