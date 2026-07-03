import type {
  DetailedService,
  FeatureHighlight,
  IndustrySolution,
  NavItem,
  SeoConfig,
  ServiceCard,
  Stat,
  Testimonial,
  WorkStage,
} from '../types/content'

export const navigationItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Solutions', path: '/solutions' },
]

export const homeSeo: SeoConfig = {
  title: 'Soft POS | Digital Solutions Integrated To Meet Your Business Needs',
  description:
    'Soft POS designs and develops custom software applications, POS platforms, online ordering systems, websites, and business solutions.',
  path: '/',
  keywords: [
    'Soft POS',
    'POS systems',
    'online ordering',
    'web development',
    'merchant services',
    'digital solutions',
  ],
}

export const solutionsSeo: SeoConfig = {
  title: 'Solutions | Soft POS',
  description:
    'Explore Soft POS services across POS, online ordering, web and app development, merchant services, ecommerce, signage, and security.',
  path: '/solutions',
  keywords: [
    'Soft POS solutions',
    'retail POS',
    'restaurant ordering platform',
    'mobile apps',
    'ecommerce solutions',
    'security systems',
  ],
}

export const heroImage =
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80'

export const aboutImage =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'

export const aboutParagraphs = [
  'Soft POS is a team of 50 advisers, designers and developers working across North America and the Middle East. Since 2015, we are fully dedicated to helping companies successfully execute their digital projects.',
  'Our team is made up of strategic advisors, client experience specialists, software designers and expert developers.',
  'We design and develop custom software applications to optimize processes and generate growth through digital transformation.',
  'As we grow, we remain aligned with our vision: quality products and solutions, technological innovation, a collaborative approach and client satisfaction.',
]

export const heroStats: Stat[] = [
  { value: '50+', label: 'Advisers, designers & developers' },
  { value: '2015', label: 'Delivering since' },
  { value: '10', label: 'Integrated service areas' },
  { value: '24/7', label: 'Support & monitoring' },
]

export const featureHighlights: FeatureHighlight[] = [
  {
    title: 'Built for the future',
    description:
      'Our specialized software team creates digital solutions and services designed to scale with your business.',
  },
  {
    title: 'Multiplatform by design',
    description:
      'We build mobile, website and marketing apps that bring your vision to life across every device.',
  },
  {
    title: 'Results that convert',
    description:
      'Our designers and developers craft beautiful websites and e-commerce platforms that deliver measurable results.',
  },
]

export const workStages: WorkStage[] = [
  {
    title: 'Understand',
    summary: 'We map the problem before writing a line of code.',
    items: [
      'Gather Requirements',
      'Use cases',
      'In depth Discussions',
      'Project mapping',
      'Project Scoping',
    ],
  },
  {
    title: 'Recommend',
    summary: 'We propose an architecture and a clear plan.',
    items: [
      'Create Prototype',
      'System Architecture',
      'Project management',
      'Scope Of Works',
      'Cost estimate',
    ],
  },
  {
    title: 'Implement',
    summary: 'We build in the open with continuous feedback.',
    items: [
      'Task breakdown',
      'Continuous integration',
      'Updates',
      'Demos',
      'Quality Assurance',
    ],
  },
  {
    title: 'Launch',
    summary: 'We ship, support and keep improving.',
    items: ['Migration plans', 'Testing', 'Release', 'Support', 'Improve'],
  },
]

export const serviceCards: ServiceCard[] = [
  {
    title: 'POS Systems',
    description: 'POS software & hardware solutions built for your industry.',
    image:
      'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'On-line Ordering',
    description: 'Commission-free ordering platform for restaurants.',
    image:
      'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Website Development',
    description: 'Web designs that optimize user experience and create impact.',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Apps Development',
    description: 'Mobile apps built with a clear understanding of your business.',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Merchant Services',
    description: 'Grow your business by getting paid online and over the phone.',
    image:
      'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Give your customers the best online shopping experience.',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Digital Signage',
    description: 'The right content, on the right screen, at the right time.',
    image:
      'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Security Systems',
    description: 'Protect one or several locations for any type of business.',
    image:
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'White Labelling',
    description: 'Ship our platforms under your own brand identity.',
    image:
      'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Integration',
    description: 'Connect the tools your business already relies on.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  },
]

export const industrySolutions: IndustrySolution[] = [
  {
    title: 'Retail & Convenience',
    tagline: 'Fast checkout, live inventory and multi-store control.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
    items: [
      'Retail point of sale',
      'Inventory management',
      'Reporting',
      'Payment Integration',
      'Ecommerce integration',
      'Multiple store option',
      '24/7 support',
    ],
  },
  {
    title: 'Hair Salons & Spa',
    tagline: 'Bookings, retail and payments in one place.',
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
    items: [
      'Retail point of sale',
      'Inventory management',
      'Reporting',
      'Payment Integration',
      'Ecommerce integration',
      'Multiple store option',
      '24/7 support',
    ],
  },
  {
    title: 'Fast Food & Dining',
    tagline: 'From counter to kitchen to delivery, connected.',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    items: [
      'Retail point of sale',
      'Inventory management',
      'Reporting',
      'Payment Integration',
      'Ecommerce integration',
      'Multiple store option',
      '24/7 support',
    ],
  },
]

export const detailedServices: DetailedService[] = [
  {
    eyebrow: 'Ordering Platform',
    title: 'Online Ordering Platform: Food & Retail',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
    description: [
      'Our state-of-the-art ordering system for restaurants is secure, fully maintained, and hosted.',
      'Our team will build your menu and set up your hours, prep times, delivery zones, payment portals, and everything else needed to start taking orders immediately with a commission-free ordering platform.',
    ],
    bullets: [
      'Secure hosted infrastructure',
      'Commission-free ordering flow',
      'Menu setup and operational onboarding',
    ],
  },
  {
    eyebrow: 'Web Design',
    title: 'Web Design & Development',
    image:
      'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1000&q=80',
    description: [
      'Our web designs optimize user experience and create impact for all our clients.',
      'Web design is built upon user experience and behavior, offering an optimized design and browsing experience for all devices.',
      'Brand identity design delivers consistency in our clients’ brand experiences, and graphic design reinforces your website with professional marketing materials.',
    ],
    bullets: ['User-first design', 'Brand consistency', 'Responsive browsing experience'],
  },
  {
    eyebrow: 'Mobile Apps',
    title: 'Mobile Apps Development',
    image:
      'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1000&q=80',
    description: [
      'We create mobile apps with a clear understanding of your business and your needs.',
      'Our methodology is based on partnering with you and putting all our team members to work with your team as one.',
      'We specialize in enterprise app development, fin-tech and financial startups, health/medical, retail and food mobile app development.',
    ],
    bullets: ['Enterprise apps', 'Startup-ready execution', 'Cross-functional delivery'],
  },
  {
    eyebrow: 'Payments',
    title: 'Merchant Services',
    image:
      'https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&w=1000&q=80',
    description: [
      'On-the-go payments: card terminals that let you take payments — and your business — anywhere.',
      'In-store payments: from restaurants to hair salons, point-of-sale solutions for both sides of the counter.',
      'Online payments: grow your business by getting paid online and over the phone.',
    ],
    bullets: ['On-the-go terminals', 'In-store checkout', 'Online and phone payments'],
  },
  {
    eyebrow: 'Commerce',
    title: 'E-Commerce Solutions',
    image:
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1000&q=80',
    description: [
      'We design and develop professional websites that elevate your brand and provide an amazing experience for your customers.',
      'We differentiate your brand through comprehensive research of your customer profile.',
      'We design your e-commerce platform to match your branding and provide the best shopping experience.',
    ],
    bullets: ['Professional storefronts', 'Customer-profile research', 'Brand-aligned experiences'],
  },
  {
    eyebrow: 'Digital Signage',
    title: 'Digital Signage',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
    description: [
      'We help our customers display any type of content on their screens professionally and easily.',
      'Show the power of your videos and images and make your menu board memorable.',
      'Show different content at different schedules to target the right customers, at the right time, and advertise for your business and others.',
    ],
    bullets: ['Content scheduling', 'Menu board experiences', 'Advertising support'],
  },
  {
    eyebrow: 'Security',
    title: 'Smart Security Solutions',
    image:
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1000&q=80',
    description: [
      'Intrusion and surveillance systems are designed to protect your home or several business locations of any type.',
      'Video surveillance ranges from a simple closed-circuit camera solution to cloud hosting and remote monitoring by our operators.',
      'Access control provides security and efficiency, preventing unauthorized entry while ensuring employees have easy access according to their schedules.',
    ],
    bullets: ['Intrusion protection', 'Remote monitoring', 'Access control systems'],
  },
]

export const showcaseItems = [
  {
    title: 'Handheld POS terminal',
    description:
      'Take orders and payments anywhere with an all-in-one device — contactless, chip and swipe built in.',
    image: '/pos-handheld.png',
    wide: false,
  },
  {
    title: 'POS mobile app',
    description:
      'Register, menu, orders, invoices and customers in your pocket, synced in real time across every location.',
    image: '/pos-phones.png',
    wide: true,
  },
  {
    title: 'Countertop POS & cash drawer',
    description:
      'A fast retail checkout station with live inventory, tax and tender handling on a rugged countertop setup.',
    image: '/pos-terminal.png',
    wide: true,
  },
  {
    title: 'Online ordering websites',
    description:
      'Commission-free branded ordering sites with menus, delivery zones and payments ready out of the box.',
    image: '/online-ordering.png',
    wide: false,
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'Soft POS rebuilt our checkout and online ordering in weeks. Sales went up and support tickets went down.',
    name: 'Retail Operations Lead',
    role: 'Multi-store convenience chain',
  },
  {
    quote:
      'One team handled our POS, payments and app. The integrated approach saved us months of coordination.',
    name: 'Owner',
    role: 'Fast-casual restaurant group',
  },
]
