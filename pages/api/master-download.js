/**
 * Ron's master download — free, unlimited, any computer.
 * Protected by MASTER_KEY env var known only to Ron.
 * GET /api/master-download?key=YOUR_MASTER_KEY&platform=mac|windows
 */

const MASTER_KEY = process.env.MASTER_KEY || 'ron-mediagoai-master-2026'

const FILES = {
  mac: process.env.MAC_FILE_URL || '/AIGO_Media_Setup_Mac.zip',
  windows: process.env.WINDOWS_FILE_URL || '/AIGO_Media_Setup_Windows.zip',
}

export default function handler(req, res) {
  const { key, platform } = req.query

  if (key !== MASTER_KEY) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const fileUrl = FILES[platform] || FILES.mac

  // Log the download (optional)
  console.log(`Master download: ${platform} — ${new Date().toISOString()}`)

  return res.redirect(302, fileUrl)
}
