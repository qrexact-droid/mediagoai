export default function Home() {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AIGO Media — AI Business Assistant</title>
        <style>{`
          * { margin:0; padding:0; box-sizing:border-box; }
          body {
            background: #080810;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            color: #fff;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
          }
          .logo { font-size: 64px; margin-bottom: 16px; }
          h1 {
            font-size: 48px;
            font-weight: 800;
            background: linear-gradient(135deg, #a855f7, #6366f1, #22d3ee);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 16px;
            text-align: center;
          }
          p { font-size: 18px; color: #666; text-align: center; max-width: 500px; line-height: 1.7; margin-bottom: 48px; }
          .features {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            max-width: 560px;
            width: 100%;
            margin-bottom: 48px;
          }
          .feature {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 16px;
            padding: 24px;
            text-align: center;
          }
          .feature .icon { font-size: 32px; margin-bottom: 10px; }
          .feature h3 { font-size: 15px; font-weight: 600; margin-bottom: 6px; }
          .feature p { font-size: 13px; color: #555; margin: 0; }
          .btn {
            background: linear-gradient(135deg, #7c3aed, #6366f1);
            color: white;
            border: none;
            padding: 18px 48px;
            border-radius: 14px;
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
          }
          .footer { margin-top: 48px; font-size: 13px; color: #333; text-align: center; }
        `}</style>
      </head>
      <body>
        <div className="logo">🤖</div>
        <h1>AIGO Media</h1>
        <p>Your AI business assistant. Set it up once — it works for you 24/7.</p>

        <div className="features">
          <div className="feature">
            <div className="icon">📱</div>
            <h3>Social Media</h3>
            <p>Auto-posts daily to all platforms</p>
          </div>
          <div className="feature">
            <div className="icon">🌐</div>
            <h3>Website</h3>
            <p>Built and live in minutes</p>
          </div>
          <div className="feature">
            <div className="icon">🎮</div>
            <h3>Content Creator</h3>
            <p>Clips posted automatically</p>
          </div>
          <div className="feature">
            <div className="icon">📦</div>
            <h3>Sell Online</h3>
            <p>Digital products with Stripe</p>
          </div>
        </div>

        <a href="mailto:aigo.mediapro@gmail.com" className="btn">Get Started →</a>

        <div className="footer">
          Questions? aigo.mediapro@gmail.com
        </div>
      </body>
    </html>
  )
}
