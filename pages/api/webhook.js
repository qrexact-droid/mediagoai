import Stripe from 'stripe'
import crypto from 'crypto'
import { sendLicenseEmail } from '../../lib/email'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const DOWNLOAD_SECRET = process.env.DOWNLOAD_SECRET || 'aigo-media-2026'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mediagoai.com'

export const config = { api: { bodyParser: false } }

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    req.on('data', c => chunks.push(c))
    req.on('end', () => resolve(Buffer.concat(chunks)))
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

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const rawBody = await getRawBody(req)
  const sig = req.headers['stripe-signature']

  let event
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  if (event.type !== 'checkout.session.completed') {
    return res.status(200).json({ received: true })
  }

  const session = event.data.object
  const customerEmail = session.customer_details?.email
  const customerName = session.customer_details?.name || 'there'

  if (!customerEmail) return res.status(200).json({ received: true })

  const licenseKey = generateLicenseKey()
  const downloadUrl = generateDownloadLink()

  await sendLicenseEmail({ to: customerEmail, name: customerName, licenseKey, downloadUrl })

  console.log(`✅ Sent to ${customerEmail}: ${licenseKey}`)
  res.status(200).json({ received: true })
}
