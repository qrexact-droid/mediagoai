export default function Home() {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MediaGoAI — Your AI Business Team</title>
        <meta name="description" content="One setup. Your AI runs your social media, builds your website, and grows your business 24/7. Powered by OpenClaw." />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
          * { margin:0; padding:0; box-sizing:border-box; }
          html { scroll-behavior: smooth; }
          body {
            background: #080810;
            font-family: 'Inter', -apple-system, sans-serif;
            color: #fff;
            overflow-x: hidden;
          }

          /* NAV */
          nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 40px;
            border-bottom: 1px solid rgba(255,255,255,0.06);
            position: sticky;
            top: 0;
            background: rgba(8,8,16,0.95);
            backdrop-filter: blur(20px);
            z-index: 100;
          }
          .nav-logo {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 20px;
            font-weight: 800;
            letter-spacing: -0.5px;
          }
          .nav-logo .icon {
            width: 36px;
            height: 36px;
            background: linear-gradient(135deg, #7c3aed, #6366f1);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
          }
          .nav-cta {
            background: linear-gradient(135deg, #7c3aed, #6366f1);
            color: white;
            border: none;
            padding: 10px 24px;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
          }

          /* HERO */
          .hero {
            text-align: center;
            padding: 100px 20px 80px;
            position: relative;
          }
          .hero::before {
            content: '';
            position: absolute;
            top: 0; left: 50%;
            transform: translateX(-50%);
            width: 800px;
            height: 400px;
            background: radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 70%);
            pointer-events: none;
          }
          .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(124,58,237,0.15);
            border: 1px solid rgba(124,58,237,0.3);
            border-radius: 100px;
            padding: 6px 16px;
            font-size: 13px;
            color: #a855f7;
            margin-bottom: 28px;
            font-weight: 500;
          }
          .badge .dot {
            width: 6px; height: 6px;
            background: #a855f7;
            border-radius: 50%;
            animation: pulse 2s infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
          .hero h1 {
            font-size: clamp(40px, 7vw, 76px);
            font-weight: 900;
            line-height: 1.05;
            letter-spacing: -2px;
            margin-bottom: 24px;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
          }
          .hero h1 .gradient {
            background: linear-gradient(135deg, #a855f7, #6366f1, #22d3ee);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .hero p {
            font-size: clamp(16px, 2vw, 20px);
            color: #666;
            max-width: 560px;
            margin: 0 auto 48px;
            line-height: 1.7;
          }
          .hero-cta {
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }
          .btn-primary {
            background: linear-gradient(135deg, #7c3aed, #6366f1);
            color: white;
            border: none;
            padding: 20px 48px;
            border-radius: 14px;
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            transition: all 0.2s;
            box-shadow: 0 0 40px rgba(124,58,237,0.3);
          }
          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 60px rgba(124,58,237,0.5);
          }
          .price-note {
            font-size: 14px;
            color: #444;
          }
          .price-note strong { color: #888; }

          /* POWERED BY */
          .powered {
            text-align: center;
            padding: 16px;
            color: #333;
            font-size: 13px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .powered span { color: #555; }

          /* FEATURES */
          .section {
            max-width: 1100px;
            margin: 0 auto;
            padding: 80px 20px;
          }
          .section-label {
            text-align: center;
            font-size: 12px;
            color: #555;
            letter-spacing: 3px;
            text-transform: uppercase;
            margin-bottom: 16px;
          }
          .section-title {
            text-align: center;
            font-size: clamp(28px, 4vw, 44px);
            font-weight: 800;
            letter-spacing: -1px;
            margin-bottom: 60px;
            line-height: 1.2;
          }
          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
          }
          .feature-card {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.07);
            border-radius: 20px;
            padding: 32px;
            transition: border-color 0.2s;
          }
          .feature-card:hover {
            border-color: rgba(124,58,237,0.3);
          }
          .feature-icon {
            font-size: 36px;
            margin-bottom: 16px;
            display: block;
          }
          .feature-card h3 {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 10px;
          }
          .feature-card p {
            font-size: 14px;
            color: #555;
            line-height: 1.7;
          }

          /* HOW IT WORKS */
          .steps {
            display: flex;
            flex-direction: column;
            gap: 0;
            max-width: 640px;
            margin: 0 auto;
          }
          .step {
            display: flex;
            gap: 24px;
            align-items: flex-start;
            position: relative;
          }
          .step:not(:last-child)::after {
            content: '';
            position: absolute;
            left: 19px;
            top: 48px;
            width: 2px;
            height: calc(100% - 8px);
            background: rgba(124,58,237,0.2);
          }
          .step-num {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(124,58,237,0.15);
            border: 1px solid rgba(124,58,237,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: 700;
            color: #a855f7;
            flex-shrink: 0;
          }
          .step-content {
            padding: 8px 0 48px;
          }
          .step-content h3 {
            font-size: 17px;
            font-weight: 700;
            margin-bottom: 6px;
          }
          .step-content p {
            font-size: 14px;
            color: #555;
            line-height: 1.6;
          }

          /* PRICING */
          .pricing-card {
            max-width: 480px;
            margin: 0 auto;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(124,58,237,0.3);
            border-radius: 24px;
            padding: 48px;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .pricing-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 3px;
            background: linear-gradient(90deg, #7c3aed, #6366f1, #22d3ee);
          }
          .pricing-badge {
            display: inline-block;
            background: rgba(124,58,237,0.15);
            border: 1px solid rgba(124,58,237,0.3);
            border-radius: 100px;
            padding: 4px 14px;
            font-size: 12px;
            color: #a855f7;
            font-weight: 600;
            margin-bottom: 24px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .price {
            font-size: 72px;
            font-weight: 900;
            letter-spacing: -3px;
            line-height: 1;
            margin-bottom: 8px;
          }
          .price sup {
            font-size: 32px;
            vertical-align: top;
            margin-top: 12px;
            font-weight: 700;
          }
          .price-sub {
            font-size: 14px;
            color: #555;
            margin-bottom: 36px;
          }
          .includes {
            display: flex;
            flex-direction: column;
            gap: 14px;
            margin-bottom: 40px;
            text-align: left;
          }
          .include-item {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 15px;
            color: #aaa;
          }
          .include-item .check {
            color: #22c55e;
            font-size: 16px;
            flex-shrink: 0;
          }

          /* OPENCLAW BADGE */
          .openclaw-section {
            background: rgba(255,255,255,0.02);
            border-top: 1px solid rgba(255,255,255,0.06);
            border-bottom: 1px solid rgba(255,255,255,0.06);
            padding: 60px 20px;
            text-align: center;
          }
          .openclaw-badge {
            display: inline-flex;
            align-items: center;
            gap: 14px;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 16px;
            padding: 16px 28px;
            margin-bottom: 20px;
          }
          .openclaw-badge .claw { font-size: 28px; }
          .openclaw-badge .text { text-align: left; }
          .openclaw-badge .text .top { font-size: 11px; color: #555; text-transform: uppercase; letter-spacing: 1px; }
          .openclaw-badge .text .bottom { font-size: 16px; font-weight: 700; }

          /* FOOTER */
          footer {
            text-align: center;
            padding: 40px 20px;
            color: #333;
            font-size: 13px;
            border-top: 1px solid rgba(255,255,255,0.05);
          }
          footer a { color: #555; text-decoration: none; }

          @media (max-width: 600px) {
            nav { padding: 16px 20px; }
            .hero { padding: 60px 20px 60px; }
            .pricing-card { padding: 32px 24px; }
          }
        `}</style>
      </head>
      <body>

        {/* NAV */}
        <nav>
          <div className="nav-logo">
            <div className="icon">🤖</div>
            <span>MediaGoAI</span>
          </div>
          <a href="#pricing" className="nav-cta">Get Started →</a>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="badge">
            <span className="dot"></span>
            Powered by OpenClaw AI
          </div>
          <h1>
            Your Business.<br/>
            <span className="gradient">On Autopilot.</span>
          </h1>
          <p>
            One setup. Your AI handles social media, builds your website,
            and grows your business 24 hours a day — while you focus on what matters.
          </p>
          <div className="hero-cta">
            <a href="#pricing" className="btn-primary">Get MediaGoAI — $297</a>
            <span className="price-note">One-time payment. <strong>No monthly fees.</strong></span>
          </div>
        </section>

        {/* POWERED BY OPENCLAW */}
        <div className="powered">
          <span>Built on</span> OpenClaw AI — the same technology powering thousands of AI businesses
        </div>

        {/* FEATURES */}
        <section className="section">
          <div className="section-label">What You Get</div>
          <h2 className="section-title">Everything your business needs.<br/>Nothing you don't.</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">📱</span>
              <h3>Social Media on Autopilot</h3>
              <p>Your AI posts daily to Twitter, TikTok, Facebook, Instagram, and YouTube — with captions written for each platform. Set it once, runs forever.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🌐</span>
              <h3>Professional Website</h3>
              <p>A clean, fast website built and live for your business. No developer needed. Your AI handles it — you just answer a few questions.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🎮</span>
              <h3>Content Creator Pipeline</h3>
              <p>Drop a video clip in a folder — your AI processes it, adds blur borders, and posts it to all platforms automatically. Every time.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📦</span>
              <h3>Sell Products Online</h3>
              <p>Launch a digital product with a sales page and Stripe payments. Your AI writes the copy, sets up checkout, and starts driving traffic.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🌙</span>
              <h3>Nightly Reports</h3>
              <p>Wake up to a full report every morning — what posted, what's working, what needs attention. Your AI works while you sleep.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🔐</span>
              <h3>Your Data Stays Yours</h3>
              <p>Everything runs on your own computer. No cloud subscription. No one else has access to your accounts or business data. Ever.</p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section" style={{paddingTop: '0'}}>
          <div className="section-label">Setup Process</div>
          <h2 className="section-title">Up and running in under an hour.</h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Download & Install</h3>
                <p>You receive a download link after purchase. Double-click one file — it installs everything automatically. No tech knowledge needed.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Tell Your AI About Your Business</h3>
                <p>Your AI asks you a few questions in plain English — name, business type, what you want to set up first. That's it.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>Connect Your Accounts</h3>
                <p>Log into your social media accounts when prompted. Your AI saves the sessions and handles everything from there.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>Your Business Runs Itself</h3>
                <p>Social media posts daily. Website is live. Reports arrive every morning. You come back and add more services whenever you're ready.</p>
              </div>
            </div>
          </div>
        </section>

        {/* OPENCLAW */}
        <div className="openclaw-section">
          <div className="openclaw-badge">
            <span className="claw">🦞</span>
            <div className="text">
              <div className="top">Powered by</div>
              <div className="bottom">OpenClaw AI</div>
            </div>
          </div>
          <p style={{color: '#555', fontSize: '14px', maxWidth: '480px', margin: '0 auto', lineHeight: '1.7'}}>
            MediaGoAI is built on OpenClaw — a professional AI agent platform trusted by businesses worldwide.
            Your AI runs locally on your machine, keeps your data private, and never stops working.
          </p>
        </div>

        {/* PRICING */}
        <section className="section" id="pricing">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">One price. Everything included.</h2>
          <div className="pricing-card">
            <div className="pricing-badge">Most Popular</div>
            <div className="price"><sup>$</sup>297</div>
            <div className="price-sub">One-time payment — no subscriptions, no hidden fees</div>
            <div className="includes">
              <div className="include-item"><span className="check">✅</span><span>Full AI Business Assistant setup</span></div>
              <div className="include-item"><span className="check">✅</span><span>Social media automation (5 platforms)</span></div>
              <div className="include-item"><span className="check">✅</span><span>Professional website built & live</span></div>
              <div className="include-item"><span className="check">✅</span><span>Content creator pipeline</span></div>
              <div className="include-item"><span className="check">✅</span><span>Digital product sales setup</span></div>
              <div className="include-item"><span className="check">✅</span><span>Nightly reports & maintenance</span></div>
              <div className="include-item"><span className="check">✅</span><span>License key — yours forever</span></div>
              <div className="include-item"><span className="check">✅</span><span>Mac & Windows compatible</span></div>
            </div>
            <a href="https://buy.stripe.com/PLACEHOLDER" className="btn-primary" style={{width: '100%', textAlign: 'center'}}>
              Buy Now — $297
            </a>
            <p style={{fontSize: '13px', color: '#444', marginTop: '16px'}}>
              Secure checkout via Stripe · Instant download after payment
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <p style={{marginBottom: '8px'}}>© 2026 MediaGoAI — Powered by OpenClaw</p>
          <p><a href="mailto:aigo.mediapro@gmail.com">aigo.mediapro@gmail.com</a></p>
        </footer>

      </body>
    </>
  )
}
