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
};

const TRIPS = [
  {
    id: 'balearics',
    title: 'Balearics with the Girls',
    destination: 'Mallorca · Ibiza',
    dates: 'Jun 12 — Jun 22, 2026',
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

// Mood board pins for Balearics
const PINS = [
  { id: 'p1', kind: 'image', src: PHOTOS.poolside,    h: 220, tag: 'Cap Rocat, Mallorca',     confirmed: true  },
  { id: 'p2', kind: 'image', src: PHOTOS.cala,        h: 280, tag: 'Cala Varques',             confirmed: true  },
  { id: 'p3', kind: 'note',  text: 'Need a private chef one night — group of 5, somewhere with a view.', h: 150 },
  { id: 'p4', kind: 'image', src: PHOTOS.paella,      h: 200, tag: 'Es Racó d\'es Teix',       confirmed: true  },
  { id: 'p5', kind: 'image', src: PHOTOS.beachClub,   h: 260, tag: 'Nikki Beach, Ibiza',       confirmed: true  },
  { id: 'p6', kind: 'link',  text: 'Hotel Cort — Palma', sub: 'condenasttraveler.com', h: 130 },
  { id: 'p7', kind: 'image', src: PHOTOS.yacht,       h: 240, tag: 'Day boat — needs tag',     confirmed: false },
  { id: 'p8', kind: 'image', src: PHOTOS.oldTown,     h: 200, tag: 'Dalt Vila, Ibiza',         confirmed: true  },
  { id: 'p9', kind: 'image', src: PHOTOS.cocktail,    h: 230, tag: 'Experimental Beach',       confirmed: true  },
  { id: 'p10', kind: 'image', src: PHOTOS.ceramics,   h: 180, tag: 'Sant Joan market',         confirmed: true  },
  { id: 'p11', kind: 'note', text: 'Rosa wants to do a yoga morning — Deià?', h: 110 },
  { id: 'p12', kind: 'image', src: PHOTOS.oliveGrove, h: 220, tag: 'Sóller olive groves',      confirmed: true  },
];

// 10-day itinerary, abbreviated for first/last + middle highlights
const ITINERARY = [
  {
    n: 1, date: 'Fri, Jun 12',
    title: 'Arrival in Palma',
    location: 'Mallorca',
    hero: PHOTOS.oldTown,
    weather: '27° · clear',
    blocks: [
      { time: 'morning',   icon: 'plane', title: 'Land at Palma de Mallorca (PMI)',
        body: 'Private transfer arranged — black Mercedes V-Class, meeting you at arrivals with a chilled bottle of cava for the ride to the hotel.',
        meta: '14:20 arrival · 35 min transfer' },
      { time: 'afternoon', icon: 'bed', title: 'Check in — Cap Rocat',
        body: 'A 19th-century coastal fortress turned design hotel, all limestone and shadow. Two adjacent Sentinel Suites with private terraces facing the bay.',
        meta: '5 nights · €620/night per suite' },
      { time: 'evening',   icon: 'fork', title: 'Sea Lounge — welcome dinner',
        body: 'Catalan small plates on the cliffside terrace. Order the carabineros and the local Manto Negro. Sunset hits 21:14.',
        meta: 'Reservation 20:30 · Smart casual' },
    ],
  },
  {
    n: 2, date: 'Sat, Jun 13',
    title: 'Tramuntana Ridge & Sóller',
    location: 'Mallorca',
    hero: PHOTOS.oliveGrove,
    weather: '29° · light breeze',
    blocks: [
      { time: 'morning',   icon: 'coffee', title: 'Coffee at Ca\'n Joan de S\'Aigo',
        body: 'A 320-year-old café in Palma\'s old town. Order ensaimada with hot chocolate — they grind their own cocoa.',
        meta: '08:30 · 12 min walk from car park' },
      { time: 'afternoon', icon: 'car', title: 'Drive the Ma-10 through Tramuntana',
        body: 'The most beautiful coastal road in the Mediterranean. Pull over at Mirador de Ses Barques for the photo, then descend into Sóller for lunch.',
        meta: 'Self-drive · 2 hours with stops' },
      { time: 'evening',   icon: 'fork', title: 'Béns d\'Avall',
        body: 'A Michelin-starred clifftop institution run by the Pérez family for three generations. The 9-course tasting features sea urchin from the cove below.',
        meta: '19:30 · €185pp · book 3 weeks ahead' },
    ],
  },
  {
    n: 3, date: 'Sun, Jun 14',
    title: 'A Day on the Water',
    location: 'Mallorca',
    hero: PHOTOS.yacht,
    weather: '30° · calm seas',
    blocks: [
      { time: 'morning',   icon: 'plane', title: 'Private Sunseeker — full day charter',
        body: 'Board at Port Adriano. Your captain Tomeu knows every cove worth visiting. Suggest Cala Llombards for lunch swim — clearest water on the south coast.',
        meta: '09:00 — 18:00 · €2,800 group' },
      { time: 'afternoon', icon: 'fork', title: 'Lunch on board',
        body: 'Provisioned by the boutique caterer Bellaverde — chilled gazpacho, grilled dorada, jamón ibérico, lots of rosé from Bodega Ribas.',
        meta: 'Dietary notes flagged for Maya' },
      { time: 'evening',   icon: 'fork', title: 'Sa Foradada at sunset',
        body: 'Reachable only by boat (or a 40-min hike). Whole grilled fish, paella, and that view — a rocky arch silhouetting the falling sun.',
        meta: '20:00 · cash only · €60pp' },
    ],
  },
  {
    n: 4, date: 'Mon, Jun 15',
    title: 'Slow Morning in Deià',
    location: 'Mallorca',
    hero: PHOTOS.villa,
    weather: '28° · partly cloudy',
    blocks: [
      { time: 'morning',   icon: 'sun', title: 'Sunrise yoga — Son Bunyola',
        body: 'For Rosa. Private 75-min flow on the cliff lawn, mats and tea provided. Instructor speaks English and Spanish.',
        meta: '07:30 · €45pp' },
      { time: 'afternoon', icon: 'coffee', title: 'Belmond La Residencia — pool day',
        body: 'Afternoon access to the lower pool with cabanas. Order the gazpacho flight and a pitcher of tinto de verano.',
        meta: 'Day pass €120pp · towels provided' },
      { time: 'evening',   icon: 'fork', title: 'Es Racó d\'es Teix',
        body: 'Michelin-starred Mallorquín cooking under the canopy of an old fig tree. Their suckling pig is the move.',
        meta: '20:00 · €155pp · jacket recommended' },
    ],
  },
  {
    n: 5, date: 'Tue, Jun 16',
    title: 'Markets & a Last Mallorcan Night',
    location: 'Mallorca',
    hero: PHOTOS.marketStall,
    weather: '27° · sunny',
    blocks: [
      { time: 'morning',   icon: 'tag', title: 'Sant Joan Sunday market',
        body: 'Local ceramics, raw linen, embroidered throws. Bring cash. The stall on the south end has hand-thrown bowls — Maya will love them.',
        meta: '09:00 — 13:00' },
      { time: 'afternoon', icon: 'sun', title: 'Beach time — Es Trenc',
        body: 'Caribbean-blue water, fine white sand. Beach club Sa Bota holds a row of beds in your name from 14:00.',
        meta: 'Beds €40 each · driver on standby' },
      { time: 'evening',   icon: 'fork', title: 'Private chef at the suite',
        body: 'Chef Inés cooks a 6-course Mallorcan tasting on your terrace. From sobrasada croquetas to ensaimada with apricot ice cream.',
        meta: '20:30 · €240pp · she brings everything' },
    ],
  },
  {
    n: 6, date: 'Wed, Jun 17',
    title: 'Cross to Ibiza',
    location: 'Mallorca → Ibiza',
    hero: PHOTOS.ibizaSunset,
    weather: '29° · breezy',
    blocks: [
      { time: 'morning',   icon: 'plane', title: 'Inter-island ferry',
        body: 'Balearia Fast Ferry from Palma to Ibiza Town — 2h 15min, leather seats, Wi-Fi. Boards your luggage separately so you can walk on.',
        meta: '10:30 departure · €78pp' },
      { time: 'afternoon', icon: 'bed', title: 'Check in — Six Senses Ibiza',
        body: 'Northern tip of the island, away from the noise. Two North Pool Suites and a Garden Suite, all with hammam access.',
        meta: '5 nights · €890/night per suite' },
      { time: 'evening',   icon: 'fork', title: 'The Beach Caves at Six Senses',
        body: 'Tables built into the limestone cliff. The whole turbot is the order — they fly it in from Galicia daily.',
        meta: '20:30 · resort-casual' },
    ],
  },
  {
    n: 7, date: 'Thu, Jun 18',
    title: 'Dalt Vila & Hippy Markets',
    location: 'Ibiza',
    hero: PHOTOS.oldTown,
    weather: '30° · clear',
    blocks: [
      { time: 'morning', icon: 'tag', title: 'Las Dalias hippy market',
        body: 'A 50-year-old institution. Linen kaftans, leather sandals, hand-stamped jewellery. Get there by 11 to beat the heat.',
        meta: 'San Carlos · €5 entry' },
      { time: 'afternoon', icon: 'fork', title: 'Lunch at Aubergine',
        body: 'Farm-to-table in the middle of the island. Their own greenhouse out back. Try the ricotta gnudi.',
        meta: '14:00 · €60pp' },
      { time: 'evening', icon: 'mappin', title: 'Sunset walk through Dalt Vila',
        body: 'The fortified old town, UNESCO-listed. Climb to the cathedral terrace at 20:30 for the best light over the harbour.',
        meta: '90 min self-guided' },
    ],
  },
  {
    n: 8, date: 'Fri, Jun 19',
    title: 'Beach Club Day',
    location: 'Ibiza',
    hero: PHOTOS.beachClub,
    weather: '31° · hot',
    blocks: [
      { time: 'all-day', icon: 'sun', title: 'Beach Club: Beachouse Ibiza',
        body: 'A row of beds with bottle service from 12:00. DJ from 16:00 — Caribé spin tonight, more Balearic than house. Lunch served beachside.',
        meta: '€95pp minimum spend' },
      { time: 'evening', icon: 'fork', title: 'Cala Bonita',
        body: 'A hidden cove restaurant only locals know — reachable by a dirt road. Whole grilled prawns and a sunset that ruins you for other sunsets.',
        meta: '21:00 · cash + card · €70pp' },
    ],
  },
  {
    n: 9, date: 'Sat, Jun 20',
    title: 'Yoga & A Night Out',
    location: 'Ibiza',
    hero: PHOTOS.cocktail,
    weather: '30° · clear',
    blocks: [
      { time: 'morning', icon: 'sun', title: 'Sunrise hike — Atlantis',
        body: 'A short hike to a hidden cove with stone carvings left by 60s hippies. Bring water shoes — the descent is steep.',
        meta: '06:00 · 90 min round trip' },
      { time: 'afternoon', icon: 'bed', title: 'Hammam at Six Senses',
        body: 'Booked the full circuit for the group: steam, salt scrub, mud chamber, cold plunge, tea ceremony.',
        meta: '15:00 · 2 hrs · €220pp' },
      { time: 'evening', icon: 'fork', title: 'Hï Ibiza — VIP table',
        body: 'For one night only. Black Coffee resident set. Table 41, pool-side, bottle list pre-set. Car at 23:30.',
        meta: '€2,400 group · dress: anything goes' },
    ],
  },
  {
    n: 10, date: 'Sun, Jun 21',
    title: 'Slow Goodbye',
    location: 'Ibiza',
    hero: PHOTOS.cala,
    weather: '28° · gentle',
    blocks: [
      { time: 'morning', icon: 'coffee', title: 'Brunch at Casa Jondal',
        body: 'A long, slow lunch at the most beautiful beach restaurant on the island. Order the bluefin carpaccio and the lemon tart. No rush.',
        meta: '12:30 · €85pp' },
      { time: 'afternoon', icon: 'sun', title: 'One last swim — Cala d\'Hort',
        body: 'View of the magical Es Vedrà rock from the water. Drive back via the lavender fields if the timing\'s right.',
        meta: 'Self-drive · 35 min from hotel' },
      { time: 'evening', icon: 'plane', title: 'Departure',
        body: 'Private transfer to Ibiza airport. Final farewells. Your driver Joan will have cold towels and water in the car.',
        meta: '21:50 flight · 45 min transfer' },
    ],
  },
];

// Cost breakdown per category
const COSTS = [
  { cat: 'Lodging',     amt: 7550, color: 'terra'    },
  { cat: 'Dining',      amt: 3120, color: 'gold'     },
  { cat: 'Activities',  amt: 4480, color: 'sage'     },
  { cat: 'Flights',     amt: 1850, color: 'inkSoft'  },
  { cat: 'Transport',   amt:  720, color: 'sageDeep' },
  { cat: 'Misc',        amt:  410, color: 'inkMute'  },
];

// Packing checklist
const PACKING = [
  { sec: 'Beach', items: ['Linen kaftans (3)', 'Two swimsuits each', 'Reef-safe SPF 50', 'Wide-brim hat', 'Espadrilles'] },
  { sec: 'Dinners', items: ['One dressy outfit per night', 'Block heels (cobblestone-friendly)', 'Light shawl for terraces'] },
  { sec: 'Practical', items: ['EU plug adapter', 'Reusable water bottle', 'Tote for markets', 'Cash for the ferry & Sa Foradada'] },
];

Object.assign(window, { PHOTOS, TRIPS, PINS, ITINERARY, COSTS, PACKING });
