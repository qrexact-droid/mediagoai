/**
 * License key validator
 * Keys are managed in memory/valid_keys.json and synced here
 */

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { key, machineId } = req.body || {}
  if (!key) return res.status(400).json({ valid: false, error: 'No key provided' })

  const cleanKey = key.toUpperCase().trim()

  if (!/^AIGO-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}$/.test(cleanKey)) {
    return res.status(200).json({ valid: false, error: 'Invalid key format' })
  }

  const KEYS_DB = {
    "AIGO-8969-C667-66A8": {"name":"Beta Tester","email":"tester","machineId":null,"product":"MediaGoAI"},
    "AIGO-BEE0-D170-40FD": {"name":"Windows Beta Tester","email":"tester-windows","machineId":null,"product":"MediaGoAI Windows"},
    "AIGO-41FF-2A7A-BAE7": {"name":"Ronald McZeal","email":"mczeallionaire@gmail.com","machineId":null,"product":"MediaGoAI"},
    "AIGO-8B34-4B20-8098": {"name":"Ronald McZeal","email":"mczeallionaire@gmail.com","machineId":null,"product":"MediaGoAI"},
    "AIGO-937F-A12F-78C0": {"name":"Ronald McZeal","email":"mczeallionaire@gmail.com","machineId":null,"product":"MediaGoAI"},
    "AIGO-6541-0B4E-BF23": {"name":"Ronald McZeal","email":"mczeallionaire@gmail.com","machineId":null,"product":"MediaGoAI"},
    "AIGO-5989-08CB-7331": {"name":"Ronald McZeal","email":"mczeallionaire@gmail.com","machineId":null,"product":"MediaGoAI"},
    "AIGO-5624-76BC-50A6": {"name":"Ronald McZeal","email":"mczeallionaire@gmail.com","machineId":null,"product":"MediaGoAI"}
  }

  const license = KEYS_DB[cleanKey]

  if (!license) {
    return res.status(200).json({ valid: false, error: 'Invalid license key' })
  }

  if (license.machineId && license.machineId !== machineId) {
    return res.status(200).json({
      valid: false,
      error: 'Key already activated on another computer. Email aigo.mediapro@gmail.com to transfer.'
    })
  }

  return res.status(200).json({
    valid: true,
    name: license.name || '',
    email: license.email || '',
    product: license.product || 'MediaGoAI'
  })
}
