# Martek - Sitio Web

Sitio web corporativo para Martek, especialistas en mangueras industriales, acoplamientos y columnas de riego.

## Estructura del Proyecto

```
martek-web/
├── index.html                          # Página principal
├── catalogo.html                       # Página de catálogo general
├── mangueras-industriales.html         # Página de producto
├── acoplamientos.html                  # Página de producto
├── columnas-riego.html                 # Página de producto
├── flexibles-aire.html                 # Página de producto
├── politica-privacidad.html            # Política de privacidad
├── aviso-legal.html                    # Aviso legal
├── sitemap.xml                         # Mapa del sitio para SEO
├── robots.txt                          # Instrucciones para bots
├── css/
│   └── main.css                        # Estilos principales con variables CSS
├── js/
│   └── main.js                         # JavaScript (menú móvil, scroll, etc.)
├── assets/
│   ├── images/                         # Imágenes del sitio
│   └── pdfs/                           # Fichas técnicas y catálogos
├── IMAGENES-NECESARIAS.md              # Lista de imágenes requeridas
└── README.md                           # Este archivo
```

## Características Implementadas

### ✅ Diseño y Estilos
- Variables CSS para fácil personalización de colores, tipografía y espaciado
- Diseño responsive para móvil, tablet y escritorio
- Animaciones y transiciones suaves
- Menú hamburguesa para móvil
- Botón "volver arriba"
- Página activa destacada en navegación

### ✅ SEO y Optimización
- Meta tags completos (description, keywords, author)
- Open Graph y Twitter Cards para redes sociales
- URLs canónicas
- Sitemap.xml
- Robots.txt
- Lazy loading en imágenes
- Estructura semántica HTML5

### ✅ Páginas
- Página principal con hero, servicios, catálogo y contacto
- 4 páginas de productos detalladas
- Página de catálogo general
- Política de privacidad (adaptada RGPD)
- Aviso legal completo

### ✅ Funcionalidades
- Navegación suave entre secciones
- Menú móvil funcional
- Breadcrumbs en páginas internas
- Sección de descarga de PDFs (ejemplo en mangueras industriales)
- Footer con enlaces legales
- Integración de Google Maps

## Tareas Pendientes

### 🔴 Crítico - Antes de Lanzar

1. **Imágenes**
   - Añadir todas las imágenes listadas en `IMAGENES-NECESARIAS.md`
   - Crear favicons (favicon.ico, favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png)
   - Optimizar todas las imágenes para web (comprimir sin perder calidad)

2. **PDFs**
   - Crear carpeta `assets/pdfs/`
   - Subir las fichas técnicas en PDF
   - Actualizar nombres de archivos y tamaños en las secciones de descarga
   - Añadir sección de PDFs en todas las páginas de productos (ver ejemplo en mangueras-industriales.html)

3. **Formulario de Contacto**
   - Implementar backend para el formulario (opciones):
     - PHP con PHPMailer
     - Servicio como Formspree, EmailJS o Web3Forms
     - Backend propio con Node.js/Express
   - Añadir validación del lado del servidor
   - Mensaje de confirmación tras envío
   - Protección anti-spam (reCAPTCHA recomendado)

4. **Verificar Datos**
   - Revisar y actualizar datos de contacto si es necesario
   - Verificar que la dirección, teléfono y email sean correctos
   - Actualizar el CIF/NIF en páginas legales si aplica

### 🟡 Importante - Después del Lanzamiento

5. **Analytics**
   - Configurar Google Analytics 4
   - Añadir el código de seguimiento a todas las páginas
   - Configurar eventos personalizados (clics en PDFs, formulario, etc.)

6. **Dominio y Hosting**
   - Contratar hosting
   - Configurar dominio martek.es
   - Certificado SSL (HTTPS)
   - Configurar email profesional (ventas@martek.es)

7. **Testing**
   - Probar en diferentes navegadores (Chrome, Firefox, Safari, Edge)
   - Probar en diferentes dispositivos (móvil, tablet, escritorio)
   - Verificar todos los enlaces
   - Probar el formulario de contacto
   - Validar HTML y CSS

### 🟢 Opcional - Mejoras Futuras

8. **Mejoras de Contenido**
   - Añadir más fotos de productos
   - Sección de proyectos/casos de éxito
   - Blog o sección de noticias
   - Galería de imágenes
   - Testimonios de clientes

9. **Funcionalidades Adicionales**
   - Buscador de productos
   - Filtros en catálogo
   - Comparador de productos
   - Chat en vivo o WhatsApp Business
   - Newsletter/Boletín

10. **Marketing**
    - Configurar Google My Business
    - Pixel de Facebook/Meta
    - LinkedIn Insight Tag
    - Schema.org markup para rich snippets

## Guía de Uso

### Actualizar Colores
Editar las variables en `css/main.css`:
```css
:root {
    --color-primary: hsl(215, 80%, 25%);
    --color-secondary: #0077cc;
    /* ... más variables */
}
```

### Añadir Nuevo Producto
1. Duplicar una página de producto existente
2. Actualizar el contenido (título, descripción, características)
3. Añadir la imagen del producto en `assets/images/`
4. Actualizar `sitemap.xml`
5. Añadir enlace en `catalogo.html` e `index.html`

### Añadir PDFs
1. Colocar PDF en `assets/pdfs/`
2. Copiar la estructura de `.pdf-item` de mangueras-industriales.html
3. Actualizar href, nombre y tamaño del archivo

## Soporte y Contacto

Para dudas sobre el desarrollo de esta web:
- Documentación de referencia en línea
- Validador HTML: https://validator.w3.org/
- Validador CSS: https://jigsaw.w3.org/css-validator/

## Licencia

Este sitio web es propiedad de Martek. Todos los derechos reservados.
