// icons.jsx — thin warm-toned line icons. Stroke 1.6, round caps.

const Ico = ({ d, size = 22, stroke = 'currentColor', sw = 1.6, fill = 'none', children, vb = 24 }) => (
  <svg width={size} height={size} viewBox={`0 0 ${vb} ${vb}`} fill={fill} stroke={stroke}
       strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    {d ? <path d={d}/> : children}
  </svg>
);

const IcPlus     = (p) => <Ico {...p}><path d="M12 5v14M5 12h14"/></Ico>;
const IcChevR    = (p) => <Ico {...p}><path d="M9 6l6 6-6 6"/></Ico>;
const IcChevL    = (p) => <Ico {...p}><path d="M15 6l-6 6 6 6"/></Ico>;
const IcChevD    = (p) => <Ico {...p}><path d="M6 9l6 6 6-6"/></Ico>;
const IcClose    = (p) => <Ico {...p}><path d="M6 6l12 12M18 6L6 18"/></Ico>;
const IcSearch   = (p) => <Ico {...p}><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></Ico>;
const IcHome     = (p) => <Ico {...p}><path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-7H9v7H5a1 1 0 0 1-1-1z"/></Ico>;
const IcCompass  = (p) => <Ico {...p}><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/></Ico>;
const IcBookmark = (p) => <Ico {...p}><path d="M6 4h12v17l-6-4-6 4z"/></Ico>;
const IcUser     = (p) => <Ico {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></Ico>;
const IcCalendar = (p) => <Ico {...p}><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/></Ico>;
const IcMapPin   = (p) => <Ico {...p}><path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></Ico>;
const IcCamera   = (p) => <Ico {...p}><path d="M3 8h4l2-3h6l2 3h4v11H3z"/><circle cx="12" cy="13" r="3.5"/></Ico>;
const IcLink     = (p) => <Ico {...p}><path d="M10 14a4 4 0 0 0 5.5.5l3-3a4 4 0 1 0-5.5-5.5l-1 1"/><path d="M14 10a4 4 0 0 0-5.5-.5l-3 3a4 4 0 0 0 5.5 5.5l1-1"/></Ico>;
const IcNote     = (p) => <Ico {...p}><path d="M5 4h10l4 4v12H5z"/><path d="M15 4v4h4"/><path d="M8 13h7M8 16h5"/></Ico>;
const IcShare    = (p) => <Ico {...p}><path d="M12 3v13"/><path d="M8 7l4-4 4 4"/><path d="M5 13v6h14v-6"/></Ico>;
const IcDots     = (p) => <Ico {...p}><circle cx="6" cy="12" r="1.4" fill="currentColor"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/><circle cx="18" cy="12" r="1.4" fill="currentColor"/></Ico>;
const IcSparkle  = (p) => <Ico {...p}><path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6z"/><path d="M19 4l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></Ico>;
const IcSun      = (p) => <Ico {...p}><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/></Ico>;
const IcMoon     = (p) => <Ico {...p}><path d="M20 14.5A8 8 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/></Ico>;
const IcCoffee   = (p) => <Ico {...p}><path d="M4 8h13v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M17 10h2a2 2 0 0 1 0 4h-2"/><path d="M7 4c1 1 1 2 0 3M11 4c1 1 1 2 0 3"/></Ico>;
const IcStar     = (p) => <Ico {...p}><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></Ico>;
const IcCheck    = (p) => <Ico {...p}><path d="M5 12.5l4.5 4.5L19 7.5"/></Ico>;
const IcWand     = (p) => <Ico {...p}><path d="M3 21l11-11"/><path d="M14 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1z"/><path d="M19 11l.7 1.4 1.4.7-1.4.7-.7 1.4-.7-1.4-1.4-.7 1.4-.7z"/></Ico>;
const IcImage    = (p) => <Ico {...p}><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M3 17l5-4 4 3 3-2 6 5"/></Ico>;
const IcPlane    = (p) => <Ico {...p}><path d="M3 13l18-7-7 18-2-7z"/></Ico>;
const IcFork     = (p) => <Ico {...p}><path d="M7 3v8a3 3 0 0 0 3 3v7"/><path d="M13 3v18M17 3v8a3 3 0 0 1-3 3"/></Ico>;
const IcBed      = (p) => <Ico {...p}><path d="M3 18V8M21 18v-5a3 3 0 0 0-3-3H7a4 4 0 0 0-4 4"/><circle cx="7.5" cy="11.5" r="1.5"/><path d="M3 14h18"/></Ico>;
const IcCar      = (p) => <Ico {...p}><path d="M3 16v-3l2-5h14l2 5v3"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></Ico>;
const IcCloud    = (p) => <Ico {...p}><path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1A4 4 0 0 1 17 18z"/></Ico>;
const IcMic      = (p) => <Ico {...p}><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 12a7 7 0 0 0 14 0M12 19v3"/></Ico>;
const IcDownload = (p) => <Ico {...p}><path d="M12 4v12M7 11l5 5 5-5M5 20h14"/></Ico>;
const IcMessage  = (p) => <Ico {...p}><path d="M4 5h16v12H8l-4 4z"/></Ico>;
const IcCopy     = (p) => <Ico {...p}><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/></Ico>;
const IcAirplay  = (p) => <Ico {...p}><path d="M4 16V5h16v11h-3"/><path d="M8 21l4-5 4 5z"/></Ico>;
const IcGrid     = (p) => <Ico {...p}><rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/></Ico>;
const IcInsta    = (p) => <Ico {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></Ico>;
const IcEdit     = (p) => <Ico {...p}><path d="M5 19h3l10-10-3-3L5 16z"/><path d="M14 6l3 3"/></Ico>;
const IcTag      = (p) => <Ico {...p}><path d="M3 3h8l10 10-8 8L3 11z"/><circle cx="8" cy="8" r="1.5" fill="currentColor"/></Ico>;

Object.assign(window, {
  IcPlus, IcChevR, IcChevL, IcChevD, IcClose, IcSearch,
  IcHome, IcCompass, IcBookmark, IcUser, IcCalendar, IcMapPin,
  IcCamera, IcLink, IcNote, IcShare, IcDots, IcSparkle,
  IcSun, IcMoon, IcCoffee, IcStar, IcCheck, IcWand, IcImage,
  IcPlane, IcFork, IcBed, IcCar, IcCloud, IcMic, IcDownload,
  IcMessage, IcCopy, IcAirplay, IcGrid, IcInsta, IcEdit, IcTag,
});
