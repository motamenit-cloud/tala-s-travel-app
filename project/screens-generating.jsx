// screens-generating.jsx — itinerary generation loading moment

function GeneratingScreen({ dark, onComplete }) {
  const c = T(dark);
  const [phase, setPhase] = React.useState(0);
  const phases = [
    { eyebrow: 'Reading your board', body: 'Cala Varques. Sa Foradada. Es Trenc. Twenty-four pinned places, in your own hand.' },
    { eyebrow: 'Calling our friends',  body: 'Reaching out to local concierges in Palma and Ibiza. Checking who has tables next month.' },
    { eyebrow: 'Choosing the order',   body: 'Five days west, then a slow ferry across. Markets on the right mornings, sunset where it counts.' },
    { eyebrow: 'Setting the table',    body: 'Béns d\'Avall on a Saturday. Hï Ibiza for one night only. Quiet mornings around the loud nights.' },
    { eyebrow: 'Almost there',         body: 'Tucking in the small things — water at the airport, a chef on Tuesday, cash for the ferry.' },
  ];

  React.useEffect(() => {
    if (phase < phases.length - 1) {
      const t = setTimeout(() => setPhase(p => p + 1), 1700);
      return () => clearTimeout(t);
    }
    const t = setTimeout(onComplete, 1900);
    return () => clearTimeout(t);
  }, [phase]);

  const cur = phases[phase];

  return (
    <div style={{
      position: 'relative', height: '100%', width: '100%',
      background: c.bg, fontFamily: FONTS.sans, overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Ambient backdrop — soft glow */}
      <div style={{
        position: 'absolute', top: '-30%', left: '-10%', right: '-10%', height: '70%',
        background: `radial-gradient(circle at 50% 50%, ${c.terra}33 0%, transparent 65%)`,
        animation: 'pulse 4s ease-in-out infinite',
      }}/>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: PAPER_GRAIN, opacity: 0.4, mixBlendMode: 'multiply', pointerEvents: 'none' }}/>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 32px', position: 'relative', zIndex: 2 }}>
        {/* Slowly drifting orbs of pinned-image fragments */}
        <div style={{ position: 'relative', width: 260, height: 260, marginBottom: 36 }}>
          {[
            { src: PHOTOS.cala,      a: 0,   d: 110 },
            { src: PHOTOS.beachClub, a: 60,  d: 100 },
            { src: PHOTOS.paella,    a: 120, d: 115 },
            { src: PHOTOS.yacht,     a: 180, d: 100 },
            { src: PHOTOS.cocktail,  a: 240, d: 110 },
            { src: PHOTOS.oldTown,   a: 300, d: 105 },
          ].map((o, i) => (
            <img key={i} src={o.src} alt="" style={{
              position: 'absolute', top: '50%', left: '50%',
              width: 64, height: 84, borderRadius: 10, objectFit: 'cover',
              transform: `translate(-50%,-50%) rotate(${o.a}deg) translate(${o.d}px) rotate(${-o.a}deg)`,
              boxShadow: '0 8px 18px rgba(42,31,23,0.18)',
              animation: `orbit 14s linear infinite`,
              animationDelay: `${-i * 2}s`,
              transformOrigin: 'center',
            }}/>
          ))}
          {/* Center mark */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            width: 80, height: 80, borderRadius: 999, background: c.surface,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 6px 24px rgba(42,31,23,0.16)',
            border: `0.5px solid ${c.line}`,
          }}>
            <IcSparkle size={28} stroke={c.terra} sw={1.4}/>
          </div>
        </div>

        <div style={{ fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: c.terra, fontWeight: 500, marginBottom: 10 }}>
          {cur.eyebrow}
        </div>
        <div style={{
          fontFamily: FONTS.serif, fontSize: 22, fontStyle: 'italic',
          color: c.ink, fontWeight: 400, textAlign: 'center', lineHeight: 1.35, maxWidth: 320,
        }}>
          {cur.body}
        </div>
      </div>

      {/* progress dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 5, padding: '0 0 80px', position: 'relative', zIndex: 2 }}>
        {phases.map((_, i) => (
          <div key={i} style={{
            width: i <= phase ? 22 : 6, height: 6, borderRadius: 99,
            background: i <= phase ? c.terra : c.line,
            transition: 'all 0.4s',
          }}/>
        ))}
      </div>

      <style>{`
        @keyframes orbit {
          from { transform: translate(-50%,-50%) rotate(0deg) translate(110px) rotate(0deg); }
          to   { transform: translate(-50%,-50%) rotate(360deg) translate(110px) rotate(-360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

window.GeneratingScreen = GeneratingScreen;
