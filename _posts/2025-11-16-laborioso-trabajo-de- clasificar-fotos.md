---
layout: post
title: El laborioso trabajo de editar y clasificar fotografías
date: 2025-11-16 23:36:10-100
description: Os enseño el flujo de trabajo que optp cuando tengo que catalogar y editar imágenes sin acabar por saturarse o colapsar cuando son de miles de imágenes.
tags: fotografia software
categories: software fotografia
typograms: true
featured: true
thumbnail: assets/img/2025/2025-01-Exiftool-pantalla.png
---

## El laborioso trabajo de editar y clasificar fotografías digitalmente.

Como sabéis, si habéis leído algún artículo anterior, uso dos reveladores: Capture One (con licencia) para RAWs de Fuji  (RAF) y Darktable (GNU) para antiguos ficheros RAW de Olympus (ORF) y Nikon (NEF) que Capture One, por limitaciones de licencia, no me soporta. El flujo de trabajo que uso es el general para clasificar, ordenar, catalogar, renombrar y poner palabras clave para búsquedas; lo hago todo con Capture One. Es ágil, rápido y fluido. Trabajo desde un Mac M4 y eso ya es un plus. Para un revelado más creativo, o para ficheros incompatibles con la versión de Capture One, uso Darktable. Ahora, con la versión 5.2.1, va francamente muy bien; de hecho, tengo el flujo de trabajo y la licencia de Capture One desde hace años, pero, a fecha de hoy, para nuevos fotógrafos creativos recomendaría Darktable. Un software multiplataforma, potente y capaz de hacer todo lo que puedas hacer con programas como Capture One o Lightroom.

No trabajo con IA, por lo cual no echo en falta esa parte que ahora tan de moda está y que algunos fotógrafos están promocionando en otros productos. No. Yo prefiero la creatividad desde el revelador y, como mucho, la tableta gráfica. No es cuestión de ser purista, sino de preferencias y del concepto de la fotografía. Opino que la fotografía no es IA, y que la fotografía es mucho más: es haber estado en un momento real, haberlo congelado en el tiempo, haber sucedido lo que está reflejado en la imagen. Dicho de otra forma, y más poéticamente, es congelar la vida y la realidad en una imagen.

Volviendo al tema del artículo, catalogando y editando imágenes uno acaba por saturarse y, a veces, colapsar cuando hablamos de miles de imágenes. En el flujo de trabajo opto por un solo catálogo, con múltiples directorios según tema principal, y todo ello en un DAS. No soy partidario de los NAS en la fotografía.

Una vez elaborados los directorios, de cada directorio creo un árbol de trabajo (subdirectorios), y para ello uso un programa de mapa mental para organizarme bien. Por ejemplo, puedes crear un catálogo (llámalo como quieras) y, a partir de ahí, creas la primera estructura: familia, viajes, trabajos, estudio, books, etc. Y una vez desde esa estructura, lo fragmento en subdirectorios por años y, dentro de los años, por tema. Esto sería sobre la estructura del catálogo; es mi ejemplo y estoy seguro de que los habrá mejores.

<div class="row mt-3">
<div class="col-sm mt-3 mt-md-0">
{% include figure.liquid loading="eager" path="assets/img//2025-01-Freeplane-pantalla.png" class="rounded z-depth-0 w-30" style="display: block; margin: 0 auto;" zoomable=true %}  
</div>
</div>

Ahora, sobre los ficheros (RAW, JPG, etc.), una vez que los sitúo en la carpeta asignada, los renombro en lotes de la siguiente forma: AÑO-MES-DÍA-TÍTULO-NUMERADOR. Capture One te permite configurar esto a la hora de renombrar, automatizando algunas funciones.

Ahora tan solo queda comprobar los metadatos EXIF, etc. Para ello uso ExifTools desde consola; lo tenéis para Mac, Linux y creo que para Windows. Aunque para algunos trabajar desde consola les puede parecer un poco lioso, es muy sencillo. Te aprendes varios comandos y puedes revisar, corregir, cambiar, añadir copyright, etc. Pero lo fundamental, y lo que te aconsejo, es que elimines los datos de GPS y geolocalización que tu cámara (o móvil) implementa, a no ser que lo tengas deshabilitado. Privacidad y seguridad. De todos los programas mencionados GNU, os pongo al final el enlace por si os interesa trabajar con ellos.

<div class="row mt-3">
<div class="col-sm mt-3 mt-md-0">
{% include figure.liquid loading="eager" path="assets/img//2025-01-Exiftool-pantalla.png" class="rounded z-depth-0 w-30" style="display: block; margin: 0 auto;" zoomable=true %}  
</div>
</div>

El último paso que realizo es añadir las palabras clave para realizar búsquedas eficientes y rápidas, sobre todo cuando tu catálogo es enorme, de miles de fotografías. Cada revelador tiene su sistema de añadirlas; lo que no te recomiendo es añadirlas a los metadatos.

Y no deseo dejar un apunte para los que ya somos mayores o tenemos negativos de película o diapositivas. Después de escanearlos y pasarlos a fichero digital —yo los escaneo con mi cámara en RAW— los edito, recorto y los exporto en JPG, dejando en su carpeta asignada dos subdirectorios: uno como negativos (RAW) y otro como positivos (JPG). Así siempre tendré a mano los originales escaneados y positivados con la edición y, por otro lado, los ficheros de salida para compartir si fuera necesario.

Una vez organizado todo, tan solo me queda trabajar en Capture One con mis RAW de Fuji (RAF) y utilizar Darktable para los demás ficheros RAW (Nikon:NEF y Olympus:ORF). Porque, si algo tiene Darktable, es que es un software que no altera el archivo original ni la estructura del catálogo (las carpetas).

Este es, a grandes rasgos, mi flujo de trabajo en la laboriosa tarea de editar y clasificar fotografías digitalmente. Espero que os dé una idea. Y, sobre todo, que lo mejoréis. Si tienes alguna duda o pregunta, no dudes en contactarme a través de **Instagram**: [@kuribarri](https://www.instagram.com/kuribarri).


Enlaces interesantes:

ExifTool es un software libre que permite la lectura, edición de las meta informaciones en una gran variedad e formatos: EXIF, GPS, IPTC, XMP, JFIF, GeoTIFF, ICC Profile, Photoshop IRB, FlashPix, AFCP, ID3, y Lyrics3. 
- [ExifTool](https://exiftool.org/) 

Freeplane es una aplicación de software gratuita y de código abierto que proporciona unas herramientas para el mapeo mental (también conocido como mapeo de conceptos o mapeo de información) y la presentacion de los mismos de formagráfica y fluida para una mejor organización y flujo de trabajo.
- [Freeplane](https://docs.freeplane.org/)

Darktable es una aplicación de flujo de trabajo de fotografía de código abierto para revelar y catalogar RAWs y otros formatos gráficos. Es la opción gratuíta GNU de Capture One o Lightroom, en plataformas como Mac, Linux, o Windows.
- [Darktable](https://www.darktable.org/)
