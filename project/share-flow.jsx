// share-flow.jsx — Instagram → iOS share sheet → Tala intake.
// One iPhone frame; the inner stage transitions through scenes:
//   1) instagram   — reel-style post, user is "in Instagram"
//   2) sheet       — iOS share sheet slides up
//   3) launch      — brief "Opening Tala" splash (app switcher feel)
//   4) tala        — Tala intake screen: "Planning a trip to Mallorca?"

const SHARE_PHOTO = 'https://images.unsplash.com/photo-1558642084-fd07fae5282e?auto=format&fit=crop&w=900&q=70';
// Mallorca cove — used as the post + later as the saved hero.

function ShareFlow() {
  const c = T(false); // always light for this prototype
  const SCENES = ['instagram', 'sheet', 'launch', 'tala'];
  const [scene, setScene] = React.useState('instagram');
  const [auto, setAuto] = React.useState(true);
  const [highlight, setHighlight] = React.useState(false); // pulsing share btn / tala app icon
  const timers = React.useRef([]);

  const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = []; };

  // Drive the scripted flow when auto is on
  React.useEffect(() => {
    if (!auto) return;
    clearTimers();

    const T = (ms, fn) => timers.current.push(setTimeout(fn, ms));

    // Reset
    setScene('instagram');
    setHighlight(false);

    T( 1400, () => setHighlight(true));            // pulse share button
    T( 2400, () => { setHighlight(false); setScene('sheet'); });
    T( 4200, () => setHighlight(true));            // pulse Tala in sheet
    T( 5400, () => { setHighlight(false); setScene('launch'); });
    T( 6500, () => setScene('tala'));

    return clearTimers;
  }, [auto]);

  const replay = () => { setAuto(false); setTimeout(() => setAuto(true), 30); };
  const jumpTo = (s) => { setAuto(false); setScene(s); };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
      <IOSDevice dark={false} width={402} height={874}>
        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#000' }}>
          {/* Instagram is always present (acts as the "below" layer when sheet is up) */}
          <InstagramView highlight={scene === 'instagram' && highlight}/>

          {/* Share sheet — slides in/out */}
          <ShareSheet visible={scene === 'sheet'} highlightTala={scene === 'sheet' && highlight}/>

          {/* Launch splash — brief overlay */}
          {scene === 'launch' && <LaunchSplash/>}

          {/* Tala intake screen — fades in */}
          {scene === 'tala' && <TalaIntake c={c}/>}
        </div>
      </IOSDevice>

      {/* Stage chrome — scene chips + replay */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        fontFamily: 'Outfit, sans-serif', fontSize: 11, letterSpacing: '0.18em',
        textTransform: 'uppercase', color: 'rgba(244,234,221,0.55)',
      }}>
        {SCENES.map((s, i) => {
          const labels = { instagram: '01 · Instagram', sheet: '02 · Share', launch: '03 · Opening', tala: '04 · Tala' };
          const active = scene === s;
          return (
            <button key={s} onClick={() => jumpTo(s)} style={{
              background: active ? 'rgba(196,106,74,0.92)' : 'rgba(244,234,221,0.06)',
              color: active ? '#FBF7F0' : 'rgba(244,234,221,0.55)',
              border: `0.5px solid ${active ? 'transparent' : 'rgba(244,234,221,0.1)'}`,
              padding: '7px 12px', borderRadius: 99, cursor: 'pointer', fontSize: 10.5,
              letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'inherit', fontWeight: 500,
            }}>{labels[s]}</button>
          );
        })}
        <button onClick={replay} style={{
          marginLeft: 12, background: 'transparent',
          color: 'rgba(244,234,221,0.7)', border: '0.5px solid rgba(244,234,221,0.25)',
          padding: '7px 14px', borderRadius: 99, cursor: 'pointer', fontSize: 10.5,
          letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'inherit', fontWeight: 500,
        }}>↻ Replay</button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Scene 1: Instagram view
// ─────────────────────────────────────────────────────────────
function InstagramView({ highlight }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, background: '#000', color: '#fff',
      fontFamily: '-apple-system, "SF Pro", system-ui, sans-serif',
    }}>
      {/* Status bar (white text on black) */}
      <IOSStatusBar dark/>

      {/* Top app bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '4px 18px 10px', position: 'relative', zIndex: 5,
      }}>
        <div style={{ fontFamily: '"Billabong", "Snell Roundhand", cursive', fontSize: 30, fontWeight: 400, fontStyle: 'italic', letterSpacing: '0.5px' }}>
          Instagram
        </div>
        <div style={{ display: 'flex', gap: 18 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" stroke="#fff" strokeWidth="1.7"/>
          </svg>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M21 12c0 5-4 9-9 9-1.5 0-3-.4-4.2-1L3 21l1.1-4.7C3.4 15 3 13.5 3 12c0-5 4-9 9-9s9 4 9 9z" stroke="#fff" strokeWidth="1.7"/>
          </svg>
        </div>
      </div>

      {/* Post header */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '6px 14px', gap: 10 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 99,
          background: 'conic-gradient(from 180deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888, #f09433)',
          padding: 2,
        }}>
          <div style={{
            width: '100%', height: '100%', borderRadius: 99, background: '#000',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundImage: `url(${SHARE_PHOTO})`, backgroundSize: 'cover', backgroundPosition: 'center',
            border: '1.5px solid #000',
          }}/>
        </div>
        <div style={{ flex: 1, lineHeight: 1.2 }}>
          <div style={{ fontSize: 13, fontWeight: 600 }}>cap.demallorca</div>
          <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.65)' }}>Cala Varques · Mallorca</div>
        </div>
        <svg width="20" height="6" viewBox="0 0 22 6">
          <circle cx="3" cy="3" r="2" fill="#fff"/><circle cx="11" cy="3" r="2" fill="#fff"/><circle cx="19" cy="3" r="2" fill="#fff"/>
        </svg>
      </div>

      {/* The post image */}
      <div style={{
        position: 'relative', width: '100%', aspectRatio: '4 / 5',
        backgroundImage: `url(${SHARE_PHOTO})`, backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        {/* gentle vignette */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 70%, rgba(0,0,0,0.35) 100%)' }}/>
      </div>

      {/* Action row */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '11px 14px 6px', gap: 16 }}>
        {/* heart */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" stroke="#fff" strokeWidth="1.7"/>
        </svg>
        {/* comment */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 12c0 5-4 9-9 9-1.5 0-3-.4-4.2-1L3 21l1.1-4.7C3.4 15 3 13.5 3 12c0-5 4-9 9-9s9 4 9 9z" stroke="#fff" strokeWidth="1.7"/>
        </svg>
        {/* SHARE — the focal button. Pulses when highlight is true. */}
        <div style={{ position: 'relative', width: 24, height: 24 }}>
          {highlight && (
            <div style={{
              position: 'absolute', inset: -10, borderRadius: 99,
              border: '2px solid rgba(255,255,255,0.85)',
              animation: 'igPulse 1.1s ease-out infinite',
            }}/>
          )}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 11l18-8-7 18-2-7-9-3z" stroke="#fff" strokeWidth="1.7" strokeLinejoin="round"/>
          </svg>
        </div>
        <div style={{ flex: 1 }}/>
        {/* save */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M6 4h12v17l-6-4-6 4V4z" stroke="#fff" strokeWidth="1.7" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Caption */}
      <div style={{ padding: '4px 14px 10px', fontSize: 12.5, lineHeight: 1.5 }}>
        <span style={{ fontWeight: 600 }}>cap.demallorca</span>
        <span style={{ opacity: 0.92 }}> &nbsp;Cala Varques at golden hour, possibly the most beautiful cove on the island. Pin this for your summer trip 🌅</span>
        <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.55)', marginTop: 6, letterSpacing: '0.04em', textTransform: 'uppercase' }}>2 hours ago</div>
      </div>

      {/* Bottom tab bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 64,
        borderTop: '0.5px solid rgba(255,255,255,0.18)',
        background: 'rgba(0,0,0,0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-around',
        padding: '0 18px 18px',
      }}>
        {[
          <path d="M3 11.5L12 4l9 7.5V21h-6v-6h-6v6H3v-9.5z" stroke="#fff" strokeWidth="1.7" fill="none" strokeLinejoin="round"/>,
          <circle cx="11" cy="11" r="7" stroke="#fff" strokeWidth="1.7" fill="none"/>,
          <rect x="4" y="4" width="16" height="16" rx="3" stroke="#fff" strokeWidth="1.7" fill="none"/>,
          <path d="M3 6h18M3 12h18M3 18h18" stroke="#fff" strokeWidth="1.7"/>,
          <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="1.7" fill="none"/>,
        ].map((p, i) => (
          <svg key={i} width="24" height="24" viewBox="0 0 24 24">{p}</svg>
        ))}
      </div>

      <style>{`
        @keyframes igPulse {
          0%   { transform: scale(0.85); opacity: 0.95; }
          100% { transform: scale(1.7);  opacity: 0;    }
        }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Scene 2: iOS share sheet
// ─────────────────────────────────────────────────────────────
function ShareSheet({ visible, highlightTala }) {
  return (
    <>
      {/* dimmer */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.4)',
        opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 380ms ease-out', zIndex: 30,
      }}/>
      {/* sheet */}
      <div style={{
        position: 'absolute', left: 8, right: 8, bottom: 8,
        borderRadius: 28, overflow: 'hidden', zIndex: 31,
        transform: visible ? 'translateY(0)' : 'translateY(110%)',
        transition: 'transform 460ms cubic-bezier(0.32, 0.72, 0.2, 1)',
        background: 'rgba(245,245,247,0.96)',
        backdropFilter: 'blur(40px) saturate(180%)',
        WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        boxShadow: '0 -10px 40px rgba(0,0,0,0.3)',
        fontFamily: '-apple-system, "SF Pro", system-ui, sans-serif',
      }}>
        {/* drag handle */}
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 8, paddingBottom: 4 }}>
          <div style={{ width: 36, height: 5, borderRadius: 3, background: 'rgba(60,60,67,0.3)' }}/>
        </div>

        {/* item preview row */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '12px 16px 14px', borderBottom: '0.5px solid rgba(60,60,67,0.18)',
        }}>
          <div style={{
            width: 50, height: 64, borderRadius: 8,
            backgroundImage: `url(${SHARE_PHOTO})`, backgroundSize: 'cover', backgroundPosition: 'center',
            flexShrink: 0,
          }}/>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#000' }}>cap.demallorca</div>
            <div style={{ fontSize: 12, color: 'rgba(60,60,67,0.6)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              instagram.com/p/Cv8aR-Mallorca
            </div>
          </div>
          <button style={{
            background: 'rgba(60,60,67,0.08)', border: 'none', borderRadius: 99,
            padding: '5px 11px', fontSize: 12, fontWeight: 500, color: '#000', cursor: 'pointer',
          }}>Options ›</button>
        </div>

        {/* People row */}
        <div style={{ padding: '12px 16px 6px', display: 'flex', gap: 12, overflow: 'hidden' }}>
          {[
            { name: 'Maya',   color: '#E8B7A1' },
            { name: 'Rosa',   color: '#A8B59B' },
            { name: 'Iz',     color: '#C46A4A' },
            { name: 'Group',  color: '#5C4A3C' },
          ].map((p) => (
            <div key={p.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, minWidth: 64 }}>
              <div style={{
                width: 56, height: 56, borderRadius: 99, background: p.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontFamily: '"Cormorant Garamond", serif', fontSize: 22, fontStyle: 'italic',
              }}>{p.name.charAt(0)}</div>
              <div style={{ fontSize: 11, color: '#000', fontWeight: 500 }}>{p.name}</div>
              <div style={{ fontSize: 9, color: 'rgba(60,60,67,0.6)' }}>Messages</div>
            </div>
          ))}
        </div>

        {/* App row — horizontal scroller of icons */}
        <div style={{
          padding: '14px 16px 12px',
          display: 'flex', gap: 18, alignItems: 'flex-start',
          borderTop: '0.5px solid rgba(60,60,67,0.12)',
          marginTop: 6,
        }}>
          <ShareApp icon={<MessagesIcon/>}     label="Messages"/>
          <ShareApp icon={<MailIcon/>}         label="Mail"/>
          <ShareApp icon={<NotesIcon/>}        label="Notes"/>
          <ShareApp icon={<TalaIcon/>}         label="Tala" pulsing={highlightTala}/>
          <ShareApp icon={<WhatsAppIcon/>}     label="WhatsApp"/>
        </div>

        {/* Action list */}
        <div style={{
          margin: '8px 14px 12px', borderRadius: 14, overflow: 'hidden',
          background: 'rgba(255,255,255,0.7)',
        }}>
          <ShareAction icon="copy" label="Copy"/>
          <ShareAction icon="save" label="Save Image"/>
          <ShareAction icon="ai"   label="Add to Tala" accent pulsing={highlightTala}/>
          <ShareAction icon="more" label="More…" last/>
        </div>

        {/* Cancel */}
        <div style={{ padding: '0 14px 22px' }}>
          <div style={{
            background: '#fff', borderRadius: 14, padding: '14px 0',
            textAlign: 'center', fontSize: 17, fontWeight: 600, color: '#007AFF',
            boxShadow: '0 1px 0 rgba(0,0,0,0.04)',
          }}>Cancel</div>
        </div>
      </div>
    </>
  );
}

function ShareApp({ icon, label, pulsing }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, minWidth: 60, position: 'relative' }}>
      <div style={{ position: 'relative' }}>
        {pulsing && (
          <div style={{
            position: 'absolute', inset: -8, borderRadius: 18,
            border: '2.5px solid rgba(196,106,74,0.85)',
            animation: 'sharePulse 1.1s ease-out infinite',
          }}/>
        )}
        <div style={{
          width: 56, height: 56, borderRadius: 14, overflow: 'hidden',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
        }}>{icon}</div>
      </div>
      <div style={{ fontSize: 11, color: '#000', textAlign: 'center', maxWidth: 64, lineHeight: 1.2 }}>{label}</div>
      <style>{`
        @keyframes sharePulse {
          0%   { transform: scale(0.92); opacity: 0.9; }
          100% { transform: scale(1.4);  opacity: 0;   }
        }
      `}</style>
    </div>
  );
}

function ShareAction({ icon, label, last, accent, pulsing }) {
  const icons = {
    copy: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="8" y="3" width="13" height="13" rx="2.5" stroke="#000" strokeWidth="1.7"/><rect x="3" y="8" width="13" height="13" rx="2.5" stroke="#000" strokeWidth="1.7" fill="#fff"/></svg>,
    save: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3v13m0 0l-5-5m5 5l5-5M4 21h16" stroke="#000" strokeWidth="1.7" strokeLinecap="round"/></svg>,
    ai:   <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4zM18 16l.7 1.8 1.8.7-1.8.7L18 21l-.7-1.8-1.8-.7 1.8-.7L18 16z" fill="#C46A4A"/></svg>,
    more: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="12" r="2" fill="#000"/><circle cx="12" cy="12" r="2" fill="#000"/><circle cx="18" cy="12" r="2" fill="#000"/></svg>,
  };
  return (
    <div style={{
      display: 'flex', alignItems: 'center', padding: '13px 14px',
      borderBottom: last ? 'none' : '0.5px solid rgba(60,60,67,0.12)',
      position: 'relative',
    }}>
      <div style={{ flex: 1, fontSize: 17, color: accent ? '#A4502F' : '#000', fontWeight: accent ? 600 : 400 }}>
        {label}
        {accent && (
          <span style={{
            marginLeft: 8, padding: '2px 7px', borderRadius: 99,
            background: 'rgba(196,106,74,0.14)', color: '#A4502F',
            fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600,
          }}>Suggested</span>
        )}
      </div>
      <div style={{ position: 'relative' }}>
        {pulsing && (
          <div style={{
            position: 'absolute', inset: -8, borderRadius: 8,
            border: '2px solid rgba(196,106,74,0.7)',
            animation: 'sharePulse 1.1s ease-out infinite',
          }}/>
        )}
        {icons[icon]}
      </div>
    </div>
  );
}

// Tala icon — espresso square with serif "t"
function TalaIcon() {
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
        color: '#F4EADD', fontSize: 36, fontStyle: 'italic', fontWeight: 400,
        letterSpacing: '0.02em', position: 'relative', lineHeight: 1,
        textShadow: '0 1px 1px rgba(0,0,0,0.25)',
      }}>t</div>
    </div>
  );
}

// Generic system-app icons
function MessagesIcon() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(180deg, #5BD75B 0%, #2EC92E 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M5 12c0-4 4-7 11-7s11 3 11 7-4 7-11 7c-1.6 0-3-.2-4.2-.5L7 21l1-4.5C6 15 5 13.5 5 12z" fill="#fff"/>
      </svg>
    </div>
  );
}
function MailIcon() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(180deg, #4DAEFF 0%, #0A84FF 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <rect x="4" y="7" width="22" height="16" rx="2" fill="#fff"/>
        <path d="M4 9l11 7 11-7" stroke="#0A84FF" strokeWidth="1.6" fill="none"/>
      </svg>
    </div>
  );
}
function NotesIcon() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <div style={{ width: '100%', height: 14, background: '#FED143' }}/>
      <div style={{ flex: 1, width: '100%', padding: '4px 6px', fontFamily: 'system-ui', fontSize: 5, color: '#aaa' }}>
        <div style={{ borderBottom: '0.5px solid #ddd', height: 4, marginBottom: 3 }}/>
        <div style={{ borderBottom: '0.5px solid #ddd', height: 4, marginBottom: 3 }}/>
        <div style={{ borderBottom: '0.5px solid #ddd', height: 4 }}/>
      </div>
    </div>
  );
}
function WhatsAppIcon() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 5c-6 0-11 5-11 11 0 2 .5 3.8 1.5 5.5L5 27l5.7-1.5c1.6.9 3.4 1.4 5.3 1.4 6 0 11-5 11-11S22 5 16 5z" fill="#fff"/>
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Scene 3: brief launch splash (the "app opening" moment)
// ─────────────────────────────────────────────────────────────
function LaunchSplash() {
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 50,
      background: 'linear-gradient(155deg, #3a2a1d 0%, #2A1F17 70%, #1B1410 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      animation: 'launchIn 460ms cubic-bezier(0.22, 1, 0.36, 1)',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 40%, rgba(196,106,74,0.35) 0%, transparent 55%)',
      }}/>
      <div style={{
        fontFamily: '"Cormorant Garamond", Georgia, serif', color: '#F4EADD',
        fontSize: 62, fontStyle: 'italic', fontWeight: 400, letterSpacing: '0.32em',
        textShadow: '0 2px 18px rgba(0,0,0,0.5)', position: 'relative',
        animation: 'launchTitle 700ms ease-out',
      }}>tala</div>
      <style>{`
        @keyframes launchIn  { from { transform: scale(1.04); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes launchTitle { 0% { letter-spacing: 0.5em; opacity: 0; } 100% { letter-spacing: 0.32em; opacity: 1; } }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Scene 4: Tala intake — "Planning a trip to Mallorca?"
// ─────────────────────────────────────────────────────────────
function TalaIntake({ c }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, background: c.bg, color: c.ink,
      animation: 'talaFade 520ms ease-out',
      fontFamily: FONTS.sans, overflow: 'hidden',
    }}>
      <IOSStatusBar dark={false}/>

      {/* tiny app brand */}
      <div style={{
        position: 'absolute', top: 56, left: 0, right: 0,
        textAlign: 'center', fontFamily: FONTS.serif,
        fontSize: 17, fontStyle: 'italic', color: c.terra,
        letterSpacing: '0.32em', fontWeight: 400, zIndex: 5,
      }}>tala</div>

      {/* Hero photo with paper-frame look */}
      <div style={{ padding: '88px 22px 0' }}>
        <div style={{
          position: 'relative',
          background: c.surface,
          padding: 10,
          borderRadius: 4,
          boxShadow: '0 18px 40px -18px rgba(42,31,23,0.28), 0 1px 0 rgba(42,31,23,0.04)',
        }}>
          <div style={{
            width: '100%', height: 240, borderRadius: 2,
            backgroundImage: `url(${SHARE_PHOTO})`, backgroundSize: 'cover', backgroundPosition: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: FILM_GRAIN, mixBlendMode: 'overlay', opacity: 0.5 }}/>
            {/* "saved from Instagram" badge */}
            <div style={{
              position: 'absolute', top: 10, left: 10,
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '5px 10px', borderRadius: 99,
              background: 'rgba(0,0,0,0.45)',
              backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
              fontSize: 10, color: '#fff', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500,
            }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="#fff" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#fff"/>
              </svg>
              Saved from Instagram
            </div>
            {/* corner detected pin */}
            <div style={{
              position: 'absolute', bottom: 10, left: 10, right: 10,
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '7px 10px', borderRadius: 99,
              background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(8px)',
              fontSize: 11.5, color: c.ink, fontWeight: 500,
            }}>
              <span style={{
                display: 'inline-flex', width: 16, height: 16, borderRadius: 99,
                background: c.terra, color: '#fff', alignItems: 'center', justifyContent: 'center',
                fontSize: 10, fontWeight: 600,
              }}>✓</span>
              <span style={{ flex: 1 }}>Cala Varques · Mallorca</span>
              <span style={{ fontSize: 10, color: c.inkMute, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Detected</span>
            </div>
          </div>
        </div>
      </div>

      {/* The greeting — the magic moment */}
      <div style={{ padding: '20px 30px 0', textAlign: 'left' }}>
        <div style={{
          fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase',
          color: c.terra, fontWeight: 500, marginBottom: 10,
          animation: 'talaSlide 600ms ease-out 80ms both',
        }}>One screenshot in</div>

        <div style={{
          fontFamily: FONTS.serif, fontSize: 32, lineHeight: 1.1,
          color: c.ink, fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.01em',
          animation: 'talaSlide 600ms ease-out 180ms both',
        }}>
          Planning a trip to<br/>
          <span style={{ color: c.terraDeep }}>Mallorca?</span>
        </div>

        <div style={{
          fontSize: 13, lineHeight: 1.55, color: c.inkSoft, fontWeight: 300,
          marginTop: 12, maxWidth: 320,
          animation: 'talaSlide 600ms ease-out 280ms both',
        }}>
          We pulled the location from your screenshot. Add it to a board and we'll start curating an itinerary in your taste.
        </div>
      </div>

      {/* Choice card */}
      <div style={{
        position: 'absolute', left: 22, right: 22, bottom: 30,
        animation: 'talaSlide 600ms ease-out 380ms both',
      }}>
        {/* Suggest existing trip */}
        <div style={{
          background: c.surface, borderRadius: 18, padding: '14px 16px',
          display: 'flex', alignItems: 'center', gap: 12,
          border: `0.5px solid ${c.line}`, marginBottom: 10,
          boxShadow: '0 6px 20px -12px rgba(42,31,23,0.18)',
        }}>
          <div style={{
            width: 46, height: 46, borderRadius: 8,
            backgroundImage: `url(https://images.unsplash.com/photo-1591290619762-c4e2776b53b1?auto=format&fit=crop&w=300&q=70)`,
            backgroundSize: 'cover', backgroundPosition: 'center', flexShrink: 0,
          }}/>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: c.inkMute, fontWeight: 500, marginBottom: 2 }}>
              Add to existing
            </div>
            <div style={{ fontFamily: FONTS.serif, fontSize: 18, fontStyle: 'italic', color: c.ink, lineHeight: 1.1 }}>
              Balearics with the Girls
            </div>
            <div style={{ fontSize: 11, color: c.inkSoft, marginTop: 2 }}>Mallorca · Ibiza · Jun 12 — 22</div>
          </div>
          <svg width="8" height="14" viewBox="0 0 8 14"><path d="M1 1l6 6-6 6" stroke={c.inkMute} strokeWidth="1.6" fill="none" strokeLinecap="round"/></svg>
        </div>

        {/* New trip CTA */}
        <button style={{
          width: '100%', padding: '15px 18px', borderRadius: 99,
          background: c.terra, color: '#FBF7F0', border: 'none',
          fontFamily: FONTS.sans, fontSize: 14, letterSpacing: '0.28em',
          textTransform: 'uppercase', fontWeight: 500, cursor: 'pointer',
          boxShadow: '0 8px 22px -10px rgba(196,106,74,0.55)',
        }}>Start a new trip · Mallorca</button>

        <div style={{
          marginTop: 10, textAlign: 'center', fontSize: 11.5,
          color: c.inkMute, fontStyle: 'italic', fontFamily: FONTS.serif,
        }}>
          or pick another board
        </div>
      </div>

      <style>{`
        @keyframes talaFade  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes talaSlide { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}

Object.assign(window, { ShareFlow });
