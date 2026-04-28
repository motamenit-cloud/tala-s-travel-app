// screens-share.jsx — share / export sheet

function ShareSheet({ dark, onClose }) {
  const c = T(dark);
  const [copied, setCopied] = React.useState(false);

  const opts = [
    { ico: IcDownload, lbl: 'Download as folio (PDF)', sub: '32 pages · with photos · 8.4 MB', primary: true },
    { ico: IcLink,     lbl: 'Shareable link',           sub: 'tala.travel/folio/balearics-2026' },
    { ico: IcMessage,  lbl: 'Send to crew via Messages', sub: 'Sara, Rosa, Maya, Inés' },
    { ico: IcAirplay,  lbl: 'Mirror to a screen',        sub: 'For trip-planning night' },
  ];

  return (
    <div onClick={onClose} style={{
      position: 'absolute', inset: 0, zIndex: 80,
      background: 'rgba(15,10,7,0.55)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'flex-end',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        width: '100%', background: c.bg, borderRadius: '24px 24px 0 0',
        padding: '14px 0 36px',
        animation: 'slideUp 0.32s cubic-bezier(0.2, 0.7, 0.2, 1)',
      }}>
        <div style={{ width: 38, height: 4, borderRadius: 99, background: c.line, margin: '4px auto 18px' }}/>

        <div style={{ padding: '0 22px 14px' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: c.terra, fontWeight: 500, marginBottom: 6 }}>
            Share your folio
          </div>
          <div style={{ fontFamily: FONTS.serif, fontSize: 26, fontStyle: 'italic', color: c.ink, fontWeight: 400 }}>
            Send it however you'd like.
          </div>
        </div>

        {/* Folio preview chip */}
        <div style={{ padding: '8px 22px 18px' }}>
          <div style={{
            display: 'flex', gap: 14, padding: 14, borderRadius: 14,
            background: c.surface, border: `0.5px solid ${c.line}`,
            boxShadow: '0 4px 14px rgba(42,31,23,0.05)',
          }}>
            <div style={{ position: 'relative', width: 64, height: 84, borderRadius: 8, overflow: 'hidden', flexShrink: 0 }}>
              <img src={PHOTOS.mallorcaHero} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt=""/>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.6))' }}/>
              <div style={{
                position: 'absolute', inset: 0, color: '#FBF7F0',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                fontSize: 7, letterSpacing: '0.3em', textTransform: 'uppercase', textAlign: 'center', padding: 4,
              }}>
                <div style={{ opacity: 0.8 }}>✶ TALA ✶</div>
                <div style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontSize: 9, marginTop: 4 }}>Miami F1</div>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11, letterSpacing: '0.18em', color: c.terra, textTransform: 'uppercase', fontWeight: 500, marginBottom: 3 }}>
                The Folio
              </div>
              <div style={{
                fontFamily: FONTS.serif, fontSize: 18, fontStyle: 'italic',
                color: c.ink, fontWeight: 400, lineHeight: 1.15, marginBottom: 4,
              }}>Miami F1 Grand Prix Weekend</div>
              <div style={{ fontSize: 11, color: c.inkMute }}>4 days · 5 guests · €17,000</div>
            </div>
          </div>
        </div>

        <div>
          {opts.map((o, i) => {
            const Ic = o.ico;
            return (
              <div key={i} onClick={() => { if (o.lbl.startsWith('Shareable')) { setCopied(true); setTimeout(() => setCopied(false), 1600); } }} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '14px 22px',
                borderTop: `0.5px solid ${c.lineSoft}`, cursor: 'pointer',
              }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: o.primary ? c.terra : c.bgWarm,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Ic size={20} stroke={o.primary ? '#FBF7F0' : c.inkSoft} sw={1.6}/>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 500, color: c.ink, marginBottom: 2 }}>{o.lbl}</div>
                  <div style={{ fontSize: 12, color: c.inkMute }}>
                    {copied && o.lbl.startsWith('Shareable') ? 'Copied to clipboard ✓' : o.sub}
                  </div>
                </div>
                <IcChevR size={16} stroke={c.inkMute}/>
              </div>
            );
          })}
        </div>

        <div style={{ padding: '24px 22px 0', textAlign: 'center', fontSize: 11, color: c.inkMute, letterSpacing: '0.04em' }}>
          Crafted in Outfit & Cormorant Garamond. Always feels like paper.
        </div>
      </div>
      <style>{`@keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: none; opacity: 1; } }`}</style>
    </div>
  );
}

window.ShareSheet = ShareSheet;
