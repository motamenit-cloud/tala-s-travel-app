// screens-ig-upload.jsx — IG screenshot upload + AI tag confirmation flow

function IGUploadFlow({ dark, step, onAdvance, onClose }) {
  const c = T(dark);
  // step: 'sheet' (system share sheet) | 'analyzing' | 'confirm'

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 70,
      background: 'rgba(15,10,7,0.55)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'flex-end', flexDirection: 'column', justifyContent: 'flex-end',
    }}>
      {step === 'analyzing' && <AnalyzingSheet c={c} onAdvance={onAdvance}/>}
      {step === 'confirm'   && <ConfirmTagSheet c={c} onClose={onClose}/>}
    </div>
  );
}

function AnalyzingSheet({ c, onAdvance }) {
  React.useEffect(() => {
    const t = setTimeout(onAdvance, 2400);
    return () => clearTimeout(t);
  }, []);
  return (
    <div style={{
      width: '100%', background: c.bg, borderRadius: '24px 24px 0 0',
      padding: '14px 0 40px',
      animation: 'slideUp 0.32s cubic-bezier(0.2, 0.7, 0.2, 1)',
    }}>
      <div style={{ width: 38, height: 4, borderRadius: 99, background: c.line, margin: '4px auto 18px' }}/>

      <div style={{ padding: '0 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
        <div style={{ position: 'relative', width: 220, height: 280, borderRadius: 16, overflow: 'hidden', boxShadow: '0 14px 30px rgba(42,31,23,0.2)' }}>
          <img src={PHOTOS.instaPost} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt=""/>
          {/* Scanning beam */}
          <div style={{
            position: 'absolute', left: 0, right: 0, height: 80,
            background: 'linear-gradient(180deg, transparent, rgba(196,106,74,0.5) 50%, transparent)',
            animation: 'scan 1.6s ease-in-out infinite',
          }}/>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: c.terra }}>
          <IcSparkle size={16} stroke={c.terra}/>
          <span style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 500 }}>
            Reading your screenshot
          </span>
        </div>
        <div style={{
          fontFamily: FONTS.serif, fontStyle: 'italic', fontSize: 22,
          color: c.ink, fontWeight: 400, textAlign: 'center', maxWidth: 260,
        }}>
          Looking for the place behind this image…
        </div>
      </div>
      <style>{`
        @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: none; opacity: 1; } }
        @keyframes scan {
          0% { top: -80px; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 280px; opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function ConfirmTagSheet({ c, onClose }) {
  const [picked, setPicked] = React.useState('cala-comte');
  const suggestions = [
    { id: 'cala-comte',  name: 'Cala Comte',     loc: 'Sant Josep, Ibiza',  conf: 94 },
    { id: 'es-vedra',    name: 'Cala d\'Hort (Es Vedrà view)', loc: 'Ibiza',  conf: 78 },
    { id: 'formentor',   name: 'Cap de Formentor', loc: 'Mallorca',          conf: 41 },
  ];
  return (
    <div style={{
      width: '100%', background: c.bg, borderRadius: '24px 24px 0 0',
      padding: '14px 0 32px',
      animation: 'slideUp 0.32s cubic-bezier(0.2, 0.7, 0.2, 1)',
      maxHeight: '88%', overflow: 'auto',
    }}>
      <div style={{ width: 38, height: 4, borderRadius: 99, background: c.line, margin: '4px auto 16px' }}/>

      <div style={{ padding: '0 22px 14px' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: c.terra, fontWeight: 500, marginBottom: 6 }}>
          One match found
        </div>
        <div style={{ fontFamily: FONTS.serif, fontSize: 26, fontStyle: 'italic', color: c.ink, fontWeight: 400, lineHeight: 1.1 }}>
          Is this Cala Comte?
        </div>
      </div>

      <div style={{ padding: '0 22px 16px' }}>
        <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', height: 180 }}>
          <img src={PHOTOS.instaPost} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt=""/>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: FILM_GRAIN, opacity: 0.25, mixBlendMode: 'overlay' }}/>
        </div>
      </div>

      <div style={{ padding: '0 22px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {suggestions.map(s => (
          <div key={s.id} onClick={() => setPicked(s.id)} style={{
            background: picked === s.id ? c.bgWarm : c.surface,
            border: `1px solid ${picked === s.id ? c.terra : c.lineSoft}`,
            borderRadius: 12, padding: '12px 14px',
            display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer',
          }}>
            <div style={{
              width: 22, height: 22, borderRadius: 99,
              border: `2px solid ${picked === s.id ? c.terra : c.line}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {picked === s.id && <div style={{ width: 10, height: 10, borderRadius: 99, background: c.terra }}/>}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, color: c.ink, fontWeight: 500 }}>{s.name}</div>
              <div style={{ fontSize: 12, color: c.inkMute, marginTop: 2 }}>{s.loc}</div>
            </div>
            <div style={{
              fontSize: 10, fontWeight: 500, letterSpacing: '0.04em',
              color: s.conf > 70 ? c.sageDeep : c.inkMute,
              padding: '3px 8px', borderRadius: 99,
              background: s.conf > 70 ? 'rgba(168,181,155,0.18)' : 'rgba(154,135,117,0.12)',
            }}>
              {s.conf}% match
            </div>
          </div>
        ))}

        <div style={{
          padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10,
          color: c.inkSoft, fontSize: 13, cursor: 'pointer',
        }}>
          <IcEdit size={16} stroke={c.inkSoft}/>
          <span>Type the place yourself</span>
        </div>
      </div>

      <div style={{ padding: '14px 22px 0', display: 'flex', gap: 10 }}>
        <button onClick={onClose} style={{
          flex: 1, padding: '14px 20px', borderRadius: 999, border: `1px solid ${c.line}`,
          background: 'transparent', color: c.ink, fontSize: 14, fontWeight: 500, fontFamily: FONTS.sans, cursor: 'pointer',
        }}>Skip tag</button>
        <button onClick={onClose} style={{
          flex: 2, padding: '14px 20px', borderRadius: 999, border: 'none',
          background: c.ink, color: c.bgWarm, fontSize: 14, fontWeight: 500, fontFamily: FONTS.sans, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          <IcCheck size={16} stroke={c.bgWarm} sw={2}/>
          Pin to board
        </button>
      </div>
    </div>
  );
}

window.IGUploadFlow = IGUploadFlow;
