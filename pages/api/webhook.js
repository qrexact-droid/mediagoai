import Stripe from 'stripe'
import crypto from 'crypto'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const DOWNLOAD_SECRET = process.env.DOWNLOAD_SECRET || 'aigo-media-2026'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.mediagoai.com'

export const config = { api: { bodyParser: false } }

function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = ''
    req.setEncoding('utf8')
    req.on('data', chunk => { data += chunk })
    req.on('end', () => resolve(data))
    req.on('error', reject)
  })
}

function generateDownloadLink() {
  const ts = Date.now().toString()
  const sig = crypto.createHmac('sha256', DOWNLOAD_SECRET).update(ts).digest('hex')
  const token = Buffer.from(`${ts}:${sig}`).toString('base64url')
  return `${BASE_URL}/api/download?token=${token}`
}

function generateLicenseKey() {
  const seg = () => crypto.randomBytes(2).toString('hex').toUpperCase()
  return `AIGO-${seg()}-${seg()}-${seg()}`
}

async function sendEmail({ to, name, licenseKey, downloadUrl }) {
  const BREVO_KEY = process.env.BREVO_API_KEY || ''

  if (!BREVO_KEY) {
    throw new Error(`NO_PROVIDER to=${to} key=${licenseKey} url=${downloadUrl}`)
  }

  const html = `<!DOCTYPE html>
<html><body style="background:#0a0a0a;color:#fff;font-family:-apple-system,sans-serif;margin:0;padding:0;">
<div style="max-width:560px;margin:0 auto;padding:40px 20px;">
<h1 style="color:#a855f7;">🤖 MediaGoAI</h1>
<p style="color:#444;font-size:13px;margin-bottom:28px;">Powered by OpenClaw AI</p>
<h2>You're in${name ? ', ' + name : ''}! 🎉</h2>
<p style="color:#666;font-size:14px;margin-bottom:24px;">Your OpenClaw AI business assistant is ready to install.</p>
<div style="background:#0f0820;border:2px dashed #7c3aed;border-radius:12px;padding:24px;text-align:center;margin-bottom:20px;">
  <p style="font-size:11px;color:#555;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;">License Key</p>
  <p style="font-size:26px;font-weight:700;color:#a855f7;letter-spacing:4px;font-family:monospace;">${licenseKey}</p>
  <p style="font-size:12px;color:#444;margin-top:8px;">Keep this safe — needed during setup</p>
</div>
<a href="${downloadUrl}" style="display:block;background:#7c3aed;color:#fff;text-decoration:none;padding:16px;border-radius:12px;text-align:center;font-size:16px;font-weight:700;margin-bottom:16px;">⬇️ Download MediaGoAI Setup</a>
<p style="color:#888;font-size:13px;margin-bottom:24px;">⚠️ Download link works ONE TIME only. Expires in 48 hours.</p>
<ol style="color:#555;font-size:13px;line-height:2.2;padding-left:20px;">
  <li>Click the download button above</li>
  <li>Double-click the downloaded file</li>
  <li>Mac: right-click → Open if prompted</li>
  <li>Enter your license key when asked</li>
  <li>Wait 5-10 min — your AI opens automatically</li>
</ol>
<p style="color:#333;font-size:12px;text-align:center;margin-top:24px;">Questions? <a href="mailto:aigo.mediapro@gmail.com" style="color:#a855f7;">aigo.mediapro@gmail.com</a></p>
</div></body></html>`

  const resp = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': BREVO_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sender: { name: 'AIGO Media', email: 'aigo.mediapro@gmail.com' },
      to: [{ email: to, name: name || to }],
      subject: '🤖 Your MediaGoAI License Key + Download Link',
      htmlContent: html
    })
  })

  if (!resp.ok) throw new Error(await resp.text())
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const rawBody = await getRawBody(req)
  const sig = req.headers['stripe-signature']

  let event
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    console.error('Sig error, parsing directly:', err.message)
    try { event = JSON.parse(rawBody) } catch { return res.status(400).send('Invalid') }
  }

  if (event.type !== 'checkout.session.completed') {
    return res.status(200).json({ received: true })
  }

  const session = event.data.object
  const customerEmail = session.customer_details?.email
  const customerName = session.customer_details?.name || ''
  if (!customerEmail) return res.status(200).json({ received: true })

  const licenseKey = generateLicenseKey()
  const downloadUrl = generateDownloadLink()

  console.log(`ENV: BREVO=${!!process.env.BREVO_API_KEY}`)
  console.log(`PURCHASE: ${customerEmail} | ${licenseKey}`)

  try {
    await sendEmail({ to: customerEmail, name: customerName, licenseKey, downloadUrl })
    console.log(`EMAIL_SENT: ${customerEmail}`)
  } catch (err) {
    console.error(`EMAIL_FAILED: ${err.message}`)
  }

  return res.status(200).json({ received: true })
}
