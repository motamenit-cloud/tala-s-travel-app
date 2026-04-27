// screens-day-detail.jsx — drill into a single day

const blockIcon = (k) => {
  const map = { plane: IcPlane, bed: IcBed, fork: IcFork, coffee: IcCoffee, car: IcCar, sun: IcSun, tag: IcTag, mappin: IcMapPin };
  return map[k] || IcMapPin;
};

function DayDetail({ dayN = 1, dark, onBack }) {
  const c = T(dark);
  const day = ITINERARY.find(d => d.n === dayN) || ITINERARY[0];

  return (
    <div style={{
      position: 'relative', height: '100%', width: '100%',
      background: c.bg, fontFamily: FONTS.sans, overflowY: 'auto',
    }}>
      {/* Hero */}
      <div style={{
        position: 'relative', height: 300,
        backgroundImage: `url(${day.hero})`, backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: FILM_GRAIN, mixBlendMode: 'overlay', opacity: 0.45 }}/>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 35%, transparent 60%, rgba(0,0,0,0.55) 100%)',
        }}/>

        {/* Status + back */}
        <IOSStatusBar dark={true}/>
        <button onClick={onBack} style={{
          position: 'absolute', top: 60, left: 18, zIndex: 6,
          background: 'rgba(255,255,255,0.92)', border: 'none', borderRadius: 99,
          width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.15)', cursor: 'pointer',
        }}>
          <IcChevR size={16} stroke={c.ink} sw={2} style={{ transform: 'rotate(180deg)' }}/>
        </button>

        {/* Day banner */}
        <div style={{
          position: 'absolute', left: 24, right: 24, bottom: 22, color: '#FBF7F0',
        }}>
          <div style={{ fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', opacity: 0.85, marginBottom: 6 }}>
            Day {String(day.n).padStart(2, '0')} · {day.date}
          </div>
          <div style={{ fontFamily: FONTS.serif, fontSize: 32, fontStyle: 'italic', lineHeight: 1.05, fontWeight: 400 }}>
            {day.title}
          </div>
          <div style={{ display: 'flex', gap: 14, marginTop: 8, fontSize: 12, opacity: 0.85 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <IcMapPin size={12} stroke="#FBF7F0"/> {day.location}
            </span>
            <span>· {day.weather}</span>
          </div>
        </div>
      </div>

      {/* Blocks */}
      <div style={{ padding: '20px 22px 80px' }}>
        {day.blocks.map((b, i) => {
          const Ic = blockIcon(b.icon);
          return (
            <div key={i} style={{
              display: 'flex', gap: 16, marginBottom: 22, position: 'relative',
            }}>
              {/* Time rail */}
              <div style={{ flexShrink: 0, width: 64, paddingTop: 4, position: 'relative' }}>
                <div style={{
                  fontSize: 9, letterSpacing: '0.22em', color: c.inkMute,
                  textTransform: 'uppercase', fontWeight: 500, marginBottom: 6,
                }}>{b.time}</div>
                <div style={{
                  width: 36, height: 36, borderRadius: 99, background: c.bgWarm,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: `0.5px solid ${c.line}`,
                }}>
                  <Ic size={16} stroke={c.terra} sw={1.6}/>
                </div>
                {/* connector */}
                {i < day.blocks.length - 1 && (
                  <div style={{
                    position: 'absolute', top: 58, left: 18, bottom: -22,
                    width: 1, background: c.lineSoft,
                  }}/>
                )}
              </div>

              {/* Card */}
              <div style={{
                flex: 1, minWidth: 0,
                background: c.surface, borderRadius: 14, padding: 16,
                border: `0.5px solid ${c.lineSoft}`,
                boxShadow: '0 2px 8px -4px rgba(42,31,23,0.08)',
              }}>
                <div style={{
                  fontFamily: FONTS.serif, fontSize: 19, fontStyle: 'italic',
                  color: c.ink, lineHeight: 1.2, fontWeight: 400, marginBottom: 8,
                }}>{b.title}</div>
                <div style={{
                  fontSize: 13, lineHeight: 1.55, color: c.inkSoft, fontWeight: 300,
                }}>{b.body}</div>
                <div style={{
                  marginTop: 12, paddingTop: 10, borderTop: `0.5px solid ${c.lineSoft}`,
                  fontSize: 11, color: c.inkMute, letterSpacing: '0.04em',
                }}>{b.meta}</div>

                <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
                  {['Reserve', 'Map', 'Notes'].map((a, j) => (
                    <div key={j} style={{
                      padding: '6px 12px', borderRadius: 99,
                      background: j === 0 ? c.terra : 'transparent',
                      color: j === 0 ? '#FBF7F0' : c.inkSoft,
                      border: j === 0 ? 'none' : `0.5px solid ${c.line}`,
                      fontSize: 11, letterSpacing: '0.06em', fontWeight: 500,
                      cursor: 'pointer',
                    }}>{a}</div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* paper grain */}
      <div style={{
        position: 'absolute', inset: 0, backgroundImage: PAPER_GRAIN,
        opacity: 0.35, pointerEvents: 'none', mixBlendMode: 'multiply',
      }}/>
    </div>
  );
}

window.DayDetail = DayDetail;
