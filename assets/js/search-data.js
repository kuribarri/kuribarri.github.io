// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-uribarri",
    title: "Uribarri",
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
        },{id: "nav-proyectos",
          title: "Proyectos",
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
        },{id: "post-ruta-la-chorrera-de-hervás-y-las-charcas-verdes",
      
        title: "Ruta La Chorrera de Hervás y Las Charcas Verdes",
      
      description: "La Chorrera de Hervás y Las Charcas Verdes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/ruta-hervas-la-chorrera-charcas-verdes/";
        
      },
    },{id: "post-objetivo-cosinon-s-50mm-f-1-8",
      
        title: "Objetivo Cosinon-S 50mm f/1.8",
      
      description: "Objetivo Cosinon-S 50mm f/1.8 Un clásico versátil y asequible",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/cosinon-50mm/";
        
      },
    },{id: "post-objetivo-tamron-sp-90mm-f-2-5",
      
        title: "Objetivo Tamron SP 90mm f/2.5",
      
      description: "Objetivo Tamron SP 90mm f/2.5 Mod. 52BB)",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tamron-sp-90mm-52BB/";
        
      },
    },{id: "post-cámara-en-mano-por-la-sierra-de-la-culebra",
      
        title: "Cámara en mano por la Sierra de la Culebra",
      
      description: "Cámara en mano por la Sierra de la Culebra, publicado en El norte de Castilla",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/camara-en-mano/";
        
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
    },{id: "post-mi-primera-cámara-kodak-instamatic-25",
      
        title: "Mi primera cámara Kodak Instamatic 25",
      
      description: "Kodak Instamatic 25",
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
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/images/";
        
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
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-cámara-en-mano-por-la-sierra-de-la-culebra",
          title: 'Cámara en mano por la Sierra de la Culebra',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "projects-mesa-de-luz-para-digitalizar-negativos-y-diapositivas",
          title: 'Mesa de luz para digitalizar negativos y diapositivas',
          description: "Mesa de luz para digitalizar negativos",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-por-donde-tú-vas-yo-vuelvo-libro",
          title: 'Por donde tú vas, yo vuelvo - Libro',
          description: "Cuaderno de campo - Montes, rutas, flora y fauna de la comarca de Litos",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-memoria-y-motivos-libro",
          title: 'Memoria y Motivos - Libro',
          description: "Memoria y Motivos es el resumen de algunos de los pensamientos que todo ser humano antes o después en su vida se suele hacer",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-escudo-del-ayuntamiento-de-litos",
          title: 'Escudo del Ayuntamiento de Litos',
          description: "El boceto del escudo que diseñé para el Ayuntamiento de Litos refleja fielmente la identidad del pueblo. A través de elementos como la montaña, el lobo, el arroyo Castrón y las encinas, se rinde homenaje a su cultura, tradiciones y espíritu comunitario",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/kuribarri", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
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
