// screens-itinerary.jsx — the magic moment: itinerary view with day list, costs, packing

function ItineraryScreen({ dark, onBack, onOpenDay, onShare }) {
  const c = T(dark);
  const [tab, setTab] = React.useState('days'); // days | costs | packing
  const total = COSTS.reduce((s, c) => s + c.amt, 0);

  return (
    <div style={{ background: c.bg, minHeight: '100%', fontFamily: FONTS.sans, paddingBottom: 40 }}>
      {/* Folio cover */}
      <div style={{ position: 'relative', height: 380 }}>
        <img src={PHOTOS.mallorcaHero} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: FILM_GRAIN, opacity: 0.4, mixBlendMode: 'overlay' }}/>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 30%, rgba(27,20,16,0.65) 100%)' }}/>

        {/* Top bar */}
        <div style={{ position: 'absolute', top: 60, left: 16, right: 16, display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={onBack} style={{
            width: 36, height: 36, borderRadius: 999, border: 'none',
            background: 'rgba(42,31,23,0.32)', backdropFilter: 'blur(14px)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <IcChevL size={18} stroke="#FBF7F0"/>
          </button>
          <button onClick={onShare} style={{
            height: 36, borderRadius: 999, border: 'none', padding: '0 14px',
            background: 'rgba(42,31,23,0.32)', backdropFilter: 'blur(14px)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 7, color: '#FBF7F0',
            fontSize: 13, fontWeight: 500, fontFamily: FONTS.sans,
          }}>
            <IcShare size={15} stroke="#FBF7F0"/>
            Share
          </button>
        </div>

        {/* Foil seal */}
        <div style={{
          position: 'absolute', top: 110, left: '50%', transform: 'translateX(-50%)',
          fontSize: 10, letterSpacing: '0.42em', color: '#F4E6D2', textTransform: 'uppercase', fontWeight: 500,
        }}>
          ✶ A Tala Folio ✶
        </div>

        {/* Title block */}
        <div style={{ position: 'absolute', left: 28, right: 28, bottom: 28, color: '#FBF7F0', textAlign: 'center' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.32em', opacity: 0.85, marginBottom: 14 }}>
            10 DAYS · 5 GUESTS · LATE SPRING
          </div>
          <div style={{ fontFamily: FONTS.serif, fontSize: 32, fontStyle: 'italic', lineHeight: 1.1, fontWeight: 400, marginBottom: 16 }}>
            Balearics with the Girls
          </div>
          <div style={{ fontSize: 12, letterSpacing: '0.06em', opacity: 0.8 }}>
            Mallorca · Ibiza · Jun 12 — 22, 2026
          </div>
        </div>
      </div>

      {/* Concierge note */}
      <div style={{ padding: '24px 24px 22px' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: c.terra, fontWeight: 500, marginBottom: 10 }}>
          A NOTE FROM YOUR CONCIERGE
        </div>
        <div style={{
          fontFamily: FONTS.serif, fontSize: 17, fontStyle: 'italic',
          color: c.inkSoft, lineHeight: 1.5, fontWeight: 400,
        }}>
          "I built this around the things you saved most: long lunches, water you can see through, and one
          night you'll want to remember. The first half is slow Mallorca; the second is Ibiza, but the
          version locals keep for themselves. Everything's reservable from this folio."
        </div>
        <div style={{ fontSize: 12, color: c.inkMute, marginTop: 14, letterSpacing: '0.04em' }}>
          — Curated for you · Updated 2 minutes ago
        </div>
      </div>

      {/* Tab bar */}
      <div style={{ display: 'flex', gap: 4, padding: '14px 22px 0', borderBottom: `0.5px solid ${c.line}`, marginTop: 14 }}>
        {[
          { id: 'days',    lbl: 'Days' },
          { id: 'costs',   lbl: 'Costs' },
          { id: 'packing', lbl: 'Packing' },
        ].map(t => (
          <div key={t.id} onClick={() => setTab(t.id)} style={{
            padding: '10px 14px 12px', fontSize: 13, fontWeight: 500, cursor: 'pointer',
            color: tab === t.id ? c.ink : c.inkMute,
            borderBottom: tab === t.id ? `2px solid ${c.terra}` : '2px solid transparent',
            marginBottom: -1,
          }}>{t.lbl}</div>
        ))}
      </div>

      {/* Days */}
      {tab === 'days' && (
        <div style={{ padding: '8px 0' }}>
          {ITINERARY.map((day, i) => (
            <DayRow key={day.n} day={day} c={c} isLast={i === ITINERARY.length - 1} onOpen={() => onOpenDay(day.n)}/>
          ))}
        </div>
      )}

      {tab === 'costs'   && <CostBreakdown c={c} total={total}/>}
      {tab === 'packing' && <PackingList   c={c}/>}
    </div>
  );
}

function DayRow({ day, c, isLast, onOpen }) {
  return (
    <div onClick={onOpen} style={{
      display: 'flex', gap: 14, padding: '18px 24px',
      borderBottom: !isLast ? `0.5px solid ${c.lineSoft}` : 'none',
      cursor: 'pointer',
    }}>
      {/* Day index */}
      <div style={{ flexShrink: 0, width: 56, textAlign: 'center', paddingTop: 4 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.28em', color: c.inkMute, textTransform: 'uppercase', fontWeight: 500 }}>DAY</div>
        <div style={{
          fontFamily: FONTS.serif, fontSize: 38, fontStyle: 'italic',
          color: c.terra, lineHeight: 1, fontWeight: 400, marginTop: 2,
        }}>{String(day.n).padStart(2, '0')}</div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.18em', color: c.inkMute, textTransform: 'uppercase', fontWeight: 500, marginBottom: 4 }}>
          {day.date} · {day.location}
        </div>
        <div style={{
          fontFamily: FONTS.serif, fontSize: 22, fontStyle: 'italic',
          color: c.ink, fontWeight: 400, lineHeight: 1.15, marginBottom: 10,
        }}>{day.title}</div>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          {day.blocks.map((b, i) => (
            <div key={i} style={{
              fontSize: 11, color: c.inkSoft, padding: '4px 10px',
              background: c.bgWarm, borderRadius: 99, letterSpacing: '0.04em',
            }}>
              {b.time} · {b.title.split('—')[0].split('|')[0].slice(0, 28).trim()}
            </div>
          ))}
        </div>
      </div>

      {/* Hero thumb */}
      <div style={{ flexShrink: 0, width: 70, height: 90, borderRadius: 10, overflow: 'hidden', position: 'relative' }}>
        <img src={day.hero} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: FILM_GRAIN, opacity: 0.3, mixBlendMode: 'overlay' }}/>
      </div>
    </div>
  );
}

function CostBreakdown({ c, total }) {
  const max = Math.max(...COSTS.map(x => x.amt));
  const colorOf = (k) => c[k] || c.ink;
  return (
    <div style={{ padding: '20px 24px 24px' }}>
      {/* Big number */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
        <div style={{
          fontFamily: FONTS.serif, fontSize: 52, fontStyle: 'italic',
          color: c.ink, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1,
        }}>€{total.toLocaleString()}</div>
        <div style={{ fontSize: 12, color: c.inkMute, letterSpacing: '0.04em' }}>group total</div>
      </div>
      <div style={{ fontSize: 13, color: c.inkSoft, marginBottom: 24 }}>
        ≈ €{Math.round(total / 5).toLocaleString()} per person · 10 days
      </div>

      {/* Stacked bar at top */}
      <div style={{ display: 'flex', height: 8, borderRadius: 99, overflow: 'hidden', marginBottom: 22 }}>
        {COSTS.map((x, i) => (
          <div key={i} style={{ flex: x.amt, background: colorOf(x.color) }}/>
        ))}
      </div>

      {/* Each row with elegant horizontal bar */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {COSTS.map((x, i) => (
          <div key={i}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 7 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: 99, background: colorOf(x.color) }}/>
                <span style={{ fontSize: 14, color: c.ink, fontWeight: 500 }}>{x.cat}</span>
              </div>
              <div style={{ fontFamily: FONTS.serif, fontSize: 18, fontStyle: 'italic', color: c.ink }}>
                €{x.amt.toLocaleString()}
              </div>
            </div>
            <div style={{ height: 5, background: c.lineSoft, borderRadius: 99, overflow: 'hidden' }}>
              <div style={{
                height: '100%', borderRadius: 99,
                width: `${(x.amt / max) * 100}%`,
                background: colorOf(x.color),
              }}/>
            </div>
            <div style={{ fontSize: 11, color: c.inkMute, marginTop: 6 }}>
              {Math.round((x.amt / total) * 100)}% of trip
            </div>
          </div>
        ))}
      </div>

      {/* Soft callout */}
      <div style={{
        marginTop: 28, padding: 16, borderRadius: 14,
        background: c.bgWarm, border: `0.5px solid ${c.line}`,
      }}>
        <div style={{ fontSize: 11, letterSpacing: '0.18em', color: c.terra, textTransform: 'uppercase', fontWeight: 500, marginBottom: 6 }}>
          Quietly noted
        </div>
        <div style={{ fontFamily: FONTS.serif, fontSize: 16, fontStyle: 'italic', color: c.inkSoft, lineHeight: 1.4 }}>
          We've held two pricing tiers — this is the one you marked. The lighter-touch version saves about €1,400.
        </div>
      </div>
    </div>
  );
}

function PackingList({ c }) {
  const [done, setDone] = React.useState({});
  const toggle = (k) => setDone(d => ({ ...d, [k]: !d[k] }));
  return (
    <div style={{ padding: '20px 24px 24px' }}>
      <div style={{ fontSize: 11, letterSpacing: '0.28em', color: c.terra, textTransform: 'uppercase', fontWeight: 500, marginBottom: 6 }}>
        Tailored to Late spring · Mediterranean coast
      </div>
      <div style={{
        fontFamily: FONTS.serif, fontSize: 26, fontStyle: 'italic',
        color: c.ink, fontWeight: 400, marginBottom: 22,
      }}>What to bring</div>

      {PACKING.map((sec, si) => (
        <div key={si} style={{ marginBottom: 26 }}>
          <div style={{ fontSize: 12, color: c.inkMute, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500, marginBottom: 12 }}>
            ── {sec.sec}
          </div>
          {sec.items.map((it, ii) => {
            const k = `${si}-${ii}`;
            const isDone = done[k];
            return (
              <div key={ii} onClick={() => toggle(k)} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '11px 0', borderBottom: `0.5px solid ${c.lineSoft}`, cursor: 'pointer',
              }}>
                <div style={{
                  width: 22, height: 22, borderRadius: 6,
                  border: `1.5px solid ${isDone ? c.terra : c.line}`,
                  background: isDone ? c.terra : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  {isDone && <IcCheck size={14} stroke="#FBF7F0" sw={2.6}/>}
                </div>
                <span style={{
                  fontSize: 15, color: isDone ? c.inkMute : c.ink,
                  textDecoration: isDone ? 'line-through' : 'none',
                  textDecorationColor: c.inkMute,
                }}>{it}</span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

window.ItineraryScreen = ItineraryScreen;
