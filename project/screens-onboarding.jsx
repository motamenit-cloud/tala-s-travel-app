// screens-onboarding.jsx — Tala onboarding (Brunello-Cucinelli inspired moody dark style)
// Dark cinematic frame, centered serif wordmark with a small crest above,
// italic Welcome headline placed over a hero photo, slim prompt pill at bottom.
// Step 0: welcome.  Step 1: upload screenshot.  Step 2: drop a link.

const TALA_DARK = {
  bg:        '#0F0B08',
  surface:   '#1A130D',
  surface2:  '#241A12',
  ink:       '#F4EADD',
  inkSoft:   '#C9B59E',
  inkMute:   '#8B7967',
  line:      'rgba(244,234,221,0.14)',
  lineSoft:  'rgba(244,234,221,0.07)',
  terra:     '#D88665',
  terraDeep: '#C46A4A',
};

function Onboarding({ step = 0, onAdvance, onSkip }) {
  if (step === 0) return <OnboardWelcome onAdvance={onAdvance} onSkip={onSkip}/>;
  if (step === 1) return <OnboardUpload  onAdvance={onAdvance} onSkip={onSkip}/>;
  return <OnboardLink onAdvance={onAdvance}/>;
}

// Tiny laurel crest used above the wordmark
function Crest({ size = 22, color = '#F4EADD', opacity = 0.85 }) {
  return (
    <svg width={size} height={size * 1.15} viewBox="0 0 24 28" fill="none" style={{ opacity }}>
      <path d="M12 2v24" stroke={color} strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M12 7c-3 0-5 2-5 5M12 7c3 0 5 2 5 5" stroke={color} strokeWidth="0.7" strokeLinecap="round" fill="none"/>
      <path d="M12 13c-3.5 0-6 2.2-6 5M12 13c3.5 0 6 2.2 6 5" stroke={color} strokeWidth="0.7" strokeLinecap="round" fill="none"/>
      <circle cx="12" cy="4" r="1.2" fill={color}/>
      <path d="M9 22c1 1 2 1.5 3 1.5s2-.5 3-1.5" stroke={color} strokeWidth="0.7" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

// ── Shared shell ──────────────────────────────────────────────
function Shell({ children }) {
  const c = TALA_DARK;
  return (
    <div style={{
      position: 'relative', height: '100%', width: '100%',
      background: c.bg, fontFamily: FONTS.sans, overflow: 'hidden',
      color: c.ink,
    }}>
      {children}
      {/* paper grain overlay (subtle) */}
      <div style={{
        position: 'absolute', inset: 0, backgroundImage: PAPER_GRAIN,
        opacity: 0.25, pointerEvents: 'none', mixBlendMode: 'overlay',
      }}/>
    </div>
  );
}

// Top chrome — small left/right glyphs framing the centered crest+wordmark
function TopChrome({ onSkip }) {
  const c = TALA_DARK;
  return (
    <>
      <IOSStatusBar dark/>
      {/* left rule + right skip */}
      <div style={{
        position: 'absolute', top: 60, left: 22, right: 22, zIndex: 6,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Hamburger */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, opacity: 0.6 }}>
          <div style={{ width: 18, height: 1, background: c.ink }}/>
          <div style={{ width: 18, height: 1, background: c.ink }}/>
          <div style={{ width: 18, height: 1, background: c.ink }}/>
        </div>
        {onSkip ? (
          <button onClick={onSkip} style={{
            background: 'transparent', border: 'none',
            fontFamily: FONTS.sans, fontSize: 10, letterSpacing: '0.32em',
            color: c.inkMute, fontWeight: 500, textTransform: 'uppercase',
            cursor: 'pointer', padding: 4,
          }}>Skip</button>
        ) : <div style={{ width: 18 }}/>}
      </div>

      {/* Centered crest + wordmark */}
      <div style={{
        position: 'absolute', top: 56, left: 0, right: 0, zIndex: 6,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
        pointerEvents: 'none',
      }}>
        <Crest size={20}/>
        <div style={{
          fontFamily: FONTS.serif, fontSize: 11, letterSpacing: '0.42em',
          color: c.ink, fontWeight: 400, textTransform: 'uppercase', opacity: 0.92,
        }}>TALA</div>
      </div>
    </>
  );
}

// Bottom prompt pill — + on left, hint text, ↑ button on right
function PromptPill({ placeholder = 'Tell Tala what you\'re dreaming of…', onSubmit }) {
  const c = TALA_DARK;
  const [val, setVal] = React.useState('');
  return (
    <div style={{
      position: 'absolute', left: 22, right: 22, bottom: 100, zIndex: 7,
    }}>
      <div style={{
        background: 'rgba(20,14,10,0.7)',
        backdropFilter: 'blur(20px) saturate(140%)',
        WebkitBackdropFilter: 'blur(20px) saturate(140%)',
        border: `0.5px solid ${c.line}`,
        borderRadius: 999, padding: 5,
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: 999,
          border: `0.5px solid ${c.line}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: c.ink, fontSize: 18, fontWeight: 300, flexShrink: 0,
        }}>+</div>
        <input
          value={val} onChange={(e) => setVal(e.target.value)}
          placeholder={placeholder}
          style={{
            flex: 1, background: 'transparent', border: 'none', outline: 'none',
            fontFamily: FONTS.sans, fontSize: 13.5, color: c.ink, padding: 0,
            minWidth: 0,
          }}
        />
        <button onClick={() => onSubmit && onSubmit(val)} style={{
          width: 36, height: 36, borderRadius: 999,
          background: c.ink, color: c.bg,
          border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', flexShrink: 0,
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 12V2M7 2l-4 4M7 2l4 4" stroke={c.bg} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

// Bottom-most navigation row (dots + advance arrow)
function OnboardNav({ step, onAdvance }) {
  const c = TALA_DARK;
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 32, zIndex: 7,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 32px',
    }}>
      <div style={{ display: 'flex', gap: 5 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: i === step ? 18 : 5, height: 5, borderRadius: 99,
            background: i === step ? c.terra : 'rgba(244,234,221,0.18)',
            transition: 'all 0.3s',
          }}/>
        ))}
      </div>
      <button onClick={onAdvance} style={{
        background: 'transparent', border: 'none', cursor: 'pointer',
        fontFamily: FONTS.sans, fontSize: 11, letterSpacing: '0.32em',
        color: c.ink, fontWeight: 500, textTransform: 'uppercase',
        display: 'flex', alignItems: 'center', gap: 8, padding: 4,
      }}>
        Continue
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// Step 0 — Welcome
// ──────────────────────────────────────────────────────────────
function OnboardWelcome({ onAdvance, onSkip }) {
  const c = TALA_DARK;
  return (
    <Shell>
      {/* Hero photo — fills upper 70% */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '100%',
        backgroundImage: `url(${PHOTOS.onboard1})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: FILM_GRAIN, mixBlendMode: 'overlay', opacity: 0.45 }}/>
        {/* darken edges */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(180deg,
            rgba(15,11,8,0.55) 0%,
            rgba(15,11,8,0.15) 22%,
            rgba(15,11,8,0.0)  45%,
            rgba(15,11,8,0.55) 72%,
            rgba(15,11,8,0.95) 100%)`,
        }}/>
      </div>

      <TopChrome onSkip={onSkip}/>

      {/* Centerpiece — Welcome + body, low in frame */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 220, zIndex: 5,
        textAlign: 'center', padding: '0 32px',
      }}>
        <div style={{
          fontFamily: FONTS.serif, fontSize: 56, fontStyle: 'italic',
          fontWeight: 400, color: c.ink, lineHeight: 1.0,
          letterSpacing: '-0.02em', marginBottom: 18,
          textShadow: '0 2px 24px rgba(0,0,0,0.5)',
        }}>Welcome</div>
        <div style={{
          fontSize: 12.5, color: c.inkSoft, fontWeight: 300,
          lineHeight: 1.55, maxWidth: 280, margin: '0 auto',
          textShadow: '0 1px 12px rgba(0,0,0,0.5)',
        }}>
          Immerse yourself in the world of Tala and let your taste shape a journey of its own.
        </div>
      </div>

      <PromptPill placeholder="I'm dreaming of a trip to…" onSubmit={() => onAdvance()}/>


      {/* footer caption */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 64, zIndex: 6,
        textAlign: 'center', fontSize: 9, letterSpacing: '0.32em',
        color: 'rgba(244,234,221,0.4)', textTransform: 'uppercase', fontWeight: 500,
      }}>
        ©2026 TALA · Curated travel, by invitation
      </div>

      <OnboardNav step={0} onAdvance={onAdvance}/>
    </Shell>
  );
}

// ──────────────────────────────────────────────────────────────
// Step 1 — Upload a screenshot (interactive)
// ──────────────────────────────────────────────────────────────
function OnboardUpload({ onAdvance, onSkip }) {
  const c = TALA_DARK;
  const [picked, setPicked] = React.useState(null);
  const [analyzing, setAnalyzing] = React.useState(false);
  const [tagged, setTagged] = React.useState(null);
  const fileRef = React.useRef(null);

  const samples = [
    { src: PHOTOS.cala,      tag: 'Cala Varques, Mallorca' },
    { src: PHOTOS.beachClub, tag: 'Beach club, Ibiza' },
    { src: PHOTOS.oldTown,   tag: 'Dalt Vila, Ibiza' },
  ];

  const ingest = (src, tag) => {
    setPicked(src); setAnalyzing(true); setTagged(null);
    setTimeout(() => { setAnalyzing(false); setTagged(tag || 'Cala d\'Hort, Ibiza'); }, 1500);
  };
  const onFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = (ev) => ingest(ev.target.result, null);
    r.readAsDataURL(f);
  };

  return (
    <Shell>
      {/* atmospheric backdrop — soft warm haze */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at 50% 30%, rgba(216,134,101,0.12) 0%, transparent 50%), ${c.bg}`,
      }}/>

      <TopChrome onSkip={onSkip}/>

      {/* Italic prompt — high in frame */}
      <div style={{
        position: 'absolute', top: 144, left: 0, right: 0, zIndex: 5,
        textAlign: 'center', padding: '0 32px',
      }}>
        <div style={{
          fontSize: 9, letterSpacing: '0.42em', textTransform: 'uppercase',
          color: c.terra, fontWeight: 500, marginBottom: 14,
        }}>Step One</div>
        <div style={{
          fontFamily: FONTS.serif, fontSize: 32, fontStyle: 'italic',
          fontWeight: 400, color: c.ink, lineHeight: 1.05,
          letterSpacing: '-0.01em',
        }}>Save what stops<br/>you scrolling.</div>
      </div>

      {/* Upload frame */}
      <div style={{ position: 'absolute', top: 290, left: 28, right: 28, zIndex: 5 }}>
        {!picked ? (
          <div onClick={() => fileRef.current?.click()} style={{
            position: 'relative', height: 240, borderRadius: 4,
            border: `0.5px solid ${c.line}`,
            background: 'rgba(36,26,18,0.4)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: 12, cursor: 'pointer', overflow: 'hidden',
          }}>
            {/* corner ornaments */}
            {[
              { top: 10, left: 10, br: '0' },
              { top: 10, right: 10, br: '0' },
              { bottom: 10, left: 10, br: '0' },
              { bottom: 10, right: 10, br: '0' },
            ].map((p, i) => (
              <div key={i} style={{
                position: 'absolute', width: 14, height: 14,
                borderTop: i < 2 ? `0.5px solid ${c.inkMute}` : 'none',
                borderBottom: i >= 2 ? `0.5px solid ${c.inkMute}` : 'none',
                borderLeft: i % 2 === 0 ? `0.5px solid ${c.inkMute}` : 'none',
                borderRight: i % 2 === 1 ? `0.5px solid ${c.inkMute}` : 'none',
                ...p,
              }}/>
            ))}
            <Crest size={26} opacity={0.55}/>
            <div style={{
              fontFamily: FONTS.serif, fontStyle: 'italic', fontSize: 19,
              color: c.ink, fontWeight: 400,
            }}>Choose a screenshot</div>
            <div style={{
              fontSize: 9.5, letterSpacing: '0.32em', textTransform: 'uppercase',
              color: c.inkMute, fontWeight: 500,
            }}>From your camera roll</div>
            <input ref={fileRef} type="file" accept="image/*" onChange={onFile} style={{ display: 'none' }}/>
          </div>
        ) : (
          <div style={{
            position: 'relative', height: 240, borderRadius: 4, overflow: 'hidden',
            border: `0.5px solid ${c.line}`,
          }}>
            <img src={picked} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: FILM_GRAIN, opacity: 0.35, mixBlendMode: 'overlay' }}/>

            {analyzing && (
              <div style={{
                position: 'absolute', left: 0, right: 0, height: 80,
                background: `linear-gradient(180deg, transparent, ${c.terra}55 50%, transparent)`,
                animation: 'scanY 1.5s ease-in-out infinite',
              }}/>
            )}

            <div style={{
              position: 'absolute', left: 12, right: 12, bottom: 12,
              background: 'rgba(15,11,8,0.78)',
              backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
              border: `0.5px solid ${c.line}`,
              borderRadius: 99, padding: '8px 12px',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              {analyzing ? (
                <>
                  <IcSparkle size={14} stroke={c.terra}/>
                  <span style={{ fontSize: 11.5, color: c.inkSoft, letterSpacing: '0.06em' }}>Reading the place…</span>
                </>
              ) : (
                <>
                  <div style={{
                    width: 18, height: 18, borderRadius: 99, background: c.terra,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}><IcCheck size={11} stroke="#0F0B08" sw={2.6}/></div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 8.5, letterSpacing: '0.28em', color: c.terra, textTransform: 'uppercase', fontWeight: 600 }}>Pinned</div>
                    <div style={{ fontSize: 12, color: c.ink, fontWeight: 500, marginTop: 1 }}>{tagged}</div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {!picked && (
          <>
            <div style={{
              fontSize: 9.5, letterSpacing: '0.42em', textTransform: 'uppercase',
              color: c.inkMute, fontWeight: 500, textAlign: 'center',
              margin: '20px 0 10px',
            }}>
              ── or try one of these ──
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {samples.map((s, i) => (
                <div key={i} onClick={() => ingest(s.src, s.tag)} style={{
                  flex: 1, height: 60, borderRadius: 2, overflow: 'hidden',
                  cursor: 'pointer', position: 'relative',
                  border: `0.5px solid ${c.lineSoft}`,
                }}>
                  <img src={s.src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt=""/>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: FILM_GRAIN, opacity: 0.3, mixBlendMode: 'overlay' }}/>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <OnboardNav step={1} onAdvance={onAdvance}/>

      <style>{`
        @keyframes scanY { 0% { top: -80px } 100% { top: 240px } }
      `}</style>
    </Shell>
  );
}

// ──────────────────────────────────────────────────────────────
// Step 2 — Drop a link (interactive)
// ──────────────────────────────────────────────────────────────
function OnboardLink({ onAdvance }) {
  const c = TALA_DARK;
  const [url, setUrl] = React.useState('');
  const [pasting, setPasting] = React.useState(false);
  const [card, setCard] = React.useState(null);

  const samples = [
    'condenasttraveler.com/cap-rocat-mallorca',
    'theinfatuation.com/ibiza/cala-bonita',
    'instagram.com/p/CxK4tXa-yA1',
  ];

  const ingest = (val) => {
    setPasting(true); setUrl(val);
    setTimeout(() => {
      setPasting(false);
      const looksHotel = /cap-rocat|hotel/i.test(val);
      const looksFood  = /infatuation|cala-bonita|restaurant/i.test(val);
      setCard({
        site: val.split('/')[0],
        title: looksHotel ? 'Cap Rocat · A coastal fortress turned design hotel'
             : looksFood  ? 'Cala Bonita · Ibiza\'s hidden cove restaurant'
             : 'A pinned moment from your feed',
        kind: looksHotel ? 'Hotel' : looksFood ? 'Restaurant' : 'Inspiration',
        place: looksHotel ? 'Cala Blava, Mallorca' : looksFood ? 'Santa Eulària, Ibiza' : 'Balearic Islands',
        thumb: looksHotel ? PHOTOS.villa : looksFood ? PHOTOS.paella : PHOTOS.poolside,
      });
    }, 1100);
  };

  return (
    <Shell>
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at 50% 25%, rgba(216,134,101,0.1) 0%, transparent 50%), ${c.bg}`,
      }}/>

      <TopChrome/>

      <div style={{
        position: 'absolute', top: 144, left: 0, right: 0, zIndex: 5,
        textAlign: 'center', padding: '0 32px',
      }}>
        <div style={{
          fontSize: 9, letterSpacing: '0.42em', textTransform: 'uppercase',
          color: c.terra, fontWeight: 500, marginBottom: 14,
        }}>Step Two</div>
        <div style={{
          fontFamily: FONTS.serif, fontSize: 32, fontStyle: 'italic',
          fontWeight: 400, color: c.ink, lineHeight: 1.05,
          letterSpacing: '-0.01em',
        }}>Drop in things<br/>you love.</div>
      </div>

      {/* Link entry */}
      <div style={{ position: 'absolute', top: 282, left: 28, right: 28, zIndex: 5 }}>
        <div style={{
          background: 'rgba(36,26,18,0.5)',
          border: `0.5px solid ${c.line}`,
          borderRadius: 999, padding: 5,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <div style={{
            width: 34, height: 34, borderRadius: 999,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <IcLink size={14} stroke={c.inkMute}/>
          </div>
          <input
            value={url} onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste a link…"
            style={{
              flex: 1, background: 'transparent', border: 'none', outline: 'none',
              fontFamily: FONTS.sans, fontSize: 13, color: c.ink, padding: 0, minWidth: 0,
            }}
          />
          <button onClick={() => url && ingest(url)} disabled={!url} style={{
            width: 34, height: 34, borderRadius: 999, border: 'none',
            background: url ? c.terra : 'rgba(244,234,221,0.1)',
            color: url ? c.bg : c.inkMute,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: url ? 'pointer' : 'default', flexShrink: 0,
            fontSize: 16, fontWeight: 500,
          }}>
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {!card && !pasting && (
          <>
            <div style={{
              fontSize: 9.5, letterSpacing: '0.42em', textTransform: 'uppercase',
              color: c.inkMute, fontWeight: 500, textAlign: 'center',
              margin: '20px 0 10px',
            }}>
              ── or try a sample ──
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {samples.map((s, i) => (
                <div key={i} onClick={() => ingest(s)} style={{
                  background: 'rgba(36,26,18,0.4)',
                  border: `0.5px solid ${c.lineSoft}`,
                  borderRadius: 2, padding: '10px 14px',
                  cursor: 'pointer',
                  fontSize: 12, color: c.inkSoft,
                  fontFamily: FONTS.mono, letterSpacing: '-0.01em',
                  display: 'flex', alignItems: 'center', gap: 10,
                }}>
                  <IcLink size={11} stroke={c.inkMute}/>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {pasting && (
          <div style={{
            marginTop: 14, padding: 14,
            background: 'rgba(36,26,18,0.5)',
            border: `0.5px solid ${c.line}`,
            borderRadius: 4,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <IcSparkle size={14} stroke={c.terra}/>
            <span style={{ fontSize: 11.5, color: c.inkSoft, letterSpacing: '0.06em' }}>Unfolding the link…</span>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
              {[0,1,2].map(i => (
                <div key={i} style={{
                  width: 4, height: 4, borderRadius: 99, background: c.terra,
                  animation: 'bounceDot 1s ease-in-out infinite',
                  animationDelay: `${i * 0.15}s`,
                }}/>
              ))}
            </div>
          </div>
        )}

        {card && (
          <div style={{
            marginTop: 14, borderRadius: 4, overflow: 'hidden',
            background: 'rgba(36,26,18,0.6)',
            border: `0.5px solid ${c.line}`,
            display: 'flex',
            animation: 'fadeIn 0.4s',
          }}>
            <div style={{ width: 84, height: 100, flexShrink: 0, position: 'relative' }}>
              <img src={card.thumb} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: FILM_GRAIN, opacity: 0.35, mixBlendMode: 'overlay' }}/>
            </div>
            <div style={{ flex: 1, padding: 12, minWidth: 0 }}>
              <div style={{ fontSize: 8.5, letterSpacing: '0.28em', textTransform: 'uppercase', color: c.terra, fontWeight: 600, marginBottom: 4 }}>
                {card.kind} · {card.site}
              </div>
              <div style={{
                fontFamily: FONTS.serif, fontSize: 14, fontStyle: 'italic',
                color: c.ink, lineHeight: 1.2, fontWeight: 400, marginBottom: 6,
              }}>{card.title}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10.5, color: c.inkMute }}>
                <IcMapPin size={10} stroke={c.inkMute}/>
                <span>{card.place}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <OnboardNav step={2} onAdvance={onAdvance}/>

      <style>{`
        @keyframes fadeIn   { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
        @keyframes bounceDot { 0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); } 40% { opacity: 1; transform: scale(1); } }
      `}</style>
    </Shell>
  );
}

window.Onboarding = Onboarding;
