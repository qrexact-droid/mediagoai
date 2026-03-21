import crypto from 'crypto'

/**
 * Generate a unique license key like AIGO-X7K2-M9QP-3RFV
 */
export function generateKey() {
  const seg = () => crypto.randomBytes(2).toString('hex').toUpperCase()
  return `AIGO-${seg()}-${seg()}-${seg()}`
}

/**
 * Generate a one-time download token
 */
export function generateDownloadToken() {
  return crypto.randomBytes(32).toString('hex')
}
