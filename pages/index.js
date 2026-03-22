export default function Home() {
  return (
    <>
      <head>
        {/* ═══ SEO METADATA ═══ */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Primary */}
        <title>MediaGoAI — The Easiest Way to Install OpenClaw AI for Your Business</title>
        <meta name="description" content="OpenClaw AI is the most powerful AI business platform available — but it's hard to install. MediaGoAI makes it dead simple. One click, fully set up, pre-loaded with social media automation, website builder, and more. No tech skills needed." />
        <meta name="keywords" content="OpenClaw AI, OpenClaw install, AI business assistant, AI automation, social media automation, OpenClaw setup, MediaGoAI, AI for small business, easy AI install, OpenClaw for beginners, automated social media, content automation, AI website builder" />
        <meta name="author" content="MediaGoAI" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mediagoai.com" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mediagoai.com" />
        <meta property="og:title" content="MediaGoAI — OpenClaw AI, Easy Install for Anyone" />
        <meta property="og:description" content="OpenClaw AI is powerful but complex to set up. We fixed that. One click installs OpenClaw with social media automation, website builder, and content tools — all pre-configured for your business." />
        <meta property="og:image" content="https://mediagoai.com/banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="400" />
        <meta property="og:site_name" content="MediaGoAI" />

        {/* Twitter/X Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aigomedia" />
        <meta name="twitter:creator" content="@aigomedia" />
        <meta name="twitter:title" content="MediaGoAI — OpenClaw AI Made Simple" />
        <meta name="twitter:description" content="We made OpenClaw AI easy to install for anyone. One click — social media automation, website builder, and content tools all pre-loaded. No tech skills needed." />
        <meta name="twitter:image" content="https://mediagoai.com/banner.png" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "MediaGoAI",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "macOS, Windows",
          "description": "The easiest way to install and run OpenClaw AI for your business. Pre-configured with social media automation, website builder, content pipeline, and digital product tools.",
          "offers": {
            "@type": "Offer",
            "price": "297",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "brand": {
            "@type": "Brand",
            "name": "MediaGoAI"
          },
          "url": "https://mediagoai.com",
          "sameAs": ["https://tiktok.com/@aigomedia", "https://youtube.com/@aigomedia"]
        })}</script>

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
          .nav-logo .icon { width: 36px; height: 36px; border-radius: 10px; overflow: hidden; }
          .nav-logo .icon img { width: 100%; height: 100%; object-fit: cover; }
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
            width: 800px; height: 400px;
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
          @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
          .hero h1 {
            font-size: clamp(36px, 6vw, 70px);
            font-weight: 900;
            line-height: 1.05;
            letter-spacing: -2px;
            margin-bottom: 24px;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
          }
          .gradient {
            background: linear-gradient(135deg, #a855f7, #6366f1, #22d3ee);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .hero p {
            font-size: clamp(16px, 2vw, 20px);
            color: #666;
            max-width: 600px;
            margin: 0 auto 48px;
            line-height: 1.7;
          }
          .hero p strong { color: #a855f7; }
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
          .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 60px rgba(124,58,237,0.5); }
          .price-note { font-size: 14px; color: #444; margin-top: 12px; }
          .price-note strong { color: #888; }
          .openclaw-hero {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 12px;
            padding: 12px 20px;
            font-size: 14px;
            color: #666;
            margin-bottom: 32px;
          }
          .openclaw-hero .claw { font-size: 20px; }
          .openclaw-hero strong { color: #a855f7; }
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
          .problem-box {
            background: rgba(255,59,48,0.05);
            border: 1px solid rgba(255,59,48,0.15);
            border-radius: 16px;
            padding: 32px;
            max-width: 700px;
            margin: 0 auto 60px;
            text-align: center;
          }
          .problem-box h3 { font-size: 20px; font-weight: 700; margin-bottom: 12px; color: #ff6b6b; }
          .problem-box p { font-size: 15px; color: #555; line-height: 1.7; }
          .solution-box {
            background: rgba(124,58,237,0.05);
            border: 1px solid rgba(124,58,237,0.2);
            border-radius: 16px;
            padding: 32px;
            max-width: 700px;
            margin: 0 auto 60px;
            text-align: center;
          }
          .solution-box h3 { font-size: 20px; font-weight: 700; margin-bottom: 12px; color: #a855f7; }
          .solution-box p { font-size: 15px; color: #555; line-height: 1.7; }
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
          .feature-card:hover { border-color: rgba(124,58,237,0.3); }
          .feature-icon { font-size: 36px; margin-bottom: 16px; display: block; }
          .feature-card h3 { font-size: 18px; font-weight: 700; margin-bottom: 10px; }
          .feature-card p { font-size: 14px; color: #555; line-height: 1.7; }
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
            left: 19px; top: 48px;
            width: 2px;
            height: calc(100% - 8px);
            background: rgba(124,58,237,0.2);
          }
          .step-num {
            width: 40px; height: 40px;
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
          .step-content { padding: 8px 0 48px; }
          .step-content h3 { font-size: 17px; font-weight: 700; margin-bottom: 6px; }
          .step-content p { font-size: 14px; color: #555; line-height: 1.6; }
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
          .price { font-size: 72px; font-weight: 900; letter-spacing: -3px; line-height: 1; margin-bottom: 8px; }
          .price sup { font-size: 32px; vertical-align: top; margin-top: 12px; font-weight: 700; }
          .price-sub { font-size: 14px; color: #555; margin-bottom: 36px; }
          .includes { display: flex; flex-direction: column; gap: 14px; margin-bottom: 40px; text-align: left; }
          .include-item { display: flex; align-items: center; gap: 12px; font-size: 15px; color: #aaa; }
          .include-item .check { color: #22c55e; font-size: 16px; flex-shrink: 0; }
          .openclaw-strip {
            background: rgba(255,255,255,0.02);
            border-top: 1px solid rgba(255,255,255,0.05);
            border-bottom: 1px solid rgba(255,255,255,0.05);
            padding: 48px 20px;
            text-align: center;
          }
          .openclaw-strip h2 { font-size: 28px; font-weight: 800; margin-bottom: 12px; }
          .openclaw-strip p { font-size: 15px; color: #555; max-width: 560px; margin: 0 auto; line-height: 1.7; }
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
            .hero { padding: 60px 20px; }
            .pricing-card { padding: 32px 24px; }
          }
        `}</style>
      </head>
      <body>

        <nav>
          <div className="nav-logo">
            <div className="icon"><img src="/logo.png" alt="MediaGoAI" /></div>
            <span>MediaGoAI</span>
          </div>
          <a href="#pricing" className="nav-cta">Get Started — $297</a>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="openclaw-hero">
            <span className="claw">🦞</span>
            <span>The official easy-install solution for <strong>OpenClaw AI</strong></span>
          </div>
          <h1>
            <span className="gradient">OpenClaw AI</span><br/>
            for Everyone.
          </h1>
          <p>
            <strong>OpenClaw</strong> is the most powerful AI business platform available —
            but installing it requires technical knowledge most people don't have.
            MediaGoAI changes that. <strong>One click. Fully installed. Ready to work.</strong>
          </p>
          <a href="#pricing" className="btn-primary">Get MediaGoAI — $297</a>
          <div className="price-note">One-time payment. <strong>No monthly fees.</strong> Instant download.</div>
        </section>

        {/* PROBLEM / SOLUTION */}
        <section className="section" style={{paddingTop: '20px', paddingBottom: '20px'}}>
          <div className="problem-box">
            <h3>😤 The Problem</h3>
            <p>OpenClaw AI is incredibly powerful — but setting it up requires installing Node.js, Homebrew, Python, configuring APIs, setting up cron jobs... most people give up before they even start. The average business owner just can't do it.</p>
          </div>
          <div className="solution-box">
            <h3>✅ The MediaGoAI Solution</h3>
            <p>We built a one-click installer that sets up OpenClaw AI automatically — no terminal, no code, no confusion. Plus we pre-loaded it with 4 ready-to-run business programs so you're generating value from minute one.</p>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="section">
          <div className="section-label">What's Included</div>
          <h2 className="section-title">OpenClaw AI, fully installed<br/>+ 4 built-in business programs</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🦞</span>
              <h3>OpenClaw AI — Fully Installed</h3>
              <p>We handle the entire OpenClaw setup: Node.js, dependencies, gateway configuration, and workspace. You get the full OpenClaw dashboard ready to use — no technical knowledge needed.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📱</span>
              <h3>Social Media Autopilot</h3>
              <p>Pre-configured to post daily to Twitter, TikTok, Facebook, Instagram, and YouTube. AI writes platform-specific captions. Runs automatically on a schedule.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🎮</span>
              <h3>Content Creator Pipeline</h3>
              <p>Drop a video clip in a folder — OpenClaw processes it and posts to all platforms automatically. Built-in blur border effect, platform formatting, and smart captions.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🌐</span>
              <h3>Website Builder</h3>
              <p>Tell your AI what kind of business you run — it builds and deploys a professional website. No code, no hosting setup, no designer needed.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📦</span>
              <h3>Digital Product Sales</h3>
              <p>Launch a product with a sales page and Stripe checkout — all set up through your OpenClaw AI. Start selling digital guides, courses, or downloads immediately.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🌙</span>
              <h3>Nightly Reports & Maintenance</h3>
              <p>Every night OpenClaw checks your websites, backs up your workspace, and sends you a full status report. Wake up knowing everything is running.</p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section" style={{paddingTop: '0'}}>
          <div className="section-label">Setup Process</div>
          <h2 className="section-title">From purchase to running<br/>in under one hour.</h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Buy & Download</h3>
                <p>After purchase you receive an email with your license key and a one-time download link. Click it — your installer downloads instantly.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Double-Click to Install</h3>
                <p>One file. Double-click it. The installer automatically sets up OpenClaw AI, Node.js, Python, and all dependencies — no terminal, no commands, no confusion.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>OpenClaw Opens & Greets You</h3>
                <p>Your browser opens to the OpenClaw dashboard. Your AI asks what kind of business you run and walks you through connecting your accounts — in plain English.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>Your Business Runs Itself</h3>
                <p>Social media posts daily. Content goes out automatically. Reports arrive every morning. OpenClaw handles everything — you just run your business.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SYSTEM REQUIREMENTS */}
        <section className="section" style={{paddingTop:'0'}}>
          <div className="section-label">System Requirements</div>
          <h2 className="section-title">Make sure your computer is ready.</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'20px',maxWidth:'800px',margin:'0 auto'}}>
            <div className="feature-card">
              <span className="feature-icon">🍎</span>
              <h3>Mac Requirements</h3>
              <p style={{lineHeight:'2'}}>
                ✅ macOS 12 Monterey or newer<br/>
                ✅ Apple Silicon (M1/M2/M3/M4) or Intel<br/>
                ✅ 8GB RAM minimum (16GB+ recommended)<br/>
                ✅ 5GB free storage<br/>
                ✅ Internet connection<br/>
                <span style={{color:'#a855f7',fontWeight:'600'}}>⭐ Mac Mini M4 recommended</span>
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🪟</span>
              <h3>Windows Requirements</h3>
              <p style={{lineHeight:'2'}}>
                ✅ Windows 10 or 11 (64-bit)<br/>
                ✅ Intel or AMD processor<br/>
                ✅ 8GB RAM minimum (16GB+ recommended)<br/>
                ✅ 5GB free storage<br/>
                ✅ Internet connection<br/>
                <span style={{color:'#6366f1',fontWeight:'600'}}>⭐ Windows 11 recommended</span>
              </p>
            </div>
          </div>
          <p style={{textAlign:'center',color:'#444',fontSize:'13px',marginTop:'24px'}}>
            Not sure if your computer qualifies? Email us at <a href="mailto:aigo.mediapro@gmail.com" style={{color:'#a855f7'}}>aigo.mediapro@gmail.com</a>
          </p>
        </section>

        {/* OPENCLAW STRIP */}
        <div className="openclaw-strip">
          <h2>🦞 Powered by OpenClaw AI</h2>
          <p>
            OpenClaw is the professional AI agent platform built for real business automation.
            MediaGoAI is the easiest way to get it running — pre-configured, pre-loaded,
            and ready to work from minute one. No technical background required.
          </p>
        </div>

        {/* PRICING */}
        <section className="section" id="pricing">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">Everything included.<br/>One price. Forever.</h2>

          {/* Platform selector note */}
          <p style={{textAlign:'center',color:'#555',fontSize:'14px',marginBottom:'32px',marginTop:'-32px'}}>
            🍎 Works on <strong style={{color:'#aaa'}}>Mac</strong> (Mac Mini recommended) and <strong style={{color:'#aaa'}}>Windows</strong> — you choose your platform after purchase.
          </p>

          <div className="pricing-card">
            <div className="pricing-badge">⚡ OpenClaw AI — Easy Install</div>
            <div className="price"><sup>$</sup>297</div>
            <div className="price-sub">One-time payment — no subscriptions ever</div>

            {/* Platform pills */}
            <p style={{fontSize:'13px',color:'#555',marginBottom:'24px'}}>Choose your platform below. Each license is valid for <strong style={{color:'#aaa'}}>one computer</strong>. Need both? Purchase both.</p>

            <div className="includes" style={{marginBottom:'32px'}}>
              <div className="include-item"><span className="check">✅</span><span>OpenClaw AI — fully installed & configured</span></div>
              <div className="include-item"><span className="check">✅</span><span>Social media automation (5 platforms)</span></div>
              <div className="include-item"><span className="check">✅</span><span>Content creator pipeline</span></div>
              <div className="include-item"><span className="check">✅</span><span>Website builder</span></div>
              <div className="include-item"><span className="check">✅</span><span>Digital product sales setup</span></div>
              <div className="include-item"><span className="check">✅</span><span>Nightly reports & maintenance</span></div>
              <div className="include-item"><span className="check">✅</span><span>License key — 1 computer, yours forever</span></div>
            </div>

            {/* COMING SOON — buy buttons temporarily disabled */}
            <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'14px',padding:'24px',textAlign:'center',marginBottom:'16px'}}>
              <div style={{fontSize:'28px',marginBottom:'12px'}}>🚀</div>
              <div style={{fontSize:'18px',fontWeight:'700',marginBottom:'8px'}}>Launching Soon</div>
              <div style={{fontSize:'14px',color:'#555',marginBottom:'16px',lineHeight:'1.6'}}>
                We're putting the finishing touches on MediaGoAI.<br/>
                Join the waitlist to be first in line and get a launch discount.
              </div>
              <a href="mailto:aigo.mediapro@gmail.com?subject=MediaGoAI Waitlist&body=I want to be notified when MediaGoAI launches!" 
                 className="btn-primary" style={{display:'block',width:'100%',textAlign:'center'}}>
                Join the Waitlist →
              </a>
            </div>
            <p style={{fontSize:'13px',color:'#444'}}>
              Questions? <a href="mailto:aigo.mediapro@gmail.com" style={{color:'#a855f7'}}>aigo.mediapro@gmail.com</a>
            </p>
          </div>
        </section>

        <footer>
          <p style={{marginBottom:'8px'}}>© 2026 MediaGoAI — The Easy Way to Run OpenClaw AI</p>
          <p style={{marginBottom:'8px'}}>
            <a href="https://tiktok.com/@aigomedia">TikTok</a> ·{' '}
            <a href="https://youtube.com/@aigomedia">YouTube</a> ·{' '}
            <a href="mailto:aigo.mediapro@gmail.com">aigo.mediapro@gmail.com</a>
          </p>
          <p style={{color:'#2a2a2a'}}>OpenClaw AI · AI Business Automation · Social Media Automation · Content Creator Tools · AI Website Builder</p>
        </footer>

      </body>
    </>
  )
}
