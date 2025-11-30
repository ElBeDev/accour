# ✅ Checklist de Deployment - ACCOUR

## 📋 Pre-Deploy: Configuración

### Variables de Entorno
- [ ] Configurar `.env.local` con datos reales del cliente
  - [ ] `NEXT_PUBLIC_SITE_URL` - URL del dominio final
  - [ ] `NEXT_PUBLIC_PHONE` - Teléfono de contacto
  - [ ] `NEXT_PUBLIC_EMAIL` - Email de contacto
  - [ ] `NEXT_PUBLIC_ADDRESS` - Dirección física completa
  - [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` - Número de WhatsApp con código de país
  - [ ] `NEXT_PUBLIC_MAPBOX_TOKEN` - Token de Mapbox (opcional, usa demo por defecto)
  - [ ] `NEXT_PUBLIC_LATITUDE` - Latitud de ubicación (opcional)
  - [ ] `NEXT_PUBLIC_LONGITUDE` - Longitud de ubicación (opcional)
  - [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics (opcional)
  - [ ] `RESEND_API_KEY` - API key de Resend (opcional)

### Contenido y Medios
- [ ] Reemplazar todas las imágenes placeholder con fotos reales
  - [ ] Logo (PNG + SVG)
  - [ ] Hero principal
  - [ ] 4 imágenes del proceso
  - [ ] 4 imágenes de servicios
  - [ ] 6 imágenes de industrias
  - [ ] Mínimo 12 proyectos para galería
  - [ ] 3 imágenes de instalaciones
- [ ] Optimizar todas las imágenes a WebP (ver GUIA-IMAGENES.md)
- [ ] Verificar textos y corregir errores ortográficos
- [ ] Actualizar metadata y descripciones SEO

### Mapbox (Opcional - Ya funciona con token demo)
- [ ] Crear cuenta gratuita en Mapbox (https://account.mapbox.com/)
- [ ] Obtener Access Token público
- [ ] Agregar a variables de entorno (NEXT_PUBLIC_MAPBOX_TOKEN)
- [ ] Configurar coordenadas exactas (LATITUDE y LONGITUDE)
- [ ] Probar mapa en desarrollo

### Google Analytics (opcional)
- [ ] Crear propiedad GA4
- [ ] Obtener Measurement ID
- [ ] Agregar a variables de entorno

### Resend (opcional para emails)
- [ ] Crear cuenta en Resend
- [ ] Verificar dominio de email
- [ ] Obtener API key
- [ ] Configurar en variables de entorno

---

## 🔍 Testing Pre-Deploy

### Testing Funcional
- [ ] Todas las páginas cargan correctamente
- [ ] Navegación funciona en todas las páginas
- [ ] Formulario de contacto envía datos
- [ ] Formulario de cotización envía datos
- [ ] Validación de formularios funciona
- [ ] Mensajes de éxito/error se muestran
- [ ] Botón de WhatsApp abre chat correctamente
- [ ] Botón Scroll to Top funciona
- [ ] Google Maps carga con ubicación correcta
- [ ] Enlaces internos funcionan
- [ ] Enlaces externos abren en nueva pestaña

### Testing Responsive
- [ ] Mobile (375px) - iPhone
- [ ] Mobile (414px) - iPhone Plus
- [ ] Tablet (768px) - iPad
- [ ] Desktop (1366px) - Laptop
- [ ] Desktop (1920px) - Monitor grande
- [ ] Menú hamburguesa funciona en mobile
- [ ] Imágenes se adaptan correctamente
- [ ] Texto legible en todos los tamaños

### Testing Cross-Browser
- [ ] Chrome (última versión)
- [ ] Firefox (última versión)
- [ ] Safari (última versión)
- [ ] Edge (última versión)
- [ ] Safari iOS (iPhone)
- [ ] Chrome Android

### Performance
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 95
- [ ] Lighthouse Best Practices > 95
- [ ] Lighthouse SEO = 100
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Time to Interactive < 3.5s

### SEO
- [ ] Sitemap XML se genera correctamente (`/sitemap.xml`)
- [ ] Robots.txt accesible (`/robots.txt`)
- [ ] Meta tags en todas las páginas
- [ ] Open Graph tags configurados
- [ ] Twitter Cards configurados
- [ ] Schema.org structured data presente
- [ ] Alt text en todas las imágenes
- [ ] Títulos únicos por página
- [ ] Descripciones únicas por página

---

## 🚀 Deployment en Vercel

### Setup Inicial
- [ ] Push código final a GitHub
- [ ] Crear cuenta en Vercel (si no existe)
- [ ] Conectar repositorio de GitHub
- [ ] Configurar proyecto en Vercel

### Variables de Entorno en Vercel
- [ ] Agregar todas las variables de `.env.local` en Vercel Dashboard
- [ ] Variables > Environment Variables > Add New
- [ ] Marcar para Production, Preview, Development según corresponda

### Build y Deploy
- [ ] Ejecutar build local: `npm run build`
- [ ] Verificar que no hay errores de build
- [ ] Deploy desde Vercel Dashboard
- [ ] Verificar que el deploy fue exitoso
- [ ] Probar URL de Vercel (.vercel.app)

### Dominio Personalizado
- [ ] Comprar dominio (si no existe)
- [ ] Agregar dominio en Vercel Dashboard
- [ ] Configurar DNS records según instrucciones de Vercel
  - [ ] A record para apex domain
  - [ ] CNAME para www
- [ ] Esperar propagación DNS (puede tomar 24-48h)
- [ ] Verificar SSL automático de Vercel
- [ ] Probar dominio personalizado

---

## 🔧 Post-Deploy

### Configuración Final
- [ ] Actualizar `NEXT_PUBLIC_SITE_URL` con dominio final
- [ ] Re-deploy con URL actualizada
- [ ] Verificar redirects (www a no-www o viceversa)

### Google Search Console
- [ ] Crear cuenta en Google Search Console
- [ ] Agregar propiedad (dominio o URL prefix)
- [ ] Verificar propiedad
- [ ] Enviar sitemap: `https://tudominio.com/sitemap.xml`
- [ ] Solicitar indexación de páginas principales

### Google My Business (opcional)
- [ ] Crear/actualizar perfil de Google My Business
- [ ] Agregar enlace al sitio web
- [ ] Verificar información de contacto
- [ ] Agregar fotos de instalaciones
- [ ] Agregar horarios de atención

### Redes Sociales
- [ ] Actualizar enlaces en perfiles sociales
- [ ] Compartir lanzamiento del sitio
- [ ] Crear publicaciones con screenshots

### Analytics y Monitoreo
- [ ] Verificar que Google Analytics está registrando visitas
- [ ] Configurar Vercel Analytics (incluido gratis)
- [ ] Configurar alertas de downtime (UptimeRobot, etc.)

### Backup y Seguridad
- [ ] Confirmar que el código está en GitHub
- [ ] Verificar que SSL/HTTPS funciona
- [ ] Probar formularios en producción
- [ ] Verificar que no hay datos sensibles expuestos

---

## 📧 Emails y Notificaciones

### Configuración de Emails (con Resend)
- [ ] Instalar dependencia Resend: `npm install resend`
- [ ] Agregar RESEND_API_KEY a variables de entorno
- [ ] Actualizar `/api/contact/route.ts` para enviar emails reales
- [ ] Actualizar `/api/quote/route.ts` para enviar emails reales
- [ ] Probar envío de email desde formulario de contacto
- [ ] Probar envío de email desde formulario de cotización
- [ ] Configurar email de respuesta automática al cliente

### Sin Resend (alternativa)
- [ ] Usar servicios como Formspree, Basin, o email directo
- [ ] Actualizar rutas API según el servicio elegido

---

## 🎯 Marketing Digital (Post-Lanzamiento)

### SEO Local
- [ ] Optimizar para keywords locales
- [ ] Crear backlinks desde directorios industriales
- [ ] Registrar en directorios B2B

### Contenido
- [ ] Publicar primer post en blog (si está implementado)
- [ ] Crear guías técnicas descargables
- [ ] Agregar casos de éxito detallados

### Publicidad (opcional)
- [ ] Google Ads - Búsqueda
- [ ] Facebook/Instagram Ads
- [ ] LinkedIn Ads (B2B)

---

## 📊 Monitoreo Continuo

### Semanalmente
- [ ] Revisar Google Analytics
- [ ] Revisar formularios recibidos
- [ ] Revisar errores en consola (si hay)
- [ ] Actualizar galería con proyectos nuevos

### Mensualmente
- [ ] Auditoría de Lighthouse
- [ ] Revisar posicionamiento en Google
- [ ] Actualizar contenido si es necesario
- [ ] Revisar y responder reviews (Google My Business)

---

## ✅ Checklist de Aprobación Final

Antes de marcar el proyecto como **COMPLETADO**, verificar:

- [ ] Cliente ha revisado y aprobado el sitio
- [ ] Todos los datos de contacto son correctos
- [ ] Todas las imágenes están optimizadas
- [ ] No hay errores de consola en producción
- [ ] Formularios funcionan y notifican correctamente
- [ ] SEO básico implementado
- [ ] Dominio configurado y funcionando
- [ ] SSL activo (HTTPS)
- [ ] Google Analytics funcionando
- [ ] Sitemap enviado a Google
- [ ] Documentación entregada al cliente
- [ ] Cliente sabe cómo actualizar contenido básico

---

## 📞 Soporte Post-Lanzamiento

### Primer Mes
- Monitoreo diario de errores
- Ajustes menores sin costo
- Respuesta a consultas del cliente

### Mantenimiento Mensual (opcional)
- Actualizaciones de seguridad
- Backup semanal
- Reporte de analytics
- Actualización de contenido

---

## 📚 Recursos Entregables

- [ ] Código fuente en GitHub
- [ ] Documentación completa (README, WORKFLOW, GUIA-IMAGENES)
- [ ] Acceso a Vercel
- [ ] Acceso a Google Analytics
- [ ] Acceso a Google Search Console
- [ ] Manual de uso básico
- [ ] Credenciales y accesos documentados

---

**Última actualización:** 27 de Noviembre, 2025

**Estado:** ⏳ Listo para configuración final y deploy
