---
layout: post
title: Cómo Incluir una Firma o Marca de Agua en Darktable 5.0
date: 2025-01-28 23:36:10-100
description: Siguiendo estos sencillos pasos, puedes crear  firmas o marcas de agua personalizadas disponibles para usar en cualquier imagen que desees en Darktable.
tags: fotografia software
categories: software fotografia
typograms: true
featured: true
thumbnail: assets/img/2025/2025-01-darktable-marcas-agua.webp
---

### Cómo Incluir una firma o marca de agua en Darktable 5.0

Si alguna vez has usado **Capture One**, probablemente sepas lo fácil que es añadir una firma o marca de agua a tus fotos. Todo lo que necesitas es crear un archivo de imagen en formato .PNG con fondo transparente, y en pocos clics puedes tener la marca de agua en tu foto. Personalmente, recomiendo crear dos versiones: una con la firma o logo en blanco y otra en negro, para poder adaptarlas a diferentes tipos de imágenes, según el fondo de la imagen.

Sin embargo, cuando intentas hacer lo mismo en **Darktable**, el proceso no es tan fácil y cómodo. Requiere algunos pasos previos antes de que puedas insertar tu firma o marca de agua. Pero no te preocupes, ¡es mucho más sencillo de lo que parece! A continuación, te explico cómo hacerlo de forma detallada.

### Paso 1: Crear tu firma o marca de agua

En primer lugar, necesitarás crear tu firma o marca de agua en formato vectorial. El formato necesario para esto en Darktable es el **.SVG (Scalable Vector Graphics)**, ya que es un formato vectorial que puede ser escalado sin perder calidad.

Puedes crear tu firma en cualquier programa de diseño que permita exportar en formato SVG. Yo uso **Affinity Photo 2** para diseñar la firma (o marca de agua) y luego la exporto como .SVG. Si prefieres trabajar con **Adobe Photoshop** o **Illustrator**, también podrás hacerlo sin problema.

Una vez que tengas el archivo .SVG listo, asegúrate de darle un nombre fácil de reconocer, como por ejemplo: **mi-firma-loquesea.svg**. Así sabrás exactamente qué archivo es tu firma o marca de agua cuando abras Darktable.

### Paso 2: Copiar el archivo en la carpeta correcta

Ahora viene el paso un poco más técnico: hacer que Darktable "vea" tu firma o marca de agua, en su módulo de **Marca de Agua** que está en el **Cuarto Oscuro**. Para ello, necesitas colocar tu archivo .SVG en un directorio específico dentro de tu sistema. Yo uso Mac, en Linux es igual, e imagino que en Windows, siga la misma configuración. Sigue estos pasos para encontrar esa carpeta:

1. Abre el directorio de tu usuario, que generalmente es **$User**, donde $User es tu nombre de usuario.
2. Accede a la carpeta oculta **.config**. Ten en cuenta que esta carpeta está oculta por defecto, por lo que puede ser necesario habilitar la opción de ver archivos ocultos en tu explorador de archivos. O localizarla con alguna aplicación de gestion de ficheros. Yo uso **Marta File Manager** una aplicación a la antigua usanza GNU: [Marta File Manag](erhttps://marta.sh/)
3. Dentro de **.config**, busca la carpeta **darktable**.
4. Dentro de **darktable**, localiza o crea la carpeta **watermarks**.
   
   Si no encuentras la carpeta **watermarks**, créala manualmente. Así que la estructura de directorios debería quedar como:  
   **$User/.config/darktable/watermarks**.

5. Una vez dentro de la carpeta **watermarks**, coloca tu archivo de firma o marca de agua .SVG de la firma.

<div class="text-center">
{% include figure.liquid loading="eager" width="50%" path="assets/img//2025/2025-darktable-marta-file-manager.webp" class="rounded z-depth-0 w-30" style="display: block; margin: 0 auto;" zoomable=true %}   
</div>

### Paso 3: Configurar la marca de agua en Darktable

Ahora que tu archivo .SVG está en la carpeta correcta, Darktable lo reconocerá y lo puedes utilizar. Sigue estos pasos:

1. Abre **Darktable** y dirígete al módulo **Cuarto Oscuro**.
2. Dentro del módulo, busca la herramienta **Marca de agua**.
3. En las opciones del selector de marcas de agua, podrás ver tus archivos .SVG personalizados, junto con las marcas de agua predeterminadas que trae Darktable.

<div class="row mt-3">
<div class="col-sm mt-3 mt-md-0">
{% include figure.liquid loading="eager" path="assets/img//2025/2025-01-marca-de-agua-darktable-1.png" class="rounded z-depth-0 w-30" style="display: block; margin: 0 auto;" zoomable=true %}  
</div>
<div class="col-sm mt-3 mt-md-0">
{% include figure.liquid loading="eager" path="assets/img//2025/2025-01-marca-de-agua-darktable-2.png" class="rounded z-depth-0 w-30" style="display: block; margin: 0 auto;" zoomable=true %}  
</div>
</div>

Has visto que siguiendo estos sencillos pero "ocultos" pasos, ya tienes tus firmas o marcas de agua personalizadas disponibles para usar en cualquier imagen que desees.

### Resumiendo

Aunque la configuración en **Capture One** es más sencilla (solo hay que cargar el archivo .PNG y listo), en **Darktable** la configuración inicial requiere que realices algunos pasos adicionales. Afortunadamente, una vez que sabes cómo hacerlo, el proceso es bastante sencillo.

Deseo que este artículo te haya facilitado el proceso de añadir firmas o marcas de agua a tus fotos en Darktable. Si tienes alguna duda o pregunta, no dudes en contactarme a través de **Instagram**: [@kuribarri](https://www.instagram.com/kuribarri).
