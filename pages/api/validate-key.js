/**
 * License key validator — no database needed.
 * Keys are stored in Vercel env var VALID_KEYS as JSON.
 * Order processor updates this via API when new purchase comes in.
 * Machine binding stored client-side in install state file.
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { key, machineId } = req.body || {}
  if (!key) return res.status(400).json({ valid: false, error: 'No key provided' })

  const cleanKey = key.toUpperCase().trim()

  // Format check first
  if (!/^AIGO-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}$/.test(cleanKey)) {
    return res.status(200).json({ valid: false, error: 'Invalid key format' })
  }

  // Load valid keys from env var (JSON string)
  let validKeys = {}
  try {
    const raw = process.env.VALID_KEYS || '{}'
    validKeys = JSON.parse(raw)
  } catch {
    validKeys = {}
  }

  const license = validKeys[cleanKey]

  // Key not found
  if (!license) {
    return res.status(200).json({ valid: false, error: 'Invalid license key' })
  }

  // Check machine binding
  if (license.machineId && license.machineId !== machineId) {
    return res.status(200).json({
      valid: false,
      error: 'This key is already activated on another computer. Email aigo.mediapro@gmail.com to transfer.'
    })
  }

  // First activation — bind to this machine via our update endpoint
  if (!license.machineId && machineId) {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/activate-key`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: cleanKey, machineId })
      })
    } catch {}
  }

  return res.status(200).json({
    valid: true,
    name: license.name || '',
    email: license.email || '',
    product: license.product || 'MediaGoAI'
  })
}
