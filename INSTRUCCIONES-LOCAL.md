# 🌐 Cómo Abrir el Sitio Localmente

Tu sitio web ha sido exportado como HTML estático y está listo para abrirse con doble clic.

## 📁 Ubicación de los Archivos

Los archivos del sitio exportado están en la carpeta:
```
/Users/bener/GitHub/Accour/out/
```

## 🚀 Cómo Abrir el Sitio

### Método 1: Doble Clic (Más Simple)
1. Navega a la carpeta `out`
2. Busca el archivo `index.html`
3. Haz **doble clic** en el archivo
4. El sitio se abrirá en tu navegador predeterminado

### Método 2: Desde el Finder (macOS)
1. Abre Finder
2. Navega a: `/Users/bener/GitHub/Accour/out/`
3. Doble clic en `index.html`

### Método 3: Arrastrar al Navegador
1. Abre tu navegador favorito (Chrome, Safari, Firefox, etc.)
2. Arrastra el archivo `out/index.html` a la ventana del navegador

## 📄 Estructura de Archivos

```
out/
├── index.html              ← Página principal (ÁBRELO AQUÍ)
├── contacto/
│   └── index.html         ← Página de contacto
├── servicios/
│   └── index.html         ← Página de servicios
├── galeria/
│   └── index.html         ← Galería
├── proceso/
│   └── index.html         ← Proceso y especificaciones
├── nosotros/
│   └── index.html         ← Sobre nosotros
├── industrias/
│   └── index.html         ← Industrias
└── _next/                  ← Archivos CSS y JavaScript
```

## 🔄 Navegación

Una vez abierto el sitio:
- Los enlaces del menú funcionarán normalmente
- Puedes navegar entre todas las páginas
- Los formularios de contacto abrirán tu cliente de correo electrónico

## ⚠️ Notas Importantes

1. **Sin Internet**: El sitio funciona completamente sin conexión a internet
2. **Formularios**: Los formularios ahora abren tu cliente de correo (Gmail, Outlook, Mail, etc.)
3. **No Requiere Servidor**: Es HTML puro, no necesitas instalar nada más
4. **Compartir**: Puedes copiar toda la carpeta `out` a una USB o enviársela a alguien

## 🌐 Para Subirlo a un Servidor Web

Si quieres publicarlo en internet:

1. Sube todo el contenido de la carpeta `out/` a tu servidor web
2. Asegúrate de que `index.html` esté en la raíz
3. Configura tu dominio para apuntar a esa carpeta

### Servicios Recomendados (Gratis):
- **Netlify**: Arrastra y suelta la carpeta `out`
- **Vercel**: Conecta el repositorio de GitHub
- **GitHub Pages**: Activa Pages en tu repositorio
- **Cloudflare Pages**: Similar a Netlify

## 🔧 Regenerar el Sitio

Si haces cambios al código y quieres regenerar el sitio estático:

```bash
cd /Users/bener/GitHub/Accour
npm run export
```

Esto recreará la carpeta `out` con los cambios más recientes.

## 📧 Soporte

Si tienes problemas:
1. Verifica que el archivo `index.html` exista en la carpeta `out`
2. Intenta abrir con diferentes navegadores
3. Revisa que no haya mensajes de error en la consola del navegador (F12)
