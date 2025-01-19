// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-portafolio",
          title: "Portafolio",
          description: "Cosas que a uno se le ocurren en luna llena.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-sobre-mi",
          title: "Sobre mi",
          description: "Sobre el autor",
          section: "Navigation",
          handler: () => {
            window.location.href = "/sobre/";
          },
        },{id: "post-darktable-5-0-nuevo-lanzamiento-del-procesador-raw-open-source",
      
        title: "Darktable 5.0 Nuevo lanzamiento del procesador RAW Open Source",
      
      description: "¡Ya está aquí Darktable 5.0! Esta nueva versión del popular software de procesamiento RAW Open Source llega con una gran cantidad de características nuevas y mejoras.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/darktable-5/";
        
      },
    },{id: "post-chaguaceda-cuando-la-naturaleza-reclamó-lo-suyo",
      
        title: "Chaguaceda, cuando la naturaleza reclamó lo suyo",
      
      description: "En el noroeste de la provincia de Zamora, dentro del término municipal de Robleda-Cervantes y en la comarca de Sanabria, se encuentra Chaguaceda, un pueblo abandonado que guarda los ecos de su historia entre ruinas y vegetación.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/chaguaceda/";
        
      },
    },{id: "post-kanteragorria-de-ereño-fotografíando-en-rojo",
      
        title: "Kanteragorria de Ereño. Fotografíando en rojo",
      
      description: "La cantera de mármol rojo de Ereño, es uno de los enclaves más fascinantes de Bizkaia. Situada en el corazón de Urdaibai, esta mina combina historia, geología y un magnetismo visual que atrae a fotógrafos y curiosos por igual.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/mina-marmol-ere%C3%B1o/";
        
      },
    },{id: "post-oporto-una-ciudad-para-descubrir-con-tu-cámara",
      
        title: "Oporto. Una ciudad para descubrir con tu cámara",
      
      description: "Una ciudad para descubrir con una perspectiva diferente, cómo disfrutar de Oporto a través de la fotografía de calle, o street photography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/oporto-street-photo/";
        
      },
    },{id: "post-ruta-la-chorrera-de-hervás-y-las-charcas-verdes",
      
        title: "Ruta La Chorrera de Hervás y Las Charcas Verdes",
      
      description: "Una ruta bien conocida, interesante para la fotografía de naturaleza y sobre todo el salto de agua que encontrarás al final. Hazla a pie con tu cámara desde el mismo Hervás, sin usar vehículo.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/ruta-hervas-la-chorrera-charcas-verdes/";
        
      },
    },{id: "post-objetivo-cosinon-s-50mm-f-1-8",
      
        title: "Objetivo Cosinon-S 50mm f/1.8",
      
      description: "Objetivo Cosinon-S 50mm f/1.8 Un clásico versátil y asequible. Este objetivo es conocido por su excelente relación calidad-precio",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/cosinon-50mm/";
        
      },
    },{id: "post-objetivo-tamron-sp-90mm-f-2-5",
      
        title: "Objetivo Tamron SP 90mm f/2.5",
      
      description: "Hablar de objetivos legendarios es hablar del Tamron SP 90mm f/2.5 Macro (modelo 52BB), una joya óptica que combina calidad, robustez y versatilidad.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tamron-sp-90mm-52BB/";
        
      },
    },{id: "post-cámara-en-mano-por-la-sierra-de-la-culebra",
      
        title: "Cámara en mano por la Sierra de la Culebra",
      
      description: "Artículo publicado en El norte de Castilla, después del gran incendio que asoló la Sierra de la culebra en Zamora.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/camara-en-mano/";
        
      },
    },{id: "post-el-hayedo-de-otzarreta-un-rincón-mágico-en-bizkaia",
      
        title: "El Hayedo de Otzarreta. Un rincón mágico en Bizkaia",
      
      description: "Ubicado en el Parque Natural de Gorbeia, es uno de los bosques más icónicos de Bizkaia. Considerado uno de los bosques más bellos del mundo por National Geographic, Otzarreta destaca por sus hayas centenarias y su atmósfera mágica.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/hayedo-otzarreta/";
        
      },
    },{id: "post-fotografiando-la-triumph-bonneville",
      
        title: "Fotografiando la Triumph Bonneville",
      
      description: "A simple vista, fotografiar una moto podría parecer una tarea sencilla. Sin embargo, cuando te enfrentas a los reflejos del metal, y los detalles que desafían la nitidez, descubres que hay todo un trabajo detrás.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/fotografiando-triumph-bonneville/";
        
      },
    },{id: "post-santa-cruz-de-cuerragos-desafío-al-tiempo",
      
        title: "Santa Cruz de Cuerragos. Desafío al tiempo",
      
      description: "Santa Cruz de los Cuérragos es un pequeño pueblo enclavado entre Sanabria y Carballeda, en pleno corazón de la Sierra de la Culebra (Zamora), en la ladera de Peña Castillo y muy cerca de la frontera con Portugal.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/santa-cruz-cuerragos/";
        
      },
    },{id: "post-objetivo-zeiss-touit-12mm-el-quot-patito-feo-quot",
      
        title: "Objetivo Zeiss Touit 12mm el &quot;Patito feo&quot;",
      
      description: "El Zeiss Touit 12mm f/2.8 es un objetivo gran angular diseñado específicamente para cámaras con sensor APS-C, como las series Fujifilm X y Sony E. En mi caso, lo utilizo con mi cámara Fuji X-T3",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/zeiss-touit-12mm/";
        
      },
    },{id: "post-pedro-uribarri-en-x-twitter",
      
        title: "Pedro Uribarri en X (Twitter)",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/twitter/";
        
      },
    },{id: "post-pequeñas-carpetas-de-negativos",
      
        title: "Pequeñas carpetas de negativos",
      
      description: "Pequeñas carpetas de negativos",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/carpetas-negativos/";
        
      },
    },{id: "post-la-werlisa-color-la-cámara-que-marcó-una-época-en-mi-adolescencia",
      
        title: "La Werlisa Color. La cámara que marcó una época en mi adolescencia",
      
      description: "La Werlisa Color fue mi segunda cámara, y su impacto en mi vida adolescente fue enorme. Tras iniciarme en la fotografía a los siete años con una Kodak Instamatic 25, esta nueva adquisición marcó un salto cualitativo en mi experiencia fotográfica.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/werlisa-color/";
        
      },
    },{id: "post-mi-primera-cámara-kodak-instamatic-25",
      
        title: "Mi primera cámara Kodak Instamatic 25",
      
      description: "Una cámara compacta popular lanzada en 1966 como parte de la línea Instamatic de Kodak. Fabricada entre 1966 y 1972, con una lente fija.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/kodak-instamatic-25/";
        
      },
    },{id: "post-melancolía",
      
        title: "Melancolía",
      
      description: "Ensayo y pensamientos",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/melancolia/";
        
      },
    },{id: "post-un-día-como-hoy",
      
        title: "Un día como hoy",
      
      description: "Ensayo y fotografía",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/un-dia-como-hoy/";
        
      },
    },{id: "post-la-colmena",
      
        title: "La Colmena",
      
      description: "La vida en La Colmena",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2014/la-colmena/";
        
      },
    },{id: "post-litostown",
      
        title: "Litostown",
      
      description: "Litos and the four seasons",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2013/litostown/";
        
      },
    },{id: "news-el-hayedo-de-otzarreta-un-rincón-mágico-en-bizkaia",
          title: 'El Hayedo de Otzarreta. Un rincón mágico en Bizkaia',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-cámara-en-mano-por-la-sierra-de-la-culebra",
          title: 'Cámara en mano por la Sierra de la Culebra',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-oporto-una-ciudad-para-descubrir-con-tu-cámara",
          title: 'Oporto. Una ciudad para descubrir con tu cámara',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "projects-mesa-de-luz-para-digitalizar-negativos-y-diapositivas",
          title: 'Mesa de luz para digitalizar negativos y diapositivas',
          description: "Mesa de luz para digitalizar negativos",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-por-donde-tú-vas-yo-vuelvo-libro",
          title: 'Por donde tú vas, yo vuelvo - Libro',
          description: "Un proyecto personal sin terminar que está encaminado a convertirse en un libro. Un cuaderno de campo de montes, rutas de la zona más oriental de la Sierra de la Culebra",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-memoria-y-motivos-libro",
          title: 'Memoria y Motivos - Libro',
          description: "Memoria y Motivos es el resumen de algunos de los pensamientos que todo ser humano antes o después en su vida se suele hacer",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-exposición-fotográfica-fotos-antiguas-pedro-uribarri-2015",
          title: 'Exposición Fotográfica - Fotos antiguas. Pedro Uribarri 2015',
          description: "Una pausa para la nostalgia. Exposición de fotos antiguas realizada en el Ayuntamiento de Litos (Zamora), en 2015.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-escudo-del-ayuntamiento-de-litos",
          title: 'Escudo del Ayuntamiento de Litos',
          description: "El boceto del escudo que diseñé para el Ayuntamiento de Litos refleja fielmente la identidad del pueblo. A través de elementos como la montaña, el lobo, el arroyo Castrón y las encinas, se rinde homenaje a su cultura, tradiciones y espíritu comunitario",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/kuribarri", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/barripedrouribarri", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-logo',
        title: 'Logo',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
