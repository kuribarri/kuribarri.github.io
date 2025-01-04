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
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/audios/";
        
      },
    },{id: "post-cámara-en-mano-por-la-sierra-de-la-culebra",
      
        title: "Cámara en mano por la Sierra de la Culebra",
      
      description: "Cámara en mano por la Sierra de la Culebra, publicado en El norte de Castilla",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/camara-en-mano/";
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
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
            },},{id: "news-cámara-en-mano-por-la-sierra-de-la-culebra-el-norte-de-castilla-durante-el-transcurso-de-los-años-no-ha-sido-una-sino-muchas-las-veces-que-me-he-adentrado-en-el-corazón-de-la-sierra-de-la-culebra-cámara-en-mano-habitualmente-por-su-parte-más-oriental-en-ocasiones-solo-en-otras-acompañado-para-enseñar-a-otros-el-paraíso-que-aparece-dentro-de-la-sierra-no-hablo-de-esa-sierra-que-nos-muestran-en-las-noticias-ni-la-que-se-atisba-desde-la-carretera-o-las-vías-del-ave-hablo-del-corazón-de-la-sierra-de-la-culebra-ese-corazón-ahora-calcinado-a-lo-largo-de-mi-vida-he-recorrido-con-el-equipo-de-fotografía-diferentes-montañas-por-varios-puntos-del-país-sobre-todo-por-el-norte-pero-la-naturaleza-salvaje-de-la-sierra-de-la-culebra-es-única-hay-poca-documentación-cartográfica-actualmente-en-comparación-a-otras-zonas-y-eso-le-otorga-además-cierto-misterio-adentrarse-en-ella-bien-por-el-norte-desde-litos-o-desde-ferreras-de-abajo-o-bien-desde-el-sur-desde-aliste-supone-trasladarse-a-otra-dimensión-una-vez-en-ella-sientes-que-has-sido-desplazado-en-el-tiempo-y-el-espacio-el-reloj-se-detiene-ante-la-magnitud-de-sus-enormes-bosques-la-mayoría-de-pino-resinero-pinos-que-plantaron-nuestros-mayores-cuando-eran-jóvenes-o-casi-niños-como-mi-madre-que-iba-a-embarrar-las-raíces-allá-por-los-años-cincuenta-aquellos-pequeños-pinos-son-ahora-los-gigantes-que-marcan-alineados-extensas-zonas-arbóreas-en-las-que-se-esconden-otras-especies-como-encinas-y-robles-cuando-ves-esto-desde-la-cámara-con-cualquier-focal-ya-sea-un-gran-angular-o-un-teleobjetivo-te-das-cuenta-que-esos-guardianes-son-una-gran-parte-del-pulmón-de-zamora-amp-lt-sacas-una-foto-de-un-pino-desgastado-por-los-ciervos-cuando-se-frotan-en-el-tronco-el-árbol-conserva-la-gran-cicatriz-rojiza-año-tras-año-en-este-santuario-natural-los-animales-viven-tranquilamente-el-curso-de-la-vida-amp-lt-según-penetras-en-la-sierra-a-pasos-por-entre-sus-peñas-notas-que-allí-donde-te-envuelve-el-entorno-el-lugar-es-muy-diferente-a-la-meseta-castigada-por-el-sol-que-asoma-solo-unos-kilómetros-más-al-este-en-esa-tierra-de-campos-compartida-por-zamora-león-palencia-y-valladolid-cuando-sigo-caminos-en-busca-de-sitios-para-fotografiar-contemplo-los-enormes-cortafuegos-junto-a-senderos-creados-por-los-animales-o-bien-los-espacios-que-hay-entre-los-pinos-la-magnificencia-del-paisaje-y-la-paz-que-se-respira-te-dejan-encuadrar-esas-vistas-hasta-el-punto-que-no-solo-fotografías-el-entorno-sino-que-disfrutas-sin-pensar-en-el-tiempo-simplemente-con-contemplar-la-vida-en-esta-reserva-natural-cargado-con-el-equipo-fotográfico-con-tan-solo-el-ruido-de-tus-botas-al-pisar-notas-el-silencio-roto-en-ocasiones-por-algún-ave-o-por-las-pisadas-de-los-cérvidos-moviéndose-entre-las-sombras-del-bosque-el-aire-te-roza-la-piel-ofreciéndote-el-frescor-en-el-verano-y-llevando-consigo-aromas-únicos-una-exquisita-armonía-de-olores-provenientes-del-pino-resinero-de-la-encina-y-del-roble-melojo-todo-ello-envuelto-por-las-plantas-de-porte-bajo-como-el-brezo-y-la-jara-tan-presente-en-nuestra-tierra-junto-con-otras-plantas-aromáticas-silvestres-cuando-recorres-las-peñas-interiores-desde-el-bufo-hacia-la-peña-el-águila-cruzando-todos-sus-caminos-este-paraíso-zamorano-te-regala-momentos-inolvidables-en-cada-estación-del-año-encuentras-experiencias-únicas-con-una-completa-armonía-con-la-naturaleza-salvaje-que-allí-te-espera-cambian-los-colores-los-matices-según-el-clima-de-la-estación-en-la-que-vayas-ya-sea-primavera-verano-u-otoño-con-las-primeras-lluvias-se-oye-la-berrea-incluso-desde-los-mismos-pueblos-que-están-dentro-del-área-de-la-sierra-de-la-culebra-en-verano-muchos-de-los-ciervos-que-he-encontrado-se-quedan-observándote-sin-ningún-temor-se-respira-paz-solo-a-veces-el-sonido-del-obturador-de-la-cámara-rompe-la-magia-de-ese-momento-entre-los-bosques-notas-que-la-presencia-de-la-vida-te-observa-al-igual-que-tú-sabes-que-están-ahí-ellos-te-observan-sacas-una-foto-de-un-pino-desgastado-por-los-ciervos-cuando-se-frotan-en-el-tronco-tiene-una-gran-cicatriz-rojiza-sin-corteza-que-el-árbol-conserva-año-tras-año-pasas-al-año-siguiente-y-ahí-está-pulido-y-desgastado-nada-cambia-en-ese-santuario-natural-los-ciervos-viven-tranquilamente-el-curso-de-la-vida-recuerdo-en-una-ocasión-que-por-la-zona-de-peñaquebrada-mientras-sacaba-unas-fotografías-de-pequeñas-plantas-por-un-breve-lapso-de-tiempo-el-sonido-de-las-aves-se-detuvo-dejé-la-cámara-y-me-quedé-contemplando-el-horizonte-desde-la-mitad-del-camino-este-silencio-fue-roto-por-un-pequeño-ciervo-que-cruzó-corriendo-de-un-lado-hacia-el-otro-cuando-me-vio-el-animal-se-detuvo-un-instante-antes-de-adentrarse-de-nuevo-hacia-el-bosque-sin-tiempo-para-poder-coger-la-cámara-apareció-un-lobo-que-iba-detrás-de-él-siguiendo-su-rastro-aquella-estampa-fue-cuestión-de-segundos-no-pude-hacer-la-fotografía-pero-el-momento-quedó-inmortalizado-para-siempre-en-mi-memoria-y-en-mi-corazón-esa-experiencia-no-la-olvidaré-nunca-eso-solo-se-vive-en-la-sierra-de-la-culebra-un-tesoro-natural-que-zamora-no-puede-perder-en-zonas-como-el-casal-o-peña-raposo-hacia-el-carbajalico-o-en-la-vertiente-más-occidental-como-la-peña-de-la-campana-el-entorno-se-transforma-en-un-auténtico-paraíso-forestal-descubres-cientos-de-especies-de-plantas-que-nada-envidian-a-cualquier-bosque-del-norte-de-la-península-una-auténtica-isla-en-medio-de-la-meseta-en-cada-estación-encuentro-estampas-diferentes-entre-el-contraste-del-duro-invierno-de-la-sierra-con-el-cálido-verano-suavizado-por-sus-grandes-superficies-de-árboles-durante-el-otoño-el-corazón-de-la-sierra-es-un-contraste-de-colores-donde-los-verdes-se-pierden-entre-los-ocres-con-las-rojizas-hojas-las-neblinas-que-allí-se-posan-crean-una-atmósfera-que-no-solo-maravilla-en-las-fotos-que-puedas-sacar-sino-que-junto-a-ese-abanico-de-colores-de-la-vegetación-te-enseña-a-respetar-cuidar-y-amar-el-entorno-de-la-sierra-en-el-interior-entre-cortafuegos-y-caminos-subiendo-las-pequeñas-cimas-de-las-muchas-peñas-que-forman-el-interior-de-la-sierra-verás-que-su-mayoría-están-coronadas-por-crestas-rocosas-que-te-regalan-unas-maravillosas-vistas-y-un-refugio-para-descansar-muchas-de-estas-peñas-sobre-todo-por-la-parte-exterior-de-la-sierra-están-acompañadas-por-coluviones-lo-que-provoca-un-paisaje-que-sorprende-por-su-contraste-con-los-bosques-una-de-mis-mayores-satisfacciones-fue-cuando-llevé-a-un-pequeño-grupo-de-jóvenes-de-litos-por-el-interior-de-la-sierra-ver-sus-caras-de-sorpresa-y-satisfacción-cuando-se-toparon-con-esos-parajes-con-los-grandes-pinares-y-la-niebla-baja-colándose-entre-los-árboles-cuando-partimos-al-amanecer-tuvimos-de-compañía-una-cierva-que-nos-observaba-con-curiosidad-mirando-ahora-mi-cuaderno-de-campo-recuerdo-como-si-fuera-hoy-cuando-hicimos-aquellos-treinta-y-cinco-kilómetros-por-el-corazón-de-la-sierra-y-estoy-seguro-que-hoy-en-día-como-adultos-lo-recordarán-la-sierra-no-te-defrauda-te-da-más-de-lo-que-tú-le-puedas-dar-es-más-siento-que-me-llama-entrando-a-la-sierra-de-la-culebra-por-la-zona-norte-más-alta-está-ferreras-de-arriba-desde-allí-se-puede-comprobar-que-la-vida-de-nuestros-antepasados-no-fue-fácil-ya-al-mismo-pie-de-la-sierra-o-dentro-de-ella-se-ven-algunos-castros-rodeados-de-fantásticos-bosques-de-castaños-muchos-de-ellos-centenarios-fue-maravilloso-el-día-que-mientras-estaba-allí-con-la-cámara-camino-al-interior-de-la-sierra-oí-el-sonido-de-la-gaita-una-gaita-en-armonía-con-aquel-paisaje-un-hombre-estaba-ensayando-dentro-de-uno-de-aquellos-castros-aquel-momento-de-charla-con-él-y-aquel-sonido-de-la-gaita-emergiendo-del-castro-en-medio-del-bosque-de-castaños-fue-una-de-las-cosas-más-gratificantes-dentro-de-mis-rutas-por-el-interior-de-la-sierra-siempre-que-me-adentrado-en-la-sierra-de-la-culebra-me-he-sorprendido-la-sierra-no-te-defrauda-te-da-más-de-lo-que-tú-le-puedas-dar-es-más-siento-que-me-llama-siento-que-con-la-edad-tarde-o-temprano-no-podré-regresar-y-eso-me-apena-nota-sobre-el-autor-pedro-uribarri-perfumista-está-afincado-en-bilbao-pero-pasa-largas-temporadas-en-esta-pedanía-de-ferreras-de-abajo-situada-en-las-estribaciones-de-la-sierra-de-la-culebra-que-ha-recorrido-a-pie-y-a-caballo-siempre-con-la-cámara-de-fotos-a-mano-en-innumerables-ocasiones",
          title: 'Cámara en mano por la Sierra de la Culebra El Norte de Castilla...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
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
