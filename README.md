# Proyecto React + Tailwind CSS

Proyecto web moderno construido con React y Tailwind CSS, optimizado para producción.

## 🚀 Características

- ⚡ **Vite** - Build tool ultra rápido
- ⚛️ **React 18** - Última versión de React
- 🎨 **Tailwind CSS** - Framework CSS utilitario
- 📦 **Configuración lista para producción** - Optimizado para desplegar

## 📋 Requisitos previos

- Node.js 16 o superior
- npm o yarn

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install
```

## 💻 Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:3000`

## 🏗️ Construcción para producción

```bash
# Crear build de producción
npm run build
```

Los archivos optimizados estarán en la carpeta `dist/`

## 📦 Despliegue

### Opción 1: Vercel (Recomendado)
1. Instala Vercel CLI: `npm install -g vercel`
2. Ejecuta: `vercel`
3. Sigue las instrucciones

### Opción 2: Netlify
1. Ejecuta: `npm run build`
2. Arrastra la carpeta `dist/` a [Netlify Drop](https://app.netlify.com/drop)

### Opción 3: GitHub Pages
1. Instala gh-pages: `npm install --save-dev gh-pages`
2. Agrega a package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Ejecuta: `npm run build && npm run deploy`

## 📁 Estructura del proyecto

```
invitation/
├── src/
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales y Tailwind
├── public/              # Archivos estáticos
├── index.html           # HTML principal
├── vite.config.js       # Configuración de Vite
├── tailwind.config.js   # Configuración de Tailwind
├── postcss.config.js    # Configuración de PostCSS
└── package.json         # Dependencias y scripts

```

## 🎨 Personalización

### Colores
Edita `tailwind.config.js` para cambiar la paleta de colores:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Tus colores aquí
      }
    }
  }
}
```

### Componentes
Los componentes reutilizables están en `src/index.css` bajo `@layer components`

## 📝 Licencia

Este proyecto es de código abierto.
