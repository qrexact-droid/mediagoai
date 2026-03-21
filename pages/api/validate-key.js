import supabase from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { key, machineId } = req.body

  if (!key) return res.status(400).json({ valid: false, error: 'No key provided' })

  // Look up the key
  const { data: license, error } = await supabase
    .from('licenses')
    .select('*')
    .eq('license_key', key.toUpperCase().trim())
    .single()

  if (error || !license) {
    return res.status(200).json({ valid: false, error: 'Invalid license key' })
  }

  // Check if key already activated on a different machine
  if (license.machine_id && license.machine_id !== machineId) {
    return res.status(200).json({
      valid: false,
      error: 'This key is already activated on another computer. Contact support to transfer.'
    })
  }

  // Activate on this machine if first time
  if (!license.machine_id) {
    await supabase
      .from('licenses')
      .update({
        machine_id: machineId,
        activated_at: new Date().toISOString()
      })
      .eq('license_key', key.toUpperCase().trim())
  }

  return res.status(200).json({
    valid: true,
    name: license.name,
    email: license.email,
    product: license.product
  })
}
