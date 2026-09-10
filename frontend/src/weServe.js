// =====================================================================
//  WE SERVE — 10 service categories, each with detailed sub-pages.
//  Data-driven: category pages and detail pages render from this file.
// =====================================================================
import { IMAGES } from "./content";

const IMG = {
  cement: IMAGES.serviceCement,
  power: IMAGES.servicePower,
  chemical: IMAGES.serviceChemical,
  steel: IMAGES.serviceSteel,
  balance: IMAGES.serviceBalance,
  mechanical: IMAGES.expertise[0],
  industrial: "https://images.unsplash.com/photo-1527335988388-b40ee248d80c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  civil: "https://images.unsplash.com/photo-1712711649566-16c7cfcf341c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  electrical: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  additional: "https://images.unsplash.com/photo-1628158088791-89567a8e84ec?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  hero: IMAGES.expertise[1],
};

export const WE_SERVE = [
  {
    slug: "cement-plant",
    title: "Cement & Cement Plant Projects",
    short: "Cement Plants",
    tagline: "Complete cement plant solutions — from foundations to commissioning.",
    image: IMG.cement,
    intro: [
      "MME delivers complete cement plant solutions — civil foundations, structural steel, fabrication, erection and commissioning of process equipment. With more than two decades of collective experience across India's largest cement producers, we execute every mandate to exacting quality and safety standards.",
      "From clinker handling and conveyor systems to preheater towers and packing plants, our teams manage the full mechanical scope with precision — whether a shutdown modification or a full greenfield line installation.",
    ],
    subs: [
      { slug: "construction", title: "Cement Plant Construction", desc: "End-to-end civil and mechanical construction of greenfield cement plants.", features: ["Civil foundations & RCC works", "Structural steel fabrication & erection", "Process equipment installation", "Preheater tower & kiln support", "Utilities & balance-of-plant"] },
      { slug: "expansion", title: "Cement Plant Expansion", desc: "Capacity expansions and new line packages executed alongside live operations.", features: ["Brownfield line additions", "Tie-ins with running plant", "Phased execution planning", "Debottlenecking works", "Minimal-downtime methodology"] },
      { slug: "maintenance", title: "Cement Plant Maintenance", desc: "Planned and breakdown maintenance that keeps cement lines running reliably.", features: ["Preventive maintenance programs", "Liner & wear-part replacement", "Kiln alignment support", "Conveyor & equipment upkeep", "Emergency breakdown response"] },
      { slug: "erection-installation", title: "Plant Erection & Installation", desc: "Precision erection and installation of heavy cement process equipment.", features: ["Heavy mechanical erection", "Equipment alignment & levelling", "Mills, crushers & separators", "Fan & duct installation", "Commissioning support"] },
      { slug: "material-handling", title: "Material Handling Systems", desc: "Belt conveyors, bucket elevators and bulk handling systems.", features: ["Belt conveyor systems", "Bucket & chain elevators", "Silos & storage handling", "Packing & bulk loading", "Dust control integration"] },
      { slug: "structural-equipment", title: "Structural & Equipment Installation", desc: "Structural steel and equipment installed to tight tolerances.", features: ["Structural steel fabrication", "Platforms, stairs & walkways", "Equipment foundations", "Bolting & welding QA/QC", "Load-tested erection"] },
      { slug: "shutdown-maintenance", title: "Shutdown & Maintenance Services", desc: "Fast, disciplined shutdown execution and turnaround support.", features: ["Shutdown planning & scheduling", "Round-the-clock manpower", "Liner & refractory works", "Equipment overhaul", "Rapid re-commissioning"] },
    ],
  },
  {
    slug: "power-projects",
    title: "Power Projects",
    short: "Power",
    tagline: "Civil and mechanical works for reliable, efficient power infrastructure.",
    image: IMG.power,
    intro: [
      "MME delivers civil and mechanical works for thermal and captive power facilities — supporting efficient, reliable and cost-effective energy infrastructure for industrial clients across India.",
      "Our scope spans structural fabrication, equipment erection and balance-of-plant works, from boiler house steelwork to ducting, piping and conveyor systems, executed with a strong safety culture.",
    ],
    subs: [
      { slug: "construction", title: "Power Plant Construction", desc: "Civil and mechanical construction for thermal and captive power plants.", features: ["Boiler house steel erection", "Turbine & auxiliary foundations", "Coal & ash handling civils", "Chimney & duct support", "Balance-of-plant works"] },
      { slug: "mechanical-erection", title: "Mechanical Erection", desc: "Heavy mechanical erection to demanding power-sector tolerances.", features: ["Boiler pressure parts", "Turbine hall equipment", "Fans, mills & pumps", "Alignment & grouting", "Precision rigging"] },
      { slug: "boiler-equipment", title: "Boiler & Equipment Installation", desc: "Installation and integration of boilers and key plant equipment.", features: ["Boiler drum & pressure parts", "ESP & bag-house erection", "Ducting & expansion joints", "Equipment alignment", "Hydro & commissioning support"] },
      { slug: "structural-works", title: "Structural Works", desc: "Structural steel fabrication and erection across the power block.", features: ["Boiler & TG building steel", "Pipe racks & platforms", "Fabrication to drawings", "Welding QA/QC", "Load-tested handover"] },
      { slug: "piping", title: "Piping Works", desc: "High-pressure and utility piping fabrication and erection.", features: ["HP/LP steam piping", "Utility & water lines", "Pipe supports & hangers", "Welding & NDT", "Hydro-testing & flushing"] },
      { slug: "operation-maintenance", title: "Operation & Maintenance", desc: "O&M and shutdown support that maximises plant availability.", features: ["Routine O&M support", "Planned shutdown works", "Equipment overhaul", "Breakdown response", "Spares & manpower supply"] },
      { slug: "expansion-upgradation", title: "Plant Expansion & Upgradation", desc: "Capacity additions and modernisation of existing power assets.", features: ["Brownfield expansions", "Equipment upgradation", "Efficiency retrofits", "Tie-in works", "Phased commissioning"] },
    ],
  },
  {
    slug: "chemical-fertilizer",
    title: "Chemical & Fertilizer Plants",
    short: "Chemical & Fertilizer",
    tagline: "Precision execution for sensitive, compliance-critical process plants.",
    image: IMG.chemical,
    intro: [
      "MME executes chemical and fertilizer plant packages with a strong emphasis on precision, safety and compliance — critical for facilities handling sensitive processes and materials.",
      "We undertake fabrication and erection of process structures, tanks, pipe racks and equipment to stringent quality and industry-compliant standards, with experience across petrochemical and refinery support works.",
    ],
    subs: [
      { slug: "chemical-plants", title: "Chemical Plant Construction", desc: "Construction of chemical process plants to strict compliance standards.", features: ["Process structure erection", "Reactor & vessel installation", "Corrosion-resistant works", "Safety-critical execution", "QA/QC documentation"] },
      { slug: "fertilizer-plants", title: "Fertilizer Plant Construction", desc: "Civil and mechanical works for fertilizer manufacturing facilities.", features: ["Process building civils", "Equipment erection", "Bagging & handling systems", "Utility integration", "Commissioning support"] },
      { slug: "erection", title: "Plant Erection", desc: "Erection of process structures, equipment and skids.", features: ["Structural erection", "Skid & package units", "Heavy lift planning", "Alignment & levelling", "Rigging safety"] },
      { slug: "mechanical-installation", title: "Mechanical Installation", desc: "Installation of pumps, compressors and rotating equipment.", features: ["Rotating equipment install", "Alignment & grouting", "Vibration checks", "Lubrication systems", "Pre-commissioning"] },
      { slug: "piping", title: "Piping & Process Systems", desc: "Process and utility piping fabrication with full traceability.", features: ["Process piping erection", "Exotic-alloy welding", "NDT & PWHT", "Pressure testing", "Line traceability"] },
      { slug: "structural-works", title: "Structural Works", desc: "Structural steel and platforms for process facilities.", features: ["Pipe racks & platforms", "Equipment structures", "Fabrication to code", "Welding QA/QC", "Surface protection"] },
      { slug: "maintenance", title: "Maintenance & Shutdown", desc: "Turnaround and maintenance for chemical and fertilizer plants.", features: ["Turnaround planning", "Equipment overhaul", "Piping modifications", "Safety permit systems", "Rapid re-start"] },
    ],
  },
  {
    slug: "steel-projects",
    title: "Steel Projects",
    short: "Steel",
    tagline: "Advanced engineering for heavy steel plant construction and erection.",
    image: IMG.steel,
    intro: [
      "MME delivers steel plant projects with advanced engineering solutions — ensuring structural integrity, precise erection and optimised manufacturing processes for heavy industry.",
      "From structural fabrication to heavy mechanical erection, our teams handle the demanding tolerances and scale of the steel sector, including ongoing works for Jindal Steel (MASYC) at Jajpur, Odisha.",
    ],
    subs: [
      { slug: "construction", title: "Steel Plant Construction", desc: "Civil and mechanical construction of integrated steel plants.", features: ["Heavy civil foundations", "Structural steel erection", "Equipment installation", "Utilities & BOP", "Commissioning support"] },
      { slug: "structural-steel", title: "Structural Steel Works", desc: "Fabrication and erection of heavy structural steel.", features: ["Heavy structural fabrication", "High-tonnage erection", "Bolting & welding QA/QC", "Platforms & pipe racks", "Load-tested handover"] },
      { slug: "mechanical-erection", title: "Mechanical Erection", desc: "Precision erection of heavy steel-plant machinery.", features: ["Rolling mill equipment", "Furnace & caster erection", "Alignment to tight tolerance", "Heavy rigging", "Grouting & levelling"] },
      { slug: "equipment-installation", title: "Equipment Installation", desc: "Installation and alignment of process and utility equipment.", features: ["Cranes & handling systems", "Pumps, fans & blowers", "Alignment & testing", "Lubrication & piping tie-in", "Pre-commissioning"] },
      { slug: "piping-utility", title: "Piping & Utility Systems", desc: "Process gas, water and utility piping systems.", features: ["Utility & process piping", "Gas line works", "Welding & NDT", "Supports & hangers", "Testing & flushing"] },
      { slug: "expansion", title: "Plant Expansion", desc: "Brownfield expansions and capacity enhancement.", features: ["Line additions", "Tie-ins with live plant", "Phased execution", "Debottlenecking", "Minimal downtime"] },
      { slug: "maintenance", title: "Maintenance & Shutdown", desc: "Shutdown and maintenance support for steel plants.", features: ["Shutdown planning", "Equipment overhaul", "Structural repairs", "Emergency response", "Rapid re-start"] },
    ],
  },
  {
    slug: "industrial-construction",
    title: "Industrial Construction",
    short: "Industrial",
    tagline: "Factories, warehouses and industrial infrastructure built to last.",
    image: IMG.industrial,
    intro: [
      "MME builds industrial facilities of every scale — factories, manufacturing units, warehouses and supporting infrastructure — combining robust civil engineering with disciplined project management.",
      "From plant civil works and structural steel to complete renovation and expansion, we deliver durable, compliant industrial spaces on time and on budget.",
    ],
    subs: [
      { slug: "building", title: "Industrial Building Construction", desc: "Turnkey construction of industrial buildings and sheds.", features: ["Pre-engineered buildings", "RCC & steel structures", "Roofing & cladding", "Flooring & finishes", "Utility integration"] },
      { slug: "factory", title: "Factory & Manufacturing Facilities", desc: "Purpose-built factories and production facilities.", features: ["Process-driven layouts", "Heavy-duty flooring", "Equipment foundations", "MEP coordination", "Compliance & safety"] },
      { slug: "warehouse", title: "Warehouse Construction", desc: "High-clearance warehouses and storage facilities.", features: ["Large-span structures", "Loading dock works", "Racking foundations", "Fire & safety systems", "Fast-track delivery"] },
      { slug: "infrastructure", title: "Industrial Infrastructure", desc: "Roads, drains and utilities that support plant operations.", features: ["Internal roads", "Drainage networks", "Utility corridors", "Boundary & security works", "Site services"] },
      { slug: "civil-works", title: "Plant Civil Works", desc: "Foundations, RCC and civil packages for plants.", features: ["Equipment foundations", "RCC structures", "Trenches & pits", "Retaining structures", "Quality-controlled concrete"] },
      { slug: "structural-works", title: "Structural Works", desc: "Structural steel fabrication and erection for industry.", features: ["Steel fabrication", "Erection & bolting", "Platforms & mezzanines", "Welding QA/QC", "Surface protection"] },
      { slug: "expansion", title: "Renovation & Expansion", desc: "Upgrades, renovations and expansions of existing facilities.", features: ["Facility renovation", "Capacity expansion", "Strengthening works", "Live-site execution", "Minimal disruption"] },
    ],
  },
  {
    slug: "civil-construction",
    title: "Civil Construction",
    short: "Civil",
    tagline: "Strong foundations and durable civil structures for heavy industry.",
    image: IMG.civil,
    intro: [
      "MME's civil construction capability spans industrial civil works, RCC structures, foundations, roads, drainage and complete site development — the durable base on which every plant stands.",
      "Backed by quality-controlled concrete, experienced supervision and modern methods, we deliver civil packages that meet the toughest structural and safety requirements.",
    ],
    subs: [
      { slug: "industrial-civil", title: "Industrial Civil Works", desc: "Comprehensive civil packages for industrial plants.", features: ["Equipment foundations", "RCC & PCC works", "Trenches & sumps", "Paving & flooring", "QA/QC controlled"] },
      { slug: "rcc-structures", title: "RCC Structures", desc: "Reinforced concrete structures engineered for load and durability.", features: ["Design-to-drawing execution", "Formwork & shuttering", "Reinforcement detailing", "High-grade concrete", "Curing & testing"] },
      { slug: "foundation", title: "Foundations", desc: "Machine and building foundations for heavy loads.", features: ["Machine foundations", "Pile & raft foundations", "Anchor bolt setting", "Grouting works", "Vibration isolation"] },
      { slug: "roads-pavements", title: "Roads & Pavements", desc: "Internal roads, pavements and hardstanding areas.", features: ["Flexible & rigid pavements", "Kerbs & drains", "Heavy-vehicle roads", "Surface finishing", "Line marking"] },
      { slug: "drainage-infrastructure", title: "Drainage & Infrastructure", desc: "Storm and industrial drainage plus site infrastructure.", features: ["Storm-water drainage", "Effluent channels", "Culverts & pits", "Utility trenches", "Site grading"] },
      { slug: "buildings", title: "Buildings & Structures", desc: "Administrative, utility and support buildings.", features: ["Office & utility buildings", "Substations & control rooms", "Masonry & finishes", "Waterproofing", "Handover-ready quality"] },
      { slug: "site-development", title: "Site Development", desc: "Complete site preparation and development works.", features: ["Land clearing & grading", "Earthworks & filling", "Compaction & levelling", "Boundary works", "Site services"] },
    ],
  },
  {
    slug: "mechanical-works",
    title: "Mechanical Works",
    short: "Mechanical",
    tagline: "Erection, fabrication and maintenance across heavy industry.",
    image: IMG.mechanical,
    intro: [
      "Mechanical works are at the core of MME's expertise — mechanical erection, equipment installation, heavy-equipment handling, piping and fabrication delivered to the highest engineering standards.",
      "With our own machinery, skilled manpower and disciplined project management, we mobilise mechanical packages of any scale, anywhere in India.",
    ],
    subs: [
      { slug: "erection", title: "Mechanical Erection", desc: "Erection of mechanical equipment and structures on site.", features: ["Equipment erection", "Structural mechanical works", "Alignment & levelling", "Rigging & lifting plans", "Safety-first execution"] },
      { slug: "equipment-installation", title: "Equipment Installation", desc: "Installation and alignment of process machinery.", features: ["Rotating & static equipment", "Base plate & grouting", "Precision alignment", "Coupling & testing", "Pre-commissioning"] },
      { slug: "heavy-equipment", title: "Heavy Equipment Erection", desc: "Heavy-lift erection of large plant equipment.", features: ["Heavy-lift engineering", "Crane & rigging planning", "Load calculations", "Tandem lifts", "Certified riggers"] },
      { slug: "piping", title: "Piping Works", desc: "Fabrication and erection of process and utility piping.", features: ["Piping fabrication", "Field erection", "Welding & NDT", "Supports & hangers", "Testing & flushing"] },
      { slug: "fabrication", title: "Fabrication Works", desc: "Shop and site fabrication of steel and equipment.", features: ["Structural fabrication", "Ducting & chutes", "Tanks & hoppers", "Welding QA/QC", "Surface treatment"] },
      { slug: "material-handling", title: "Conveyor & Material Handling", desc: "Conveyor systems and bulk material handling equipment.", features: ["Belt conveyor erection", "Bucket elevators", "Chutes & transfer points", "Idler & pulley alignment", "Commissioning"] },
      { slug: "maintenance", title: "Plant Maintenance", desc: "Preventive and breakdown mechanical maintenance.", features: ["Preventive maintenance", "Equipment overhaul", "Wear-part replacement", "Condition monitoring", "Breakdown response"] },
      { slug: "shutdown-turnaround", title: "Shutdown & Turnaround", desc: "Planned shutdown and turnaround execution.", features: ["Turnaround planning", "Round-the-clock crews", "Critical-path management", "Repairs & replacement", "Rapid re-start"] },
    ],
  },
  {
    slug: "electrical-works",
    title: "Electrical Works",
    short: "Electrical",
    tagline: "Industrial and commercial electrical systems, installed and maintained.",
    image: IMG.electrical,
    intro: [
      "MME delivers complete electrical works for industrial and commercial facilities — installation, HT/LT systems, cable laying, lighting, power distribution and ongoing maintenance.",
      "Our qualified electrical teams execute to code, with rigorous testing and safety at every stage of the works.",
    ],
    subs: [
      { slug: "industrial", title: "Industrial Electrical Works", desc: "Electrical systems for plants and heavy industry.", features: ["Panel & switchgear install", "Motor & drive wiring", "Earthing systems", "Testing & commissioning", "Compliance & safety"] },
      { slug: "commercial", title: "Commercial Electrical Works", desc: "Electrical fit-out for commercial buildings.", features: ["Distribution boards", "Lighting & sockets", "Cabling & containment", "Backup & UPS", "Certification"] },
      { slug: "installation", title: "Electrical Installation", desc: "End-to-end electrical installation services.", features: ["Equipment installation", "Cable routing", "Terminations", "Load testing", "As-built documentation"] },
      { slug: "ht-lt", title: "HT/LT Systems", desc: "High- and low-tension power systems and switchgear.", features: ["HT/LT panels", "Transformers & DBs", "Protection systems", "Relay coordination", "Testing & commissioning"] },
      { slug: "cable-installation", title: "Cable Laying & Termination", desc: "Cable trays, laying and jointing/termination works.", features: ["Cable tray & trench", "Power & control cables", "Jointing & termination", "Glanding & tagging", "Continuity testing"] },
      { slug: "lighting", title: "Lighting Systems", desc: "Industrial and area lighting design and installation.", features: ["High-mast & area lighting", "Energy-efficient fixtures", "Emergency lighting", "Control systems", "Illumination testing"] },
      { slug: "power-distribution", title: "Power Distribution", desc: "Reliable power distribution across the facility.", features: ["Distribution networks", "Bus ducts & feeders", "Load balancing", "Metering", "Redundancy design"] },
      { slug: "maintenance", title: "Electrical Maintenance", desc: "Preventive and breakdown electrical maintenance.", features: ["Preventive maintenance", "Thermography & testing", "Breakdown response", "Spare management", "Safety audits"] },
    ],
  },
  {
    slug: "balance-of-plant",
    title: "Balance of Plant (BoP)",
    short: "Balance of Plant",
    tagline: "The supporting systems that keep main plants running seamlessly.",
    image: IMG.balance,
    intro: [
      "Our Balance of Plant (BoP) services provide the comprehensive mechanical, electrical and civil solutions that keep main plants operating seamlessly — from initial installation through the entire lifecycle.",
      "MME delivers the supporting systems that surround core plant processes: material handling, utilities, auxiliary structures and services essential to reliable, efficient operations.",
    ],
    subs: [
      { slug: "mechanical", title: "Mechanical BoP", desc: "Mechanical balance-of-plant systems and equipment.", features: ["Auxiliary equipment", "Piping & pumps", "Material handling", "HVAC & utilities", "Commissioning"] },
      { slug: "electrical", title: "Electrical BoP", desc: "Electrical balance-of-plant packages.", features: ["Distribution & panels", "Cabling & earthing", "Lighting systems", "Control integration", "Testing"] },
      { slug: "civil", title: "Civil BoP", desc: "Civil works supporting the main plant.", features: ["Foundations & RCC", "Trenches & drains", "Roads & paving", "Auxiliary buildings", "Site works"] },
      { slug: "piping", title: "Piping & Utility Systems", desc: "Utility piping and services across the plant.", features: ["Water & air lines", "Fuel & oil systems", "Fire-fighting piping", "Supports & testing", "Insulation"] },
      { slug: "material-handling", title: "Material Handling", desc: "Bulk and unit material handling systems.", features: ["Conveyor systems", "Storage & feeders", "Loading systems", "Dust control", "Commissioning"] },
      { slug: "infrastructure", title: "Plant Infrastructure", desc: "Roads, utilities and infrastructure for the plant.", features: ["Internal roads", "Utility corridors", "Drainage", "Security works", "Site services"] },
      { slug: "complete-execution", title: "Complete BoP Execution", desc: "Single-point, turnkey balance-of-plant execution.", features: ["Turnkey delivery", "Multi-discipline coordination", "Single-point responsibility", "Schedule control", "Integrated commissioning"] },
    ],
  },
  {
    slug: "additional-services",
    title: "Additional Engineering Services",
    short: "Additional Services",
    tagline: "Project management, manpower and technical support that de-risk delivery.",
    image: IMG.additional,
    intro: [
      "Alongside our mechanical, civil and electrical works, MME offers a suite of engineering support services — project management, engineering support, manpower supply, equipment support and technical consultancy.",
      "These services give clients a single, dependable partner for planning, mobilising and delivering complex industrial projects with confidence.",
    ],
    subs: [
      { slug: "project-management", title: "Project Management", desc: "End-to-end project planning, control and delivery.", features: ["Planning & scheduling", "Cost & progress control", "Risk management", "Quality & safety oversight", "Stakeholder reporting"] },
      { slug: "engineering-support", title: "Engineering Support", desc: "Technical and engineering support across disciplines.", features: ["Constructability reviews", "Method statements", "Shop-drawing support", "Interface management", "As-built documentation"] },
      { slug: "manpower", title: "Manpower Supply", desc: "Skilled and semi-skilled manpower for project needs.", features: ["Engineers & supervisors", "Welders & fitters", "Riggers & electricians", "Trained safety crews", "Rapid mobilisation"] },
      { slug: "equipment", title: "Equipment & Machinery Support", desc: "Cranes, tools and machinery for site execution.", features: ["Cranes & lifting gear", "Welding & fabrication tools", "Access equipment", "Testing instruments", "Maintenance & logistics"] },
      { slug: "shutdown", title: "Plant Shutdown Services", desc: "Planned shutdown execution with critical-path control.", features: ["Shutdown planning", "Resource mobilisation", "Critical-path execution", "Multi-discipline crews", "Rapid re-start"] },
      { slug: "maintenance", title: "Maintenance Services", desc: "Ongoing preventive and breakdown maintenance.", features: ["Preventive programs", "Breakdown response", "Spare management", "Condition monitoring", "Reliability improvement"] },
      { slug: "site-supervision", title: "Site Supervision", desc: "Experienced supervision that safeguards quality and safety.", features: ["Site engineers & supervisors", "Daily progress control", "QA/QC oversight", "Safety enforcement", "Documentation"] },
      { slug: "technical-consultancy", title: "Technical Consultancy", desc: "Expert advisory across construction and engineering.", features: ["Feasibility & planning", "Value engineering", "Method & sequence advice", "Quality systems", "Compliance guidance"] },
    ],
  },
];

export const findCategory = (slug) => WE_SERVE.find((c) => c.slug === slug);
export const findSub = (cat, subSlug) => cat && cat.subs.find((s) => s.slug === subSlug);

export const WE_SERVE_NAV = WE_SERVE.map((c) => ({
  label: c.title,
  to: `/we-serve/${c.slug}`,
}));

export const WESERVE_HERO = IMG.hero;
