import {
  SprayCan,
  Factory,
  Layers,
  Shield,
  Droplets,
  Zap,
  Flame,
  CheckCircle2,
  Award,
  ShieldCheck,
  Leaf,
  Trophy,
  Headphones,
  Clock,
  Car,
  Cog,
  Armchair,
  Building,
  Microwave,
  Wrench,
  Box,
} from 'lucide-react';

// Constantes de la aplicación
export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "ACCOUR",
  description: "Especialistas en Pintura Electrostática Industrial. Recubrimientos en polvo de alta calidad, durabilidad y resistencia.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  keywords: [
    "pintura electrostática",
    "recubrimiento en polvo",
    "pintura industrial",
    "acabados industriales",
    "galvanizado",
    "protección anticorrosiva",
  ],
} as const;

export const CONTACT_INFO = {
  phone: process.env.NEXT_PUBLIC_PHONE || "",
  email: process.env.NEXT_PUBLIC_EMAIL || "ventasaccour@hotmail.com",
  address: process.env.NEXT_PUBLIC_ADDRESS || "Zona Industrial, Ciudad de México",
  businessHours: process.env.NEXT_PUBLIC_BUSINESS_HOURS || "Lun-Vie: 8:00-18:00, Sáb: 9:00-14:00",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5512345678",
} as const;

export const NAVIGATION_LINKS = [
  { name: "Inicio", label: "Inicio", href: "/" },
  { name: "Nosotros", label: "Nosotros", href: "/nosotros" },
  { name: "Servicios", label: "Servicios", href: "/servicios" },
  { name: "Industrias", label: "Industrias", href: "/industrias" },
  { name: "Proceso", label: "Proceso", href: "/proceso" },
  { name: "Galería", label: "Galería", href: "/galeria" },
  { name: "Contacto", label: "Contacto", href: "/contacto" },
] as const;

export const SERVICES = [
  {
    id: "pintura-electrostatica",
    title: "Pintura Electrostática en Polvo",
    description: "Aplicación profesional de recubrimientos en polvo con acabados personalizados.",
    icon: SprayCan,
    href: "/servicios/pintura-electrostatica",
    features: [
      "Amplia gama de colores y texturas",
      "Acabado uniforme y profesional",
      "Resistencia superior a químicos y rayones",
      "Ecológico sin emisiones VOC",
    ],
  },
  {
    id: "recubrimiento-industrial",
    title: "Recubrimiento Industrial",
    description: "Tratamiento de piezas metálicas para diversos sectores industriales.",
    icon: Factory,
    href: "/servicios/recubrimiento-industrial",
    features: [
      "Proceso para grandes volúmenes",
      "Piezas de diversos tamaños",
      "Cumplimiento de normas industriales",
      "Tiempos de entrega optimizados",
    ],
  },
  {
    id: "tratamiento-superficies",
    title: "Tratamiento de Superficies",
    description: "Preparación completa incluyendo limpieza, desengrase y acabado final.",
    icon: Layers,
    href: "/servicios/tratamiento-superficies",
    features: [
      "Limpieza y desengrase profundo",
      "Tratamiento anti-corrosivo",
      "Preparación para máxima adherencia",
      "Control de calidad riguroso",
    ],
  },
  {
    id: "proteccion-anticorrosiva",
    title: "Protección Anticorrosiva",
    description: "Recubrimientos especializados para máxima protección contra corrosión.",
    icon: Shield,
    href: "/servicios/proteccion-anticorrosiva",
    features: [
      "Protección en ambientes extremos",
      "Recubrimientos multicapa",
      "Máxima durabilidad",
      "Certificación de calidad",
    ],
  },
] as const;

export const PROCESS_STEPS = [
  {
    id: 1,
    order: 1,
    title: "Preparación",
    description: "Limpieza y tratamiento de la superficie para garantizar adherencia óptima.",
    icon: Droplets,
    details: [
      "Desengrase industrial",
      "Limpieza química profunda",
      "Fosfatado para protección base",
    ],
  },
  {
    id: 2,
    order: 2,
    title: "Aplicación",
    description: "Uso de tecnología electrostática para aplicar el polvo de manera uniforme.",
    icon: Zap,
    details: [
      "8 equipos semiautomáticos con tecnología de punta",
      "Carga electrostática del polvo",
      "Aplicación uniforme por atracción",
      "Cobertura completa sin desperdicio",
    ],
  },
  {
    id: 3,
    order: 3,
    title: "Curado",
    description: "Proceso de horneado a temperatura controlada para fijar el recubrimiento.",
    icon: Flame,
    details: [
      "3 hornos industriales de gran capacidad",
      "Dimensiones: 5.8m largo × 3.0m ancho × 2.0m alto",
      "Temperatura controlada 160-220°C",
      "Fusión y endurecimiento del polvo",
    ],
  },
  {
    id: 4,
    order: 4,
    title: "Control de Calidad",
    description: "Inspección rigurosa para garantizar un acabado perfecto.",
    icon: CheckCircle2,
    details: [
      "Inspección visual detallada",
      "Medición de espesores",
      "Pruebas de adherencia",
    ],
  },
] as const;

export const INDUSTRIES = [
  {
    id: "ferroviario",
    name: "Transporte Ferroviario",
    icon: Car,
    description: "Recubrimientos especializados para vagones de pasajeros y componentes ferroviarios.",
    applications: ["Vagones de pasajeros", "Estructuras ferroviarias", "Componentes de transporte"],
    examples: ["Vagones ferroviarios CAF México", "Estructuras metálicas", "Paneles exteriores"],
  },
  {
    id: "automotriz",
    name: "Automotriz y Transporte",
    icon: Car,
    description: "Componentes automotrices y de transporte con acabados de alta resistencia.",
    applications: ["Rines", "Chasis", "Partes de carrocería", "Transportes"],
    examples: ["Piezas automotrices", "Marcos estructurales", "Componentes de vehículos"],
  },
  {
    id: "gabinetes",
    name: "Gabinetes Eléctricos",
    icon: Box,
    description: "Acabados protectores para gabinetes y tableros eléctricos industriales.",
    applications: ["Gabinetes de control", "Tableros eléctricos", "Envolventes industriales"],
    examples: ["Gabinetes eléctricos", "Tableros de distribución", "Cajas de control"],
  },
  {
    id: "muebles",
    name: "Muebles de Oficina y Jardín",
    icon: Armchair,
    description: "Acabados estéticos y duraderos para mobiliario de oficina y exterior.",
    applications: ["Oficina", "Jardín", "Comercial", "Residencial"],
    examples: ["Escritorios metálicos", "Muebles de jardín", "Archiveros"],
  },
  {
    id: "publicidad",
    name: "Anuncios y Publicidad",
    icon: Building,
    description: "Recubrimientos para señalización, anuncios y elementos publicitarios.",
    applications: ["Anuncios espectaculares", "Carteleras", "Exhibidores", "Señalización"],
    examples: ["Estructuras publicitarias", "Stands comerciales", "Displays metálicos"],
  },
  {
    id: "iluminacion",
    name: "Luminarias y Alumbrado",
    icon: Zap,
    description: "Acabados especializados para postes, luminarias y sistemas de iluminación.",
    applications: ["Postes de alumbrado", "Luminarias", "Estructuras de iluminación"],
    examples: ["Postes urbanos", "Luminarias decorativas", "Soportes de iluminación"],
  },
  {
    id: "maquinaria",
    name: "Maquinaria Industrial",
    icon: Cog,
    description: "Protección duradera para equipos y maquinaria industrial.",
    applications: ["Equipos pesados", "Maquinaria agrícola", "Herramientas industriales"],
    examples: ["Carcasas de motores", "Estructuras metálicas", "Paneles de control"],
  },
  {
    id: "construccion",
    name: "Construcción",
    icon: Building,
    description: "Recubrimientos para elementos arquitectónicos y estructurales.",
    applications: ["Fachadas", "Ventanería", "Herrería arquitectónica"],
    examples: ["Perfiles de aluminio", "Marcos de ventanas", "Barandales"],
  },
] as const;

export const BENEFITS = [
  {
    id: "calidad",
    title: "Alta Calidad",
    description: "Acabados superiores con tecnología de punta",
    icon: Award,
  },
  {
    id: "durabilidad",
    title: "Durabilidad",
    description: "Recubrimientos resistentes y de larga duración",
    icon: ShieldCheck,
  },
  {
    id: "ecologico",
    title: "Ecológico",
    description: "Proceso sin solventes ni emisiones volátiles",
    icon: Leaf,
  },
  {
    id: "experiencia",
    title: "Experiencia",
    description: "Años de trayectoria en el sector industrial",
    icon: Trophy,
  },
  {
    id: "asesoria",
    title: "Asesoría Técnica",
    description: "Soporte especializado en cada proyecto",
    icon: Headphones,
  },
  {
    id: "rapidez",
    title: "Tiempos Rápidos",
    description: "Entrega eficiente sin comprometer calidad",
    icon: Clock,
  },
] as const;

// Especificaciones técnicas detalladas
export const TECHNICAL_SPECS = {
  voltage: "30-100 kV",
  curingTemp: "160-220°C",
  curingTime: "10-20 minutos",
  filmThickness: "50-150 micrones",
  transferEfficiency: "95-98%",
  weeklyCapacity: "5000 m²",
  availableCapacity: "38%",
  maxDimensions: {
    length: "6 metros",
    width: "3 metros",
    height: "2 metros",
    volume: "5.2 m³",
  },
  minSize: "1 cm²",
  maxWeight: "500 kg",
  serviceTemp: "-40°C a 120°C",
  lifeExpectancy: "10-15 años (con mantenimiento)",
} as const;

export const POWDER_TYPES = [
  {
    name: "Poliéster",
    features: ["Alta resistencia a exteriores", "Excelente durabilidad", "Resistencia UV superior"],
    use: "Exteriores",
  },
  {
    name: "Epoxi",
    features: ["Máxima protección anticorrosiva", "Uso en interiores", "Alta resistencia química"],
    use: "Interiores industriales",
  },
  {
    name: "Híbridos (Epoxi-Poliéster)",
    features: ["Versatilidad", "Buena resistencia exterior", "Balance costo-beneficio"],
    use: "Uso general",
  },
  {
    name: "Poliuretano",
    features: ["Máxima flexibilidad", "Resistencia química superior", "Aplicaciones especiales"],
    use: "Aplicaciones especiales",
  },
] as const;

export const FINISH_TYPES = [
  "Liso/Mate",
  "Semi-brillante",
  "Alto brillo",
  "Texturizado (rugoso)",
  "Metálico",
  "Martillado",
  "Naranja",
] as const;

export const QUALITY_TESTS = [
  "Medición de espesor de película",
  "Prueba de adherencia (crosscut test)",
  "Inspección visual",
  "Prueba de impacto",
  "Prueba de flexibilidad",
  "Resistencia a niebla salina",
] as const;

export const SURFACE_PREP = [
  {
    name: "Desengrase químico",
    description: "Eliminación de grasas y aceites industriales",
  },
  {
    name: "Granallado/Sandblasting",
    description: "Preparación mecánica de la superficie",
  },
  {
    name: "Fosfatado",
    description: "Capa de conversión para máxima adherencia",
  },
  {
    name: "Imprimación",
    description: "Cuando se requiere protección adicional",
  },
] as const;

export const STATS = {
  experience: "20+",
  experienceLabel: "Años de experiencia",
  projects: "5000+",
  projectsLabel: "m² semanales de capacidad",
  clients: "150+",
  clientsLabel: "Clientes satisfechos",
  satisfaction: "98%",
  satisfactionLabel: "Tasa de satisfacción",
} as const;
