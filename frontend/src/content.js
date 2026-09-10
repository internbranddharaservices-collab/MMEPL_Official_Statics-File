// =====================================================================
//  MME — CENTRAL CONTENT & IMAGE CONFIG
//  To change ANY section image, just replace the image link (URL) below.
//  To change any text, edit the strings below. Nothing else to touch.
// =====================================================================

export const IMAGES = {
  // ---- HERO SLIDES ----
  heroSlides: [
    "https://images.unsplash.com/photo-1666219462105-2909c2d72d01?crop=entropy&cs=srgb&fm=jpg&q=85&w=2400",
    "https://images.unsplash.com/photo-1646516447226-e2eb0e6e3f36?crop=entropy&cs=srgb&fm=jpg&q=85&w=2400",
    "https://images.unsplash.com/uploads/14123892966835548e7bd/14369636?crop=entropy&cs=srgb&fm=jpg&q=85&w=2400",
  ],
  // ---- ABOUT ----
  about: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  aboutSecondary: "https://images.unsplash.com/photo-1621121013599-c94f85975cfd?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  // ---- EXPERTISE STRIP (3 full-width cards) ----
  expertise: [
    "https://images.unsplash.com/photo-1579847188804-ecba0e2ea330?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    "https://images.unsplash.com/photo-1509024368907-57294758cfc5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    "https://images.unsplash.com/photo-1566766804405-eed274ee46bf?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  ],
  // ---- SERVICE CARDS ----
  serviceCement: "https://images.unsplash.com/photo-1621121013599-c94f85975cfd?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  servicePower: "https://images.unsplash.com/photo-1509390288171-ce2088f7d08e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  serviceChemical: "https://images.unsplash.com/photo-1629447388369-760612337eff?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  serviceBalance: "https://images.unsplash.com/photo-1701328778019-e95dedbf5346?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  serviceSteel: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  // ---- WHY MME ----
  whyMme: "https://images.unsplash.com/photo-1672748341520-6a839e6c05bb?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  // ---- CTA BACKGROUND ----
  ctaBg: "https://images.unsplash.com/photo-1509024368907-57294758cfc5?crop=entropy&cs=srgb&fm=jpg&q=85&w=2000",
  // ---- CAREERS ----
  careers: "https://images.unsplash.com/photo-1547895749-888a559fc2a7?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  // ---- DIRECTOR / TEAM PORTRAITS ----
  director: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  hr: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
};

export const COMPANY = {
  name: "Mangal Murtey Enterprises",
  shortName: "MME Private Limited",
  legalName: "Mangal Murtey Enterprises Private Limited",
  tagline: "Building India's Industrial Backbone",
  established: "2019",
  email: "info@mmepl.co.in",
  phone: "+91-120-3664152",
  phoneRaw: "tel:+911203664152",
  hours: "Mon – Sat : 10 AM to 6 PM",
  offices: [
    {
      label: "Head / Corporate Office",
      address:
        "A-111 & 112, First Floor, A Block, Plot No-2, Shakti Khand-2, Indrapuram, Ghaziabad, Uttar Pradesh 201014",
    },
    {
      label: "Registered Office",
      address: "Plot No-1-1/25 Kalp City, Bijnaur Road, Lucknow, UP 226001",
    },
    {
      label: "Branch Office",
      address:
        "2nd Floor, Holding No-15 Sakshi, Sitaramdera, Jamshedpur, Jharkhand 831001",
    },
  ],
};

export const HERO = [
  {
    kicker: "Civil & Mechanical Engineering",
    title: "Engineering the\nfoundations of\nmodern India",
    cta: "Discover MME",
    target: "about",
  },
  {
    kicker: "Since 2019",
    title: "Precision execution\nacross cement,\npower & steel",
    cta: "Our Expertise",
    target: "services",
  },
  {
    kicker: "Trusted by industry leaders",
    title: "Delivered with\ndiscipline, quality\n& on time",
    cta: "View Projects",
    target: "projects",
  },
];

export const ABOUT = {
  kicker: "Welcome to MME",
  heading: "Defining engineering excellence since 2019",
  paragraphs: [
    "Established in 2019, MME Private Limited specialises in civil and mechanical development work. Our team comprises highly skilled engineers with over 20 years of experience across road construction, bridge construction, building construction, cement plants, power plants and township development.",
    "We possess a skilled technical team, essential machinery and a strong financial foundation, enabling us to manage large projects anywhere in India. Our goal is to uphold the highest standards in construction — emphasising discipline, quality and timely project completion.",
  ],
};

export const STATS = [
  { value: 2019, suffix: "", label: "Established", isYear: true },
  { value: 20, suffix: "+", label: "Years of Engineering Experience" },
  { value: 35, suffix: "+", label: "Projects Completed" },
  { value: 12, suffix: "+", label: "Marquee Clients Served" },
];

export const SERVICES = [
  {
    id: "cement",
    title: "Cement Projects",
    image: IMAGES.serviceCement,
    desc: "Complete cement plant solutions backed by over 20 years of experience — ensuring top-notch quality and reliability across every phase of the project.",
    intro:
      "MME provides complete cement plant solutions — from civil foundations and structural steel to the fabrication, erection and commissioning of process equipment. With more than two decades of collective experience across India's largest cement producers, we deliver every mandate to exacting quality and safety standards.",
    paragraphs: [
      "Our teams have executed expansions and greenfield packages for marquee names including UltraTech, ACC, Wonder Cement, Shree Cement, Ramco and Nuvoco. From clinker handling and conveyor systems to preheater towers and packing plants, we manage the full mechanical scope with precision.",
      "Whether a shutdown modification or a full line installation, our disciplined project management ensures timely delivery without compromising on craftsmanship or safety performance.",
    ],
    features: [
      "Fabrication & erection of process equipment",
      "Belt conveyor & material handling systems",
      "Preheater tower & kiln erection support",
      "Packing plant & bulk loading systems",
      "Shutdown modifications & liner replacement",
      "Structural steel fabrication",
    ],
  },
  {
    id: "power",
    title: "Power Projects",
    image: IMAGES.servicePower,
    desc: "Expertise in power plant construction delivering efficient, sustainable and cost-effective energy solutions across multiple industries.",
    intro:
      "MME delivers civil and mechanical works for thermal and captive power facilities, supporting efficient, reliable and cost-effective energy infrastructure for industrial clients across India.",
    paragraphs: [
      "Our scope spans structural fabrication, equipment erection and balance-of-plant works that keep power generation running dependably. We bring experienced engineers, essential machinery and a strong safety culture to every site.",
      "From boiler house steelwork to ducting, piping and conveyor systems, MME executes power sector packages with discipline and technical rigour.",
    ],
    features: [
      "Boiler house & structural erection",
      "Ducting, piping & pipe-rack fabrication",
      "Coal & ash handling systems",
      "Equipment installation & alignment",
      "Captive power balance-of-plant works",
      "Operation & maintenance support",
    ],
  },
  {
    id: "chemical",
    title: "Chemical & Fertilizer Plant",
    image: IMAGES.serviceChemical,
    desc: "We design and execute chemical and fertilizer plants with high precision — ensuring safety, efficiency and industry-compliant standards.",
    intro:
      "MME executes chemical and fertilizer plant packages with a strong emphasis on precision, safety and compliance — critical for facilities handling sensitive processes and materials.",
    paragraphs: [
      "We undertake fabrication and erection of process structures, tanks, pipe racks and equipment, working to stringent quality and industry-compliant standards. Our experience extends to petrochemical corridors and refinery support works.",
      "Every mandate is delivered with a rigorous focus on integrity, safety performance and on-time completion.",
    ],
    features: [
      "Process structure fabrication & erection",
      "Tank & vessel installation",
      "Pipe rack & piping systems",
      "Petrochemical & refinery support works",
      "Industry-compliant QA/QC",
      "Safety-first execution",
    ],
  },
  {
    id: "balance",
    title: "Balance of Plant",
    image: IMAGES.serviceBalance,
    desc: "Comprehensive mechanical and electrical solutions that support the seamless operation of main plants across their entire lifecycle.",
    intro:
      "Our Balance of Plant (BOP) services provide the comprehensive mechanical and electrical solutions that keep main plants operating seamlessly — from initial installation through their entire operating lifecycle.",
    paragraphs: [
      "MME delivers the supporting systems that surround core plant processes: material handling, utilities, auxiliary structures and services that are essential to reliable, efficient operations.",
      "With our own machinery, skilled manpower and disciplined project management, we mobilise BOP packages of any scale, anywhere in India.",
    ],
    features: [
      "Material handling & conveyor systems",
      "Auxiliary structural steel works",
      "Utility & service installations",
      "Mechanical & electrical support systems",
      "Lifecycle maintenance",
      "Rapid mobilisation across India",
    ],
  },
  {
    id: "steel",
    title: "Steel Projects",
    image: IMAGES.serviceSteel,
    desc: "Steel plant projects delivered with advanced engineering — ensuring structural integrity and optimised manufacturing processes.",
    intro:
      "MME delivers steel plant projects with advanced engineering solutions — ensuring structural integrity, precise erection and optimised manufacturing processes for heavy industry.",
    paragraphs: [
      "From structural fabrication to heavy mechanical erection, our teams handle the demanding tolerances and scale of the steel sector, including ongoing works for Jindal Steel (MASYC) at Jajpur, Odisha.",
      "We combine experienced engineers, essential machinery and a strong financial foundation to execute large steel mandates reliably and safely.",
    ],
    features: [
      "Heavy structural steel fabrication",
      "Mechanical erection to tight tolerances",
      "Equipment installation & alignment",
      "Corridor & conveyor line works",
      "Plant expansion support",
      "Quality-assured welding",
    ],
  },
];

export const EXPERTISE = [
  {
    title: "Fabrication & Erection",
    desc: "Structural steel fabrication and heavy mechanical erection executed to exacting tolerances.",
  },
  {
    title: "Plant Construction",
    desc: "End-to-end civil and mechanical construction for cement, power and steel plants.",
  },
  {
    title: "Operation & Maintenance",
    desc: "Shutdown jobs, equipment replacement and lifelong maintenance support on live plants.",
  },
];

export const INDUSTRIES = [
  { name: "Cement", desc: "Plant erection, expansions & equipment installation for India's largest cement producers." },
  { name: "Power", desc: "Construction and mechanical works for thermal and captive power facilities." },
  { name: "Steel", desc: "Structural fabrication and erection for steel plants and heavy industry." },
  { name: "Chemical & Fertilizer", desc: "Precision execution of chemical and fertilizer plant packages." },
  { name: "Oil & Gas", desc: "Fabrication and erection support for refineries and petrochemical corridors." },
  { name: "Infrastructure", desc: "Roads, bridges, buildings and township development across India." },
];

export const PROJECTS = [
  { name: "ACC Ametha Cement Expansion", client: "Larsen & Toubro Ltd.", location: "Ametha, Madhya Pradesh", type: "Cement", status: "Completed", image: IMAGES.serviceCement },
  { name: "Ramco Cement Kolimigundla", client: "Larsen & Toubro Ltd.", location: "Kolimigundla, Andhra Pradesh", type: "Cement", status: "Completed", image: "https://images.unsplash.com/photo-1666219462105-2909c2d72d01?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200" },
  { name: "ACC Tikariya Expansion", client: "KEC International Ltd.", location: "Tikariya", type: "Cement", status: "Completed", image: IMAGES.expertise[0] },
  { name: "RCCPL Plant — MP Birla Group", client: "KEC International Ltd.", location: "Mukutban, Maharashtra", type: "Cement", status: "Completed", image: "https://images.unsplash.com/photo-1621121013599-c94f85975cfd?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200" },
  { name: "Jojabera Cement Plant", client: "Nuvoco Vistas Corp. Ltd.", location: "Jojabera, Jharkhand", type: "Cement", status: "Completed", image: IMAGES.expertise[1] },
  { name: "Wonder Cement — RK Nagar", client: "Wonder Cement Ltd.", location: "Nimbahera, Rajasthan", type: "Mechanical", status: "Completed", image: "https://images.unsplash.com/photo-1701328778019-e95dedbf5346?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200" },
  { name: "Sojitz Corridor Line Fabrication", client: "Larsen & Toubro Ltd.", location: "India", type: "Fabrication", status: "Completed", image: IMAGES.serviceSteel },
  { name: "Petro Project Bagru Khurd", client: "Larsen & Toubro Ltd.", location: "Bagru Khurd", type: "Oil & Gas", status: "Completed", image: IMAGES.serviceChemical },
  { name: "Nuvoco Vistas Cement Works", client: "Nuvoco Vistas Corp. Ltd.", location: "Charkhi Dadri, Haryana", type: "Cement", status: "Completed", image: "https://images.unsplash.com/photo-1509390288171-ce2088f7d08e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200" },
  { name: "Shree Cement Plant", client: "Shree Cement Ltd.", location: "Nawalgarh, Rajasthan", type: "Cement", status: "Completed", image: IMAGES.aboutSecondary },
  { name: "UltraTech Cement Works", client: "UltraTech Cement Ltd.", location: "Patna, Bihar", type: "Cement", status: "Ongoing", image: "https://images.unsplash.com/photo-1666219462105-2909c2d72d01?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200" },
  { name: "MASYC Steel Plant", client: "Jindal Steel Ltd.", location: "Jajpur, Odisha", type: "Steel", status: "Ongoing", image: IMAGES.serviceSteel },
  { name: "UltraTech Wanakbori Works", client: "UltraTech Cement Ltd.", location: "Wanakbori, Gujarat", type: "Cement", status: "Ongoing", image: IMAGES.expertise[0] },
  { name: "UltraTech Pali Cement Works", client: "UltraTech Cement Ltd.", location: "Pali, Rajasthan", type: "Cement", status: "Ongoing", image: IMAGES.serviceCement },
  { name: "UltraTech Dhule Cement Works", client: "UltraTech Cement Ltd.", location: "Dhule, Maharashtra", type: "Cement", status: "Ongoing", image: IMAGES.expertise[1] },
  { name: "Reliance Jamnagar Complex", client: "Reliance Industries Ltd.", location: "Jamnagar, Gujarat", type: "Oil & Gas", status: "Ongoing", image: IMAGES.serviceChemical },
];

export const PROJECT_FILTERS = ["All", "Ongoing", "Completed", "Cement", "Steel", "Oil & Gas"];

export const WHY = {
  kicker: "Why MME",
  heading: "A partner built on discipline, quality and trust",
  points: [
    { title: "Experienced Engineers", desc: "A technical team led by engineers with 20+ years across heavy industry." },
    { title: "Own Machinery & Resources", desc: "Essential machinery and manpower to mobilise large projects anywhere in India." },
    { title: "Strong Financial Foundation", desc: "The financial strength to take on and complete large-scale industrial mandates." },
    { title: "On-Time Delivery", desc: "A long-standing tradition of timely completion without compromising quality." },
    { title: "Uncompromising Safety", desc: "Safety performance recognised as a core discipline on every live site." },
    { title: "Complete Client Satisfaction", desc: "Efficient management and excellent craftsmanship on every mandate." },
  ],
};

export const DIRECTOR = {
  kicker: "From the Director's Desk",
  quote:
    "The company has gained prominence as a leader in the construction and engineering industry through competence, competitiveness and the timely delivery of projects with the highest quality standards, while recognising the importance of safety performance. In this era of advanced technologies and new techniques, we continuously strive for innovation and increased efficiency.",
  name: "Pradeep Sharma",
  role: "Managing Director & CEO",
  image: IMAGES.director,
};

export const CLIENTS = [
  { name: "Larsen & Toubro", logo: "https://mmepl.co.in/images/icons/LandT.jpeg" },
  { name: "UltraTech Cement", logo: "https://mmepl.co.in/images/icons/ultratech.png" },
  { name: "KEC International", logo: "https://mmepl.co.in/images/icons/kec.png" },
  { name: "Wonder Cement", logo: "https://mmepl.co.in/images/icons/wonder.png" },
  { name: "Shree Cement", logo: "https://mmepl.co.in/images/icons/shree.png" },
  { name: "Nuvoco Vistas", logo: "https://mmepl.co.in/images/icons/nuvoka.png" },
  { name: "Reliance Industries", logo: "https://mmepl.co.in/images/icons/reliance.jpg" },
  { name: "Jindal Steel", logo: "https://mmepl.co.in/images/icons/jindal.jpg" },
  { name: "Bangur Cement", logo: "https://mmepl.co.in/images/icons/bangur.png" },
];

export const GALLERY = [
  "https://images.unsplash.com/photo-1509024368907-57294758cfc5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  "https://images.unsplash.com/photo-1768564206500-5cddb1fea679?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  "https://images.unsplash.com/photo-1701328778019-e95dedbf5346?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  "https://images.unsplash.com/photo-1598302936625-6075fbd98dd7?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  "https://images.unsplash.com/photo-1538474705339-e87de81450e8?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  "https://images.unsplash.com/photo-1726731782158-fcf6822b6ca4?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
];

export const HR = {
  quote:
    "As the General Manager – Human Resources, I'm proud to lead efforts in nurturing our greatest asset — our people. We focus on attracting, developing and retaining top talent in mechanical engineering, fostering a culture of growth, collaboration and innovation. At MME we value integrity, respect and excellence — making our company a great place to work and a family that thrives together.",
  name: "Vandana Singh",
  role: "General Manager – Human Resources",
  image: IMAGES.hr,
};

export const CERTIFICATES = [
  { title: "ISO Certification", img: "https://mmepl.co.in/images/certificate2.jpg" },
  { title: "Company Certification", img: "https://mmepl.co.in/images/certificate.jpg" },
  { title: "Work Completion Certificate", img: "https://mmepl.co.in/images/Work%20Completion%20certificate_page-0001.jpg" },
  { title: "Certificate of Excellence", img: "https://mmepl.co.in/images/certificate3.jpg" },
  { title: "UltraTech Cement Completion", img: "https://mmepl.co.in/images/project-completion-certificate-from-ultratech-cement.jpg" },
];

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "/services",
    children: SERVICES.map((s) => ({ label: s.title, to: `/services/${s.id}` })),
  },
  { label: "Projects", to: "/projects" },
  { label: "Industries", to: "/industries" },
  { label: "Clients", to: "/clients" },
  { label: "Gallery", to: "/gallery" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];
