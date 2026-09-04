import { Project, ServiceItem, ProcessStep, Testimonial, StatItem, InstagramPost } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'monochrome-residence',
    number: 'PROJECT 01',
    title: 'THE MONOCHROME RESIDENCE',
    subtitle: 'A study in tactile minimalism and light filtration',
    category: 'Residential',
    filterCategory: 'RESIDENTIAL',
    location: 'Bangalore',
    year: '2026',
    area: '4,600 SQ FT',
    heroImage: '/images/photo-1600210492486-724fe5c67fb0.jpg',
    overview: 'The Monochrome Residence was conceived as a sanctuary of quiet restraint. Utilizing a bespoke palette of honed grey travertine, black stained ash, and brushed aluminium, the dwelling orchestrates daylight to carve out rhythmic volumes across an expansive two-level layout.',
    challenge: 'Rebalancing a cavernous concrete shell to foster intimacy, acoustic comfort, and seamless integration between public entertaining galleries and secluded private quarters.',
    concept: 'Architectural subtraction: eliminating extraneous partition walls in favor of monumental sliding timber panels and low-profile cantilevered stone planes that guide motion organically.',
    services: ['Complete Interior Architecture', 'Custom Millwork & Lighting', 'Acoustic Engineering', 'Art Curation'],
    materials: ['Honed Silver Travertine', 'Black Stained Ash', 'Brushed Aluminium', 'Raw Bouclé & Belgian Linen'],
    galleryImages: [
      '/images/photo-1600585154340-be6161a56a0c.jpg',
      '/images/photo-1600607687939-ce8a6c25118c.jpg',
      '/images/photo-1600566753376-12c8ab7fb75b.jpg',
      '/images/photo-1600566752355-35792bedcfea.jpg'
    ],
    beforeImage: '/images/photo-1513694203232-719a280e022f.jpg',
    afterImage: '/images/photo-1600210492486-724fe5c67fb0.jpg',
    featured: true
  },
  {
    id: 'serene-villa',
    number: 'PROJECT 02',
    title: 'THE SERENE VILLA',
    subtitle: 'Biophilic luxury framed by courtyard geometries',
    category: 'Villa',
    filterCategory: 'RESIDENTIAL',
    location: 'Coorg Foothills',
    year: '2025',
    area: '6,800 SQ FT',
    heroImage: '/images/photo-1600596542815-ffad4c1539a9.jpg',
    overview: 'An earthy retreat bridging monolithic board-formed concrete with floor-to-ceiling glass pavilions. The interior blurs indoor and outdoor realms through recessed pocket doors and natural limestone flooring extending out toward reflection pools.',
    challenge: 'Harmonizing high humidity and dramatic monsoon conditions with museum-grade timber joinery and raw stone detailing.',
    concept: 'Pavilions of calm: framing vistas of the surrounding canopy while grounding the central living space with a subterranean sunken hearth.',
    services: ['Architectural Interior Design', 'Bespoke Furniture Fabrication', 'Landscape Integration', 'Turnkey Execution'],
    materials: ['Board-Formed Concrete', 'White Oak Slatting', 'Jura Limestone', 'Aged Bronze Hardware'],
    galleryImages: [
      '/images/photo-1600585154526-990dced4db0d.jpg',
      '/images/photo-1600573472550-8090b5e0745e.jpg',
      '/images/photo-1600607687920-4e2a09cf159d.jpg'
    ],
    beforeImage: '/images/photo-1503387762-592deb58ef4e.jpg',
    afterImage: '/images/photo-1600596542815-ffad4c1539a9.jpg',
    featured: true
  },
  {
    id: 'executive-office',
    number: 'PROJECT 03',
    title: 'THE EXECUTIVE OFFICE',
    subtitle: 'Sculptural workplace engineered for focus and prestige',
    category: 'Workspace',
    filterCategory: 'WORKSPACES',
    location: 'Central Business District, Bangalore',
    year: '2025',
    area: '5,200 SQ FT',
    heroImage: '/images/photo-1497366216548-37526070297c.jpg',
    overview: 'A headquarters designed for a global venture firm. Shunning standard sterile corporate tropes, the space introduces acoustic fluted timber partitions, blackened steel structural portals, and custom ergonomic desks sculpted from solid walnut.',
    challenge: 'Accommodating complex technological infrastructure and sound privacy within a transparent, naturally illuminated open layout.',
    concept: 'Spatial cadence: alternating quiet deep-focus pods with luminous communal salons anchored by architectural ceiling light troughs.',
    services: ['Corporate Space Planning', 'Executive Suite Design', 'Custom Desking Systems', 'Integrated AV Concealment'],
    materials: ['Smoked European Walnut', 'Blackened Steel', 'Micro-perforated Acoustic Felt', 'Calacatta Grigio Marble'],
    galleryImages: [
      '/images/photo-1497215728101-856f4ea42174.jpg',
      '/images/photo-1497366811353-6870744d04b2.jpg',
      '/images/photo-1504384308090-c894fdcc538d.jpg'
    ],
    featured: true
  },
  {
    id: 'urban-apartment',
    number: 'PROJECT 04',
    title: 'THE URBAN APARTMENT',
    subtitle: 'High-density spatial efficiency wrapped in warm minimalism',
    category: 'Residential',
    filterCategory: 'RESIDENTIAL',
    location: 'Indiranagar, Bangalore',
    year: '2025',
    area: '2,800 SQ FT',
    heroImage: '/images/photo-1600607687644-c7171b42498f.jpg',
    overview: 'A full gut renovation of a 1990s apartment into an airy modern loft. Monolithic microcement floors create seamless continuity while full-height pivot doors conceal a state-of-the-art kitchen and hidden storage banks.',
    challenge: 'Overcoming structural column limitations and low 9-foot ceiling slabs to achieve a generous sense of air and volume.',
    concept: 'Continuous Horizon: continuous datum lines across joinery and flush baseboards expand visual breadth across compact metropolitan boundaries.',
    services: ['Architectural Remodeling', 'Custom Cabinetry & Joinery', 'Bathroom Engineering', 'Lighting Design'],
    materials: ['Seamless Warm Microcement', 'Bleached Ash Veneer', 'Brushed Champagne Brass', 'Fluted Cast Glass'],
    galleryImages: [
      '/images/photo-1600566753190-17f0baa2a6c3.jpg',
      '/images/photo-1600585152220-90363fe7e115.jpg'
    ],
    beforeImage: '/images/photo-1581858726788-75bc0f6a952d.jpg',
    afterImage: '/images/photo-1600607687644-c7171b42498f.jpg',
    featured: true
  },
  {
    id: 'modern-retreat',
    number: 'PROJECT 05',
    title: 'THE MODERN RETREAT',
    subtitle: 'Cantilevered mountain villa with elemental materiality',
    category: 'Villa',
    filterCategory: 'RESIDENTIAL',
    location: 'Nandi Hills',
    year: '2024',
    area: '7,400 SQ FT',
    heroImage: '/images/photo-1600585154340-be6161a56a0c.jpg',
    overview: 'Perched on a rocky ridge, this villa draws its strength from exposed basalt stone walls, raw teak beams, and expansive terrace colonnades that frame sweeping views of the morning mist.',
    challenge: 'Engineering windbreaks and thermal mass retention while keeping the envelope completely open to panoramic natural vistas.',
    concept: 'Elemental Anchor: Heavy grounding masonry roots the structure below, while delicate floating roof planes create an ethereal living pavilion above.',
    services: ['Complete Interior Masterplanning', 'Custom Fireplace Architecture', 'Handcrafted Furniture', 'Site Supervision'],
    materials: ['Split-Face Basalt Stone', 'Reclaimed Old Teak', 'Charcoal Slate', 'Hand-hammered Copper'],
    galleryImages: [
      '/images/photo-1600585154526-990dced4db0d.jpg',
      '/images/photo-1600566753376-12c8ab7fb75b.jpg'
    ],
    featured: true
  },
  {
    id: 'signature-workspace',
    number: 'PROJECT 06',
    title: 'THE SIGNATURE WORKSPACE',
    subtitle: 'A sensory boutique atelier for design & architecture professionals',
    category: 'Commercial',
    filterCategory: 'COMMERCIAL',
    location: 'Koramangala, Bangalore',
    year: '2024',
    area: '4,100 SQ FT',
    heroImage: '/images/photo-1497366754035-f200968a6e72.jpg',
    overview: 'An experimental commercial showcase combining an exhibition gallery, material laboratory, and collaborative design studios under exposed coffered concrete ceilings.',
    challenge: 'Creating modular zones that adapt seamlessly from daily focused drafting to after-hours client presentations and lectures.',
    concept: 'The Workshop as Gallery: showcasing raw building blocks alongside refined custom furnishings to elevate the creative process.',
    services: ['Commercial Architecture', 'Exhibition Design', 'Modular Storage Solutions', 'Curated Lighting Systems'],
    materials: ['Cast Terrazzo', 'Anodized Dark Bronze', 'Raw Clay Plaster', 'Fluted Oak Screens'],
    galleryImages: [
      '/images/photo-1497366216548-37526070297c.jpg',
      '/images/photo-1497215728101-856f4ea42174.jpg'
    ],
    featured: true
  },
  {
    id: 'heritage-restoration',
    number: 'PROJECT 07',
    title: 'THE HERITAGE CONVERSION',
    subtitle: 'Revitalizing colonial-era proportions with contemporary restraint',
    category: 'Renovation',
    filterCategory: 'RENOVATION',
    location: 'Richmond Town, Bangalore',
    year: '2024',
    area: '3,900 SQ FT',
    heroImage: '/images/photo-1600607687939-ce8a6c25118c.jpg',
    overview: 'A historic bungalow restored to its original masonry grandeur while introducing modern concealed HVAC, custom terrazzo stair treads, and minimal steel fenestration.',
    challenge: 'Preserving fragile 70-year-old lime plaster arches while integrating high-performance modern acoustic glass and concealed electricals.',
    concept: 'Dialogue Across Eras: highlighting the historical brick archways through crisp, razor-sharp modern shadow gaps and unadorned materials.',
    services: ['Heritage Architecture Restructuring', 'Structural Remediation', 'Custom Lighting', 'Artisan Masonry'],
    materials: ['Traditional Lime Plaster', 'Cast In-Situ Terrazzo', 'Blackened Structural Steel', 'Solid Rosewood'],
    galleryImages: [
      '/images/photo-1600210492486-724fe5c67fb0.jpg',
      '/images/photo-1600585154340-be6161a56a0c.jpg'
    ],
    beforeImage: '/images/photo-1513694203232-719a280e022f.jpg',
    afterImage: '/images/photo-1600607687939-ce8a6c25118c.jpg',
    featured: false
  },
  {
    id: 'minimalist-duplex',
    number: 'PROJECT 08',
    title: 'THE MINIMALIST DUPLEX',
    subtitle: 'Sculptural double-height volume with monolithic staircase',
    category: 'Residential',
    filterCategory: 'RESIDENTIAL',
    location: 'Whitefield, Bangalore',
    year: '2023',
    area: '5,100 SQ FT',
    heroImage: '/images/photo-1600566753376-12c8ab7fb75b.jpg',
    overview: 'Centered around a 22-foot double-height void, this residence features a floating steel plate staircase, bespoke full-height book-matched travertine slabs, and hidden acoustic wood wall paneling.',
    challenge: 'Preventing reverberation in a large double-height volume while preserving pure minimalist visual clarity.',
    concept: 'Geometric Tension: light steel elements floating gracefully against massive solid masonry pillars.',
    services: ['Duplex Interior Planning', 'Floating Stair Engineering', 'Feature Wall Articulation', 'Custom Smart Home Automation'],
    materials: ['Roman Silver Travertine', '12mm Solid Steel Plate', 'White Matte Polyurethane', 'Smoked European Oak'],
    galleryImages: [
      '/images/photo-1600596542815-ffad4c1539a9.jpg',
      '/images/photo-1600607687644-c7171b42498f.jpg'
    ],
    featured: false
  }
];

export const HORIZONTAL_SHOWCASE = [
  {
    number: '01',
    category: 'Residential',
    title: 'The Serene House',
    location: 'Bangalore',
    image: '/images/photo-1600585154340-be6161a56a0c.jpg',
    year: '2026'
  },
  {
    number: '02',
    category: 'Workspace',
    title: 'Linear Office',
    location: 'CBD Bangalore',
    image: '/images/photo-1497366216548-37526070297c.jpg',
    year: '2025'
  },
  {
    number: '03',
    category: 'Commercial',
    title: 'The Atelier',
    location: 'Indiranagar',
    image: '/images/photo-1497366754035-f200968a6e72.jpg',
    year: '2025'
  },
  {
    number: '04',
    category: 'Residential',
    title: 'Modern Habitat',
    location: 'Sadashivanagar',
    image: '/images/photo-1600210492486-724fe5c67fb0.jpg',
    year: '2026'
  },
  {
    number: '05',
    category: 'Villa',
    title: 'Ridge Pavilion',
    location: 'Coorg',
    image: '/images/photo-1600596542815-ffad4c1539a9.jpg',
    year: '2024'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Residential Interior Design',
    tagline: 'Private sanctuaries curated for elevated living.',
    description: 'From comprehensive layout restructuring to bespoke millwork, we craft residential interiors that balance emotional warmth with exacting architectural precision.',
    deliverables: ['Custom floorplans & space allocation', 'Comprehensive 3D visualizations', 'Bespoke joinery & kitchen detailing', 'Lighting & acoustic design'],
    image: '/images/photo-1600210492486-724fe5c67fb0.jpg'
  },
  {
    number: '02',
    title: 'Commercial Interior Design',
    tagline: 'Compelling spatial experiences that define brand distinction.',
    description: 'We develop retail flagships, hospitality spaces, and culinary venues designed to immerse guests in a tactile, unforgettable brand journey.',
    deliverables: ['Customer journey mapping', 'Custom display fixtures & showcases', 'Brand materiality guidelines', 'Code compliance & accessibility'],
    image: '/images/photo-1497366754035-f200968a6e72.jpg'
  },
  {
    number: '03',
    title: 'Office & Workspace Design',
    tagline: 'Inspiring work environments tuned for collaboration and deep focus.',
    description: 'Workplace architecture that harmonizes acoustic serenity, biophilic integration, and flexible zones that effortlessly support high-performance teams.',
    deliverables: ['Ergonomic zoning & density audits', 'Acoustic baffle & ceiling systems', 'Integrated tech & conference suites', 'Custom collaboration hubs'],
    image: '/images/photo-1497366216548-37526070297c.jpg'
  },
  {
    number: '04',
    title: 'Space Planning',
    tagline: 'Calculated spatial flow that maximizes natural illumination and volume.',
    description: 'A deep architectural interrogation of circulation, sightlines, and volumetric proportions to eliminate dead space and unlock effortless movement.',
    deliverables: ['Demolition & structural schematics', 'Circulation & sightline diagrams', 'Furniture footprint masterplans', 'Daylight study simulations'],
    image: '/images/photo-1600585154340-be6161a56a0c.jpg'
  },
  {
    number: '05',
    title: 'Renovation & Remodeling',
    tagline: 'Transforming existing structures with radical modern clarity.',
    description: 'Reimagining aging residences and dated commercial properties into luminous contemporary spaces while honoring the underlying architectural integrity.',
    deliverables: ['Structural viability inspection', 'Complete MEP & utility upgrades', 'Envelope & waterproofing restoration', 'Phased execution roadmaps'],
    image: '/images/photo-1600607687939-ce8a6c25118c.jpg'
  },
  {
    number: '06',
    title: 'Custom Furniture Design',
    tagline: 'One-of-a-kind sculptural pieces tailored exclusively to your space.',
    description: 'Working hand-in-glove with master stone carvers, metalsmiths, and woodturners to build bespoke dining tables, seating, consoles, and vanity units.',
    deliverables: ['Shop drawings & 1:1 joinery details', 'Material sampling & finish prototypes', 'Direct artisan oversight', 'White-glove installation'],
    image: '/images/photo-1600566753376-12c8ab7fb75b.jpg'
  },
  {
    number: '07',
    title: '3D Visualization',
    tagline: 'Photorealistic digital renderings of light, shadow, and materiality.',
    description: 'Hyper-detailed architectural imagery that allows you to experience every finish, daylight variation, and material transition long before construction begins.',
    deliverables: ['Physically based lighting simulations', 'VR walkthrough models', 'High-res presentation stills', 'Material mood animations'],
    image: '/images/photo-1600573472550-8090b5e0745e.jpg'
  },
  {
    number: '08',
    title: 'Turnkey Interior Solutions',
    tagline: 'End-to-end execution from initial concept to the final flower vase.',
    description: 'Complete project stewardship. We manage procurement, contractors, timelines, cost control, and quality audits so you can step into a finished masterpiece.',
    deliverables: ['Comprehensive budget management', 'On-site technical supervision', 'Vendor procurement & quality QA', 'Turnkey handover & styling'],
    image: '/images/photo-1600596542815-ffad4c1539a9.jpg'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    phase: 'DISCOVER',
    title: 'Immersion & Spatial Discovery',
    summary: 'Understanding your lifestyle, architectural preferences, and programmatic requirements.',
    details: 'We begin with an exhaustive consultation covering everyday rituals, spatial grievances, aesthetic inclinations, and budgetary parameters to craft a tailored project brief.'
  },
  {
    number: '02',
    phase: 'DEFINE',
    title: 'Spatial Planning & Concept Mood',
    summary: 'Defining circulation, primary sightlines, and fundamental tactile directions.',
    details: 'Through iterative layout studies, block models, and curated material boards, we establish the foundational geometry and emotional tone of the space.'
  },
  {
    number: '03',
    phase: 'DESIGN',
    title: 'Refined Details & Photorealistic 3D',
    summary: 'Selecting exact stones, veneers, architectural hardware, and lighting systems.',
    details: 'Every millwork joinery junction, shadow line, recessed fixture, and bespoke furniture piece is modeled in high-fidelity 3D renderings and vetted with physical samples.'
  },
  {
    number: '04',
    phase: 'DEVELOP',
    title: 'Technical Schematics & Execution Planning',
    summary: 'Transforming vision into precise, millimeter-accurate construction packages.',
    details: 'We compile comprehensive MEP schematics, lighting control schedules, stone fabrication sheets, and vendor tender dossiers to eliminate ambiguities on site.'
  },
  {
    number: '05',
    phase: 'DELIVER',
    title: 'Supervision, Installation & White-Glove Handover',
    summary: 'Rigorous on-site quality control, bespoke furniture placement, and final styling.',
    details: 'Our team conducts daily site inspections, coordinates specialist artisans, verifies tolerances, and delivers a turnkey residence ready for immediate habitation.'
  }
];

export const STATISTICS: StatItem[] = [
  {
    value: 50,
    suffix: '+',
    label: 'SPACES DESIGNED',
    sublabel: 'Bespoke residences and premier commercial environments across India'
  },
  {
    value: 10,
    suffix: '+',
    label: 'YEARS OF CRAFT',
    sublabel: 'Refining architectural minimalism, joinery, and spatial harmony'
  },
  {
    value: 98,
    suffix: '%',
    label: 'CLIENT SATISFACTION',
    sublabel: 'Enduring relationships built on transparency and exacting execution'
  },
  {
    value: 25,
    suffix: '+',
    label: 'PROJECTS COMPLETED',
    sublabel: 'Turnkey architectural transformations delivered on schedule'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "AA Designo completely transformed our home. Every space feels intentional, beautiful and uniquely ours. The way light cascades across the natural stone walls has changed how our family experiences mornings.",
    clientName: "Vikram & Ananya Sharma",
    projectTitle: "The Monochrome Residence",
    projectType: "Full Villa Architecture & Interiors",
    year: "2026"
  },
  {
    quote: "Working with AA Designo was a lesson in pure restraint and quiet luxury. They stripped away all the visual clutter and left behind spaces that breathe. Our executive suite commands immediate respect from every global investor who enters.",
    clientName: "Rohan Singhal",
    projectTitle: "Central Business District Office",
    projectType: "Corporate Headquarters",
    year: "2025"
  },
  {
    quote: "Their precision in custom millwork and material harmony is unmatched. The dialogue between the raw board-formed concrete and warm white oak slatted walls in our villa feels like an architectural sanctuary.",
    clientName: "Dr. Malini Iyer",
    projectTitle: "The Serene Villa",
    projectType: "Private Estate",
    year: "2025"
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: '/images/photo-1600210492486-724fe5c67fb0.jpg',
    caption: 'Quiet morning light over brushed ash and silver travertine. #AADesigno #MinimalArchitecture',
    likes: '1,420',
    size: 'tall'
  },
  {
    id: 'ig-2',
    image: '/images/photo-1600585154340-be6161a56a0c.jpg',
    caption: 'Detail study: Cantilevered dining bench carved from solid grey granite. #DetailDefineDesign',
    likes: '980',
    size: 'square'
  },
  {
    id: 'ig-3',
    image: '/images/photo-1600607687939-ce8a6c25118c.jpg',
    caption: 'Material board in progress: Fluted limestone, oxidized bronze, raw Belgian wool. #Materiality',
    likes: '1,890',
    size: 'tall'
  },
  {
    id: 'ig-4',
    image: '/images/photo-1497366216548-37526070297c.jpg',
    caption: 'Acoustic serenity inside The Executive Office. #WorkplaceDesign #SpatialAesthetics',
    likes: '1,120',
    size: 'square'
  },
  {
    id: 'ig-5',
    image: '/images/photo-1600566753376-12c8ab7fb75b.jpg',
    caption: 'Custom floating steel staircase with recessed LED wash. #InteriorArchitecture',
    likes: '2,340',
    size: 'wide'
  },
  {
    id: 'ig-6',
    image: '/images/photo-1600596542815-ffad4c1539a9.jpg',
    caption: 'Evening atmosphere at The Serene Villa. Nature and architecture in dialogue. #LuxuryLiving',
    likes: '3,105',
    size: 'tall'
  }
];

export const MATERIALS_COLLAGE = [
  {
    title: 'Silver Travertine',
    type: 'Natural Stone',
    image: '/images/photo-1600585154340-be6161a56a0c.jpg',
    span: 'col-span-12 md:col-span-7 row-span-2'
  },
  {
    title: 'Smoked Ash & Teak',
    type: 'Artisan Millwork',
    image: '/images/photo-1600566753376-12c8ab7fb75b.jpg',
    span: 'col-span-12 md:col-span-5 row-span-1'
  },
  {
    title: 'Aged Patinated Bronze',
    type: 'Architectural Metals',
    image: '/images/photo-1600607687920-4e2a09cf159d.jpg',
    span: 'col-span-12 md:col-span-5 row-span-1'
  },
  {
    title: 'Board-Formed Concrete',
    type: 'Structural Surface',
    image: '/images/photo-1600596542815-ffad4c1539a9.jpg',
    span: 'col-span-12 md:col-span-4 row-span-1'
  },
  {
    title: 'Raw Linen & Bouclé',
    type: 'Tactile Textiles',
    image: '/images/photo-1600210492486-724fe5c67fb0.jpg',
    span: 'col-span-12 md:col-span-8 row-span-1'
  }
];
