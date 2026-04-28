// screens-home.jsx — Home / My Trips gallery

function HomeScreen({ dark, onOpenTrip, onNewTrip }) {
  const c = T(dark);

  return (
    <div style={{ background: c.bg, minHeight: '100%', fontFamily: FONTS.sans, paddingBottom: 90 }}>
      {/* Header */}
      <div style={{ padding: '64px 24px 14px' }}>
        <div style={{
          fontFamily: FONTS.sans, fontSize: 11, letterSpacing: '0.32em',
          color: c.terra, fontWeight: 500, marginBottom: 10,
        }}>WELCOME BACK, MAYA</div>
        <div style={{
          fontFamily: FONTS.serif, fontSize: 40, lineHeight: 1, fontStyle: 'italic',
          color: c.ink, fontWeight: 400, letterSpacing: '-0.01em',
        }}>Where to next?</div>
      </div>

      {/* Trip count + filter */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 18px',
      }}>
        <div style={{ fontSize: 13, color: c.inkMute, letterSpacing: '0.04em' }}>
          4 trips · 1 in motion
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: c.inkSoft }}>
          <IcSearch size={18} stroke={c.inkSoft}/>
          <div style={{ width: 1, height: 14, background: c.line }}/>
          <IcGrid size={18} stroke={c.inkSoft}/>
        </div>
      </div>

      {/* Featured card — current trip */}
      <div style={{ padding: '0 18px' }}>
        <div onClick={onOpenTrip} style={{
          position: 'relative', borderRadius: 22, overflow: 'hidden',
          height: 380, cursor: 'pointer',
          boxShadow: '0 12px 30px rgba(42,31,23,0.18)',
        }}>
          <img src={PHOTOS.f1Miami} style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover',
          }} alt=""/>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: FILM_GRAIN, opacity: 0.4, mixBlendMode: 'overlay' }}/>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.55) 100%)',
          }}/>

          {/* Top tag */}
          <div style={{
            position: 'absolute', top: 16, left: 16,
            background: 'rgba(251,247,240,0.92)', backdropFilter: 'blur(10px)',
            padding: '6px 12px', borderRadius: 999,
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: c.terra, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 99, background: c.terra }}/>
            In motion
          </div>

          {/* Bottom content */}
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 22, color: '#FBF7F0' }}>
            <div style={{ fontSize: 11, letterSpacing: '0.28em', opacity: 0.9, textTransform: 'uppercase', marginBottom: 8 }}>
              Miami
            </div>
            <div style={{
              fontFamily: FONTS.serif, fontSize: 32, lineHeight: 1.05,
              fontStyle: 'italic', fontWeight: 400, marginBottom: 12, letterSpacing: '-0.01em',
            }}>
              Miami F1 Grand Prix Weekend
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 14, fontSize: 12,
              opacity: 0.92, fontWeight: 300, letterSpacing: '0.04em',
            }}>
              <span>May 2 — 5, 2026</span>
              <span style={{ width: 3, height: 3, borderRadius: 99, background: 'rgba(255,255,255,0.6)' }}/>
              <span>5 friends</span>
              <span style={{ width: 3, height: 3, borderRadius: 99, background: 'rgba(255,255,255,0.6)' }}/>
              <span>24 pinned</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section header */}
      <div style={{ padding: '34px 24px 14px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <div style={{
          fontFamily: FONTS.serif, fontSize: 22, fontStyle: 'italic',
          color: c.ink, fontWeight: 400,
        }}>The shelf</div>
        <div style={{ fontSize: 11, letterSpacing: '0.18em', color: c.inkMute, textTransform: 'uppercase' }}>
          Past · Dreaming
        </div>
      </div>

      {/* Smaller trip cards — 2 columns */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, padding: '0 18px' }}>
        {TRIPS.slice(1).map(t => (
          <div key={t.id} style={{
            borderRadius: 16, overflow: 'hidden', position: 'relative',
            background: c.surface,
            boxShadow: '0 4px 14px rgba(42,31,23,0.06)',
          }}>
            <div style={{ position: 'relative', height: 140 }}>
              <img src={t.cover} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: FILM_GRAIN, opacity: 0.3, mixBlendMode: 'overlay' }}/>
              {t.status === 'past' && (
                <div style={{
                  position: 'absolute', top: 8, right: 8,
                  background: 'rgba(42,31,23,0.7)', color: '#fff',
                  fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase',
                  padding: '3px 8px', borderRadius: 99, fontWeight: 500,
                }}>Past</div>
              )}
            </div>
            <div style={{ padding: 12 }}>
              <div style={{ fontSize: 10, letterSpacing: '0.18em', color: c.terra, textTransform: 'uppercase', marginBottom: 4, fontWeight: 500 }}>
                {t.destination}
              </div>
              <div style={{
                fontFamily: FONTS.serif, fontSize: 17, lineHeight: 1.15,
                color: c.ink, fontStyle: 'italic', fontWeight: 400,
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>
                {t.title}
              </div>
              <div style={{ fontSize: 11, color: c.inkMute, marginTop: 4 }}>
                {t.dates.split(',')[0]}
              </div>
            </div>
          </div>
        ))}

        {/* Plus card */}
        <div onClick={onNewTrip} style={{
          borderRadius: 16, height: 184,
          border: `1.5px dashed ${c.line}`,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: 8, cursor: 'pointer', color: c.inkSoft, gridColumn: 'span 2',
        }}>
          <IcPlus size={24} stroke={c.inkSoft} sw={1.4}/>
          <div style={{
            fontFamily: FONTS.serif, fontSize: 17, fontStyle: 'italic',
            color: c.inkSoft, fontWeight: 400,
          }}>Begin a new trip</div>
          <div style={{ fontSize: 11, letterSpacing: '0.18em', color: c.inkMute, textTransform: 'uppercase' }}>
            Start a mood board
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <BottomNav active="home" dark={dark}/>
    </div>
  );
}

function BottomNav({ active = 'home', dark }) {
  const c = T(dark);
  const items = [
    { id: 'home',     ico: IcHome,     lbl: 'Trips' },
    { id: 'discover', ico: IcCompass,  lbl: 'Discover' },
    { id: 'saves',    ico: IcBookmark, lbl: 'Saves' },
    { id: 'me',       ico: IcUser,     lbl: 'Me' },
  ];
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0,
      paddingBottom: 28, paddingTop: 10, paddingLeft: 12, paddingRight: 12,
      background: dark ? 'rgba(27,20,16,0.78)' : 'rgba(247,242,234,0.84)',
      backdropFilter: 'blur(20px)',
      borderTop: `0.5px solid ${c.line}`,
      display: 'flex', justifyContent: 'space-around', zIndex: 30,
    }}>
      {items.map(it => {
        const on = it.id === active;
        const Ic = it.ico;
        return (
          <div key={it.id} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            color: on ? c.terra : c.inkMute, padding: '4px 14px',
          }}>
            <Ic size={22} stroke={on ? c.terra : c.inkMute} sw={1.6}/>
            <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.04em' }}>{it.lbl}</div>
          </div>
        );
      })}
    </div>
  );
}

Object.assign(window, { HomeScreen, BottomNav });
