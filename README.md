# ACCOUR - Sitio Web de Pintura Electrostática Industrial

Sitio web profesional para ACCOUR, empresa especializada en pintura electrostática y recubrimientos industriales en polvo poliéster.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4.0
- **Componentes UI**: Shadcn/ui
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form + Zod
- **Iconos**: Lucide React

## 📁 Estructura del Proyecto

```
Accour/
├── src/
│   ├── app/              # Pages y layouts (App Router)
│   │   ├── layout.tsx    # Layout principal con Header/Footer
│   │   ├── page.tsx      # Página de inicio
│   │   └── globals.css   # Estilos globales y tema
│   ├── components/
│   │   ├── layout/       # Componentes de layout
│   │   │   ├── Header.tsx    # Navegación principal
│   │   │   └── Footer.tsx    # Pie de página
│   │   ├── sections/     # Secciones de la página
│   │   │   ├── Hero.tsx      # Sección hero
│   │   │   ├── Services.tsx  # Servicios
│   │   │   ├── Process.tsx   # Proceso técnico
│   │   │   ├── Benefits.tsx  # Beneficios
│   │   │   ├── Industries.tsx # Industrias
│   │   │   └── CTA.tsx       # Call to action
│   │   └── ui/           # Componentes Shadcn/ui
│   ├── lib/
│   │   ├── constants.ts  # Constantes y configuración
│   │   └── utils.ts      # Utilidades
│   └── types/
│       └── index.ts      # Definiciones TypeScript
├── public/               # Archivos estáticos
├── .env.local           # Variables de entorno
└── WORKFLOW.md          # Plan de desarrollo completo
```

## 🎨 Tema y Colores

El sitio utiliza una paleta de colores industrial profesional:

- **Primary (Azul Industrial)**: `oklch(0.38 0.12 264.5)` - #1E3A8A
- **Secondary (Naranja)**: `oklch(0.75 0.15 75)` - #F59E0B

## 🛠️ Desarrollo

### Instalación

Las dependencias ya están instaladas. Si necesitas reinstalar:

```bash
npm install
```

### Variables de Entorno

Edita el archivo `.env.local` con tu información real:

```env
# Sitio
NEXT_PUBLIC_SITE_URL=https://tudominio.com
NEXT_PUBLIC_SITE_NAME="ACCOUR"

# Contacto
NEXT_PUBLIC_PHONE="+52 (55) 1234-5678"
NEXT_PUBLIC_EMAIL="contacto@accour.com"
NEXT_PUBLIC_ADDRESS="Calle Ejemplo 123, Colonia, Ciudad, CP 12345"

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER="5215512345678"
NEXT_PUBLIC_WHATSAPP_MESSAGE="Hola, me interesa conocer más sobre sus servicios"

# Mapbox (opcional - usa token de demo por defecto)
# NEXT_PUBLIC_MAPBOX_TOKEN="tu_mapbox_token"
# NEXT_PUBLIC_LATITUDE=19.4326
# NEXT_PUBLIC_LONGITUDE=-99.1332

# Google Analytics (opcional)
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"

# Resend para emails (opcional)
RESEND_API_KEY="re_xxxxxxxxxxxx"
```

**Nota:** El mapa usa Mapbox con un token público de demo. Funciona sin configuración adicional. Para producción, crea cuenta gratuita en Mapbox y agrega tu token.

### Servidor de Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de Producción

```bash
npm run build
npm start
```

## 📄 Páginas

### ✅ Implementadas (12 páginas)

1. **Inicio** (`/`): Hero, servicios, proceso, beneficios, industrias, CTA
2. **Servicios** (`/servicios`): Catálogo de servicios profesionales
3. **Contacto** (`/contacto`): Formularios de contacto y cotización con Google Maps
4. **Proceso** (`/proceso`): Proceso técnico detallado (4 pasos) + FAQ
5. **Galería** (`/galeria`): Portafolio de proyectos con filtros por industria
6. **Industrias** (`/industrias`): 6 sectores industriales con aplicaciones
7. **Sobre Nosotros** (`/nosotros`): Historia, misión, visión, valores
8. **404** (`/not-found`): Página de error personalizada

**Subpáginas de Servicios:**
9. Pintura Electrostática (`/servicios/pintura-electrostatica`)
10. Recubrimiento Industrial (`/servicios/recubrimiento-industrial`)
11. Tratamiento de Superficies (`/servicios/tratamiento-superficies`)
12. Protección Anticorrosiva (`/servicios/proteccion-anticorrosiva`)

**SEO:**
13. Sitemap XML (`/sitemap.xml`)
14. Robots.txt (`/robots.txt`)

## 🎯 Características Implementadas

✅ Diseño responsive (móvil, tablet, desktop)  
✅ Navegación con menú hamburguesa en móvil  
✅ Animaciones suaves con Framer Motion  
✅ Componentes reutilizables con Shadcn/ui (12 componentes)  
✅ SEO optimizado con metadata, Open Graph, Twitter Cards  
✅ Schema.org structured data (LocalBusiness, Organization)  
✅ Sitemap XML automático  
✅ Robots.txt configurado  
✅ Tema personalizado de ACCOUR  
✅ Header fixed con backdrop blur  
✅ Footer completo con información de contacto  
✅ Layout global con Header/Footer  
✅ TypeScript strict mode  
✅ Formularios con validación (React Hook Form + Zod)  
✅ API Routes para contacto y cotización  
✅ Google Maps integrado  
✅ Botón flotante de WhatsApp  
✅ Botón Scroll to Top  
✅ 12 páginas completas funcionales  

## 📦 Componentes Disponibles

### Layout
- `Header` - Navegación principal con logo, menú y CTA
- `Footer` - Información de contacto y enlaces

### Sections
- `Hero` - Hero principal con gradiente y animaciones
- `Services` - Grid de servicios con iconos
- `Process` - Timeline del proceso técnico
- `Benefits` - Beneficios con estadísticas
- `Industries` - Industrias con aplicaciones
- `CTA` - Call-to-action con opciones de contacto

### UI (Shadcn/ui)
Button, Card, Form, Input, Textarea, Label, Select, Badge, Separator, Tabs, Accordion, Dialog

### Utility
- `GoogleMap` - Integración con Google Maps
- `WhatsAppButton` - Botón flotante de WhatsApp
- `ScrollToTop` - Botón para volver arriba

## 📝 Contenido

Todo el contenido está en `/src/lib/constants.ts`:

- 4 Servicios principales
- 4 Pasos del proceso técnico
- 6 Industrias objetivo
- 6 Beneficios clave
- Información de contacto
- Enlaces de navegación

## 🚀 Deploy en Vercel

1. Push tu código a GitHub
2. Conecta el repo en Vercel
3. Configura las variables de entorno en Vercel Dashboard
4. Deploy automático ✨

### Variables de Entorno en Vercel

En Vercel Dashboard > Settings > Environment Variables, agrega:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_PHONE`
- `NEXT_PUBLIC_EMAIL`
- `NEXT_PUBLIC_ADDRESS`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (opcional)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` (opcional)
- `RESEND_API_KEY` (opcional)

## 📞 Próximos Pasos

### Configuración Básica
1. ✅ ~~Crear estructura del proyecto~~
2. ✅ ~~Implementar todas las páginas~~
3. ✅ ~~Agregar formularios funcionales~~
4. ✅ ~~Configurar SEO (sitemap, robots, Schema.org)~~
5. ⏳ Llenar `.env.local` con información real del cliente
6. ⏳ Obtener API key de Google Maps (https://console.cloud.google.com)

### Contenido y Medios
7. ⏳ Reemplazar placeholders de imágenes con fotos reales (ver `GUIA-IMAGENES.md`)
8. ⏳ Optimizar imágenes a formato WebP
9. ⏳ Agregar proyectos reales a la galería (mínimo 12 proyectos)
10. ⏳ Actualizar datos reales de contacto

### Integraciones Opcionales
11. ⏳ Configurar Google Analytics
12. ⏳ Integrar Resend para envío de emails
13. ⏳ Agregar más proyectos a la galería
14. ⏳ Crear blog/recursos (opcional)

### Deploy
15. ⏳ Deploy en Vercel
16. ⏳ Configurar dominio personalizado
17. ⏳ Enviar sitemap a Google Search Console
18. ⏳ Testing final en producción

---

## 📚 Documentación Adicional

- **WORKFLOW.md**: Plan completo del proyecto, fases y progreso
- **GUIA-IMAGENES.md**: Guía detallada para optimizar imágenes
- **.env.example**: Template de variables de entorno

---

**🎨 Desarrollado con Next.js 15 + TypeScript + Tailwind CSS 4.0**

**📊 Estado:** Fase 2 Frontend - 100% Completo ✅  
**🚀 Listo para:** Contenido real + Deploy
