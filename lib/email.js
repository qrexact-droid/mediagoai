import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aigo.mediapro@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD  // Gmail App Password (not regular password)
  }
})

export async function sendLicenseEmail({ to, name, licenseKey, downloadUrl }) {
  const html = `
<!DOCTYPE html>
<html>
<head>
<style>
  body { background:#0a0a0a; color:#fff; font-family:-apple-system,sans-serif; margin:0; padding:0; }
  .container { max-width:560px; margin:0 auto; padding:40px 20px; }
  .logo { text-align:center; margin-bottom:32px; }
  .logo h1 { font-size:28px; font-weight:800; background:linear-gradient(135deg,#a855f7,#6366f1); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
  .card { background:#141414; border:1px solid #222; border-radius:16px; padding:32px; margin-bottom:24px; }
  .key-box { background:#0a0a1a; border:2px dashed #7c3aed; border-radius:10px; padding:20px; text-align:center; margin:20px 0; }
  .key { font-size:24px; font-weight:700; color:#a855f7; letter-spacing:2px; font-family:monospace; }
  .btn { display:block; background:linear-gradient(135deg,#7c3aed,#6366f1); color:#fff; text-decoration:none; padding:16px 32px; border-radius:12px; text-align:center; font-size:16px; font-weight:700; margin:24px 0; }
  .warning { background:#1a0a0a; border:1px solid #3a1a1a; border-radius:10px; padding:16px; font-size:13px; color:#888; }
  .footer { text-align:center; font-size:12px; color:#444; margin-top:32px; }
</style>
</head>
<body>
<div class="container">
  <div class="logo"><h1>🤖 AIGO Media</h1></div>
  
  <div class="card">
    <h2 style="margin:0 0 8px;font-size:22px;">You're in, ${name}! 🎉</h2>
    <p style="color:#666;margin:0 0 24px;">Your AI business assistant is ready to install. Here's everything you need:</p>

    <p style="font-size:13px;color:#888;margin:0 0 8px;letter-spacing:1px;">YOUR LICENSE KEY</p>
    <div class="key-box">
      <div class="key">${licenseKey}</div>
      <p style="font-size:12px;color:#555;margin:8px 0 0;">Keep this safe — you'll need it during setup</p>
    </div>

    <a href="${downloadUrl}" class="btn">⬇️ Download AIGO Media Setup</a>

    <div class="warning">
      ⚠️ <strong>Important:</strong> This download link works <strong>one time only</strong> and expires in 48 hours. 
      Save your license key — you may need it if you reinstall.
    </div>
  </div>

  <div class="card">
    <h3 style="margin:0 0 16px;font-size:16px;">How to install:</h3>
    <ol style="color:#888;font-size:14px;line-height:2;padding-left:20px;margin:0;">
      <li>Click the download button above</li>
      <li>Double-click the file you downloaded</li>
      <li>If Mac asks permission → right-click → Open</li>
      <li>Enter your license key when prompted</li>
      <li>Wait 5-10 minutes while everything installs</li>
      <li>Your AI assistant opens automatically when done</li>
    </ol>
  </div>

  <div class="footer">
    Questions? Reply to this email or visit mediagoai.com<br><br>
    © 2026 AIGO Media — Your AI Business Team
  </div>
</div>
</body>
</html>
  `

  await transporter.sendMail({
    from: '"AIGO Media" <aigo.mediapro@gmail.com>',
    to,
    subject: '🤖 Your AIGO Media License Key + Download Link',
    html
  })
}
