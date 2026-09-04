export interface Project {
  id: string
  title: string
  subtitle: string
  client: string
  year: string
  role: string
  category: string
  image: string
  imageFit?: 'cover' | 'contain'
  gallery?: string[]
  shortDescription: string
  description: string
  overview: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
  liveUrl: string
  githubUrl: string
  features: { title: string; description: string }[]
}

export const projectsData: Project[] = [
  {
    id: 'wondersscents',
    title: 'Wonders Scents',
    subtitle: 'Luxury Perfumes & Undiluted Fragrance Oils',
    client: 'Wonders Scents',
    year: '2025',
    role: 'Frontend Developer',
    category: 'E-Commerce',
    image: '/projects/wondersscents-preview.png',
    imageFit: 'cover',
    gallery: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=1200'
    ],
    shortDescription: 'A modern, high-performance e-commerce platform engineered for Wonders Scents, an authentic luxury fragrance brand in Nigeria...',
    description: 'A responsive e-commerce web application for an authentic perfume and fragrance oil brand in Nigeria, featuring product catalogs, fragrance note breakdowns, and direct WhatsApp order placement.',
    overview: 'Wonders Scents is an independent luxury fragrance store based in Nigeria. I designed and built a fast, responsive digital storefront allowing shoppers to explore perfumes, view note pyramids, choose bottle sizes, and order directly via WhatsApp without needing to create an account.',
    challenge: 'Providing a seamless mobile browsing and checkout experience for Nigerian shoppers on varying network speeds without complex account creation or backend checkout barriers.',
    solution: 'Built with React 19, TypeScript, and Vite for instant load times. Added client-side category filtering, bottle carousels with Embla Carousel, and a shopping cart that automatically serializes customer orders into formatted WhatsApp messages.',
    results: [
      'Responsive, fast-loading digital storefront optimized for mobile browsers',
      'Interactive fragrance catalog categorized by Men, Women, Unisex, and Pure Oils',
      'Olfactory note pyramid breakdown detailing top, heart, and base notes',
      'Frictionless checkout converting customer cart selections directly into formatted WhatsApp messages'
    ],
    technologies: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Embla Carousel'],
    liveUrl: 'https://wondersscents.vercel.app',
    githubUrl: 'https://github.com/Steptem17/wondersscents',
    features: [
      {
        title: 'Fragrance Catalog & Filtering',
        description: 'Clean product catalog categorized by Men, Women, Unisex, and Pure Oils with live search.'
      },
      {
        title: 'Olfactory Note Pyramids',
        description: 'Clear breakdown of top, heart, and base scent notes with longevity ratings.'
      },
      {
        title: 'Direct WhatsApp Ordering',
        description: 'Client-side shopping drawer that converts multi-size bottle selections into a pre-filled WhatsApp message.'
      },
      {
        title: 'Mobile-First Layout',
        description: 'Lightweight, responsive interface designed for smooth scrolling and fast browsing on smartphones.'
      }
    ]
  },
  {
    id: 'freecom-technologies',
    title: 'Freecom Technologies',
    subtitle: 'Device Repair Services & Mobile Gadget Retail',
    client: 'Freecom Technologies Ltd',
    year: '2024',
    role: 'Frontend Developer',
    category: 'Web Application',
    image: '/projects/freecom-preview.png',
    imageFit: 'cover',
    gallery: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=1200'
    ],
    shortDescription: 'A comprehensive web application for an enterprise mobile service and gadget retail center in Lagos, Nigeria...',
    description: 'An official business website for a Lagos mobile service and gadget store, featuring online device repair intake, phone catalog browsing, and store location routing.',
    overview: 'Freecom Technologies is a mobile phone repair and gadget retail center with workshops in Lagos, Nigeria. I developed their official business website to display available smartphones and accessories, offer online repair intake, and direct customers to physical branch locations.',
    challenge: 'Organizing retail smartphone inventory, repair price inquiries, and store branch information into a clean, easy-to-navigate website for local customers.',
    solution: 'Developed with React (JSX), JavaScript, and Tailwind CSS. Built a structured repair diagnostic booking form integrated with EmailJS and direct WhatsApp routing for customer inquiries.',
    results: [
      'Modern digital web presence for physical repair and retail outlets in Lagos',
      'Interactive repair booking form routing device specifications to technicians',
      'Organized inventory showcase for new and certified pre-owned smartphones',
      'Integrated branch directions and workshop contact routing via WhatsApp and EmailJS'
    ],
    technologies: ['React (JSX)', 'JavaScript', 'Vite', 'Tailwind CSS', 'EmailJS', 'Framer Motion'],
    liveUrl: 'https://freecom-technologies.vercel.app',
    githubUrl: 'https://github.com/Steptem17/freecom-technologies',
    features: [
      {
        title: 'Device Repair Booking Form',
        description: 'Diagnostic form for phone screen replacements, battery swaps, and hardware servicing.'
      },
      {
        title: 'Smartphone & OEM Inventory',
        description: 'Organized catalog displaying new and certified pre-owned phones across major brands.'
      },
      {
        title: 'Instant WhatsApp Inquiries',
        description: 'Quick contact buttons for customer price checks and inventory availability.'
      },
      {
        title: 'Branch Workshop Locations',
        description: 'Clear location details and contact routing for store outlets in Alagbado, Lagos.'
      }
    ]
  },
  {
    id: 'maison-etoile',
    title: 'Maison Étoile',
    subtitle: 'Fine Dining Restaurant & Table Reservations',
    client: 'Maison Hospitality',
    year: '2024',
    role: 'Frontend Developer',
    category: 'Web Application',
    image: '/projects/maison-preview.png',
    imageFit: 'cover',
    gallery: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200'
    ],
    shortDescription: 'A prestigious fine dining culinary platform featuring immersive culinary storytelling, dynamic tasting menu exploration, and table reservations...',
    description: 'An elegant restaurant platform featuring interactive tasting menu exploration, culinary storytelling, sommelier wine pairing guides, and table reservation booking.',
    overview: 'Maison Étoile is a modern fine dining restaurant website. I built an elegant web platform showcasing tasting menus, beverage pairings, dining philosophy, and a responsive online reservation booking workflow.',
    challenge: 'Crafting an editorial visual aesthetic with smooth animations while maintaining fast load times and clean, validated reservation booking forms.',
    solution: 'Architected with React 19, TypeScript, Vite, and Zustand for reservation state. Implemented Framer Motion page transitions and clean form validation for booking tables.',
    results: [
      'Clean fine dining website with editorial typography and smooth animations',
      'Interactive multi-course menu exploration with dietary filtering',
      'Validated table reservation booking workflow',
      'Fully responsive, accessible layout across desktop, tablet, and mobile screens'
    ],
    technologies: ['React 19', 'TypeScript', 'Vite', 'Zustand', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://maison-etoile-three.vercel.app',
    githubUrl: 'https://github.com/Steptem17/maison-etoile',
    features: [
      {
        title: 'Interactive Tasting Menus',
        description: 'Multi-course menu presentation with dietary preference filtering and dish descriptions.'
      },
      {
        title: 'Table Reservation System',
        description: 'Online booking flow with date, time, party size selection, and form validation.'
      },
      {
        title: 'Curated Wine Pairings',
        description: 'Tasting guides highlighting sommelier-recommended pairings for each course.'
      },
      {
        title: 'Chef Philosophy & Story',
        description: 'Visual storytelling highlighting culinary philosophy, seasonal ingredients, and atmosphere.'
      }
    ]
  }
]
