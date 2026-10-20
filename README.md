# Dibatista · Verón

Sitio institucional estático de Emiliano Dibatista y Joaquín Verón. No requiere framework, dependencias ni proceso de compilación.

## Estructura

- `index.html`: contenido y metadatos del sitio.
- `css/styles.css`: estilos, componentes y ajustes responsive.
- `js/main.js`: galería, menú, enlaces de contacto y vista ampliada.
- `img/`: fotografías y logotipo.

## Ver en local

Desde esta carpeta, inicia un servidor estático, por ejemplo:

```bash
python3 -m http.server 8000
```

Luego abre `http://localhost:8000`.

## Publicar en Netlify

En la configuración de compilación selecciona el directorio raíz del repositorio (`.`) como **Publish directory** y deja vacío **Build command**. También puedes importar el repositorio desde Netlify; el sitio no necesita ZIP ni compilación. La publicación debe hacerse desde el panel o el flujo Git ya conectado por el titular.

## Datos de contacto y galería

El número de WhatsApp, usuario de Instagram, zona y trabajos están definidos al inicio de `js/main.js` en `CONFIG` y `WORKS`. Los datos existentes se conservaron. No hay claves privadas ni credenciales de servicios en el repositorio.

## Metadatos para compartir

Título y descripción Open Graph están configurados en `index.html`. Para que WhatsApp u otras redes muestren una imagen, agrega `og:image` con una URL absoluta pública a una imagen horizontal (idealmente 1200 × 630). La URL definitiva del sitio no se pudo determinar desde los archivos locales, por eso no se configuró una dirección inventada.
