// user-flow.jsx — Horizontal storyboard: Instagram → Screenshot → Share Sheet → Tala extension → Tala app
// Five phone frames laid out left-to-right, connected by arrows with step numbers underneath.

const FLOW_PHOTO = 'https://images.unsplash.com/photo-1558642084-fd07fae5282e?auto=format&fit=crop&w=900&q=70';

// ─────────────────────────────────────────────────────────────
// Mini phone frame — slimmer device chrome, fixed 320×680 inner
// ─────────────────────────────────────────────────────────────
function MiniPhone({ children, label, step, caption }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, flexShrink: 0 }}>
      {/* Phone */}
      <div style={{
        width: 320, height: 680, borderRadius: 44, padding: 9,
        background: 'linear-gradient(155deg, #2a2520 0%, #1a1510 100%)',
        boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(244,234,221,0.06), inset 0 0 0 1.5px rgba(244,234,221,0.04)',
        position: 'relative',
      }}>
        <div style={{
          width: '100%', height: '100%', borderRadius: 36, overflow: 'hidden',
          background: '#000', position: 'relative',
        }}>
          {/* Dynamic Island */}
          <div style={{
            position: 'absolute', top: 9, left: '50%', transform: 'translateX(-50%)',
            width: 95, height: 26, borderRadius: 99, background: '#000',
            zIndex: 100,
          }}/>
          {children}
        </div>
      </div>

      {/* Step label */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, maxWidth: 320 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          fontFamily: 'Outfit, sans-serif', fontSize: 10.5,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'rgba(244,234,221,0.55)', fontWeight: 500,
        }}>
          <span style={{
            width: 22, height: 22, borderRadius: 99,
            border: '0.5px solid rgba(196,106,74,0.55)',
            background: 'rgba(196,106,74,0.12)',
            color: '#D88665', fontSize: 11, fontWeight: 600,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            letterSpacing: 0,
          }}>{step}</span>
          <span>{label}</span>
        </div>
        <div style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: 17, fontStyle: 'italic', color: 'rgba(244,234,221,0.92)',
          letterSpacing: '0.01em', textAlign: 'center', lineHeight: 1.3,
          maxWidth: 280, fontWeight: 400,
        }}>{caption}</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Connector arrow (between phones)
// ─────────────────────────────────────────────────────────────
function FlowArrow({ verb }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      flexShrink: 0, paddingTop: 320, // align with phone vertical center-ish
      gap: 8, minWidth: 80,
    }}>
      <div style={{
        fontFamily: 'Outfit, sans-serif', fontSize: 9.5,
        letterSpacing: '0.32em', textTransform: 'uppercase',
        color: 'rgba(196,106,74,0.75)', fontWeight: 500, whiteSpace: 'nowrap',
      }}>{verb}</div>
      <svg width="80" height="14" viewBox="0 0 80 14" fill="none">
        <line x1="2" y1="7" x2="70" y2="7" stroke="rgba(244,234,221,0.35)" strokeWidth="1" strokeDasharray="3 3"/>
        <path d="M68 2l6 5-6 5" stroke="#D88665" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Mini status bar
// ─────────────────────────────────────────────────────────────
function MiniStatusBar({ dark }) {
  const c = dark ? '#fff' : '#000';
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '14px 28px 6px', position: 'relative', zIndex: 20,
    }}>
      <span style={{
        fontFamily: '-apple-system, "SF Pro", system-ui', fontWeight: 600,
        fontSize: 13, color: c,
      }}>9:41</span>
      <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
        <svg width="14" height="9" viewBox="0 0 19 12">
          <rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" fill={c}/>
          <rect x="4.8" y="5" width="3.2" height="7" rx="0.7" fill={c}/>
          <rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill={c}/>
          <rect x="14.4" y="0" width="3.2" height="12" rx="0.7" fill={c}/>
        </svg>
        <svg width="20" height="9" viewBox="0 0 27 13">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={c} strokeOpacity="0.4" fill="none"/>
          <rect x="2" y="2" width="18" height="9" rx="2" fill={c}/>
        </svg>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Frame 0 — Sign in / Create account (editorial dark)
// ─────────────────────────────────────────────────────────────
function FrameSignIn() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(circle at 50% 25%, #3a2a1d 0%, #1a120c 80%)',
      fontFamily: '"Outfit", system-ui, sans-serif',
      overflow: 'hidden', color: '#F4EADD',
    }}>
      <MiniStatusBar dark/>

      {/* Faint paper texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 0.95  0 0 0 0 0.85  0 0 0 0.04 0'/></filter><rect width='240' height='240' filter='url(%23n)'/></svg>\")",
        opacity: 0.5, pointerEvents: 'none', mixBlendMode: 'overlay',
      }}/>

      {/* Paper-corner accents */}
      <div style={{ position: 'absolute', top: 50, left: 18, right: 18, display: 'flex', justifyContent: 'space-between', opacity: 0.35 }}>
        <CornerMark/>
        <CornerMark mirror/>
      </div>

      {/* Crest + brand */}
      <div style={{
        position: 'absolute', top: 90, left: 0, right: 0, textAlign: 'center',
      }}>
        <svg width="42" height="30" viewBox="0 0 60 42" style={{ display: 'block', margin: '0 auto', opacity: 0.85 }}>
          {/* Laurel */}
          <path d="M30 36 C20 30 14 22 12 12" stroke="#D88665" strokeWidth="1" fill="none"/>
          <path d="M30 36 C40 30 46 22 48 12" stroke="#D88665" strokeWidth="1" fill="none"/>
          {[0,1,2,3].map((i) => (
            <ellipse key={`l${i}`} cx={14 + i*3} cy={26 - i*5} rx="3" ry="1.4" fill="#D88665" opacity={0.8 - i*0.1} transform={`rotate(${-30 + i*8} ${14 + i*3} ${26 - i*5})`}/>
          ))}
          {[0,1,2,3].map((i) => (
            <ellipse key={`r${i}`} cx={46 - i*3} cy={26 - i*5} rx="3" ry="1.4" fill="#D88665" opacity={0.8 - i*0.1} transform={`rotate(${30 - i*8} ${46 - i*3} ${26 - i*5})`}/>
          ))}
          <circle cx="30" cy="38" r="1.5" fill="#D88665"/>
        </svg>
        <div style={{
          marginTop: 12,
          fontFamily: '"Cormorant Garamond", serif',
          fontStyle: 'italic', fontSize: 26,
          letterSpacing: '0.42em', color: '#F4EADD',
          textTransform: 'lowercase',
        }}>tala</div>
      </div>

      {/* Welcome */}
      <div style={{
        position: 'absolute', top: 220, left: 0, right: 0, textAlign: 'center', padding: '0 28px',
      }}>
        <div style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontStyle: 'italic', fontSize: 28, lineHeight: 1.05, fontWeight: 400,
          color: '#F4EADD', letterSpacing: '-0.005em',
        }}>Welcome to your<br/>private folio.</div>
        <div style={{
          marginTop: 10, fontSize: 10.5, lineHeight: 1.55,
          color: 'rgba(244,234,221,0.5)', fontWeight: 300,
          maxWidth: 240, marginLeft: 'auto', marginRight: 'auto',
        }}>
          Save what you love. We'll quietly turn it into a trip.
        </div>
      </div>

      {/* Auth stack */}
      <div style={{
        position: 'absolute', left: 22, right: 22, bottom: 36,
        display: 'flex', flexDirection: 'column', gap: 8,
      }}>
        {/* Apple */}
        <button style={{
          width: '100%', height: 38, borderRadius: 10, border: 'none',
          background: '#FBF7F0', color: '#1a120c',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
          fontFamily: 'Outfit, sans-serif', fontSize: 11.5, fontWeight: 500, letterSpacing: '0.02em',
          boxShadow: '0 8px 22px -10px rgba(244,234,221,0.25)',
        }}>
          <svg width="13" height="15" viewBox="0 0 24 28" fill="#1a120c">
            <path d="M17.6 14.7c0-3 2.5-4.5 2.6-4.6-1.4-2.1-3.7-2.4-4.5-2.4-1.9-.2-3.7 1.1-4.7 1.1-1 0-2.5-1.1-4.1-1-2.1 0-4.1 1.2-5.1 3.1-2.2 3.8-.6 9.5 1.6 12.6 1.1 1.5 2.3 3.2 4 3.2 1.6-.1 2.2-1 4.1-1s2.5 1 4.1 1c1.7 0 2.8-1.5 3.9-3.1 1.2-1.7 1.7-3.5 1.7-3.6-.1 0-3.6-1.4-3.6-5.3zM14.6 5.5c.8-1 1.4-2.5 1.3-3.9-1.2.1-2.7.8-3.6 1.8-.8.9-1.5 2.4-1.3 3.7 1.4.1 2.8-.7 3.6-1.6z"/>
          </svg>
          Continue with Apple
        </button>

        {/* Google */}
        <button style={{
          width: '100%', height: 38, borderRadius: 10,
          background: 'rgba(244,234,221,0.06)', color: '#F4EADD',
          border: '0.5px solid rgba(244,234,221,0.18)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
          fontFamily: 'Outfit, sans-serif', fontSize: 11.5, fontWeight: 500,
          backdropFilter: 'blur(10px)',
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M12 5c1.6 0 3.1.6 4.2 1.6L19 4c-1.9-1.7-4.4-2.8-7-2.8C7.4 1.2 3.5 4 1.7 8l3.3 2.6C5.9 7.4 8.7 5 12 5z"/>
            <path fill="#4285F4" d="M22.6 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h6c-.3 1.4-1 2.6-2.1 3.4l3.3 2.5c1.9-1.8 3-4.5 3-7.9z"/>
            <path fill="#FBBC05" d="M5 13.4c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2L1.7 6.8C1 8.4.6 10.1.6 12s.4 3.6 1.1 5.2L5 14.6c-.1-.4-.1-.7-.1-1.2z"/>
            <path fill="#34A853" d="M12 22.8c2.7 0 5-.9 6.6-2.4l-3.3-2.5c-.9.6-2.1 1-3.3 1-3.3 0-6.1-2.4-7-5.6L1.7 16C3.5 20 7.4 22.8 12 22.8z"/>
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '4px 0', opacity: 0.4 }}>
          <div style={{ flex: 1, height: 0.5, background: 'rgba(244,234,221,0.25)' }}/>
          <span style={{
            fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
            fontSize: 10, color: 'rgba(244,234,221,0.55)',
          }}>or</span>
          <div style={{ flex: 1, height: 0.5, background: 'rgba(244,234,221,0.25)' }}/>
        </div>

        {/* Email field */}
        <div style={{
          width: '100%', height: 38, borderRadius: 10,
          border: '0.5px solid rgba(244,234,221,0.18)',
          background: 'rgba(244,234,221,0.04)',
          display: 'flex', alignItems: 'center', padding: '0 12px',
          backdropFilter: 'blur(10px)',
        }}>
          <span style={{
            fontSize: 11, color: 'rgba(244,234,221,0.45)', flex: 1,
            fontFamily: 'Outfit, sans-serif',
          }}>email@yours.com</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="#D88665" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Footnote */}
        <div style={{
          marginTop: 6, textAlign: 'center', fontSize: 8.5,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(244,234,221,0.35)', fontWeight: 500,
        }}>
          By continuing you agree to our terms
        </div>
      </div>
    </div>
  );
}

function CornerMark({ mirror }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ transform: mirror ? 'scaleX(-1)' : 'none' }}>
      <path d="M2 2 L2 10 M2 2 L10 2" stroke="#D88665" strokeWidth="0.8"/>
      <circle cx="2" cy="2" r="1" fill="#D88665"/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Frame 1 — Instagram, browsing the post
// ─────────────────────────────────────────────────────────────
function FrameInstagram() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#000', color: '#fff', fontFamily: '-apple-system, "SF Pro", system-ui, sans-serif' }}>
      <MiniStatusBar dark/>

      {/* Top app bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 14px 8px' }}>
        <div style={{ fontFamily: '"Billabong", "Snell Roundhand", cursive', fontSize: 23, fontStyle: 'italic', letterSpacing: '0.5px' }}>
          Instagram
        </div>
        <div style={{ display: 'flex', gap: 14 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" stroke="#fff" strokeWidth="1.7"/></svg>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 12c0 5-4 9-9 9-1.5 0-3-.4-4.2-1L3 21l1.1-4.7C3.4 15 3 13.5 3 12c0-5 4-9 9-9s9 4 9 9z" stroke="#fff" strokeWidth="1.7"/></svg>
        </div>
      </div>

      {/* Post header */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '4px 12px', gap: 8 }}>
        <div style={{
          width: 26, height: 26, borderRadius: 99,
          background: 'conic-gradient(from 180deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888, #f09433)',
          padding: 1.5,
        }}>
          <div style={{
            width: '100%', height: '100%', borderRadius: 99,
            backgroundImage: `url(${FLOW_PHOTO})`, backgroundSize: 'cover',
            border: '1.2px solid #000',
          }}/>
        </div>
        <div style={{ flex: 1, lineHeight: 1.2 }}>
          <div style={{ fontSize: 11, fontWeight: 600 }}>cap.demallorca</div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.65)' }}>Cala Varques · Mallorca</div>
        </div>
      </div>

      {/* Image */}
      <div style={{
        width: '100%', aspectRatio: '4/5',
        backgroundImage: `url(${FLOW_PHOTO})`, backgroundSize: 'cover', backgroundPosition: 'center',
        position: 'relative',
      }}/>

      {/* Action row */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '8px 12px 4px', gap: 12 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" stroke="#fff" strokeWidth="1.7"/></svg>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 12c0 5-4 9-9 9-1.5 0-3-.4-4.2-1L3 21l1.1-4.7C3.4 15 3 13.5 3 12c0-5 4-9 9-9s9 4 9 9z" stroke="#fff" strokeWidth="1.7"/></svg>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 11l18-8-7 18-2-7-9-3z" stroke="#fff" strokeWidth="1.7" strokeLinejoin="round"/></svg>
      </div>

      {/* Caption */}
      <div style={{ padding: '2px 12px', fontSize: 10.5, lineHeight: 1.5 }}>
        <span style={{ fontWeight: 600 }}>cap.demallorca</span>
        <span style={{ opacity: 0.92 }}> &nbsp;Cala Varques at golden hour 🌅</span>
      </div>

      {/* Hardware buttons hint — subtle side indicators showing screenshot gesture */}
      <div style={{
        position: 'absolute', right: -12, top: 130, width: 6, height: 50,
        background: 'rgba(244,234,221,0.0)',
      }}/>

      {/* Bottom tab bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 48,
        borderTop: '0.5px solid rgba(255,255,255,0.18)',
        background: 'rgba(0,0,0,0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 11.5L12 4l9 7.5V21h-6v-6h-6v6H3v-9.5z" stroke="#fff" strokeWidth="1.7"/></svg>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#fff" strokeWidth="1.7"/></svg>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#fff" strokeWidth="1.7"/></svg>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="1.7"/></svg>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Frame 2 — Screenshot taken (white flash + thumbnail bottom-left)
// ─────────────────────────────────────────────────────────────
function FrameScreenshot() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#000', overflow: 'hidden' }}>
      {/* The same Instagram view, but dimmed — we just took a screenshot of it */}
      <div style={{ position: 'absolute', inset: 0, opacity: 1 }}>
        <FrameInstagram/>
      </div>

      {/* White flash veil */}
      <div style={{
        position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.55)',
        animation: 'flashFade 1.6s ease-out infinite',
        pointerEvents: 'none', zIndex: 80,
      }}/>

      {/* Screenshot thumbnail floating bottom-left */}
      <div style={{
        position: 'absolute', bottom: 70, left: 14,
        width: 84, height: 130, borderRadius: 8,
        boxShadow: '0 12px 28px rgba(0,0,0,0.45), 0 0 0 1.5px rgba(255,255,255,0.5)',
        overflow: 'hidden', background: '#000',
        animation: 'thumbBounce 1.6s ease-out infinite',
        zIndex: 90, transformOrigin: 'bottom left',
      }}>
        {/* mini snapshot of the post inside the thumb */}
        <div style={{
          position: 'absolute', inset: 0, transform: 'scale(0.265)',
          transformOrigin: 'top left', width: 320, height: 680,
        }}>
          <FrameInstagram/>
        </div>
        {/* tiny "X" close hint */}
        <div style={{
          position: 'absolute', top: -6, right: -6, width: 18, height: 18,
          borderRadius: 99, background: 'rgba(0,0,0,0.85)',
          color: '#fff', fontSize: 11, fontWeight: 600,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
        }}>×</div>
      </div>

      {/* Hardware-press indicators on phone edges (volume up + side button = screenshot) */}
      <div style={{
        position: 'absolute', top: 90, right: -3, width: 6, height: 56,
        background: 'rgba(216,134,101,0.85)', borderRadius: 3,
        boxShadow: '0 0 10px rgba(216,134,101,0.7)',
        animation: 'pressGlow 1.6s ease-out infinite', zIndex: 100,
      }}/>
      <div style={{
        position: 'absolute', top: 130, left: -3, width: 6, height: 36,
        background: 'rgba(216,134,101,0.85)', borderRadius: 3,
        boxShadow: '0 0 10px rgba(216,134,101,0.7)',
        animation: 'pressGlow 1.6s ease-out infinite', zIndex: 100,
      }}/>

      <style>{`
        @keyframes flashFade {
          0%, 8%   { opacity: 0.85; }
          18%      { opacity: 0; }
          100%     { opacity: 0; }
        }
        @keyframes thumbBounce {
          0%       { transform: translateY(60px) scale(0.6); opacity: 0; }
          22%      { transform: translateY(-6px) scale(1.04); opacity: 1; }
          32%      { transform: translateY(0) scale(1); opacity: 1; }
          85%      { transform: translateY(0) scale(1); opacity: 1; }
          100%     { transform: translateY(0) scale(1); opacity: 0.95; }
        }
        @keyframes pressGlow {
          0%, 8%   { opacity: 1; }
          25%      { opacity: 0.3; }
          100%     { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Frame 3 — iOS Share sheet open (Tala highlighted)
// ─────────────────────────────────────────────────────────────
function FrameShareSheet() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#000', overflow: 'hidden' }}>
      {/* dimmed background */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.45 }}>
        <FrameInstagram/>
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }}/>

      {/* sheet */}
      <div style={{
        position: 'absolute', left: 6, right: 6, bottom: 6,
        borderRadius: 22, overflow: 'hidden',
        background: 'rgba(245,245,247,0.97)',
        backdropFilter: 'blur(40px)',
        boxShadow: '0 -10px 30px rgba(0,0,0,0.3)',
        fontFamily: '-apple-system, "SF Pro", system-ui, sans-serif',
      }}>
        {/* drag handle */}
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 6, paddingBottom: 4 }}>
          <div style={{ width: 28, height: 4, borderRadius: 3, background: 'rgba(60,60,67,0.3)' }}/>
        </div>

        {/* preview row */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 9,
          padding: '8px 12px 10px', borderBottom: '0.5px solid rgba(60,60,67,0.18)',
        }}>
          <div style={{
            width: 38, height: 50, borderRadius: 6,
            backgroundImage: `url(${FLOW_PHOTO})`, backgroundSize: 'cover', backgroundPosition: 'center',
            flexShrink: 0,
          }}/>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#000' }}>Screenshot</div>
            <div style={{ fontSize: 9.5, color: 'rgba(60,60,67,0.6)' }}>1170 × 2532 · 442 KB</div>
          </div>
          <div style={{
            background: 'rgba(60,60,67,0.08)', borderRadius: 99,
            padding: '3px 8px', fontSize: 10, fontWeight: 500, color: '#000',
          }}>Options ›</div>
        </div>

        {/* People row */}
        <div style={{ padding: '10px 12px 4px', display: 'flex', gap: 9 }}>
          {[
            { name: 'Maya', color: '#E8B7A1' },
            { name: 'Rosa', color: '#A8B59B' },
            { name: 'Iz',   color: '#C46A4A' },
          ].map((p) => (
            <div key={p.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, flex: 1 }}>
              <div style={{
                width: 42, height: 42, borderRadius: 99, background: p.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontFamily: '"Cormorant Garamond", serif',
                fontSize: 17, fontStyle: 'italic',
              }}>{p.name.charAt(0)}</div>
              <div style={{ fontSize: 9, color: '#000', fontWeight: 500 }}>{p.name}</div>
            </div>
          ))}
        </div>

        {/* App row */}
        <div style={{
          padding: '10px 12px 8px', display: 'flex', gap: 12,
          borderTop: '0.5px solid rgba(60,60,67,0.12)', marginTop: 4,
          overflow: 'hidden',
        }}>
          <ShareAppMini icon={<MiniMessages/>} label="Messages"/>
          <ShareAppMini icon={<MiniMail/>}     label="Mail"/>
          <ShareAppMini icon={<MiniNotes/>}    label="Notes"/>
          <ShareAppMini icon={<MiniTala/>}     label="Tala" pulsing/>
          <ShareAppMini icon={<MiniWA/>}       label="WhatsApp"/>
        </div>

        {/* Action list */}
        <div style={{
          margin: '6px 10px 8px', borderRadius: 11, overflow: 'hidden',
          background: 'rgba(255,255,255,0.7)',
        }}>
          <ShareActionMini label="Copy"/>
          <ShareActionMini label="Save Image"/>
          <ShareActionMini label="Add to Tala" accent/>
          <ShareActionMini label="More…" last/>
        </div>

        {/* Cancel */}
        <div style={{ padding: '0 10px 14px' }}>
          <div style={{
            background: '#fff', borderRadius: 11, padding: '10px 0',
            textAlign: 'center', fontSize: 13, fontWeight: 600, color: '#007AFF',
          }}>Cancel</div>
        </div>
      </div>
    </div>
  );
}

function ShareAppMini({ icon, label, pulsing }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, flex: 1, position: 'relative' }}>
      <div style={{ position: 'relative' }}>
        {pulsing && (
          <div style={{
            position: 'absolute', inset: -5, borderRadius: 14,
            border: '1.8px solid rgba(196,106,74,0.85)',
            animation: 'sharePulse 1.3s ease-out infinite',
          }}/>
        )}
        <div style={{
          width: 40, height: 40, borderRadius: 10, overflow: 'hidden',
          boxShadow: '0 1px 2px rgba(0,0,0,0.12)',
        }}>{icon}</div>
      </div>
      <div style={{ fontSize: 9, color: '#000', textAlign: 'center', maxWidth: 50, lineHeight: 1.2 }}>{label}</div>
      <style>{`
        @keyframes sharePulse {
          0%   { transform: scale(0.95); opacity: 0.9; }
          100% { transform: scale(1.4);  opacity: 0;   }
        }
      `}</style>
    </div>
  );
}

function ShareActionMini({ label, last, accent }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', padding: '9px 11px',
      borderBottom: last ? 'none' : '0.5px solid rgba(60,60,67,0.12)',
    }}>
      <div style={{ flex: 1, fontSize: 13, color: accent ? '#A4502F' : '#000', fontWeight: accent ? 600 : 400 }}>
        {label}
        {accent && (
          <span style={{
            marginLeft: 6, padding: '1px 5px', borderRadius: 99,
            background: 'rgba(196,106,74,0.14)', color: '#A4502F',
            fontSize: 8, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600,
          }}>Suggested</span>
        )}
      </div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        {accent
          ? <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4z" fill="#C46A4A"/>
          : <circle cx="12" cy="12" r="2" fill="#000"/>}
      </svg>
    </div>
  );
}

function MiniTala() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: 'linear-gradient(155deg, #3a2a1d 0%, #2A1F17 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 30% 25%, rgba(196,106,74,0.45) 0%, transparent 60%)',
      }}/>
      <div style={{
        fontFamily: '"Cormorant Garamond", Georgia, serif',
        color: '#F4EADD', fontSize: 26, fontStyle: 'italic',
        position: 'relative', lineHeight: 1,
      }}>t</div>
    </div>
  );
}
function MiniMessages() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(180deg, #5BD75B, #2EC92E)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="22" height="22" viewBox="0 0 32 32"><path d="M5 12c0-4 4-7 11-7s11 3 11 7-4 7-11 7c-1.6 0-3-.2-4.2-.5L7 21l1-4.5C6 15 5 13.5 5 12z" fill="#fff"/></svg>
    </div>
  );
}
function MiniMail() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(180deg, #4DAEFF, #0A84FF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="20" height="20" viewBox="0 0 30 30"><rect x="4" y="7" width="22" height="16" rx="2" fill="#fff"/><path d="M4 9l11 7 11-7" stroke="#0A84FF" strokeWidth="1.6" fill="none"/></svg>
    </div>
  );
}
function MiniNotes() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#FFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: '100%', height: 9, background: '#FED143' }}/>
      <div style={{ flex: 1, padding: '3px 4px' }}>
        <div style={{ borderBottom: '0.5px solid #ddd', height: 3, marginBottom: 2 }}/>
        <div style={{ borderBottom: '0.5px solid #ddd', height: 3, marginBottom: 2 }}/>
        <div style={{ borderBottom: '0.5px solid #ddd', height: 3 }}/>
      </div>
    </div>
  );
}
function MiniWA() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="22" height="22" viewBox="0 0 32 32"><path d="M16 5c-6 0-11 5-11 11 0 2 .5 3.8 1.5 5.5L5 27l5.7-1.5c1.6.9 3.4 1.4 5.3 1.4 6 0 11-5 11-11S22 5 16 5z" fill="#fff"/></svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Frame 4 — Tala extension (the magic moment: detected location, no app open yet)
// ─────────────────────────────────────────────────────────────
function FrameExtension() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#000', overflow: 'hidden' }}>
      {/* dimmed IG behind */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
        <FrameInstagram/>
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }}/>

      {/* Extension card — looks like a Tala-branded mini app inside iOS */}
      <div style={{
        position: 'absolute', left: 8, right: 8, top: 80,
        borderRadius: 24, overflow: 'hidden',
        background: '#FBF7F0',
        boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
        fontFamily: '"Outfit", system-ui, sans-serif',
        animation: 'extPop 600ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}>
        {/* Tala extension header — espresso bar */}
        <div style={{
          background: 'linear-gradient(155deg, #3a2a1d 0%, #2A1F17 100%)',
          padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(circle at 80% 20%, rgba(196,106,74,0.35) 0%, transparent 55%)',
          }}/>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, position: 'relative' }}>
            <div style={{
              width: 26, height: 26, borderRadius: 6,
              background: 'rgba(244,234,221,0.08)', border: '0.5px solid rgba(244,234,221,0.18)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{
                fontFamily: '"Cormorant Garamond", serif', color: '#F4EADD',
                fontSize: 16, fontStyle: 'italic', lineHeight: 1,
              }}>t</span>
            </div>
            <div>
              <div style={{
                fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
                color: '#F4EADD', fontSize: 14, letterSpacing: '0.18em',
              }}>tala</div>
              <div style={{
                fontSize: 8, letterSpacing: '0.32em', textTransform: 'uppercase',
                color: 'rgba(244,234,221,0.55)', fontWeight: 500, marginTop: 1,
              }}>Save from Instagram</div>
            </div>
          </div>
          <div style={{ color: 'rgba(244,234,221,0.55)', fontSize: 18 }}>×</div>
        </div>

        {/* Detected card */}
        <div style={{ padding: '16px 16px 10px' }}>
          {/* AI scan indicator */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 7,
            fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase',
            color: '#A4502F', fontWeight: 500, marginBottom: 10,
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24"><path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4z" fill="#C46A4A"/></svg>
            Detected from your screenshot
          </div>

          {/* Photo with location pin */}
          <div style={{
            position: 'relative', width: '100%', height: 130, borderRadius: 8,
            backgroundImage: `url(${FLOW_PHOTO})`, backgroundSize: 'cover', backgroundPosition: 'center',
            overflow: 'hidden',
            boxShadow: '0 8px 20px -8px rgba(42,31,23,0.25)',
          }}>
            <div style={{
              position: 'absolute', bottom: 8, left: 8, right: 8,
              display: 'flex', alignItems: 'center', gap: 7,
              padding: '6px 9px', borderRadius: 99,
              background: 'rgba(255,255,255,0.94)',
              fontSize: 10.5, color: '#2A1F17', fontWeight: 500,
            }}>
              <span style={{
                width: 14, height: 14, borderRadius: 99, background: '#C46A4A',
                color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 8, fontWeight: 700,
              }}>✓</span>
              <span style={{ flex: 1 }}>Cala Varques · Mallorca</span>
              <span style={{ fontSize: 8, color: '#9A8775', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Beach</span>
            </div>
          </div>

          {/* Greeting */}
          <div style={{
            fontFamily: '"Cormorant Garamond", serif', fontSize: 22, lineHeight: 1.15,
            color: '#2A1F17', fontStyle: 'italic', marginTop: 14, letterSpacing: '-0.01em',
          }}>
            Add to a trip in<br/>
            <span style={{ color: '#A4502F' }}>Mallorca?</span>
          </div>

          {/* Suggested existing trip */}
          <div style={{
            marginTop: 12, padding: '10px 12px', borderRadius: 12,
            background: '#fff', border: '0.5px solid rgba(42,31,23,0.10)',
            display: 'flex', alignItems: 'center', gap: 10,
            boxShadow: '0 4px 14px -8px rgba(42,31,23,0.18)',
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: 6,
              backgroundImage: `url(https://images.unsplash.com/photo-1591290619762-c4e2776b53b1?auto=format&fit=crop&w=300&q=70)`,
              backgroundSize: 'cover', flexShrink: 0,
            }}/>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
                fontSize: 14, color: '#2A1F17', lineHeight: 1.1,
              }}>Balearics with the Girls</div>
              <div style={{ fontSize: 9.5, color: '#5C4A3C', marginTop: 2 }}>Jun 12 — 22 · 4 saves</div>
            </div>
            <svg width="6" height="10" viewBox="0 0 8 14"><path d="M1 1l6 6-6 6" stroke="#9A8775" strokeWidth="1.6" fill="none" strokeLinecap="round"/></svg>
          </div>

          {/* Primary CTA */}
          <button style={{
            width: '100%', marginTop: 8, padding: '11px 16px', borderRadius: 99,
            background: '#C46A4A', color: '#FBF7F0', border: 'none',
            fontFamily: 'Outfit, sans-serif', fontSize: 11, letterSpacing: '0.28em',
            textTransform: 'uppercase', fontWeight: 500,
            boxShadow: '0 6px 16px -8px rgba(196,106,74,0.6)',
          }}>+ New Trip</button>
        </div>

        {/* footer hint */}
        <div style={{
          padding: '8px 16px 12px', borderTop: '0.5px solid rgba(42,31,23,0.06)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase',
          color: '#9A8775', fontWeight: 500,
        }}>
          <span>Saved without leaving Instagram</span>
        </div>
      </div>

      <style>{`
        @keyframes extPop {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Frame 5 — Tala app, screenshot landed in trip board
// ─────────────────────────────────────────────────────────────
function FrameTalaApp() {
  return (
    <div style={{
      position: 'absolute', inset: 0, background: '#F7F2EA',
      fontFamily: '"Outfit", system-ui, sans-serif',
      backgroundImage: PAPER_GRAIN, backgroundBlendMode: 'multiply',
    }}>
      <MiniStatusBar/>

      {/* Top brand row */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '4px 18px 12px',
      }}>
        <div style={{
          fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
          fontSize: 16, color: '#C46A4A', letterSpacing: '0.32em',
        }}>tala</div>
        <div style={{
          width: 22, height: 22, borderRadius: 99, background: '#C46A4A22',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24"><path d="M5 12h14M12 5v14" stroke="#C46A4A" strokeWidth="2.2" strokeLinecap="round"/></svg>
        </div>
      </div>

      {/* Trip header */}
      <div style={{ padding: '6px 18px 14px' }}>
        <div style={{
          fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase',
          color: '#9A8775', fontWeight: 500,
        }}>Trip Board</div>
        <div style={{
          fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
          fontSize: 26, color: '#2A1F17', lineHeight: 1.05, marginTop: 4,
          letterSpacing: '-0.01em',
        }}>
          Balearics with<br/>the Girls
        </div>
        <div style={{ fontSize: 10, color: '#5C4A3C', marginTop: 5 }}>
          Mallorca · Ibiza · Jun 12 — 22
        </div>
      </div>

      {/* Toast: just added */}
      <div style={{
        margin: '0 14px 12px', padding: '9px 12px',
        background: '#fff', border: '0.5px solid rgba(196,106,74,0.30)',
        borderRadius: 12, display: 'flex', alignItems: 'center', gap: 9,
        boxShadow: '0 8px 20px -10px rgba(42,31,23,0.18)',
        animation: 'toastIn 600ms ease-out',
      }}>
        <div style={{
          width: 22, height: 22, borderRadius: 99, background: '#C46A4A',
          color: '#fff', fontSize: 11, fontWeight: 700,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>✓</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#2A1F17' }}>Added to your board</div>
          <div style={{ fontSize: 9.5, color: '#5C4A3C', marginTop: 1 }}>Cala Varques · from Instagram</div>
        </div>
        <div style={{ fontSize: 9, color: '#9A8775', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Just now</div>
      </div>

      {/* Masonry-ish saves grid */}
      <div style={{ padding: '0 14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {/* Just-added card — highlighted */}
        <div style={{
          gridRow: 'span 2',
          height: 200, borderRadius: 10, overflow: 'hidden', position: 'relative',
          backgroundImage: `url(${FLOW_PHOTO})`, backgroundSize: 'cover', backgroundPosition: 'center',
          boxShadow: '0 10px 24px -10px rgba(42,31,23,0.30), 0 0 0 1.5px rgba(196,106,74,0.55)',
          animation: 'cardLand 800ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}>
          <div style={{
            position: 'absolute', top: 7, left: 7,
            display: 'flex', alignItems: 'center', gap: 5,
            padding: '3px 7px', borderRadius: 99,
            background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
            fontSize: 8, color: '#fff', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 500,
          }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="#fff" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1" fill="#fff"/>
            </svg>
            Instagram
          </div>
          <div style={{
            position: 'absolute', bottom: 8, left: 8, right: 8,
            color: '#fff', fontSize: 10, lineHeight: 1.3,
          }}>
            <div style={{
              fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
              fontSize: 14, letterSpacing: '0.01em',
            }}>Cala Varques</div>
            <div style={{ opacity: 0.85, fontSize: 8.5, letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 1 }}>Beach · Mallorca</div>
          </div>
        </div>

        {/* Other saves */}
        <div style={{
          height: 96, borderRadius: 10,
          backgroundImage: `url(https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=400&q=70)`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}/>
        <div style={{
          height: 96, borderRadius: 10,
          backgroundImage: `url(https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=400&q=70)`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}/>

        <div style={{
          height: 76, borderRadius: 10,
          background: '#fff', border: '0.5px dashed rgba(42,31,23,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#9A8775', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase',
        }}>+ Add</div>
        <div style={{
          height: 76, borderRadius: 10,
          backgroundImage: `url(https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=400&q=70)`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}/>
      </div>

      {/* Generate Itinerary CTA — floating bottom pill */}
      <div style={{
        position: 'absolute', left: 14, right: 14, bottom: 14,
        padding: '11px 14px', borderRadius: 99,
        background: 'linear-gradient(155deg, #D88665 0%, #C46A4A 60%, #A4502F 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        boxShadow: '0 14px 32px -10px rgba(196,106,74,0.55), 0 0 0 0.5px rgba(244,234,221,0.18) inset',
        animation: 'ctaGlow 2.4s ease-in-out infinite',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M12 3l1.8 5L19 10l-5.2 2L12 17l-1.8-5L5 10l5.2-2L12 3zM18 16l1 2.6L21.5 20l-2.6 1L18 23.5l-1-2.5L14.5 20l2.5-1L18 16z" fill="#FBF7F0"/>
          </svg>
          <div>
            <div style={{
              fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase',
              color: 'rgba(251,247,240,0.75)', fontWeight: 500,
            }}>7 saves · ready</div>
            <div style={{
              fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
              fontSize: 14, color: '#FBF7F0', lineHeight: 1.05, marginTop: 1,
            }}>Generate itinerary</div>
          </div>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="#FBF7F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <style>{`
        @keyframes cardLand {
          0%   { transform: translateY(-30px) scale(1.06); opacity: 0; }
          50%  { opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes ctaGlow {
          0%, 100% { box-shadow: 0 14px 32px -10px rgba(196,106,74,0.55), 0 0 0 0.5px rgba(244,234,221,0.18) inset; }
          50%      { box-shadow: 0 14px 38px -8px rgba(216,134,101,0.75), 0 0 0 0.5px rgba(244,234,221,0.25) inset; }
        }
        @keyframes toastIn {
          from { transform: translateY(-8px); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Frame 6 — Itinerary generated from the screenshots
// ─────────────────────────────────────────────────────────────
function FrameItinerary() {
  return (
    <div style={{
      position: 'absolute', inset: 0, background: '#F7F2EA',
      fontFamily: '"Outfit", system-ui, sans-serif',
      backgroundImage: PAPER_GRAIN, backgroundBlendMode: 'multiply',
      overflow: 'hidden',
    }}>
      <MiniStatusBar/>

      {/* Folio cover */}
      <div style={{ position: 'relative', height: 220, margin: '0 0 0 0', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${FLOW_PHOTO})`, backgroundSize: 'cover', backgroundPosition: 'center',
        }}/>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 35%, rgba(27,20,16,0.7) 100%)' }}/>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: FILM_GRAIN, opacity: 0.45, mixBlendMode: 'overlay' }}/>

        {/* Top chips */}
        <div style={{ position: 'absolute', top: 14, left: 14, right: 14, display: 'flex', justifyContent: 'space-between' }}>
          <div style={{
            padding: '4px 8px', borderRadius: 99,
            background: 'rgba(42,31,23,0.42)', backdropFilter: 'blur(10px)',
            color: '#FBF7F0', fontSize: 8.5, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500,
            display: 'flex', alignItems: 'center', gap: 5,
          }}>
            <svg width="8" height="8" viewBox="0 0 24 24"><path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4z" fill="#F4E6D2"/></svg>
            From 7 saves
          </div>
          <div style={{
            width: 22, height: 22, borderRadius: 99,
            background: 'rgba(42,31,23,0.42)', backdropFilter: 'blur(10px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M4 12v8h16v-8M16 6l-4-4-4 4M12 2v14" stroke="#FBF7F0" strokeWidth="1.7" strokeLinecap="round"/></svg>
          </div>
        </div>

        {/* Foil seal */}
        <div style={{
          position: 'absolute', top: 56, left: '50%', transform: 'translateX(-50%)',
          fontSize: 7.5, letterSpacing: '0.42em', color: '#F4E6D2',
          textTransform: 'uppercase', fontWeight: 500,
        }}>
          ✶ A Tala Folio ✶
        </div>

        {/* Title block */}
        <div style={{
          position: 'absolute', left: 18, right: 18, bottom: 14,
          color: '#FBF7F0', textAlign: 'center',
        }}>
          <div style={{ fontSize: 7.5, letterSpacing: '0.32em', opacity: 0.85, marginBottom: 6 }}>
            10 DAYS · 5 GUESTS · LATE SPRING
          </div>
          <div style={{
            fontFamily: '"Cormorant Garamond", serif', fontSize: 22,
            fontStyle: 'italic', lineHeight: 1.05, fontWeight: 400, letterSpacing: '-0.01em',
          }}>
            Balearics with the Girls
          </div>
          <div style={{ fontSize: 8.5, letterSpacing: '0.06em', opacity: 0.8, marginTop: 6 }}>
            Mallorca · Ibiza · Jun 12 — 22
          </div>
        </div>
      </div>

      {/* Concierge note */}
      <div style={{ padding: '10px 16px 4px' }}>
        <div style={{
          fontSize: 8, letterSpacing: '0.32em', textTransform: 'uppercase',
          color: '#A4502F', fontWeight: 500, marginBottom: 3,
        }}>From your saves</div>
        <div style={{
          fontFamily: '"Cormorant Garamond", serif', fontSize: 10.5,
          fontStyle: 'italic', color: '#5C4A3C', lineHeight: 1.35,
        }}>
          "Long lunches, water you can see through, one night to remember."
        </div>
      </div>

      {/* Tab bar */}
      <div style={{
        display: 'flex', gap: 14, padding: '4px 16px',
        borderBottom: '0.5px solid rgba(42,31,23,0.10)',
        fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500,
      }}>
        <span style={{ color: '#2A1F17', borderBottom: '1.5px solid #C46A4A', paddingBottom: 6 }}>Days</span>
        <span style={{ color: '#9A8775', paddingBottom: 6 }}>Costs</span>
        <span style={{ color: '#9A8775', paddingBottom: 6 }}>Packing</span>
      </div>

      {/* Flights strip */}
      <div style={{ padding: '10px 14px 4px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: 6, padding: '0 2px',
        }}>
          <div style={{
            fontSize: 8, letterSpacing: '0.32em', textTransform: 'uppercase',
            color: '#9A8775', fontWeight: 500,
            display: 'flex', alignItems: 'center', gap: 5,
          }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
              <path d="M21 16l-7-4V5a2 2 0 1 0-4 0v7l-7 4v2l7-2v5l-2 1.5V20l4-1 4 1v-1.5L14 17v-5l7 2v-2z" fill="#9A8775"/>
            </svg>
            Flights
          </div>
          <div style={{
            fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#A4502F', fontWeight: 500,
            display: 'flex', alignItems: 'center', gap: 4,
          }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
              <path d="M12 4v16M4 12h16" stroke="#A4502F" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Sync inbox
          </div>
        </div>

        <div style={{ display: 'flex', gap: 6 }}>
          {/* Synced outbound flight */}
          <div style={{
            flex: 1, padding: '7px 9px', borderRadius: 9,
            background: '#fff', border: '0.5px solid rgba(42,31,23,0.10)',
            boxShadow: '0 4px 12px -8px rgba(42,31,23,0.16)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 5, right: 5,
              padding: '1px 5px', borderRadius: 99,
              background: 'rgba(168,181,155,0.20)',
              color: '#5C7A55', fontSize: 6.5, letterSpacing: '0.2em',
              textTransform: 'uppercase', fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: 3,
            }}>
              <span style={{ width: 4, height: 4, borderRadius: 99, background: '#7E8E72' }}/>
              Synced
            </div>
            <div style={{
              fontSize: 7, letterSpacing: '0.28em', textTransform: 'uppercase',
              color: '#9A8775', fontWeight: 500, marginBottom: 2,
            }}>BA 460 · Jun 12</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <div>
                <div style={{
                  fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
                  fontSize: 14, color: '#2A1F17', lineHeight: 1,
                }}>LHR</div>
                <div style={{ fontSize: 7.5, color: '#5C4A3C', marginTop: 1 }}>09:40</div>
              </div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2, paddingTop: 4 }}>
                <div style={{ flex: 1, height: 0.5, background: 'rgba(42,31,23,0.20)' }}/>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><path d="M2 12l20-8-6 8 6 8L2 12z" fill="#C46A4A"/></svg>
                <div style={{ flex: 1, height: 0.5, background: 'rgba(42,31,23,0.20)' }}/>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
                  fontSize: 14, color: '#2A1F17', lineHeight: 1,
                }}>PMI</div>
                <div style={{ fontSize: 7.5, color: '#5C4A3C', marginTop: 1 }}>13:15</div>
              </div>
            </div>
          </div>

          {/* + Add return prompt */}
          <div style={{
            flex: 1, padding: '7px 9px', borderRadius: 9,
            background: 'transparent', border: '0.5px dashed rgba(42,31,23,0.25)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}>
            <div style={{
              fontSize: 7, letterSpacing: '0.28em', textTransform: 'uppercase',
              color: '#9A8775', fontWeight: 500, marginBottom: 3,
            }}>Return · Jun 22</div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 5,
              fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
              fontSize: 12, color: '#A4502F', lineHeight: 1.1,
            }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#A4502F" strokeWidth="1.6"/>
                <path d="M12 7v10M7 12h10" stroke="#A4502F" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
              Add or sync
            </div>
            <div style={{ fontSize: 7.5, color: '#9A8775', marginTop: 3, lineHeight: 1.3 }}>
              From Gmail, ticket PDF, or paste
            </div>
          </div>
        </div>
      </div>

      {/* Day list */}
      <div style={{ padding: '6px 14px 0', display: 'flex', flexDirection: 'column', gap: 5 }}>
        <DayRow num="01" title="Slow arrival in Palma" sub="Cap Rocat · Llonja stroll" thumb="https://images.unsplash.com/photo-1591290619762-c4e2776b53b1?auto=format&fit=crop&w=200&q=70" book="Hotel + dinner"/>
        <DayRow num="02" title="Cala Varques" sub="Picnic from Forn Fondo · sunset at Es Verger" thumb={FLOW_PHOTO} highlight book="Boat + table"/>
        <DayRow num="03" title="Tramuntana drive" sub="Deià · Sa Foradada at golden hour" thumb="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=200&q=70" book="Car + lunch"/>
      </div>
    </div>
  );
}

function DayRow({ num, title, sub, thumb, highlight, book }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '5px 9px', borderRadius: 10,
      background: highlight ? '#fff' : 'transparent',
      border: highlight ? '0.5px solid rgba(196,106,74,0.35)' : '0.5px solid transparent',
      boxShadow: highlight ? '0 6px 16px -10px rgba(42,31,23,0.18)' : 'none',
    }}>
      <div style={{
        width: 38, height: 44, borderRadius: 6,
        backgroundImage: `url(${thumb})`, backgroundSize: 'cover', backgroundPosition: 'center',
        flexShrink: 0,
      }}/>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 7.5, letterSpacing: '0.28em', textTransform: 'uppercase',
          color: '#9A8775', fontWeight: 500, marginBottom: 1,
        }}>Day {num}</div>
        <div style={{
          fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
          fontSize: 13, color: '#2A1F17', lineHeight: 1.1, letterSpacing: '-0.005em',
        }}>{title}</div>
        <div style={{
          fontSize: 9, color: '#5C4A3C', marginTop: 2, lineHeight: 1.3,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{sub}</div>
      </div>
      {book && (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2,
          flexShrink: 0,
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 3,
            padding: '2px 6px 2px 5px', borderRadius: 99,
            background: highlight ? '#C46A4A' : 'rgba(196,106,74,0.12)',
            color: highlight ? '#FBF7F0' : '#A4502F',
            fontSize: 7.5, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600,
          }}>
            <svg width="7" height="7" viewBox="0 0 24 24" fill="none">
              <path d="M5 12l5 5L20 7" stroke={highlight ? '#FBF7F0' : '#A4502F'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Book
          </div>
          <div style={{ fontSize: 7, color: '#9A8775', letterSpacing: '0.04em' }}>{book}</div>
        </div>
      )}
      <svg width="6" height="10" viewBox="0 0 8 14"><path d="M1 1l6 6-6 6" stroke="#9A8775" strokeWidth="1.6" fill="none" strokeLinecap="round"/></svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Frame 7 — Costs tab (budget + per-category breakdown)
// ─────────────────────────────────────────────────────────────
function FrameCosts() {
  const COST_ROWS = [
    { cat: 'Lodging',    amt: 7550, color: '#C46A4A', note: '10 nights · 2 villas' },
    { cat: 'Dining',     amt: 3120, color: '#B8915A', note: '8 dinners · lunches' },
    { cat: 'Activities', amt: 4480, color: '#A8B59B', note: 'Boat day · spa · cooking' },
    { cat: 'Flights',    amt: 1850, color: '#5C4A3C', note: '5 × LHR→PMI→LHR' },
    { cat: 'Transport',  amt:  720, color: '#7E8E72', note: 'Ferry + 2 rentals' },
    { cat: 'Misc',       amt:  410, color: '#9A8775', note: 'Tips, fees, sundries' },
  ];
  const total = COST_ROWS.reduce((s, r) => s + r.amt, 0);
  const guests = 5;
  const perPerson = Math.round(total / guests);
  const budget = 20000;
  const pctOfBudget = total / budget;

  return (
    <div style={{
      position: 'absolute', inset: 0, background: '#F7F2EA',
      fontFamily: '"Outfit", system-ui, sans-serif',
      backgroundImage: PAPER_GRAIN, backgroundBlendMode: 'multiply',
      overflow: 'hidden',
    }}>
      <MiniStatusBar/>

      {/* Header strip */}
      <div style={{ padding: '4px 16px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 8, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#9A8775', fontWeight: 500 }}>
            Folio · Balearics
          </div>
          <div style={{
            fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
            fontSize: 19, color: '#2A1F17', lineHeight: 1.05, letterSpacing: '-0.01em',
          }}>The numbers</div>
        </div>
        <div style={{
          width: 24, height: 24, borderRadius: 99,
          background: 'rgba(196,106,74,0.10)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24"><path d="M3 12h12M3 18h18M3 6h18" stroke="#C46A4A" strokeWidth="2" strokeLinecap="round"/></svg>
        </div>
      </div>

      {/* Tab bar */}
      <div style={{
        display: 'flex', gap: 14, padding: '0 16px',
        borderBottom: '0.5px solid rgba(42,31,23,0.10)',
        fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500,
      }}>
        <span style={{ color: '#9A8775', paddingBottom: 6 }}>Days</span>
        <span style={{ color: '#2A1F17', borderBottom: '1.5px solid #C46A4A', paddingBottom: 6 }}>Costs</span>
        <span style={{ color: '#9A8775', paddingBottom: 6 }}>Packing</span>
      </div>

      {/* Budget gauge card */}
      <div style={{
        margin: '12px 14px 10px', padding: '14px 14px 14px',
        background: '#fff', borderRadius: 12, border: '0.5px solid rgba(42,31,23,0.08)',
        boxShadow: '0 8px 22px -14px rgba(42,31,23,0.18)',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 10 }}>
          <div>
            <div style={{ fontSize: 8, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#9A8775', fontWeight: 500, marginBottom: 4 }}>
              Trip total
            </div>
            <div style={{
              fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
              fontSize: 28, color: '#2A1F17', lineHeight: 1, letterSpacing: '-0.01em',
            }}>€{total.toLocaleString()}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 8, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#9A8775', fontWeight: 500, marginBottom: 4 }}>
              Per guest
            </div>
            <div style={{
              fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
              fontSize: 16, color: '#5C4A3C', lineHeight: 1,
            }}>€{perPerson.toLocaleString()}</div>
          </div>
        </div>

        {/* Stacked bar */}
        <div style={{
          width: '100%', height: 8, borderRadius: 99, overflow: 'hidden',
          display: 'flex', background: 'rgba(42,31,23,0.06)',
        }}>
          {COST_ROWS.map((r) => (
            <div key={r.cat} style={{ width: `${(r.amt / total) * 100}%`, background: r.color }}/>
          ))}
        </div>

        {/* Budget marker line */}
        <div style={{
          marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          fontSize: 8.5, color: '#5C4A3C',
        }}>
          <span>{Math.round(pctOfBudget * 100)}% of €{budget.toLocaleString()} budget</span>
          <span style={{
            padding: '2px 7px', borderRadius: 99, background: '#A8B59B22',
            color: '#5C7A55', fontSize: 7.5, letterSpacing: '0.18em',
            textTransform: 'uppercase', fontWeight: 600,
          }}>Under</span>
        </div>
      </div>

      {/* Category list */}
      <div style={{ padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        {COST_ROWS.map((r) => {
          const pct = (r.amt / total) * 100;
          return (
            <div key={r.cat} style={{
              display: 'flex', alignItems: 'center', gap: 9,
              padding: '6px 4px',
              borderBottom: '0.5px solid rgba(42,31,23,0.06)',
            }}>
              <div style={{ width: 6, height: 26, borderRadius: 2, background: r.color, flexShrink: 0 }}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  marginBottom: 1,
                }}>
                  <span style={{ fontSize: 11, color: '#2A1F17', fontWeight: 500 }}>{r.cat}</span>
                  <span style={{
                    fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
                    fontSize: 13, color: '#2A1F17',
                  }}>€{r.amt.toLocaleString()}</span>
                </div>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  fontSize: 8.5, color: '#9A8775',
                }}>
                  <span>{r.note}</span>
                  <span style={{ letterSpacing: '0.06em' }}>{pct.toFixed(0)}%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer split row */}
      <div style={{
        position: 'absolute', left: 14, right: 14, bottom: 14,
        padding: '9px 12px', borderRadius: 99,
        background: 'linear-gradient(155deg, #3a2a1d 0%, #2A1F17 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        boxShadow: '0 10px 24px -10px rgba(42,31,23,0.4)',
      }}>
        <div style={{
          fontSize: 8.5, letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'rgba(244,234,221,0.65)', fontWeight: 500,
        }}>Split with girls</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          {['#E8B7A1', '#A8B59B', '#C46A4A', '#B8915A', '#7E8E72'].map((c, i) => (
            <div key={i} style={{
              width: 18, height: 18, borderRadius: 99, background: c,
              border: '1.2px solid #2A1F17', marginLeft: i === 0 ? 0 : -7,
            }}/>
          ))}
          <svg width="6" height="10" viewBox="0 0 8 14" style={{ marginLeft: 6 }}><path d="M1 1l6 6-6 6" stroke="#F4EADD" strokeWidth="1.6" fill="none" strokeLinecap="round"/></svg>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Frame 7.5 — Split with the girls (per-person breakdown + Venmo)
// ─────────────────────────────────────────────────────────────
function FrameSplit() {
  const PEOPLE = [
    { name: 'Tala',   handle: '@talareyes',  amt: 3626, color: '#C46A4A', you: true,  paid: false, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=70' },
    { name: 'Maya',   handle: '@mayachen',   amt: 3626, color: '#7E8E72', paid: true,  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=70' },
    { name: 'Noor',   handle: '@noor.k',     amt: 3626, color: '#B8915A', paid: false, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=70' },
    { name: 'Priya',  handle: '@priyam',     amt: 3626, color: '#E8B7A1', paid: true,  avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=70' },
    { name: 'Sasha',  handle: '@sashav',     amt: 3626, color: '#A8B59B', paid: false, avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=70' },
  ];
  const BREAKDOWN = [
    { lbl: 'Hotel',          val: 1380 },
    { lbl: 'Boats & cars',   val: 740 },
    { lbl: 'Tables booked',  val: 612 },
    { lbl: 'Flights',        val: 480 },
    { lbl: 'Misc',           val: 414 },
  ];

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(180deg, #2A1F17 0%, #1a120c 100%)',
      fontFamily: '"Outfit", system-ui, sans-serif', color: '#F4EADD',
      overflow: 'hidden',
    }}>
      <MiniStatusBar dark/>

      {/* Sheet handle */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 4 }}>
        <div style={{ width: 32, height: 3, borderRadius: 99, background: 'rgba(244,234,221,0.25)' }}/>
      </div>

      {/* Header */}
      <div style={{ padding: '8px 18px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{
          fontSize: 8, letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'rgba(244,234,221,0.55)', fontWeight: 500,
        }}>Your portion</div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M6 6l12 12M18 6L6 18" stroke="rgba(244,234,221,0.55)" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Hero amount */}
      <div style={{ padding: '4px 18px 12px', textAlign: 'left' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{
            fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
            fontSize: 48, lineHeight: 1, color: '#F4EADD', letterSpacing: '-0.015em',
          }}>€3,626</span>
          <span style={{ fontSize: 10, color: 'rgba(244,234,221,0.45)', letterSpacing: '0.1em' }}>/ €18,130</span>
        </div>
        <div style={{
          marginTop: 4, fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
          fontSize: 13, color: 'rgba(244,234,221,0.7)',
        }}>Split five ways · evenly</div>
      </div>

      {/* Breakdown card */}
      <div style={{
        margin: '0 14px 10px', padding: '10px 12px', borderRadius: 10,
        background: 'rgba(244,234,221,0.05)',
        border: '0.5px solid rgba(244,234,221,0.10)',
      }}>
        <div style={{
          fontSize: 8, letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'rgba(244,234,221,0.55)', fontWeight: 500, marginBottom: 6,
        }}>What you owe</div>
        {BREAKDOWN.map((b, i) => (
          <div key={b.lbl} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '4px 0',
            borderBottom: i < BREAKDOWN.length - 1 ? '0.5px solid rgba(244,234,221,0.08)' : 'none',
          }}>
            <span style={{ fontSize: 10.5, color: '#F4EADD' }}>{b.lbl}</span>
            <span style={{
              fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
              fontSize: 13, color: '#F4EADD',
            }}>€{b.val.toLocaleString()}</span>
          </div>
        ))}
      </div>

      {/* People row */}
      <div style={{ padding: '0 14px 10px' }}>
        <div style={{
          fontSize: 8, letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'rgba(244,234,221,0.55)', fontWeight: 500, marginBottom: 6, padding: '0 4px',
        }}>The five</div>
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 4,
          padding: '6px 10px', borderRadius: 10,
          background: 'rgba(244,234,221,0.04)',
          border: '0.5px solid rgba(244,234,221,0.08)',
        }}>
          {PEOPLE.map((p) => (
            <div key={p.name} style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '3px 0',
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: 99,
                backgroundImage: `url(${p.avatar})`, backgroundSize: 'cover', backgroundPosition: 'center',
                border: p.you ? `1.2px solid ${p.color}` : '0.5px solid rgba(244,234,221,0.15)',
                flexShrink: 0,
              }}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 10, color: '#F4EADD', fontWeight: 500 }}>
                  {p.name} {p.you && <span style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', color: p.color, marginLeft: 3 }}>(you)</span>}
                </div>
                <div style={{ fontSize: 7.5, color: 'rgba(244,234,221,0.4)', letterSpacing: '0.04em' }}>{p.handle}</div>
              </div>
              <div style={{
                fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
                fontSize: 12, color: '#F4EADD', marginRight: 8,
              }}>€{p.amt.toLocaleString()}</div>
              {p.paid ? (
                <div style={{
                  padding: '1.5px 6px', borderRadius: 99,
                  background: 'rgba(126,140,114,0.20)', border: '0.5px solid rgba(126,140,114,0.45)',
                  fontSize: 7, letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: '#A8B59B', fontWeight: 600,
                }}>Paid</div>
              ) : (
                <div style={{
                  padding: '1.5px 6px', borderRadius: 99,
                  background: 'rgba(196,106,74,0.15)', border: '0.5px solid rgba(196,106,74,0.40)',
                  fontSize: 7, letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: '#D88665', fontWeight: 600,
                }}>Owes</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Venmo CTA */}
      <div style={{
        position: 'absolute', left: 14, right: 14, bottom: 14,
        display: 'flex', flexDirection: 'column', gap: 6,
      }}>
        <button style={{
          width: '100%', height: 42, borderRadius: 12, border: 'none',
          background: 'linear-gradient(155deg, #3D95CE 0%, #008CFF 100%)',
          color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 14px', fontFamily: 'Outfit, sans-serif',
          boxShadow: '0 10px 24px -8px rgba(0,140,255,0.45)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {/* Venmo wordmark V */}
            <div style={{
              width: 22, height: 22, borderRadius: 5,
              background: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="12" height="13" viewBox="0 0 18 20" fill="#008CFF">
                <path d="M16.4 0.5c.6 1 .9 2 .9 3.4 0 4.3-3.7 9.9-6.6 13.8H4L1.3 2 7 1.5l1.4 11.5c1.3-2.1 3-5.5 3-7.8 0-1.3-.2-2.1-.6-2.8L16.4 0.5z"/>
              </svg>
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.01em' }}>Pay with Venmo</div>
              <div style={{ fontSize: 8, opacity: 0.85, letterSpacing: '0.06em', marginTop: 1 }}>Request from 4 friends · €14,504</div>
            </div>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(244,234,221,0.4)', fontWeight: 500,
        }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="10" width="16" height="11" rx="2" stroke="rgba(244,234,221,0.5)" strokeWidth="1.5"/>
            <path d="M8 10V7a4 4 0 018 0v3" stroke="rgba(244,234,221,0.5)" strokeWidth="1.5"/>
          </svg>
          Encrypted · Apple Pay also available
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Frame 8 — Profile (editorial header + folio gallery + settings)
// ─────────────────────────────────────────────────────────────
function FrameProfile() {
  const TASTES = ['Slow mornings', 'Long lunches', 'Quiet coves', 'Local tables', 'Linen weather'];
  const FOLIOS = [
    { title: 'Balearics with the Girls',  sub: 'Mallorca · Ibiza', date: 'Jun 2026', img: FLOW_PHOTO,                                                                                                state: 'Active', tone: 'terra' },
    { title: 'Kyoto in shoulder season',  sub: 'Japan',            date: 'Oct 2025',  img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=400&q=70',          state: 'Saved',  tone: 'sage' },
    { title: 'Amalfi, no plans',           sub: 'Italy',            date: 'Sep 2024',  img: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=400&q=70',          state: 'Past',   tone: 'gold' },
    { title: 'Lisbon long weekend',        sub: 'Portugal',         date: 'Mar 2024',  img: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=400&q=70',          state: 'Past',   tone: 'inkSoft' },
  ];

  return (
    <div style={{
      position: 'absolute', inset: 0, background: '#F7F2EA',
      fontFamily: '"Outfit", system-ui, sans-serif',
      backgroundImage: PAPER_GRAIN, backgroundBlendMode: 'multiply',
      overflow: 'hidden',
    }}>
      <MiniStatusBar/>

      {/* Top bar — settings cog */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 16px 0' }}>
        <div style={{
          fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
          fontSize: 13, color: '#C46A4A', letterSpacing: '0.32em',
        }}>tala</div>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" stroke="#5C4A3C" strokeWidth="1.6"/>
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1l2.1-2.1M17 7l2.1-2.1" stroke="#5C4A3C" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Editorial header */}
      <div style={{ padding: '14px 18px 10px', display: 'flex', alignItems: 'center', gap: 12 }}>
        {/* Avatar with foil ring */}
        <div style={{
          width: 56, height: 56, borderRadius: 99,
          padding: 1.5, background: 'linear-gradient(135deg, #D88665 0%, #B8915A 100%)',
          flexShrink: 0,
        }}>
          <div style={{
            width: '100%', height: '100%', borderRadius: 99, overflow: 'hidden',
            border: '1.5px solid #F7F2EA',
            backgroundImage: 'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=70)',
            backgroundSize: 'cover', backgroundPosition: 'center',
          }}/>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 8, letterSpacing: '0.32em', textTransform: 'uppercase',
            color: '#9A8775', fontWeight: 500, marginBottom: 2,
          }}>Member since 2024</div>
          <div style={{
            fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
            fontSize: 22, color: '#2A1F17', lineHeight: 1.05, letterSpacing: '-0.005em',
          }}>Tala Reyes</div>
          <div style={{ fontSize: 9.5, color: '#5C4A3C', marginTop: 2 }}>tala@reyes.co · London</div>
        </div>
      </div>

      {/* Stats row */}
      <div style={{
        margin: '0 14px 10px', padding: '8px 12px',
        background: '#fff', borderRadius: 10, border: '0.5px solid rgba(42,31,23,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      }}>
        <Stat n="7" lbl="Folios"/>
        <Divider/>
        <Stat n="19" lbl="Countries"/>
        <Divider/>
        <Stat n="142" lbl="Days away"/>
      </div>

      {/* Taste tags */}
      <div style={{ padding: '4px 14px 12px' }}>
        <div style={{
          fontSize: 8, letterSpacing: '0.32em', textTransform: 'uppercase',
          color: '#9A8775', fontWeight: 500, marginBottom: 6, padding: '0 4px',
        }}>Travel taste</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {TASTES.map((t) => (
            <span key={t} style={{
              padding: '3px 9px', borderRadius: 99,
              background: 'rgba(196,106,74,0.10)',
              color: '#A4502F',
              fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
              fontSize: 11, letterSpacing: '0.01em',
              border: '0.5px solid rgba(196,106,74,0.20)',
            }}>{t}</span>
          ))}
          <span style={{
            padding: '3px 9px', borderRadius: 99,
            border: '0.5px dashed rgba(42,31,23,0.20)',
            color: '#9A8775', fontSize: 9.5, letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>+ Edit</span>
        </div>
      </div>

      {/* Folio gallery header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 18px 6px',
      }}>
        <div style={{
          fontSize: 8, letterSpacing: '0.32em', textTransform: 'uppercase',
          color: '#9A8775', fontWeight: 500,
        }}>Folio archive</div>
        <div style={{
          fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: '#A4502F', fontWeight: 500,
        }}>See all</div>
      </div>

      {/* Folio cover stack — horizontal scroller */}
      <div style={{
        display: 'flex', gap: 8, padding: '0 14px',
        overflow: 'hidden',
      }}>
        {FOLIOS.slice(0, 3).map((f, i) => (
          <FolioCover key={f.title} {...f} active={i === 0}/>
        ))}
      </div>

      {/* Footer settings hint */}
      <div style={{
        position: 'absolute', left: 14, right: 14, bottom: 14,
        padding: '8px 12px', borderRadius: 10,
        background: '#fff', border: '0.5px solid rgba(42,31,23,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        boxShadow: '0 6px 18px -10px rgba(42,31,23,0.18)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M22 6l-10 7L2 6" stroke="#5C4A3C" strokeWidth="1.6"/>
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="#5C4A3C" strokeWidth="1.6"/>
          </svg>
          <div>
            <div style={{ fontSize: 9, color: '#2A1F17', fontWeight: 500 }}>Connected accounts</div>
            <div style={{ fontSize: 7.5, color: '#9A8775', letterSpacing: '0.06em', marginTop: 1 }}>
              Gmail · Instagram · Apple Pay
            </div>
          </div>
        </div>
        <div style={{
          width: 6, height: 6, borderRadius: 99, background: '#7E8E72',
          boxShadow: '0 0 0 3px rgba(126,140,114,0.18)',
        }}/>
      </div>
    </div>
  );
}

function Stat({ n, lbl }) {
  return (
    <div style={{ textAlign: 'center', flex: 1 }}>
      <div style={{
        fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
        fontSize: 17, color: '#2A1F17', lineHeight: 1, letterSpacing: '-0.01em',
      }}>{n}</div>
      <div style={{
        fontSize: 7.5, letterSpacing: '0.28em', textTransform: 'uppercase',
        color: '#9A8775', fontWeight: 500, marginTop: 3,
      }}>{lbl}</div>
    </div>
  );
}
function Divider() {
  return <div style={{ width: 0.5, height: 22, background: 'rgba(42,31,23,0.10)' }}/>;
}

function FolioCover({ title, sub, date, img, state, tone, active }) {
  const toneMap = {
    terra:    { bg: '#A4502F', label: '#FBF7F0' },
    sage:     { bg: '#7E8E72', label: '#FBF7F0' },
    gold:     { bg: '#B8915A', label: '#FBF7F0' },
    inkSoft:  { bg: '#5C4A3C', label: '#FBF7F0' },
  };
  const t = toneMap[tone] || toneMap.terra;
  return (
    <div style={{
      flex: 1, minWidth: 0,
      display: 'flex', flexDirection: 'column', gap: 6,
    }}>
      <div style={{
        position: 'relative', width: '100%', height: 116,
        borderRadius: 4, overflow: 'hidden',
        background: '#fff', padding: 4,
        boxShadow: active
          ? '0 14px 28px -14px rgba(42,31,23,0.30), 0 0 0 1px rgba(196,106,74,0.45)'
          : '0 8px 18px -12px rgba(42,31,23,0.20), 0 0 0 0.5px rgba(42,31,23,0.06)',
      }}>
        <div style={{
          width: '100%', height: '100%', borderRadius: 2, position: 'relative',
          backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 35%, rgba(27,20,16,0.55) 100%)' }}/>
          <div style={{
            position: 'absolute', top: 4, left: 4,
            padding: '1.5px 5px', borderRadius: 99,
            background: t.bg, color: t.label,
            fontSize: 6.5, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600,
          }}>{state}</div>
          <div style={{
            position: 'absolute', bottom: 5, left: 5, right: 5,
            color: '#FBF7F0',
          }}>
            <div style={{
              fontSize: 6, letterSpacing: '0.32em', textTransform: 'uppercase',
              opacity: 0.85,
            }}>✶ Folio ✶</div>
            <div style={{
              fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
              fontSize: 11, lineHeight: 1.05, marginTop: 2,
            }}>{title}</div>
          </div>
        </div>
      </div>
      <div style={{ paddingLeft: 2 }}>
        <div style={{
          fontSize: 9, color: '#2A1F17', fontWeight: 500,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{sub}</div>
        <div style={{
          fontSize: 7.5, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: '#9A8775', fontWeight: 500, marginTop: 1,
        }}>{date}</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// The user-flow page
// ─────────────────────────────────────────────────────────────
function UserFlow() {
  const FRAMES = [
    { step: '00', label: 'Sign in',     caption: 'Apple, Google, or email — the door to her folio.',                  frame: <FrameSignIn/> },
    { step: '01', label: 'Instagram',   caption: 'Tala spots a Mallorca cove while scrolling reels.', frame: <FrameInstagram/> },
    { step: '02', label: 'Capture',     caption: 'Side button + volume up. Screenshot taken.',         frame: <FrameScreenshot/> },
    { step: '03', label: 'Share Sheet', caption: 'iOS surfaces Tala as a suggested destination.',     frame: <FrameShareSheet/> },
    { step: '04', label: 'Extension',   caption: 'A mini Tala panel reads the location. No app switch.', frame: <FrameExtension/> },
    { step: '05', label: 'Saved',       caption: 'It lands on her trip board, tagged & ready.',        frame: <FrameTalaApp/> },
    { step: '06', label: 'Itinerary',   caption: 'Seven screenshots become a ten-day folio, written in her taste.', frame: <FrameItinerary/> },
    { step: '07', label: 'Costs',       caption: '€18,130 across the five of them — under budget, ready to split.',  frame: <FrameCosts/> },
    { step: '08', label: 'Profile',     caption: 'Her taste, her folios — the inside cover of her travel life.',     frame: <FrameProfile/> },
  ];
  const VERBS = ['signs in', 'opens IG', 'takes screenshot', 'taps share', 'taps Tala', 'opens app', 'taps generate', 'opens costs', 'taps profile'];

  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: 0,
      padding: '0 60px',
    }}>
      {FRAMES.map((f, i) => (
        <React.Fragment key={f.step}>
          <MiniPhone step={f.step} label={f.label} caption={f.caption}>
            {f.frame}
          </MiniPhone>
          {i < FRAMES.length - 1 && <FlowArrow verb={VERBS[i]}/>}
        </React.Fragment>
      ))}
    </div>
  );
}

Object.assign(window, { UserFlow });
