export interface StudioStat {
  id: string;
  value: string;
  label: string;
  context: string;
}

export type PortfolioCategory =
  | 'All Projects'
  | 'Luxury Home Interiors'
  | 'Modern Living Rooms'
  | 'Modular Kitchen Designs'
  | 'Master Bedrooms'
  | 'Apartment Interiors'
  | 'Villa Interiors'
  | 'Office Interiors'
  | 'Commercial Spaces'
  | 'False Ceiling Designs'
  | 'Wardrobe & Storage Solutions';

export interface PortfolioProject {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'All Projects'>;
  style: string;
  location: string;
  areaSqFt: string;
  timeline: string;
  description: string;
  materials: string[];
  image: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  iconName:
    | 'Home'
    | 'Building2'
    | 'Landmark'
    | 'LayoutGrid'
    | 'UtensilsCrossed'
    | 'BedDouble'
    | 'Box'
    | 'SunMedium'
    | 'DoorClosed'
    | 'Hammer'
    | 'KeyRound';
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  typicalTimeline: string;
  startingScope: string;
  image: string;
  defaultStyle: string;
}

export interface WhyChooseUsItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName:
    | 'Award'
    | 'SlidersHorizontal'
    | 'Gem'
    | 'Compass'
    | 'Layers'
    | 'FileCheck2'
    | 'Clock3'
    | 'ShieldCheck';
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  roleOrProperty: string;
  location: string;
  projectScope: string;
  rating: number;
  quote: string;
  outcome: string;
  initials: string;
}

/**
 * Editable Studio Configuration
 * Update contact numbers, address, stats, projects, and pricing ranges here.
 */
export const STUDIO_INFO = {
  brandName: 'ELITE DECOR',
  fullBrandName: 'ELITE DECOR Interior Company',
  tagline: 'Architectural Precision Meets Timeless Warmth',
  heroHeadline: 'Transforming Spaces Into Extraordinary Experiences.',
  heroSubcopy:
    'Bespoke residential, villa, modular kitchen, and commercial interiors crafted in Edappally, Ernakulam with enduring natural materials and complete turnkey execution.',
  logoUrl: '/assets/aistudio/dfcc495c-0941-4009-98ae-439443966d60_ebffe084.jpg',
  heroImage: './images/hero_luxury_living_1794908440301.jpg',
  aboutImage: './images/about_atelier_studio_1794908440945.jpg',
  contact: {
    phoneDisplay: '+91 99465 99463',
    phoneRaw: '9946599463',
    whatsappDisplay: '+91 90614 86768',
    whatsappRaw: '919061486768',
    email: 'elitedecorkochin@gmail.com',
    instagramHandle: '@elite_decor_1992',
    instagramUrl:
      'https://www.instagram.com/elite_decor_1992?utm_source=qr&psln=YnhjZHpjdWJqdzBj',
    address: 'Edappally, Ernakulam, Kerala, PIN 682024',
    shortAddress: 'Edappally, Ernakulam, PIN 682024',
    hours: 'Mon – Sat · 9:30 AM – 6:30 PM IST',
    coordinates: { lat: 10.0261, lng: 76.3125 },
    googleMapsDirectionUrl:
      'https://www.google.com/maps/search/?api=1&query=Edappally,+Ernakulam,+Kerala+682024',
  },
};

export const STUDIO_STATS: StudioStat[] = [
  {
    id: 'experience',
    value: '14+',
    label: 'Years of Design Craft',
    context: 'Established architectural & turnkey studio in Kochi',
  },
  {
    id: 'projects',
    value: '420+',
    label: 'Completed Spaces',
    context: 'Villas, luxury apartments & corporate headquarters',
  },
  {
    id: 'clients',
    value: '380+',
    label: 'Happy Clients',
    context: 'Across Ernakulam, Kerala & South India',
  },
  {
    id: 'delivery',
    value: '98%',
    label: 'On-Time Handover',
    context: 'Milestone-tracked turnkey execution',
  },
];

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  'All Projects',
  'Luxury Home Interiors',
  'Modern Living Rooms',
  'Modular Kitchen Designs',
  'Master Bedrooms',
  'Apartment Interiors',
  'Villa Interiors',
  'Office Interiors',
  'Commercial Spaces',
  'False Ceiling Designs',
  'Wardrobe & Storage Solutions',
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-travertine-pavilion',
    title: 'The Travertine Living Pavilion',
    category: 'Luxury Home Interiors',
    style: 'Warm Architectural Luxury',
    location: 'Panampilly Nagar, Kochi',
    areaSqFt: '3,850 sq. ft.',
    timeline: '18 Weeks',
    description:
      'A sunlit residence anchored by honed travertine stone walls, reclaimed oak ceiling beams, and bespoke bouclé lounge seating.',
    materials: ['Honed Travertine', 'Solid White Oak', 'Brushed Champagne Brass', 'Belgian Bouclé'],
    image: './images/hero_luxury_living_1794908440301.jpg',
    featured: true,
  },
  {
    id: 'proj-calacatta-kitchen',
    title: 'Fluted Walnut & Calacatta Culinary Studio',
    category: 'Modular Kitchen Designs',
    style: 'Contemporary European',
    location: 'Edappally, Ernakulam',
    areaSqFt: '420 sq. ft.',
    timeline: '8 Weeks',
    description:
      'Floor-to-ceiling fluted walnut cabinetry paired with a book-matched Calacatta marble waterfall island and recessed linear task lighting.',
    materials: ['Fluted American Walnut', 'Calacatta Marble', 'Hettich Soft-Close Hardware', 'Champagne Brass'],
    image: './images/portfolio_modular_kitchen_1794908440879.jpg',
  },
  {
    id: 'proj-oak-sanctuary-bedroom',
    title: 'Oak & Alabaster Master Sanctuary',
    category: 'Master Bedrooms',
    style: 'Quiet Minimalist Luxury',
    location: 'Kakkanad, Kochi',
    areaSqFt: '540 sq. ft.',
    timeline: '7 Weeks',
    description:
      'Acoustic vertical oak headboard paneling bathed in warm alabaster wall sconces, layered Belgian linens, and floor-to-ceiling sheer drapery.',
    materials: ['Quarter-Sawn Oak', 'Spanish Alabaster', 'Belgian Linen', 'Hand-Tufted Wool'],
    image: './images/portfolio_master_bedroom_1794908441516.jpg',
  },
  {
    id: 'proj-courtyard-villa',
    title: 'Atrium Courtyard Residence',
    category: 'Villa Interiors',
    style: 'Tropical Modernist',
    location: 'Aluva Riverside, Ernakulam',
    areaSqFt: '5,400 sq. ft.',
    timeline: '24 Weeks',
    description:
      'Double-height sunlit villa featuring a floating oak-and-glass staircase, limestone floors, timber slat ceilings, and an indoor tropical courtyard.',
    materials: ['Kota & Limestone', 'Burma Teak Ceiling', 'Tempered Low-Iron Glass', 'Architectural Concrete'],
    image: './images/portfolio_villa_interior_1794908441583.jpg',
    featured: true,
  },
  {
    id: 'proj-skyline-apartment',
    title: 'Marine Drive Sky Residence',
    category: 'Apartment Interiors',
    style: 'Modern Warm Contemporary',
    location: 'Marine Drive, Kochi',
    areaSqFt: '2,650 sq. ft.',
    timeline: '14 Weeks',
    description:
      'Open-plan waterfront apartment wrapped in hand-troweled limewash plaster, custom oak dining furniture, and architectural brass lighting.',
    materials: ['Mineral Limewash', 'European Oak', 'Saddle Leather', 'Satin Brass'],
    image: './images/portfolio_apartment_interior_1794908443108.jpg',
  },
  {
    id: 'proj-hearth-living',
    title: 'Bespoke Joinery Salon',
    category: 'Modern Living Rooms',
    style: 'Transitional Heritage',
    location: 'Vyttila, Ernakulam',
    areaSqFt: '1,100 sq. ft.',
    timeline: '10 Weeks',
    description:
      'Custom charcoal-stained millwork framing a marble hearth, herringbone oak flooring, and warm brass wall sconces for effortless entertaining.',
    materials: ['Herringbone Oak', 'Carrara Marble', 'Charcoal Stained Ash', 'Unlacquered Brass'],
    image: './images/service_turnkey_renovation_1794908445193.jpg',
  },
  {
    id: 'proj-executive-office',
    title: 'Novus Executive Chambers',
    category: 'Office Interiors',
    style: 'Corporate Architectural',
    location: 'Infopark Phase II, Kakkanad',
    areaSqFt: '6,200 sq. ft.',
    timeline: '16 Weeks',
    description:
      'Acoustically engineered executive headquarters featuring walnut slat feature walls, a monolithic travertine reception, and glazed boardrooms.',
    materials: ['Acoustic Walnut Slats', 'Vein-Cut Travertine', 'Anodized Bronze Glass', 'Full-Grain Leather'],
    image: './images/portfolio_office_interior_1794908442728.jpg',
  },
  {
    id: 'proj-boutique-showroom',
    title: 'Aurelia Flagship Lounge & Atelier',
    category: 'Commercial Spaces',
    style: 'Sculptural Hospitality',
    location: 'MG Road, Ernakulam',
    areaSqFt: '3,100 sq. ft.',
    timeline: '12 Weeks',
    description:
      'Curved fluted travertine concierge counter illuminated by sculpted cove ceilings, olive velvet seating, and bespoke display niches.',
    materials: ['Fluted Travertine', 'Olive Mohair Velvet', 'Venetian Plaster', 'Warm 2700K Cove LEDs'],
    image: './images/portfolio_commercial_space_1794908443697.jpg',
  },
  {
    id: 'proj-sculpted-ceiling',
    title: 'Layered Cove & Timber Ceiling Penthouse',
    category: 'False Ceiling Designs',
    style: 'Contemporary Architectural',
    location: 'Palarivattom, Kochi',
    areaSqFt: '2,200 sq. ft.',
    timeline: '6 Weeks',
    description:
      'Multi-tiered acoustic gypsum false ceiling with concealed warm 2700K perimeter coves, flush magnetic track slots, and teak wood inlays.',
    materials: ['Saint-Gobain Gypsum', 'Teak Veneer Inlay', 'Magnetic Track Lighting', 'CRI 95+ LED Strips'],
    image: './images/portfolio_false_ceiling_1794908443961.jpg',
  },
  {
    id: 'proj-fluted-wardrobe',
    title: 'Smoked Glass & Walnut Dressing Suite',
    category: 'Wardrobe & Storage Solutions',
    style: 'Bespoke Tailored Luxury',
    location: 'Kaloor, Ernakulam',
    areaSqFt: '310 sq. ft.',
    timeline: '5 Weeks',
    description:
      'Walk-in dressing room crafted with fluted bronze glass shutters, motion-activated shelf illumination, and a walnut center jewelry island.',
    materials: ['Fluted Smoked Glass', 'Dark Walnut Veneer', 'Leather-Lined Drawers', 'Brushed Brass Pulls'],
    image: './images/portfolio_wardrobe_storage_1794908444912.jpg',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'srv-residential',
    number: '01',
    title: 'Residential Interior Design',
    iconName: 'Home',
    shortDescription:
      'Complete architectural interior concepts tailored to your family rhythm, natural light, and material preferences.',
    fullDescription:
      'We craft serene, functional homes from concept boards through final styling. Every layout balances circulation, natural ventilation, acoustic comfort, and heirloom-grade joinery.',
    deliverables: [
      'Lifestyle spatial programming & zoning',
      'Material, stone & textile curation boards',
      'Photorealistic 3D interior perspectives',
      'Full working drawings for MEP & carpentry',
    ],
    typicalTimeline: '12 – 20 Weeks',
    startingScope: 'Custom Homes & Residences',
    image: './images/hero_luxury_living_1794908440301.jpg',
    defaultStyle: 'Modern',
  },
  {
    id: 'srv-commercial',
    number: '02',
    title: 'Commercial Interior Design',
    iconName: 'Building2',
    shortDescription:
      'High-impact offices, retail showrooms, clinics, and hospitality lounges designed to elevate brand presence.',
    fullDescription:
      'We translate brand identity into physical spatial experiences—combining acoustic performance, durable commercial finishes, ergonomic workstations, and memorable reception environments.',
    deliverables: [
      'Brand-aligned spatial & customer journey mapping',
      'Acoustic ceiling, glass partition & HVAC coordination',
      'Custom reception & display millwork engineering',
      'Code-compliant lighting & safety planning',
    ],
    typicalTimeline: '10 – 18 Weeks',
    startingScope: 'Offices, Retail & Hospitality',
    image: './images/portfolio_commercial_space_1794908443697.jpg',
    defaultStyle: 'Contemporary',
  },
  {
    id: 'srv-villa',
    number: '03',
    title: 'Luxury Villa Interiors',
    iconName: 'Landmark',
    shortDescription:
      'End-to-end architectural interiors for multi-level villas, courtyard homes, and estate residences.',
    fullDescription:
      'Designed specifically for expansive footprints and Kerala’s tropical climate, our villa interiors celebrate double-height volumes, natural stone cladding, custom staircases, and indoor-outdoor living.',
    deliverables: [
      'Double-height foyer & staircase detailing',
      'Natural marble, granite & hardwood specification',
      'Indoor courtyard & patio integration',
      'Dedicated site supervision from shell to handover',
    ],
    typicalTimeline: '18 – 28 Weeks',
    startingScope: '3,000 – 10,000+ Sq. Ft. Villas',
    image: './images/portfolio_villa_interior_1794908441583.jpg',
    defaultStyle: 'Luxury',
  },
  {
    id: 'srv-apartment',
    number: '04',
    title: 'Apartment Interior Design',
    iconName: 'LayoutGrid',
    shortDescription:
      'Smart, airy, storage-optimized luxury interiors that maximize light and openness in urban apartments.',
    fullDescription:
      'From 2BHK residences to sky penthouses, we eliminate wasted corridors, introduce concealed vertical storage, and unify living, dining, and kitchen sightlines.',
    deliverables: [
      'Builder layout optimization & wall-free storage',
      'Space-saving modular joinery & foyer units',
      'Seamless balcony & utility aesthetics',
      'Fast-track 60–90 day factory-finished execution',
    ],
    typicalTimeline: '8 – 14 Weeks',
    startingScope: '2BHK, 3BHK, 4BHK & Penthouses',
    image: './images/portfolio_apartment_interior_1794908443108.jpg',
    defaultStyle: 'Contemporary',
  },
  {
    id: 'srv-kitchen',
    number: '05',
    title: 'Modular Kitchen Design',
    iconName: 'UtensilsCrossed',
    shortDescription:
      'Precision-engineered kitchens using BWP marine plywood, quartz/marble counters, and European soft-close hardware.',
    fullDescription:
      'Built for heavy Indian cooking while maintaining sleek international aesthetics—featuring moisture-resistant carcasses, tall pantry pull-outs, corner carousels, and built-in appliance integration.',
    deliverables: [
      'Ergonomic work-triangle & island layout',
      'BWP grade marine ply / HDHMR moisture-proof build',
      'Blum / Hettich hardware & hidden appliance pockets',
      'Under-cabinet task lighting & quartz cladding',
    ],
    typicalTimeline: '5 – 8 Weeks',
    startingScope: 'L-Shape, U-Shape, Parallel & Island',
    image: './images/portfolio_modular_kitchen_1794908440879.jpg',
    defaultStyle: 'Modern',
  },
  {
    id: 'srv-bedroom-living',
    number: '06',
    title: 'Bedroom & Living Room Design',
    iconName: 'BedDouble',
    shortDescription:
      'Restful bedroom sanctuaries and welcoming living lounges crafted with bespoke upholstery, paneling, and warm lighting.',
    fullDescription:
      'Every primary suite and formal living room is composed around tactile comfort—pairing acoustic wall treatments, custom TV consoles, upholstered headboards, and layered drapery.',
    deliverables: [
      'Custom headboard & fluted wall paneling',
      'Bespoke TV unit & concealed wire management',
      'Layered ambient, accent & reading lighting',
      'Curated rug, curtain & art styling guidance',
    ],
    typicalTimeline: '6 – 10 Weeks',
    startingScope: 'Single Rooms or Full-Floor Suites',
    image: './images/portfolio_master_bedroom_1794908441516.jpg',
    defaultStyle: 'Minimalist',
  },
  {
    id: 'srv-3d-planning',
    number: '07',
    title: 'Space Planning & 3D Visualization',
    iconName: 'Box',
    shortDescription:
      'Walk through your future home before a single nail is driven, with accurate 2D CAD layouts and photorealistic 3D renders.',
    fullDescription:
      'Eliminate guesswork with dimension-accurate architectural floor plans, furniture flow studies, daylight simulations, and high-resolution 3D visualizations showing exact finishes.',
    deliverables: [
      'Measured site survey & 2D furniture layout',
      'Isometric spatial zoning & circulation studies',
      'High-resolution 3D renders per room',
      'Electrical, plumbing & ceiling working drawings',
    ],
    typicalTimeline: '2 – 4 Weeks',
    startingScope: 'Pre-Execution Design Package',
    image: './images/service_space_planning_1794908444119.jpg',
    defaultStyle: 'Modern',
  },
  {
    id: 'srv-ceiling-lighting',
    number: '08',
    title: 'False Ceiling & Lighting Design',
    iconName: 'SunMedium',
    shortDescription:
      'Sculptural gypsum and timber ceilings engineered with recessed magnetic tracks, coves, and warm architectural fixtures.',
    fullDescription:
      'Lighting defines the emotional mood of luxury interiors. We design multi-circuit false ceilings that conceal AC ducts and beams while casting warm, glare-free illumination.',
    deliverables: [
      'Gypsum, POP & timber slat ceiling elevations',
      'Concealed curtain pelmets & AC grille detailing',
      'Lux-level calculation & 2700K–4000K scene zoning',
      'Magnetic track, linear profile & chandelier plans',
    ],
    typicalTimeline: '3 – 6 Weeks',
    startingScope: 'Whole-Home or Zone Upgrades',
    image: './images/portfolio_false_ceiling_1794908443961.jpg',
    defaultStyle: 'Contemporary',
  },
  {
    id: 'srv-furniture-wardrobes',
    number: '09',
    title: 'Furniture & Custom Wardrobes',
    iconName: 'DoorClosed',
    shortDescription:
      'Bespoke walk-in closets, sliding glass wardrobes, dining tables, and custom-sized sofas crafted to millimeter precision.',
    fullDescription:
      'Factory-finished cabinetry and handcrafted hardwood furniture built to fit exact architectural niches—featuring fluted glass shutters, sensor wardrobe lighting, and organized accessory drawers.',
    deliverables: [
      'Floor-to-ceiling hinged & sliding wardrobes',
      'Walk-in closet islands & vanity integration',
      'Custom teak/oak dining & console tables',
      'Precision German edge-banding & lacquer finishes',
    ],
    typicalTimeline: '4 – 8 Weeks',
    startingScope: 'Custom Millwork & Loose Furniture',
    image: './images/portfolio_wardrobe_storage_1794908444912.jpg',
    defaultStyle: 'Luxury',
  },
  {
    id: 'srv-renovation',
    number: '10',
    title: 'Renovation & Remodeling',
    iconName: 'Hammer',
    shortDescription:
      'Sensitive structural transformations that modernize older homes, heritage residences, and commercial floors.',
    fullDescription:
      'We reimagine dated layouts into bright contemporary spaces—handling civil modifications, waterproofing, flooring replacement, electrical rewiring, and modern millwork seamlessly.',
    deliverables: [
      'Structural assessment & non-load wall reconfiguration',
      'Complete electrical, plumbing & waterproofing renewal',
      'Tile, marble & engineered wood floor upgrades',
      'Dust-controlled, timeline-committed site execution',
    ],
    typicalTimeline: '10 – 18 Weeks',
    startingScope: 'Full-Home & Commercial Upgrades',
    image: './images/service_turnkey_renovation_1794908445193.jpg',
    defaultStyle: 'Traditional',
  },
  {
    id: 'srv-turnkey',
    number: '11',
    title: 'Turnkey Interior Solutions',
    iconName: 'KeyRound',
    shortDescription:
      'One dedicated partner from initial architectural sketch to final deep cleaning and key handover—zero coordination stress.',
    fullDescription:
      'Our flagship single-point delivery model integrates design, material procurement, civil work, factory carpentry, lighting, soft furnishings, and rigorous quality checks under one transparent contract.',
    deliverables: [
      'Dedicated Lead Architect & Site Project Manager',
      'Itemized fixed-price BOQ with zero hidden extras',
      'Weekly photo & milestone progress reports',
      '10-Year hardware & workmanship warranty',
    ],
    typicalTimeline: '12 – 24 Weeks',
    startingScope: 'Complete Concept-to-Key Execution',
    image: './images/portfolio_office_interior_1794908442728.jpg',
    defaultStyle: 'Luxury',
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'wcu-1',
    number: '01',
    title: 'Experienced Interior Designers',
    description:
      'A senior multidisciplinary team of interior architects, lighting specialists, and master craftsmen with 14+ years of regional excellence.',
    iconName: 'Award',
  },
  {
    id: 'wcu-2',
    number: '02',
    title: 'Customized Design Solutions',
    description:
      'No cookie-cutter templates. Every molding profile, cabinet proportion, and finish palette is drawn specifically around your space.',
    iconName: 'SlidersHorizontal',
  },
  {
    id: 'wcu-3',
    number: '03',
    title: 'Premium Quality Materials',
    description:
      'Certified BWP marine plywood, natural marble, kiln-dried hardwoods, and genuine Blum/Hettich hardware built for humid coastal climates.',
    iconName: 'Gem',
  },
  {
    id: 'wcu-4',
    number: '04',
    title: 'Creative Space Planning',
    description:
      'Intelligent circulation, cross-ventilation, and concealed architectural storage that unlock up to 25% more usable living area.',
    iconName: 'Compass',
  },
  {
    id: 'wcu-5',
    number: '05',
    title: '3D Design Visualization',
    description:
      'Photorealistic walkthrough renders and physical material sample boxes approved before fabrication begins.',
    iconName: 'Layers',
  },
  {
    id: 'wcu-6',
    number: '06',
    title: 'Transparent Pricing',
    description:
      'Detailed line-by-line Bill of Quantities (BOQ) locked upfront—ensuring complete budget clarity with zero surprise escalations.',
    iconName: 'FileCheck2',
  },
  {
    id: 'wcu-7',
    number: '07',
    title: 'On-Time Project Delivery',
    description:
      'Parallel factory production and strict milestone scheduling ensure we hand over your keys right on the promised date.',
    iconName: 'Clock3',
  },
  {
    id: 'wcu-8',
    number: '08',
    title: 'Complete Turnkey Solutions',
    description:
      'Single-point accountability covering design, civil modifications, electrical, ceiling, modular woodwork, and final styling.',
    iconName: 'ShieldCheck',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Dr. Aravind & Meera Menon',
    roleOrProperty: 'Contemporary Villa',
    location: 'Edappally, Ernakulam',
    projectScope: 'Turnkey Villa Interiors & Modular Kitchen',
    rating: 5,
    quote:
      'Before ELITE DECOR stepped in, our bare concrete shell felt overwhelming to coordinate across separate contractors. Their team translated our love for warm teak, travertine, and uncluttered rooms into 3D visuals that matched reality down to the millimeter.',
    outcome: 'Delivered 4 days ahead of schedule within the exact agreed BOQ.',
    initials: 'AM',
  },
  {
    id: 'test-2',
    clientName: 'Rohan & Ananya Kurian',
    roleOrProperty: 'Skyline Waterfront 3BHK Apartment',
    location: 'Marine Drive, Kochi',
    projectScope: 'Apartment Interiors, False Ceiling & Wardrobes',
    rating: 5,
    quote:
      'We wanted an airy apartment that did not feel cramped with bulky cupboards. ELITE DECOR redesigned our foyer and living partition, gave us floor-to-ceiling fluted glass wardrobes, and layered warm cove lighting that completely transformed our evenings.',
    outcome: 'Increased concealed storage capacity by 35% without losing floor openness.',
    initials: 'RK',
  },
  {
    id: 'test-3',
    clientName: 'Faisal Rahman',
    roleOrProperty: 'Managing Director, Malabar Horizon Advisors',
    location: 'Infopark, Kakkanad',
    projectScope: 'Executive Corporate Office Interiors',
    rating: 5,
    quote:
      'Our previous office lacked acoustic privacy and client presence. ELITE DECOR engineered walnut acoustic slat walls, glass meeting suites, and a travertine reception that immediately elevated how international clients perceive our firm.',
    outcome: 'Commercial fit-out completed in 16 weeks with zero downtime.',
    initials: 'FR',
  },
  {
    id: 'test-4',
    clientName: 'Lakshmi & Vivek Nair',
    roleOrProperty: 'Heritage Home Remodel',
    location: 'Panampilly Nagar, Kochi',
    projectScope: 'Renovation, Modular Kitchen & Master Suite',
    rating: 5,
    quote:
      'Transforming a 22-year-old house without losing its soul was our biggest worry. Their architects preserved our courtyard warmth while introducing a waterproof BWP walnut modular kitchen and serene master bedroom sanctuary.',
    outcome: 'Seamless structural & interior transformation with weekly transparent reporting.',
    initials: 'LN',
  },
];

export const PROPERTY_TYPES = [
  'Apartment',
  'Villa',
  'Independent House',
  'Office',
  'Commercial',
] as const;

export const DESIGN_STYLES = [
  'Modern',
  'Contemporary',
  'Minimalist',
  'Luxury',
  'Scandinavian',
  'Traditional',
] as const;

export const BUDGET_RANGES = [
  '₹5 Lakhs – ₹10 Lakhs',
  '₹10 Lakhs – ₹20 Lakhs',
  '₹20 Lakhs – ₹40 Lakhs',
  '₹40 Lakhs – ₹75 Lakhs',
  '₹75 Lakhs+',
] as const;
