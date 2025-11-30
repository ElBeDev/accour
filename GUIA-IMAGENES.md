# Guía de Optimización de Imágenes - ACCOUR

## 📸 Imágenes Requeridas

### Imágenes Principales (Críticas)

#### 1. Logo
- **Archivo:** `public/logo.png` y `public/logo.svg`
- **Dimensiones:** 300x100px (SVG preferido)
- **Formato:** PNG transparente o SVG
- **Peso máximo:** 50KB
- **Uso:** Header, Footer, Schema.org

#### 2. Hero / Home
- **Archivo:** `public/images/hero-main.jpg`
- **Dimensiones:** 1920x1080px
- **Formato:** WebP (fallback JPG)
- **Peso máximo:** 200KB
- **Descripción:** Proceso de aplicación de pintura electrostática en acción

#### 3. Proceso (4 imágenes)
- `public/images/proceso-preparacion.jpg` - Limpieza y preparación de piezas
- `public/images/proceso-aplicacion.jpg` - Aplicación electrostática
- `public/images/proceso-curado.jpg` - Horno de curado
- `public/images/proceso-calidad.jpg` - Control de calidad
- **Dimensiones:** 800x600px cada una
- **Formato:** WebP
- **Peso máximo:** 100KB cada una

#### 4. Servicios (4 imágenes)
- `public/images/servicio-pintura-electrostatica.jpg`
- `public/images/servicio-recubrimiento-industrial.jpg`
- `public/images/servicio-tratamiento-superficies.jpg`
- `public/images/servicio-proteccion-anticorrosiva.jpg`
- **Dimensiones:** 600x400px
- **Formato:** WebP
- **Peso máximo:** 80KB cada una

#### 5. Industrias (6 imágenes)
- `public/images/industria-automotriz.jpg`
- `public/images/industria-maquinaria.jpg`
- `public/images/industria-muebles.jpg`
- `public/images/industria-construccion.jpg`
- `public/images/industria-electrodomesticos.jpg`
- `public/images/industria-equipamiento.jpg`
- **Dimensiones:** 400x300px
- **Formato:** WebP
- **Peso máximo:** 60KB cada una

#### 6. Galería (mínimo 12-20 proyectos)
- `public/images/galeria/proyecto-01.jpg` hasta `proyecto-20.jpg`
- **Dimensiones:** 800x600px
- **Formato:** WebP
- **Peso máximo:** 100KB cada una
- **Contenido:** Antes/después, proyectos terminados por industria

#### 7. Instalaciones / Nosotros (3-5 imágenes)
- `public/images/instalaciones-planta.jpg`
- `public/images/instalaciones-equipo.jpg`
- `public/images/instalaciones-taller.jpg`
- **Dimensiones:** 800x600px
- **Formato:** WebP
- **Peso máximo:** 100KB cada una

---

## 🛠️ Herramientas de Optimización

### Conversión a WebP

#### Usando Next.js Image Optimization (Automático)
Next.js optimiza automáticamente las imágenes cuando usas el componente `<Image>`:
```tsx
import Image from 'next/image';

<Image
  src="/images/hero-main.jpg"
  alt="Descripción"
  width={1920}
  height={1080}
  priority
  quality={85}
/>
```

#### Conversión Manual con Sharp (Node.js)
```bash
npm install sharp-cli -g

# Convertir una imagen
sharp input.jpg -o output.webp

# Convertir todas las imágenes en una carpeta
for file in *.jpg; do sharp "$file" -o "${file%.jpg}.webp"; done
```

#### Herramientas Online
- **Squoosh** (https://squoosh.app/) - Google, gratuito
- **TinyPNG** (https://tinypng.com/) - Compresión PNG/JPG
- **CloudConvert** (https://cloudconvert.com/) - Conversión masiva

---

## 📐 Especificaciones Técnicas

### Formatos Recomendados

1. **WebP** - Primera opción (mejor compresión)
   - Soporte: 95%+ navegadores modernos
   - Compresión: 25-35% mejor que JPG
   - Transparencia: Sí

2. **JPG** - Fallback para fotos
   - Calidad: 80-85%
   - Compresión progresiva
   - Sin transparencia

3. **PNG** - Solo para logos con transparencia
   - Optimizado con TinyPNG
   - Peso máximo: 100KB

4. **SVG** - Preferido para logos e iconos
   - Escalable sin pérdida
   - Peso mínimo

### Dimensiones por Dispositivo

```
Desktop Large: 1920x1080
Desktop Standard: 1366x768
Tablet: 768x1024
Mobile: 375x667
```

### Responsive Images con Next.js

```tsx
<Image
  src="/images/hero.jpg"
  alt="Hero"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority
  className="object-cover"
/>
```

---

## ✅ Checklist de Optimización

### Antes de Subir Imágenes
- [ ] Imágenes en alta resolución (mínimo dimensiones requeridas)
- [ ] Convertidas a WebP
- [ ] Optimizadas (peso correcto)
- [ ] Nombres descriptivos en inglés (kebab-case)
- [ ] Sin espacios ni caracteres especiales en nombres

### Al Implementar en el Sitio
- [ ] Usar componente `<Image>` de Next.js
- [ ] Agregar `alt` text descriptivo (SEO)
- [ ] Definir `width` y `height` para evitar layout shift
- [ ] Usar `priority` solo en imágenes above-the-fold
- [ ] Configurar `sizes` para responsive
- [ ] Lazy loading automático (Next.js lo hace)

### Testing
- [ ] Verificar carga en conexión lenta (3G)
- [ ] Comprobar layout shift (CLS)
- [ ] Validar que WebP funciona en todos los navegadores
- [ ] Test en dispositivos reales (mobile)
- [ ] Lighthouse Performance Score > 90

---

## 🎨 Estilo Visual Recomendado

### Fotografía
- **Iluminación:** Profesional, bien iluminada
- **Enfoque:** Nítido, alta definición
- **Composición:** Regla de tercios
- **Color:** Colores vibrantes (azul/naranja de la marca)
- **Fondo:** Limpio, industrial, profesional

### Proceso de Aplicación
- Mostrar equipamiento moderno
- Técnicos con equipo de protección
- Piezas en proceso de pintura
- Cabina de aplicación
- Horno de curado
- Control de calidad con instrumentos

### Proyectos Terminados
- Antes y después (lado a lado)
- Diferentes ángulos
- Iluminación que resalte el acabado
- Variedad de colores
- Diferentes tipos de piezas/industrias

---

## 📊 Performance Targets

### Métricas de Imágenes
- **Largest Contentful Paint (LCP):** < 2.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Total Image Weight (página completa):** < 1MB
- **First Contentful Paint (FCP):** < 1.8s

### Lighthouse Goals
- Performance: > 90
- Best Practices: > 95
- SEO: 100
- Accessibility: > 95

---

## 🔧 Script de Optimización Automática

Crear `scripts/optimize-images.js`:

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images-original';
const outputDir = './public/images';

const sizes = {
  large: 1920,
  medium: 1200,
  small: 800,
  thumbnail: 400,
};

async function optimizeImage(inputPath, outputPath, width) {
  await sharp(inputPath)
    .resize(width, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(outputPath);
}

// Ejecutar para todas las imágenes
// node scripts/optimize-images.js
```

---

## 📁 Estructura de Carpetas

```
public/
├── logo.png
├── logo.svg
├── favicon.ico
├── images/
│   ├── hero-main.webp
│   ├── proceso-preparacion.webp
│   ├── proceso-aplicacion.webp
│   ├── proceso-curado.webp
│   ├── proceso-calidad.webp
│   ├── servicio-pintura-electrostatica.webp
│   ├── servicio-recubrimiento-industrial.webp
│   ├── servicio-tratamiento-superficies.webp
│   ├── servicio-proteccion-anticorrosiva.webp
│   ├── industria-automotriz.webp
│   ├── industria-maquinaria.webp
│   ├── industria-muebles.webp
│   ├── industria-construccion.webp
│   ├── industria-electrodomesticos.webp
│   ├── industria-equipamiento.webp
│   ├── instalaciones-planta.webp
│   ├── instalaciones-equipo.webp
│   ├── instalaciones-taller.webp
│   └── galeria/
│       ├── proyecto-01.webp
│       ├── proyecto-02.webp
│       └── ...
└── images-original/ (no incluir en producción)
    └── archivos originales sin optimizar
```

---

## 💡 Tips Adicionales

1. **Priorización de Carga**
   - Hero image: `priority={true}`
   - Imágenes below-the-fold: lazy loading automático
   - Placeholder blur: `placeholder="blur"`

2. **CDN**
   - Vercel optimiza imágenes automáticamente
   - Cloudflare Images (opcional)
   - Imgix (opcional, para casos avanzados)

3. **Alt Text para SEO**
   ```tsx
   alt="Pintura electrostática en polvo aplicada a piezas automotrices"
   // No solo: alt="Imagen 1"
   ```

4. **Favicon y App Icons**
   - Crear `favicon.ico` (32x32)
   - Crear `apple-touch-icon.png` (180x180)
   - Crear `android-chrome-*.png` (192x192, 512x512)

---

## 📞 Contacto para Fotografía

Si se requiere sesión fotográfica profesional:
- Contratar fotógrafo industrial
- Presupuesto aproximado: $5,000-$15,000 MXN
- Duración: 1 día en planta
- Entregables: 50-100 fotos editadas

---

**Última actualización:** 27 de Noviembre, 2025
