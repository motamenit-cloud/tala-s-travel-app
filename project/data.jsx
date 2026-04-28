// data.jsx — Tala sample data: Mallorca + Ibiza, 5 friends, 10 days

// Curated Unsplash photos. Hot-linked at small sizes.
const PHOTOS = {
  // Hero / cover
  mallorcaHero:  'https://images.unsplash.com/photo-1591290619762-c4e2776b53b1?auto=format&fit=crop&w=900&q=70', // Mallorca coast
  ibizaSunset:   'https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=900&q=70',  // Ibiza coastline
  // Mood-board / details
  poolside:      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=70',
  oliveGrove:    'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=600&q=70',
  paella:        'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=600&q=70',
  cala:          'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=600&q=70',
  villa:         'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=70',
  marketStall:   'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=600&q=70',
  cocktail:      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=70',
  yacht:         'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=600&q=70',
  oldTown:       'https://images.unsplash.com/photo-1568849676085-51415703900f?auto=format&fit=crop&w=600&q=70',
  beachClub:     'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=600&q=70',
  ceramics:      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=70',
  // Other trips on Home
  parisHero:     'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=70',
  kyotoHero:     'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=70',
  amalfiHero:    'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=900&q=70',
  // Onboarding hero
  onboard1:      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=70',
  onboard2:      'https://images.unsplash.com/photo-1542903660-eedba2cda473?auto=format&fit=crop&w=900&q=70',
  onboard3:      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=70',
  // Day-detail hero
  formentor:     'https://images.unsplash.com/photo-1596627118041-1aa0c50fa12c?auto=format&fit=crop&w=900&q=70',
  // Insta upload preview (the "user's screenshot")
  instaPost:     'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?auto=format&fit=crop&w=600&q=70',
  // Sexy Fish interior
  sexyFish:      'https://whitewall.art/wp-content/uploads/elementor/thumbs/khaydenmbdssexyfishmiamiladysroom1-pc-ken-hayden-qfjtucix07mw01ucnut6rpkx0rfr6hatadbyihge2k.jpg',
  // F1 Miami hero
  f1Miami:       'https://substackcdn.com/image/fetch/$s_!kNGw!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe2e15813-c82c-40bc-b69e-56df4c193668_1600x1027.png',
  // One Hotel
  oneHotel:      'https://www.1hotels.com/sites/1hotels.com/files/styles/showcase/public/brandfolder/kkmmbmqpc8gmjtgffsgwnhw/RM655-01-_Ocean_Front_Kingh1320.webp?h=22f6ab40&itok=AKcdC7EP',
  // Outfit inspo
  outfitWhite:   'https://is4.revolveassets.com/images/p4/n/z/SUSA-WD2208_V2.jpg',
  outfitNavy:    'https://images.unsplash.com/photo-1539281621506-6b64ef40f3e7?auto=format&fit=crop&w=400&q=70',
  outfitRed:     'https://images.unsplash.com/photo-1544568100-847a948585b0?auto=format&fit=crop&w=400&q=70',
  outfitBlack:   'https://images.unsplash.com/photo-1565886557844-7c99dad47292?auto=format&fit=crop&w=400&q=70',
  outfitPink:    'https://images.unsplash.com/photo-1548690596-f1fdd8863da0?auto=format&fit=crop&w=400&q=70',
};

const TRIPS = [
  {
    id: 'miami-f1',
    title: 'Miami F1 Grand Prix Weekend',
    destination: 'Miami',
    dates: 'May 2 — May 5, 2026',
    party: '5 friends',
    cover: PHOTOS.mallorcaHero,
    pinned: 24,
    status: 'planning',
  },
  {
    id: 'amalfi',
    title: 'Honeymoon — Amalfi Coast',
    destination: 'Positano · Capri',
    dates: 'Sep 04 — Sep 13, 2026',
    party: 'Couple',
    cover: PHOTOS.amalfiHero,
    pinned: 41,
    status: 'itinerary',
  },
  {
    id: 'kyoto',
    title: 'Kyoto in Cherry Blossom',
    destination: 'Kyoto · Nara',
    dates: 'Mar 26 — Apr 04, 2027',
    party: 'Solo',
    cover: PHOTOS.kyotoHero,
    pinned: 12,
    status: 'dreaming',
  },
  {
    id: 'paris',
    title: 'A Long Weekend in Paris',
    destination: 'Paris',
    dates: 'Nov 14 — Nov 17, 2025',
    party: 'Couple',
    cover: PHOTOS.parisHero,
    pinned: 18,
    status: 'past',
  },
];

// Mood board pins for Miami F1
const PINS = [
  { id: 'p1', kind: 'link',  text: 'Mandolin — Mediterranean', sub: 'mandolinmiami.com', h: 130 },
  { id: 'p2', kind: 'image', src: PHOTOS.oneHotel,    h: 280, tag: 'One Hotel - Miami Beach',   confirmed: true  },
  { id: 'p3', kind: 'note',  text: 'VIP access to F1 paddock with police escort', h: 150 },
  { id: 'p4', kind: 'image', src: PHOTOS.sexyFish,    h: 200, tag: 'Sexy Fish — Cocktails',    confirmed: true  },
  { id: 'p5', kind: 'image', src: PHOTOS.beachClub,   h: 260, tag: 'Juvia — Rooftop Dining',    confirmed: true  },
  { id: 'p6', kind: 'link',  text: 'Four Seasons Miami', sub: 'fourseasons.com', h: 130 },
  { id: 'p7', kind: 'image', src: PHOTOS.yacht,       h: 240, tag: 'Yacht charter for after-party', confirmed: false },
  { id: 'p8', kind: 'image', src: PHOTOS.oldTown,     h: 200, tag: 'Wynwood Walls Art District', confirmed: true  },
  { id: 'p9', kind: 'image', src: PHOTOS.cocktail,    h: 230, tag: 'Sexy Fish Bar',            confirmed: true  },
  { id: 'p10', kind: 'image', src: PHOTOS.ceramics,   h: 180, tag: 'Design District Shopping', confirmed: true  },
  { id: 'p11', kind: 'note', text: 'Book F1 race week accommodation ASAP — get sold out.', h: 110 },
  { id: 'p12', kind: 'image', src: PHOTOS.poolside,   h: 220, tag: 'South Beach Residences',   confirmed: true  },
];

// 4-day Miami F1 Grand Prix itinerary
const ITINERARY = [
  {
    n: 1, date: 'Thu, May 2',
    title: 'Arrival & Opening Events',
    location: 'Miami',
    hero: PHOTOS.oldTown,
    weather: '28° · sunny',
    blocks: [
      { time: 'morning',   icon: 'plane', title: 'Arrive at Miami International (MIA)',
        body: 'Private car service to Four Seasons. Your driver will have cold towels and water for the 20-minute drive to South Beach.',
        meta: '14:00 arrival · Concierge briefing included' },
      { time: 'afternoon', icon: 'bed', title: 'Check in — Four Seasons Miami',
        body: 'Two Ocean View suites on the 14th floor. Direct beach access, private cabanas, and a wellness coordinator for the weekend.',
        meta: '3 nights · €950/night per suite' },
      { time: 'evening',   icon: 'fork', title: 'Mandolin — Welcome dinner',
        body: 'Mediterranean fine dining in Brickell. Their branzino and lamb are unmissable. The sommelier can guide you through their Greek wine collection.',
        meta: 'Reservation 20:00 · Jacket recommended' },
    ],
  },
  {
    n: 2, date: 'Fri, May 3',
    title: 'Practice & Paddock Access',
    location: 'Miami',
    hero: PHOTOS.poolside,
    weather: '29° · clear',
    blocks: [
      { time: 'morning',   icon: 'sun', title: 'Breakfast at Four Seasons',
        body: 'Fuel up before heading to Miami Grand Prix. The breakfast buffet overlooks the beach — order the fresh-pressed juices.',
        meta: '07:30 · complimentary' },
      { time: 'afternoon', icon: 'car', title: 'F1 Practice Sessions & Paddock Tour',
        body: 'VIP paddock access with a dedicated hospitality host. Watch practice sessions from the premium lounge, meet team personnel, and get insider views of the garages.',
        meta: 'Circuit opens at 12:00 · 5 hours access' },
      { time: 'evening',   icon: 'fork', title: 'Sexy Fish Bar — Cocktails',
        body: 'Upscale rooftop bar in Miami Beach with craft cocktails and small plates. The view over the city lights pairs perfectly with a margarita.',
        meta: '19:30 · Casual elegance' },
    ],
  },
  {
    n: 3, date: 'Sat, May 4',
    title: 'Qualifying & VIP Dinner',
    location: 'Miami',
    hero: PHOTOS.cocktail,
    weather: '27° · partly cloudy',
    blocks: [
      { time: 'morning',   icon: 'sun', title: 'Pool & spa time',
        body: 'Relax at Four Seasons before the action. Book a 90-minute couples massage, then lounge by the beach club with champagne and oysters.',
        meta: '09:00 — 13:00 · €180pp massage' },
      { time: 'afternoon', icon: 'tag', title: 'Qualifying Sessions — premium seating',
        body: 'All three qualifying sessions from the Main Grandstand. Strategic vantage point with shade, catering, and live timing screens.',
        meta: '13:00 — 18:00 · Included in package' },
      { time: 'evening', icon: 'fork', title: 'Private dinner — Wynwood art gallery',
        body: 'A curated group dinner in Wynwood Walls. Chef sources locally, wine list is international. The colorful murals backdrop the perfect photos.',
        meta: '20:30 · €140pp · black tie optional' },
    ],
  },
  {
    n: 4, date: 'Sun, May 5',
    title: 'Race Day & Celebration',
    location: 'Miami',
    hero: PHOTOS.beachClub,
    weather: '28° · sunny',
    blocks: [
      { time: 'morning', icon: 'coffee', title: 'Pre-race brunch at Juvia',
        body: 'Rooftop dining overlooking Brickell. Peruvian-Asian-African fusion. Order the ceviche and the Pisco cocktail for liquid courage.',
        meta: '10:00 · €60pp' },
      { time: 'afternoon', icon: 'sun', title: 'F1 Grand Prix — Premium box seating',
        body: 'Best vantage point for the entire 78 laps. All-inclusive hospitality: champagne, gourmet catering, and an F1 spotter to explain every move.',
        meta: '15:30 start · 2.5 hours racing' },
      { time: 'evening', icon: 'fork', title: 'Victory celebration at Sexy Fish',
        body: 'Toast to the winner (or commiserate!) with Champagne and caviar service. The energy in Miami after race day is unmatched.',
        meta: '19:00 onwards · Dress to impress' },
    ],
  },
];

// Cost breakdown per category — Miami F1
const COSTS = [
  { cat: 'Lodging',     amt: 5700, color: 'terra'    },
  { cat: 'Dining',      amt: 2400, color: 'gold'     },
  { cat: 'F1 Tickets',  amt: 6500, color: 'sage'     },
  { cat: 'Flights',     amt: 1200, color: 'inkSoft'  },
  { cat: 'Transport',   amt:  580, color: 'sageDeep' },
  { cat: 'Misc',        amt:  620, color: 'inkMute'  },
];

// Outfit inspo — Miami F1
const OUTFITS = [
  { id: 'o1', src: PHOTOS.outfitWhite, h: 340, title: 'White Minimalist' },
  { id: 'o2', src: PHOTOS.outfitNavy,  h: 380, title: 'Navy Polka Dot' },
  { id: 'o3', src: PHOTOS.outfitRed,   h: 360, title: 'Red Statement' },
  { id: 'o4', src: PHOTOS.outfitBlack, h: 340, title: 'Black Racer' },
  { id: 'o5', src: PHOTOS.outfitPink,  h: 380, title: 'Pink Tube' },
];

// Packing checklist — Miami F1 (kept for reference)
const PACKING = [
  { sec: 'Race Days', items: ['Wide-brim hat or visor (sun protection)', 'SPF 50 sunscreen', 'Comfortable sneakers for walking', 'Light layers for paddock A/C', 'Binoculars for circuit views'] },
  { sec: 'Dining & Nightlife', items: ['One dressy outfit for Mandolin', 'Cocktail dress or sharp casual for Sexy Fish', 'Statement jewelry', 'Block heels or elegant flats'] },
  { sec: 'Practical', items: ['US plug adapter', 'Reusable water bottle', 'Portable phone charger', 'Small bag for paddock essentials'] },
];

Object.assign(window, { PHOTOS, TRIPS, PINS, ITINERARY, COSTS, PACKING, OUTFITS });
