// screens-trip-board.jsx — Pinterest-style mood board + add menu + IG upload flow

function TripBoard({ dark, onBack, onGenerate, onAddTrigger, addOpen, onAddClose, onUploadIG }) {
  const c = T(dark);
  const [pins, setPins] = React.useState(PINS);
  const [previewing, setPreviewing] = React.useState(null);

  // Two-column masonry split
  const [colA, colB] = React.useMemo(() => {
    const a = [], b = [];
    let ha = 0, hb = 0;
    pins.forEach(p => {
      if (ha <= hb) { a.push(p); ha += p.h + 12; }
      else { b.push(p); hb += p.h + 12; }
    });
    return [a, b];
  }, [pins]);

  return (
    <div style={{ background: c.bg, minHeight: '100%', fontFamily: FONTS.sans, position: 'relative', paddingBottom: 120 }}>
      {/* Header — mini hero */}
      <div style={{ position: 'relative', height: 220 }}>
        <img src={PHOTOS.mallorcaHero} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: FILM_GRAIN, opacity: 0.4, mixBlendMode: 'overlay' }}/>
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, rgba(0,0,0,0.25) 0%, transparent 40%, ${c.bg} 100%)` }}/>

        {/* Nav buttons */}
        <div style={{ position: 'absolute', top: 60, left: 16, right: 16, display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={onBack} style={pillBtn()}>
            <IcChevL size={18} stroke="#FBF7F0"/>
          </button>
          <button style={pillBtn()}>
            <IcDots size={18} stroke="#FBF7F0"/>
          </button>
        </div>

        {/* Title overlay */}
        <div style={{ position: 'absolute', left: 22, right: 22, bottom: -2, color: c.ink }}>
          <div style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: c.terra, fontWeight: 500, marginBottom: 6 }}>
            Mallorca · Ibiza
          </div>
          <div style={{ fontFamily: FONTS.serif, fontSize: 32, fontStyle: 'italic', lineHeight: 1.05, fontWeight: 400, letterSpacing: '-0.01em' }}>
            Balearics with the Girls
          </div>
        </div>
      </div>

      {/* Meta row */}
      <div style={{ padding: '14px 22px 18px', display: 'flex', alignItems: 'center', gap: 12, color: c.inkSoft, fontSize: 12 }}>
        <IcCalendar size={14} stroke={c.inkSoft}/>
        <span>Jun 12 — 22</span>
        <span style={{ width: 3, height: 3, borderRadius: 99, background: c.inkMute }}/>
        <IcUser size={14} stroke={c.inkSoft}/>
        <span>5 of you</span>
        <span style={{ width: 3, height: 3, borderRadius: 99, background: c.inkMute }}/>
        <span>{pins.length} pinned</span>
      </div>

      {/* Tab bar */}
      <div style={{ display: 'flex', gap: 4, padding: '0 22px 14px', borderBottom: `0.5px solid ${c.line}` }}>
        {['Board', 'Itinerary', 'Notes', 'Crew'].map((t, i) => (
          <div key={t} style={{
            padding: '8px 14px 12px', fontSize: 13, fontWeight: 500,
            color: i === 0 ? c.ink : c.inkMute,
            borderBottom: i === 0 ? `2px solid ${c.terra}` : '2px solid transparent',
            marginBottom: -1,
          }}>{t}</div>
        ))}
      </div>

      {/* Masonry */}
      <div style={{ display: 'flex', gap: 10, padding: '14px 12px 0' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {colA.map(p => <Pin key={p.id} p={p} c={c} onPreview={() => setPreviewing(p)}/>)}
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {colB.map(p => <Pin key={p.id} p={p} c={c} onPreview={() => setPreviewing(p)}/>)}
        </div>
      </div>

      {/* Floating Generate CTA */}
      <div style={{
        position: 'absolute', bottom: 28, left: 0, right: 0,
        display: 'flex', justifyContent: 'center', zIndex: 30, padding: '0 22px',
      }}>
        <button onClick={onGenerate} style={{
          background: c.ink, color: c.bgWarm, border: 'none', borderRadius: 999,
          padding: '16px 26px', fontFamily: FONTS.sans, fontSize: 14, fontWeight: 500,
          letterSpacing: '0.04em', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 10, width: '100%', justifyContent: 'center',
          boxShadow: '0 12px 30px rgba(42,31,23,0.32), 0 2px 6px rgba(42,31,23,0.18)',
        }}>
          <IcWand size={17} stroke={c.bgWarm} sw={1.6}/>
          Compose my itinerary
          <span style={{ opacity: 0.55, fontWeight: 300, fontSize: 12, marginLeft: 4 }}>· {pins.length} sources</span>
        </button>
      </div>

      {/* Floating + button */}
      <button onClick={onAddTrigger} style={{
        position: 'absolute', right: 22, bottom: 96, width: 54, height: 54,
        borderRadius: 999, background: c.terra, border: 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 20px rgba(196,106,74,0.4)', cursor: 'pointer', zIndex: 31,
      }}>
        <IcPlus size={24} stroke="#FBF7F0" sw={2}/>
      </button>

      {/* Add menu sheet */}
      {addOpen && <AddMenu c={c} onClose={onAddClose} onUploadIG={onUploadIG}/>}

      {/* Image preview */}
      {previewing && previewing.kind === 'image' && (
        <PinchPreview pin={previewing} onClose={() => setPreviewing(null)} c={c}/>
      )}
    </div>
  );
}

const pillBtn = () => ({
  width: 36, height: 36, borderRadius: 999, border: 'none',
  background: 'rgba(42,31,23,0.32)', backdropFilter: 'blur(14px)',
  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
});

function Pin({ p, c, onPreview }) {
  if (p.kind === 'image') {
    return (
      <div onClick={onPreview} style={{
        position: 'relative', borderRadius: 14, overflow: 'hidden',
        background: c.surface, boxShadow: '0 2px 10px rgba(42,31,23,0.08)',
        cursor: 'pointer',
      }}>
        <img src={p.src} alt="" style={{ width: '100%', height: p.h, objectFit: 'cover', display: 'block' }}/>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: FILM_GRAIN, opacity: 0.25, mixBlendMode: 'overlay' }}/>
        {/* Tag chip */}
        <div style={{
          position: 'absolute', left: 8, bottom: 8, right: 8,
          display: 'flex', alignItems: 'center', gap: 6,
          background: p.confirmed ? 'rgba(251,247,240,0.92)' : 'rgba(196,106,74,0.92)',
          backdropFilter: 'blur(8px)', borderRadius: 999,
          padding: '5px 9px', fontSize: 10.5, fontWeight: 500,
          color: p.confirmed ? c.ink : '#FBF7F0',
        }}>
          {p.confirmed
            ? <IcMapPin size={11} stroke={c.terra} sw={2}/>
            : <IcSparkle size={11} stroke="#FBF7F0" sw={2}/>}
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
            {p.confirmed ? p.tag : 'Tap to confirm tag'}
          </span>
        </div>
      </div>
    );
  }
  if (p.kind === 'note') {
    return (
      <div style={{
        background: '#F4E6D2', borderRadius: 14, padding: 14, minHeight: p.h,
        boxShadow: '0 2px 10px rgba(42,31,23,0.06)', position: 'relative',
        backgroundImage: PAPER_GRAIN, backgroundBlendMode: 'multiply',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8, color: c.terra }}>
          <IcNote size={13} stroke={c.terra} sw={1.6}/>
          <span style={{ fontSize: 9.5, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500 }}>NOTE</span>
        </div>
        <div style={{
          fontFamily: FONTS.serif, fontSize: 16, fontStyle: 'italic',
          color: c.ink, lineHeight: 1.35, fontWeight: 400,
        }}>
          "{p.text}"
        </div>
      </div>
    );
  }
  // link
  return (
    <div style={{
      background: c.surface, borderRadius: 14, padding: 14, minHeight: p.h,
      boxShadow: '0 2px 10px rgba(42,31,23,0.06)',
      border: `0.5px solid ${c.line}`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8, color: c.sageDeep }}>
        <IcLink size={13} stroke={c.sageDeep} sw={1.6}/>
        <span style={{ fontSize: 9.5, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500 }}>LINK</span>
      </div>
      <div style={{ fontSize: 13, color: c.ink, fontWeight: 500, lineHeight: 1.3, marginBottom: 4 }}>
        {p.text}
      </div>
      <div style={{ fontSize: 11, color: c.inkMute }}>{p.sub}</div>
    </div>
  );
}

function AddMenu({ c, onClose, onUploadIG }) {
  const items = [
    { ico: IcInsta,  lbl: 'Instagram screenshot', sub: 'Auto-tags the place', primary: true, onClick: onUploadIG },
    { ico: IcCamera, lbl: 'From camera roll',     sub: 'Upload images you\'ve saved' },
    { ico: IcLink,   lbl: 'Paste a link',         sub: 'Articles, restaurants, hotels' },
    { ico: IcMapPin, lbl: 'Drop a place',         sub: 'Search the map directly' },
    { ico: IcNote,   lbl: 'Quick note',           sub: 'Just a thought to remember' },
  ];
  return (
    <div onClick={onClose} style={{
      position: 'absolute', inset: 0, zIndex: 50,
      background: 'rgba(27,20,16,0.42)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'flex-end',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: c.bg, width: '100%', borderRadius: '24px 24px 0 0',
        padding: '12px 0 36px',
        boxShadow: '0 -10px 30px rgba(0,0,0,0.18)',
        animation: 'slideUp 0.32s cubic-bezier(0.2, 0.7, 0.2, 1)',
      }}>
        {/* grabber */}
        <div style={{ width: 38, height: 4, borderRadius: 99, background: c.line, margin: '4px auto 12px' }}/>

        <div style={{ padding: '6px 22px 16px' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: c.terra, fontWeight: 500, marginBottom: 6 }}>
            Add to your board
          </div>
          <div style={{ fontFamily: FONTS.serif, fontSize: 24, fontStyle: 'italic', color: c.ink, fontWeight: 400 }}>
            What did you find?
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {items.map((it, i) => {
            const Ic = it.ico;
            return (
              <div key={i} onClick={it.onClick} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '14px 22px',
                borderTop: i > 0 ? `0.5px solid ${c.lineSoft}` : 'none',
                cursor: it.onClick ? 'pointer' : 'default',
              }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: it.primary ? c.terra : c.bgWarm,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Ic size={20} stroke={it.primary ? '#FBF7F0' : c.inkSoft} sw={1.6}/>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 500, color: c.ink, marginBottom: 2 }}>{it.lbl}</div>
                  <div style={{ fontSize: 12, color: c.inkMute }}>{it.sub}</div>
                </div>
                <IcChevR size={16} stroke={c.inkMute}/>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function PinchPreview({ pin, onClose, c }) {
  return (
    <div onClick={onClose} style={{
      position: 'absolute', inset: 0, zIndex: 60,
      background: 'rgba(15,10,7,0.85)', backdropFilter: 'blur(14px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      animation: 'fadeIn 0.2s', padding: 22, flexDirection: 'column', gap: 14,
    }}>
      <img src={pin.src} alt="" style={{
        maxWidth: '100%', maxHeight: '70%', borderRadius: 14,
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        animation: 'popIn 0.32s cubic-bezier(0.2, 0.7, 0.2, 1)',
      }}/>
      <div style={{ textAlign: 'center', color: '#FBF7F0' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 4 }}>
          Tagged location
        </div>
        <div style={{ fontFamily: FONTS.serif, fontSize: 22, fontStyle: 'italic' }}>{pin.tag}</div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes popIn  { from { transform: scale(0.94); opacity: 0 } to { transform: scale(1); opacity: 1 } }
      `}</style>
    </div>
  );
}

Object.assign(window, { TripBoard });
