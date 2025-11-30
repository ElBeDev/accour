#!/bin/bash

# Script para abrir el sitio web localmente

# Obtener la ruta del directorio actual
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Ruta al archivo index.html
INDEX_FILE="$SCRIPT_DIR/out/index.html"

# Verificar si el archivo existe
if [ ! -f "$INDEX_FILE" ]; then
    echo "❌ Error: No se encontró el archivo index.html"
    echo "📦 Ejecuta 'npm run export' primero para generar los archivos"
    exit 1
fi

# Abrir el sitio en el navegador predeterminado
echo "🌐 Abriendo el sitio web..."
open "$INDEX_FILE"

echo "✅ ¡Sitio abierto en tu navegador!"
