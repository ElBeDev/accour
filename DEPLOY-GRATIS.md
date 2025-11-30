# 🚀 Cómo Subir tu Sitio GRATIS a Internet

Tu sitio está listo para publicarse. Aquí las opciones más fáciles y **100% GRATIS**:

---

## ✅ OPCIÓN 1: Vercel (LA MÁS FÁCIL - RECOMENDADA)

### Pasos:

1. **Ve a** [vercel.com](https://vercel.com)
2. **Inicia sesión** con tu cuenta de GitHub
3. **Clic en "Add New Project"**
4. **Selecciona** el repositorio `Accour`
5. **Clic en "Deploy"**
6. **¡LISTO!** Tu sitio estará en: `https://accour.vercel.app`

### Ventajas:
- ⚡ Deploy automático cada vez que hagas cambios
- 🌐 SSL/HTTPS gratis
- 🚀 CDN global (súper rápido)
- 💰 100% gratis

---

## ✅ OPCIÓN 2: Netlify (También muy fácil)

### Pasos:

1. **Ve a** [netlify.com](https://netlify.com)
2. **Clic en "Add new site"**
3. **Arrastra la carpeta** `out` a la ventana
4. **¡LISTO!** Tu sitio estará en: `https://accour.netlify.app`

### Ventajas:
- 📤 Solo arrastra y suelta
- 🌐 SSL/HTTPS gratis
- 💰 100% gratis

---

## ✅ OPCIÓN 3: GitHub Pages (Desde tu repo)

### Pasos:

1. **Sube el código a GitHub** (si no lo has hecho)
2. **Ve a Settings** del repositorio
3. **Pages** → **Source** → Selecciona "GitHub Actions"
4. **Crea archivo** `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run export
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

5. **¡LISTO!** Tu sitio estará en: `https://tunombre.github.io/Accour`

---

## 🎯 RECOMENDACIÓN: USA VERCEL

Es la más fácil y automática. Pasos resumidos:

```bash
# 1. Asegúrate de tener el código en GitHub
git add .
git commit -m "Listo para deploy"
git push

# 2. Ve a vercel.com
# 3. Conecta tu GitHub
# 4. Importa el proyecto Accour
# 5. Clic en Deploy
```

**¡Eso es todo!** Vercel detectará automáticamente que es un proyecto Next.js y lo configurará todo.

---

## 📝 Notas Importantes

### ¿Necesito exportar primero?
**NO**, Vercel lo hace automáticamente. Solo sube el código.

### ¿Funcionará todo?
Sí, pero necesitas configurar las variables de entorno en Vercel:

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega:
   - `NEXT_PUBLIC_SITE_NAME`: ACCOUR
   - `NEXT_PUBLIC_SITE_URL`: (Vercel te dará la URL)
   - `NEXT_PUBLIC_EMAIL`: tu-email@ejemplo.com
   - `NEXT_PUBLIC_PHONE`: +52 xxx xxx xxxx
   - `NEXT_PUBLIC_ADDRESS`: Tu dirección
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: 52xxxxxxxxxx

### ¿Puedo usar mi propio dominio?
Sí, todos los servicios permiten dominios personalizados gratis:
- Vercel: Agregar dominio en Settings
- Netlify: Domain settings
- GitHub Pages: CNAME file

---

## 🆘 Si Tienes Problemas

### Vercel no detecta el proyecto
Asegúrate de que `package.json` y `next.config.ts` estén en la raíz.

### Los archivos no cargan
Verifica que `output: 'export'` esté en `next.config.ts`

### El sitio está en blanco
Revisa las variables de entorno en Vercel.

---

## 🎉 Después del Deploy

Una vez publicado:
- Los formularios funcionarán (abrirán el correo)
- Todo estará optimizado y rápido
- Tendrás HTTPS automático
- Podrás compartir la URL con clientes

**URL típica:** `https://accour.vercel.app` o `https://accour.netlify.app`

---

## 💡 Comando Rápido para Vercel CLI (Opcional)

Si prefieres la terminal:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy (primera vez)
vercel

# Deploy subsecuentes
vercel --prod
```

¡Sigue las instrucciones en pantalla y listo!
