<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Etapa de análisis
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.png')})`}"
        )

      .bloque-texto-g__texto.p-4(data-aos="zoom-in")
        p.mb-0 La primera etapa de <strong> la fase de diseño comprende al menos cuatro partes</strong>, a saber: el análisis de actores involucrados, la identificación de problemas, el análisis de problemas (causa-efecto) y el análisis de objetivos; sin embargo, desde la experiencia, es altamente recomendable efectuar un análisis consultivo a partir de información secundaria y un ejercicio previo al análisis de problemas que de manera práctica es un valioso apoyo para la identificación del problema central y de paso al análisis de causas de este, la matriz de Vester. Adicionalmente, atendiendo las necesidades de la ruralidad y el sector productivo agropecuario, una recomendación importante es robustecer el diagnóstico de la situación problémica a través de la realización de un diagnóstico rural participativo <strong>(DRP)</strong> 

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 2.1 Análisis del contexto en torno a la problemática de la ruralidad

    
    .row.my-3.align-items-center 
      .col-lg-8.mb-4(data-aos="zoom-in-right")
        p La revisión de modelos teóricos y visiones del desarrollo rural seguramente proporcionarán las bases para la ubicación adecuada del equipo formulador del proyecto en el tiempo y el lugar de la intervención. Una inmersión más o menos profunda en las perspectivas académicas dará el sustento conceptual que junto al contraste con la realidad de la ruralidad colombiana, conforman un andamiaje que contribuirá a la estructura del proyecto. Aunque pueda verse complejo, existen muchas fuentes de conocimiento además de los densos documentos teóricos sobre el desarrollo rural colombiano o de la Latinoamérica, como los trabajos de <strong>Absalón Machado</strong> o tan simples, pero suficientemente acertados como los aportes de <strong>Ligorio Dussan</strong>, sin lugar a dudas una autoridad conocedora del campo colombiano desde su propia experiencia, mayormente nutrida en su trasegar por la <strong>Federación Nacional de Cafeteros de Colombia</strong>.
        .div.grad1
          .row.align-items-center.p-3
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/tema2/img73.svg', alt='Imagen decorativa' width="64px" height="64px")
            .col-lg-7
              h2.text-light ODS - Objetivos Desarrollo Sostenible
              .text-light.mb-0 Para conocer más acerca de los objetivos del desarrollo sostenible contemplados en la agenda 2030 de las naciones unidas, diríjase a:
            .col-lg-3.text-center
              a.boton(:href="obtenerLink('/downloads/anexo_tabla1.pdf')" target="_blank" type="application/pdf")
                span Ir a sitio
                i.fas.fa-link
      .col-lg-4.mb-4
        figure(data-aos="slide-down")
          img(data-aos="zoom-in-left",src="@/assets/curso/temas/tema2/img2.png", alt="Imagen decorativa")
      
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 2.2 Análisis de información secundaria

    .row.my-3.align-items-center 
      .col-lg-4.mb-3
        figure(data-aos="slide-down")
          img(data-aos="zoom-in-left",src="@/assets/curso/temas/tema2/img16.png", alt="Imagen decorativa")
      .col-lg-8.mb-3(data-aos="zoom-in-left")
        .cajon.color-acento-contenido.p-4(data-aos="slide-down",style="background: #FFE9DB")
          p.mt-0 Teniendo en cuenta las <strong> perspectivas del desarrollo rural con enfoque territorial, diferencial y de género</strong>, que enmarcan lineamientos tanto teóricos como normativos vigentes, el  inicio de un análisis contextual parte de un ejercicio participativo donde se registra la <strong>auto-percepción de la población de sus problemas y realidades</strong>, así como de sus deseos y aspiraciones. 

        p.my-3 Sin embargo, el abordaje del contexto debe contener revisiones de fuentes secundarias para adquirir elementos suficientes que permitan interpretar estas realidades de una manera objetiva, dando el soporte necesario para que el proyecto sea bien ponderado y en especial que brinde soluciones eficaces y con efectos duraderos en el tiempo (sostenibilidad). Los tópicos propuestos a continuación corresponden a temas renombrados en diversas fuentes de información acerca de la problemática rural en general:

    .row.my-3.align-items-center 
      .col-lg-4.crd.crd--avatarHorizontal-left-bgr2.py-3.mb-3
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(data-aos="zoom-out-right",src="@/assets/curso/temas/tema2/img4.svg", alt="Muestra los temas relevantes de la problemática rural: Modelos de desarrollo. Paradigmas del desarrollo en Latinoamérica. Objetivos del desarrollo de  las naciones unidas. Desarrollo rural con enfoque territorial. Políticas de enfoque diferencial. Políticas de enfoque de género. Nueva ruralidad. Marco normativo para el desarrollo rural en Colombia. Extensionismo rural y/o agropecuario. Sistema Nacional de Innovación Agropecuaria SNIA. Plan de desarrollo nacional. Plan de desarrollo departamental y municipal.", width= "100px", height="100px")
          .col(style="z-index:1")
            .number 01
            p.m-0 Modelos de desarrollo.
      .col-lg-4.crd.crd--avatarHorizontal-left-bgr3.py-3.mb-3
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(data-aos="zoom-out-right",src="@/assets/curso/temas/tema2/img17.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            .number 02
            p.m-0 Paradigmas del desarrollo en Latinoamérica.
      .col-lg-4.crd.crd--avatarHorizontal-left-bgr5.py-3.mb-3
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(data-aos="zoom-out-right",src="@/assets/curso/temas/tema2/img18.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            .number 03
            p.m-0 Desarrollo humano y desarrollo rural sostenible.
    
    .row.mb-3.align-items-center 
      .col-lg-4.crd.crd--avatarHorizontal-left-bgr4.py-3.mb-3
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(data-aos="zoom-out-right",src="@/assets/curso/temas/tema2/img19.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            .number 04
            p.m-0 Objetivos del desarrollo de las naciones unidas.
      .col-lg-4.crd.crd--avatarHorizontal-left-bgr2.py-3.mb-3
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(data-aos="zoom-out-right",src="@/assets/curso/temas/tema2/img20.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            .number 05
            p.m-0 Desarrollo rural con enfoque territorial.
      .col-lg-4.crd.crd--avatarHorizontal-left-bgr3.py-3.mb-3
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(data-aos="zoom-out-right",src="@/assets/curso/temas/tema2/img21.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            .number 06
            p.m-0 Políticas de desarrollo rural en Colombia.

    .row.mb-3.align-items-center 
      .col-lg-4.crd.crd--avatarHorizontal-left-bgr5.py-3.mb-3
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(data-aos="zoom-out-right",src="@/assets/curso/temas/tema2/img22.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            .number 07
            p.m-0 Políticas de enfoque diferencial.
      .col-lg-4.crd.crd--avatarHorizontal-left-bgr4.py-3.mb-3
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(data-aos="zoom-out-right",src="@/assets/curso/temas/tema2/img23.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            .number 08
            p.m-0 Políticas de enfoque de género.
      .col-lg-4.crd.crd--avatarHorizontal-left-bgr2.py-3.mb-3
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(data-aos="zoom-out-right",src="@/assets/curso/temas/tema2/img24.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            .number 09
            p.m-0 Agricultura familiar.
    
    .row.mb-3.align-items-center 
      .col-lg-4.crd.crd--avatarHorizontal-left-bgr3.py-3.mb-3
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(data-aos="zoom-out-right",src="@/assets/curso/temas/tema2/img25.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            .number 10
            p.m-0 Nueva ruralidad.
      .col-lg-4.crd.crd--avatarHorizontal-left-bgr5.py-3.mb-3
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(data-aos="zoom-out-right",src="@/assets/curso/temas/tema2/img26.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            .number 11
            p.m-0 Marco normativo para el desarrollo rural en Colombia.
      .col-lg-4.crd.crd--avatarHorizontal-left-bgr4.py-3.mb-3
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(data-aos="zoom-out-right",src="@/assets/curso/temas/tema2/img27.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            .number 12
            p.m-0 Metodologías de intervención a la ruralidad.

    .row.mb-3.align-items-center 
      .col-lg-4.crd.crd--avatarHorizontal-left-bgr2.py-3.mb-3
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(data-aos="zoom-out-right",src="@/assets/curso/temas/tema2/img28.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            .number 13
            p.m-0 Extensionismo rural y/o agropecuario.
      .col-lg-4.crd.crd--avatarHorizontal-left-bgr3.py-3.mb-3
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(data-aos="zoom-out-right",src="@/assets/curso/temas/tema2/img29.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            .number 14
            p.m-0 Sistema Nacional de Innovación Agropecuaria SNIA.
      .col-lg-4.crd.crd--avatarHorizontal-left-bgr5.py-3.mb-3
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(data-aos="zoom-out-right",src="@/assets/curso/temas/tema2/img30.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            .number 15
            p.m-0 Plan Estratégico de Ciencia, Tecnología e Innovación Agropecuaria PECTIA.
    
    .row.mb-3.align-items-center 
      .col-lg-4.crd.crd--avatarHorizontal-left-bgr4.py-3.mb-3
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(data-aos="zoom-out-right",src="@/assets/curso/temas/tema2/img31.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            .number 16
            p.m-0 Plan de desarrollo nacional.
      .col-lg-4.crd.crd--avatarHorizontal-left-bgr2.py-3.mb-3
        .row.align-items-center
          .col-auto(style="position: relative; z-index:1")
            figure
              img(data-aos="zoom-out-right",src="@/assets/curso/temas/tema2/img32.svg", alt="", width="100px", height="100px")
          .col(style="z-index:1")
            .number 17
            p.m-0 Plan de desarrollo departamental y municipal.

    
    .row.align-items-center.grad1.p-3
      .col-lg-2
        figure
          img(data-aos="zoom-out-right",src='@/assets/curso/temas/tema2/img73.svg', alt='Imagen decorativa' width="64px" height="64px")
      .col-lg-7
        h2.text-light FAO - Organización de las Naciones Unidas para la Alimentación y la Agricultura
        .text-light.mb-0 Para la revisión de una excelente fuente de información sobre el desarrollo rural, la investigación y la tecnología al servicio de la ruralidad en el mundo, diríjase a:
      .col-lg-3.text-center
        a.boton(:href="obtenerLink('/downloads/anexo_tabla1.pdf')" target="_blank" type="application/pdf")
          span Ir a sitio
          i.fas.fa-link

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 2.3 Análisis de actores involucrados

    .row.my-4
      p La herramienta de partida del EML se denomina <strong>“mapa de involucrados”</strong>. Este es un análisis simple donde se registra el interés de los actores en el proyecto y sus implicaciones, pero existen herramientas más elaboradas como puede ser una <strong>matriz de expectativa-fuerza</strong> para contemplar los intereses, percepciones, expectativas y el grado de influencia de personas, grupos, comunidades o entidades; esto es muy importante porque permite por un lado optimizar los recursos y los beneficios del proyecto, además de potenciar el alcance, la eficacia y el impacto, y por otro lado, prevenir y mitigar los efectos negativos de o hacia otros actores contradictores o afectados, e incluso abordar conflictos de tal manera que el proyecto aporte a su solución.

    .row.my-4
      p.text-center De acuerdo con lo propuesto por <strong>Ortegón et.al (2005)</strong>, el análisis debe proceder a:

    TabsA.color-secundario.my-3
      .tarjeta.p-4.color-tarjeta(style="background: #CCF9E6")(titulo="1. Visibilizar a los involucrados")
        .row.bgr-verde-claro.p-4.bordes-redondeados
          .col-lg-7.mb-4
            p Identificar a todos los actores que pudiesen tener una relación directa o indirecta con el proyecto a alguna de sus implicaciones.
          .col-lg-5
            figure
              img(data-aos="zoom-in",src='@/assets/curso/temas/tema2/img33.svg', alt='Imagen decorativa',width="150px",height="150px")
      .tarjeta.p-4.color-tarjeta(style="background: #CCF9E6")(titulo="2. Categorizar a los involucrados")
        .row.bgr-verde-claro.p-4.bordes-redondeados
          .col-lg-7.mb-4
            p Indagar sobre su entorno, roles, intereses, grado de influencia o capacidad de integración al proyecto, etc. Aquí puede ser necesario el contacto directo.
          .col-lg-5
            figure
              img(data-aos="zoom-in",src='@/assets/curso/temas/tema2/img34.svg', alt='Imagen decorativa',width="150px",height="150px")
      .tarjeta.p-4.color-tarjeta(style="background: #CCF9E6")(titulo="3. Valorar sus intereses")
        .row.bgr-verde-claro.p-4.bordes-redondeados
          .col-lg-7.mb-4
            p Identificar sus percepciones, su actitud y/o posición frente al proyecto, los conflictos existentes y posibles y los recursos políticos, legales, humanos y financieros que puedan aportar a la solución de los problemas. En conclusión, identificar oportunidades y amenazas.
          .col-lg-5
            figure
              img(data-aos="zoom-in",src='@/assets/curso/temas/tema2/img35.svg', alt='Imagen decorativa',width="150px",height="150px")
      .tarjeta.p-4.color-tarjeta(style="background: #CCF9E6")(titulo="4. Diseñar estrategias de participación")
        .row.bgr-verde-claro.p-4.bordes-redondeados
          .col-lg-7.mb-4
            p Analizar e interpretar la información para concluir acerca de la participación en el proyecto o de su modificación dado el caso.
          .col-lg-5
            figure
              img(data-aos="zoom-in",src='@/assets/curso/temas/tema2/img36.svg', alt='Imagen decorativa',width="150px",height="150px")
    
    .div.grad1
      .row.align-items-center.p-3
        .col-lg-2
          figure
            img(src='@/assets/curso/temas/tema1/img7.svg', alt='Imagen decorativa' width="64px" height="64px")
        .col-lg-7
          h2.text-light Tabla 2. Ejemplo de herramienta de análisis de involucrados. Bernal (2021).
          .text-light.mb-0 Un ejemplo de una herramienta de análisis sencillo, que podemos llamar “resumen de participación” es el siguiente:
        .col-lg-3.text-center
          a.boton(:href="obtenerLink('/downloads/anexo_tabla2.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

    .row.align-items-center.my-5
      .col-lg-8.mb-2(data-aos="zoom-in-right")
        p La herramienta del ejemplo anterior es susceptible de mejora aplicando, por ejemplo, la variable de expectativa fuerza, ampliando el espectro de la herramienta hasta especificar las estrategias (otra columna) que se emplearán para la mejora de la participación o la mitigación de efectos adversos y como se mencionó, incluso para la resolución de conflictos entre las partes involucradas o al interior de estas. Existen otras formas de evaluar la participación de los involucrados y que se pueden emplear en conjunto o en sustitución del análisis expectativa fuerza: <strong>poder-interés, influencia-impacto, poder-influencia, etc.</strong>
        .row.align-items-center.grad1.p-3
          .col-lg-2
            figure
              img(data-aos="zoom-in-right",src='@/assets/curso/temas/tema2/img73.svg', alt='Imagen decorativa' width="64px" height="64px")
          .col-lg-7
            h2.text-light Análisis de Involucrados
            .text-light.mb-0 Para la revisión de una herramienta más completa de análisis de involucrados incluyendo la aplicación de la matriz de expectativa-fuerza con ejemplos ilustrativos, diríjase a:
          .col-lg-3.text-center
            a.boton(:href="obtenerLink('/downloads/anexo_tabla1.pdf')" target="_blank" type="application/pdf")
              span Ir a sitio
              i.fas.fa-link

      .col-lg-4.mb-2
        figure
          img(src='@/assets/curso/temas/tema2/img37.png', alt='Imagen decorativa')

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 2.4 Diagnóstico de la situación problémica
    
    .row.align-items-center.my-4
      .col-lg-4.mb-2
        figure
          img(src='@/assets/curso/temas/tema2/img38.png', alt='Imagen decorativa')
      .col-lg-8.mb-2
        .cajon.color-primario.p-4(data-aos="slide-down",style="background: #CCE9E5")
          p.mt-0 Muchas fuentes de información acerca del método EML usan un ejemplo recurrente de aplicación de la herramienta de <strong>“lluvia de ideas”</strong> (brainstorming) con el protagonismo de la misma población que es perfectamente válido pero que se puede fortalecer por medio de la indagación del contexto de la problemática identificada, previamente al ejercicio de definición del problema central.
        
        p.mt-3 La acertada formulación del proyecto y el mismo éxito de la intervención dependen en gran medida de la adecuada identificación del problema, es por esto que se deben dedicar <strong>esfuerzos proporcionales en la etapa de diagnóstico.</strong> El principal referente de este documento, Ortegón et.al (2005), aclara que la planificación nace de <strong>la percepción que se tiene de la problemática</strong> y que se puede dar en concordancia con los siguientes aspectos:
    
    
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-botones.p-5(data-aos='fade-down', style='background: #CCF9E6')
        .row.justify-content-center.mb-4
          .col-lg-10.m-auto
            figure
              img(src='@/assets/curso/temas/tema2/img39.svg',  alt='Muestra los Aspectos para identificar problemáticas, según: La aplicación de una política de desarrollo.  Ej. Agenda 2030  o el Plan Nacional. Recuperación de infraestructura. Necesidades o carencias en la población afectada. Bajos niveles de desarrollo. Condiciones de vida deficitarias. Efectos de la globalización de la economía y de tratados comerciales internacionales. ' style='max-width:170px; max-height:170px; margin: auto')
          
        p.text-center La aplicación de una política de desarrollo.  Ej. Agenda 2030 o el Plan Nacional
      .col-md.tarjeta.color-acento-botones.p-5(data-aos='fade-down', style='background: #FFE9DB')
        .row.justify-content-center.mb-4
          .col-lg-10.m-auto
            figure
              img(src='@/assets/curso/temas/tema2/img40.svg',  alt='' style='max-width:170px; max-height:170px; margin: auto')
          
        p.text-center Recuperación de infraestructura
      .col-md.tarjeta.color-acento-botones.p-5(data-aos='fade-down', style='background: #CCF9E6')
        .row.justify-content-center.mb-4
          .col-lg-10.m-auto
            figure
              img(src='@/assets/curso/temas/tema2/img41.svg',  alt='' style='max-width:170px; max-height:170px; margin: auto')
          
        p.text-center Necesidades o carencias en la población afectada

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-botones.p-5(data-aos='fade-down', style='background: #FFE9DB')
        .row.justify-content-center.mb-4
          .col-lg-10.m-auto
            figure
              img(src='@/assets/curso/temas/tema2/img42.svg',  alt='' style='max-width:170px; max-height:170px; margin: auto')
          
        p.text-center Bajos niveles de desarrollo
      .col-md.tarjeta.color-acento-botones.p-5(data-aos='fade-down', style='background: #CCF9E6')
        .row.justify-content-center.mb-4
          .col-lg-10.m-auto
            figure
              img(src='@/assets/curso/temas/tema2/img43.svg',  alt='' style='max-width:170px; max-height:170px; margin: auto')
          
        p.text-center Condiciones de vida deficitarias
      .col-md.tarjeta.color-acento-botones.p-5(data-aos='fade-down', style='background: #FFE9DB')
        .row.justify-content-center.mb-4
          .col-lg-10.m-auto
            figure
              img(src='@/assets/curso/temas/tema2/img44.svg',  alt='' style='max-width:170px; max-height:170px; margin: auto')
          
        p.text-center Efectos de la globalización de la economía y de tratados comerciales internacionales
    
    p.my-4.text-bold.text-center Además, en la actualidad podemos identificar circunstancias problemáticas en torno a:

    row.my-4(data-aos="zoom-in-up")
      div.p-4.BGM02(style="background: #EFF3F6")
        ul.lista-ul.px-5
          li 
            i.lista-ul__vineta 
            | <strong>Impactos ambientales adversos </strong> de las actividades productivas en todos los sectores de la economía.
          li 
            i.lista-ul__vineta 
            | <strong>Efectos directos o indirectos </strong> del conflicto armado o del dominio territorial de grupos armados.
          li 
            i.lista-ul__vineta 
            | <strong>Efectos regresivos</strong> de políticas de desarrollo o coyunturales.
          li 
            i.lista-ul__vineta 
            | <strong>Consecuencias socioeconómicas</strong> derivadas de la pandemia por el virus Sars-COV-2.
          li 
            i.lista-ul__vineta 
            | <strong>Aspectos inherentes a los efectos acumulados por décadas</strong> en cuanto a la concentración de la riqueza y la tierra, la pauperización del campesinado, el envejecimiento de la población rural, la migración masiva hacia las urbes, el deterioro del tejido social en la ruralidad, el despojo de la tierra, la capacidad productiva, los derechos y hasta los valores de la cultura rural, el desvanecimiento del relevo y empalme generacional, el rezago educativo para la población rural, el escaso acceso a los factores productivos y la tecnología para la productividad, la ausencia del estado y los programas sociales de los gobiernos en especial en la periferia, la inseguridad alimentaria y el hambre y malnutrición derivados de ésta, la inequidad de género, el deterioro del suelo aprovechable, los efectos del cambio climático sobre los ecosistemas por causas antrópicas, la huella de carbono generada por actividades como la ganadería extensiva, la contaminación de fuentes de agua, la ampliación de la frontera agrícola hacia zonas de reserva protegidas, el debilitamiento de la ciudadanía participativa, la lentitud en la migración hacia fuentes de energía renovables, la escasa infraestructura productiva para las actividades agropecuarias, entre otros.

    Separador
    #t_2_5.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 2.5 Identificación de problemas a partir de información primaria

    .row.align-items-center 
      .col-lg-8.my-2
        p(data-aos="zoom-in-right") La identificación de problemas por parte de la misma comunidad afectada no solo es importante para la adecuada formulación de un plan de intervención exitoso, <strong>la participación de la población en el proceso de desarrollo es importante para la sostenibilidad de los procesos de mejora en las actividades productivas</strong>, ya que muchas veces el fracaso de los proyectos se atribuye a la falta de sentido de pertenencia de las comunidades con estos, porque algunas veces se hacen intervenciones sin contar siquiera con su opinión al respecto.
        .cajon.color-terciario.p-4(style="background: #D9F3FF")
          p.mt-0 El paradigma del desarrollo desde abajo viene a contrarrestar las políticas de intervención desde los dirigentes nacionales y grandes actores internacionales <strong>(BM, FMI, tesoro nacional de USA, etc.)</strong> que a partir de los años 80 vienen fomentando la aplicación de políticas derivadas de la receta neoliberal (menor injerencia del estado y mayor orientación del mercado en las dinámicas socioeconómicas) producto del llamado “consenso de Washington”, con un <strong>rotundo fracaso en términos de impacto ambiental y aumento de la brecha social a escala continental.</strong>  
      .col-lg-4.my-2
        figure
          img(data-aos="zoom-in-left",src='@/assets/curso/temas/tema2/img45.png',  alt='')

    p(data-aos="zoom-in-right").my-4 El extensionismo agropecuario, actividad que data del <strong>siglo XIX en Estados Unidos y Europa como una iniciativa de atención a la ruralidad desde los gobiernos con el apoyo del sector privado</strong>, especialmente el productor de tecnología, ha logrado avances muy interesantes y exitosos en el diseño y ejecución de procesos de intervención integrales más que asistenciales. Uno de los casos destacados en Colombia y la región es la <strong>Federación Nacional de Cafeteros</strong> Producto de estas experiencias fortalecidas se encuentran metodologías centradas en la participación de la población, como el <strong>Diagnóstico Rural Participativo (DRP)</strong> y la planificación comunitaria, entre otros ejercicios como los realizados por el <strong>Servicio Nacional de Aprendizaje (SENA)</strong> en sus modelos de intervención hechos hasta la década de los años 90 (por efectos de las políticas coyunturales) a partir de los programas <strong>“Capacitación para la Participación Campesina (CAPACA)”,  “capacitación empresarial campesina”, “la capacitación para la organización y participación comunitaria”, “programa de extensión rural del convenio SENA-Gobierno de Holanda”</strong> y el trabajo  <strong>“SENA-Escuela Nacional de Formación Campesina ANUC-ENFOCA”</strong>, estrategias con productos que se pueden consultar en los repositorios institucionales. 
    .row.justify-content-center
    hr(style="background:#FFA686")

    .row.align-items-center.mb-4
      .col-lg-10.m-auto
        .bloque-texto-b.py-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p El DRP, es una actividad participativa que permite la identificación de los principales problemas técnicos productivos, sociales y de organización para lograr la convivencia con los productores. Con el fin de conocer más de cerca los diferentes aspectos de la comunidad, generando la información básica para la elaboración de los planes de acción comunitaria
            h3  (DNP, 2016, p.15)
            i.fas.fa-quote-right
            

    .row.my-3
      .col-lg-10.crd.crd--avatarHorizontal-left-bgr3.py-3.mb-3.m-auto(data-aos="zoom-in-right")
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(src="@/assets/curso/temas/tema2/img46.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            p.m-0 El <strong>DRP</strong> es una metodología recomendable para la <strong>autogestión del desarrollo de las comunidades, lo que supone también la autodeterminación, un valor importante de resaltar</strong> Posee de manera inherente ventajas que dependen directamente del grado de participación de los involucrados, entre las que se encuentran la <strong>eficacia en el levantamiento de datos de campo, la verificabilidad, confiabilidad, profundidad y suficiencia de la información obtenida.</strong>
    
    p.my-4 También ayuda a sensibilizar y motivar la participación de la población ante la posible intervención, fomenta la creatividad en las propuestas de solución y puede conllevar un alto impacto de las propuestas respetando la cultura y la forma de ser de la población, así como complementariedad con la información obtenida de fuentes secundarias. Algunos aspectos a tener en cuenta son, por un lado, la necesidad de <strong>un equipo multidisciplinario que planifique el diagnóstico</strong> y por otro de <strong>recursos y tiempo para el trabajo de campo.</strong> Según Expósito (2003), el DRP consta de siete pasos para su realización: 

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--beige")
      .row.align-items-center(titulo="1. Delimitar la población objetivo")
        .col-lg-8.mb-4
          p Definir el alcance y el objetivo del diagnóstico que puede ser a tres niveles, población más o menos dispersa, organizaciones rurales o empresas agropecuarias y agroindustriales propiamente dichas.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema2/img47.svg', alt='Texto que describa la imagen', style='max-width:170px; max-height:170px; margin: auto')
      .row.align-items-center(titulo="2. Seleccionar y preparar el equipo facilitador")
        .col-lg-8.mb-4
          p El equipo de trabajo debe ser multidisciplinario, pues las poblaciones y sus problemas son de naturaleza multidimensional, y por ende, el enfoque de las actividades de extensión agropecuaria se considera integral, correspondiente con el marco normativo y las necesidades de fortalecimiento de la ruralidad colombiana; además, el trabajo con poblaciones requiere de competencias en el manejo de este tipo de población, así como de una clara vocación de servicio.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema2/img48.svg', alt='Texto que describa la imagen', style='max-width:170px; max-height:170px; margin: auto')
      .row.align-items-center(titulo="3. Análisis de participantes")
        .col-lg-8.mb-4
          p Identificar y caracterizar a todos los participantes para establecer las mejores prácticas y herramientas posibles, adaptando la estrategia de comunicación a las condiciones reales de los sujetos de la intervención e identificando los liderazgos que pueden ayudan a la eficacia del proceso.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema2/img49.svg', alt='Texto que describa la imagen', style='max-width:170px; max-height:170px; margin: auto')
      .row.align-items-center(titulo="4. Análisis de expectativas")
        .col-lg-8.mb-4
          p Comunicar las expectativas de todos los actores ayudará a establecer metas comunes que motivan la participación y la intención para generar cambios en especial si tienen que ver con la calidad de vida de la población. Aquí hay que prestar una especial atención a cuestiones de género.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema2/img50.svg', alt='Texto que describa la imagen', style='max-width:170px; max-height:170px; margin: auto')
      .row.align-items-center(titulo="5. Identificación de las necesidades de información")
        .col-lg-8.mb-4
          p La información, su calidad, precisión, especificidad, etc. debe ser suficiente para que no queden vacíos en el momento de procesarla durante la formulación del proyecto y el planteamiento de las alternativas de intervención. Esta información debe corresponder a la realidad rural, las estructuras sociales, las relaciones de género, familiares y demás condiciones culturales y particulares de la población objetivo.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema2/img51.svg', alt='Texto que describa la imagen', style='max-width:170px; max-height:170px; margin: auto')
      .row.align-items-center(titulo="6. Selección de las herramientas de investigación")
        .col-lg-8.mb-4
          p La selección de herramientas debe obedecer no solo a las necesidades de información orientada a la formulación del proyecto, sino también a las preferencias de la misma población. También es importante considerar la información desagregada por género de la población en situación de vulnerabilidad y discapacidad, de minorías, etc.; es decir con un enfoque diferencial. También se recomienda revisar información ya obtenida en otros procesos. Existe un conjunto muy amplio de herramientas participativas que se han diseñado precisamente debido a las condiciones de la población rural, uno de los campos de acción de la andragogía.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema2/img52.svg', alt='Texto que describa la imagen', style='max-width:170px; max-height:170px; margin: auto')
      .row.align-items-center(titulo="7. Diseñar y planificar el proceso de diagnóstico")
        .col-lg-8.mb-4
          p El éxito del proceso de diagnóstico, al igual que el éxito del proyecto de intervención, depende en gran medida de una buena planificación. Se requiere establecer el tamaño, las características del equipo de trabajo, el cronograma de actividades, la localización, medios de transporte, los materiales y otros recursos requeridos, etc.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema2/img53.svg', alt='Texto que describa la imagen', style='max-width:170px; max-height:170px; margin: auto')

    p.my-4.text-center.text-bold La información de primera mano es muy valiosa y requiere de un recurso metodológico que puede ser el DRP.

    .row.align-items-center.my-3
      .col-lg-6
        p(data-aos="zoom-in-right") Existen otras metodologías, por ejemplo la propuesta hecha por Orlando Fals Borda en 1977, denominada <strong>“Investigación-Acción-Participación” (IAP)</strong>, que centraliza la persona y no el objeto de la investigación. Otras metodologías pueden enfocarse a grupos pequeños como los familiares, es el caso de la Planificación Predial Participativa (PPP) o a organizaciones y empresas rurales como el <strong>“Índice de Capacidades Organizacionales de la Unión Europea” (ICO)</strong> y la <strong>“Medición del Emprendimiento Rural” (MER)</strong> de la FAO que incorporan todas las distintas áreas que componen una organización formal.
      .col-lg-6
        p(data-aos="zoom-in-right") La gestión de la información, en todo caso, debe ser organizada y metódica, siguiendo la ruta datos-información-conocimiento; es decir, como un proceso de investigación básico y para ello existen diversas herramientas (de las que habla el punto cinco del ciclo de siete pasos del DRP), que pueden aplicarse en la amplitud de las actividades rurales. Algunas son muy versátiles como las entrevistas y las lluvias de ideas, otras más específicas como los mapas de recursos, las caracterizaciones de las actividades productivas mediante mapeos y los calendarios de producción, otras más enfocadas a aspectos de género o de comunicación, sociales u otros. 

    .row.align-items-center.grad1.p-3
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img7.svg', alt='Imagen decorativa' width="64px" height="64px")
      .col-lg-7
        h2.text-light Anexo. Tabla 3
        .text-light.mb-0 Herramientas para el diagnóstico participativo de organizaciones, empresas o unidades productivas agropecuarias. Geilfus, F. (2002).
      .col-lg-3.text-center
        a.boton(:href="obtenerLink('/downloads/anexo_tabla3.pdf')" target="_blank" type="application/pdf")
          span Descargar
          i.fas.fa-file-download

    Separador
    #t_2_6.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 2.6 Priorización de problemas a través de la herramienta “Matriz de Vester”
    
    .row.my-3.align-items-center
      .col-lg-8
        p(data-aos="zoom-in-right") El objetivo del proceso de diagnóstico es <strong>identificar y definir muy bien una serie de problemas de diversa índole</strong>, donde una vez colectados, se tienen dos situaciones posibles: que se identifique fácilmente el problema central o que no se tenga claro. En el primer caso, podemos pasar al siguiente punto, el análisis causal (causa-efecto), donde el EML nos introduce a la técnica de árboles, la más adecuada, aunque existan otras formas de análisis causa-efecto.
        .cajon.color-acento-contenido.p-4(data-aos="slide-down",style="background: #FFE9DB")
          p.mt-0 En el segundo caso, donde no se tiene definido el problema central, es necesario como siguiente paso <strong>analizar la relación entre los problemas de forma bidireccional</strong>; es decir, escudriñar en la correlación entre los distintos problemas (aquí variables) a fin de establecer el grado de influencia y/o dependencia entre ellos, el método, desarrollado por el alemán <strong>Frederic Vester (1925-2003)</strong>, se fundamenta en la matemática (teoría de matrices) estableciendo un valor numérico dentro de un rango determinado que normalmente es [0-3] proporcional al grado de influencia a discreción del analista (0 para una influencia nula o indirecta y 3 para una influencia marcada o directa).

      .col-lg-4
        figure
          img(data-aos="zoom-in-right",src='@/assets/curso/temas/tema2/img54.png', alt='')

    .row.my-5(data-aos="zoom-in-right")
      .col-lg-12.crd.crd--avatarHorizontal-left-bgr3.py-3.mb-3
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(src="@/assets/curso/temas/tema2/img55.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            p.m-0 Así, a la relación entre los problemas, que son cualitativos, se le atribuye <strong>una magnitud y del ordenamiento matricial</strong> de estos valores se puede identificar la variable (problema) con mayor influencia en relación a las demás. En resumen, la matriz de Vester, también llamada matriz de <strong>influencia-dependencia (ID)</strong> nos permite <strong>identificar el problema central y tres grupos más o menos diferenciados</strong> (causas, consecuencias y supuestos). Una consideración importante es que la herramienta es eficaz cuando se consideran al menos 13 problemas (mínimo grado en el que adquiere significancia el tratamiento de los datos).
    
    p.text-center Antes de proseguir con la descripción del método paso por paso vale la pena enfatizar en las siguientes aclaraciones a la hora de <strong>redactar los problemas:</strong>
    
    .row.justify-content-center
    hr(style="background:#FFA686")
    .row.align-items-center.my-3
      .col-lg-10.m-auto
        .bloque-texto-b.py-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Un error que se presenta frecuentemente en la definición del problema central, surge cuando este se describe como la falta o ausencia de una solución frente a una necesidad experimentada por la población. Este hecho sucede frecuentemente con intervenciones que conllevan la construcción de diferentes tipos de infraestructura pública o la adquisición de equipos. El definir la situación problemática de esta forma, conlleva dos debilidades en la formulación del proyecto: se limita y condiciona la solución a esa sola alternativa y se ignoran las condiciones que afectan realmente a la población en cuanto a su bienestar y el mejoramiento de las condiciones de vida.
            h3  (DNP, 2016, p.15)
            i.fas.fa-quote-right
    
    .row.justify-content-center.mt-5 
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 2.
          span Recomendaciones para la correcta definición de un problema.

    .row.justify-content-center
      .col-lg-5.mb-3
        p.text-center <strong>Forma incorrecta</strong> de definir un problema
        .card(data-aos="fade-right",style="background: #FF9751 ; border-radius:20px")
          .card-cuerpo.py-4
            .icon-left 
              figure
                img(src="@/assets/curso/temas/tema2/img57.svg", alt="Muestra los Aspectos para identificar problemáticas, según: La aplicación de una política de desarrollo.  Ej. Agenda 2030  o el Plan Nacional. Recuperación de infraestructura. Necesidades o carencias en la población afectada. Bajos niveles de desarrollo. Condiciones de vida deficitarias. Efectos de la globalización de la economía y de tratados comerciales internacionales. ")
            ul.lista-ul.m-0
              li
                i.lista-ul__vineta 
                | Falta de un colegio.
              li 
                i.lista-ul__vineta 
                | Falta de un centro de salud.
        .my-3
          ul.lista-ul
            li
              i.lista-ul__vineta 
              span.text-bold(style="color: #FF9751") Error 1:
              | restringe la alternativa de solución.
            li
              i.lista-ul__vineta 
              span.text-bold(style="color: #FF9751") Error 2: 
              | no contempla ninguna condición de desarrollo de la población.
      .col-lg-5.mb-3
        p.text-center <strong>Forma correcta</strong> de definir un problema
        .card(data-aos="fade-left",style="background: #02DD84 ; border-radius:20px")
          .card-body.mx-3
            .icon-right 
              figure
                img(src="@/assets/curso/temas/tema2/img58.svg", alt="")
            ul.lista-ul.m-0
              li 
                i.lista-ul__vineta 
                | Bajo acceso al sistema de educación en los niveles de básica y media.
              li 
                i.lista-ul__vineta 
                | Alta tasa de morbilidad infantil.
        
        .my-3
          ul.lista-ul
              li
                i.lista-ul__vineta 
                span.text-bold(style="color: #02DD84") Acierto: 
                | para cualquiera de los casos existen diversas alternativas de solución.
              li
                i.lista-ul__vineta
                span.text-bold(style="color: #02DD84") Acierto:
                | las dos condiciones negativas reflejan la necesidad de la población.

    .row.align-items-center 
      .col-lg-8.m-auto.p-4(style="background: #B3E6FF")
        p.mb-0 Hay diferentes grados de complejidad en los problemas. Desde los que pueden ser muy simples hasta aquellos donde juegan diferentes factores que hacen casi imposible su indivisibilidad. Puede ser el caso de problemas como: la pobreza, el desempleo o la inseguridad, entre otros.

    h5.my-5.text-center De acuerdo con Silva y Sandoval (2012) la construcción de la matriz de Vester para la priorización de problemas se detalla en los siguientes pasos:

    LineaTiempoD.color-primario.my-4
      .row(numero="1" titulo="Paso 1" )
        p Redactar, ordenar y numerar los problemas detectados en el diagnóstico. (La numeración ayudará a identificarlos fácilmente).
      .row(numero="2" titulo="Paso 2")
        .col-lg-12.mb-4.mb-md-0
          p Se procede a la construcción de la matriz <strong>enfrentando los problemas en ambos ejes</strong> como se muestra en la figura. En la intersección de los problemas contra sí mismos, se pone el valor de cero. El problema debe estar redactado de manera <strong>muy precisa.</strong> 
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 4.
            span Ejemplo de estructura de la matriz de influencia-dependencia (Véster).
          figure
            img(src="@/assets/curso/temas/tema2/img59.svg", alt="Muestra las Recomendaciones para la correcta definición de un problema, teniendo en cuenta los cinco pasos para la priorización de un problema.")

            figcaption.my-3.text-regular <strong>Nota.</strong> Tomado de Silva y Sandoval (2012). 
      .row(numero="3" titulo="Paso 3")
        .col-lg-12.mb-4.mb-md-0
          p Se asigna la puntuación empezando por <strong>la fila superior de izquierda a derecha</strong>, teniendo en cuenta que esta ponderación corresponde al grado de influencia del problema de la fila con respecto a cada problema de las columnas. Al establecer las relaciones de causalidad es importante considerar una relación directa entre los problemas. Una forma de verificar que el ejercicio se está haciendo bien es que al terminar de asignar valores, no más del 30% de ellos corresponde a un valor de tres (3); caso contrario, existe un sesgo atribuible a la falta de definición de los problemas o a la consideración de causas indirectas entre ellos. Se puede hacer esta pregunta cada vez que se confronten los problemas: <strong>¿Cómo influye el problema 1 sobre el problema 2?; ¿Cómo influye el problema 1 sobre el problema 3?</strong>, y así sucesivamente… el orden se establece en las filas, de superior a inferior. Para el valor a asignarse puede usar la siguiente escala:
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 5.
            span Escala de valores.
          figure
            img(src="@/assets/curso/temas/tema2/img5.svg", alt="")
            figcaption.my-3.text-regular <strong>Nota.</strong> Tomado de Silva y Sandoval (2012). 
      .row(numero="4" titulo="Paso 4")
        .col-lg-12.mb-4.mb-md-0
          p Una vez llena la matriz se agrega <strong>una columna y una fila</strong> para registrar las sumatorias de valores de las filas y las columnas, los valores de la columna representan las magnitudes de las influencias y los de la fila representan los de las dependencias. A continuación un ejemplo: 
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 6.
            span Llenado de la matriz de influencia- dependencia (Véster).
          figure
            img(src="@/assets/curso/temas/tema2/img8.svg", alt="")
            figcaption.my-3.text-regular <strong>Nota.</strong> Tomado de Silva y Sandoval (2012). 
      .row(numero="5" titulo="Paso 5")
        .col-lg-12.mb-4.mb-md-0
          p Al tener ya las sumatorias se procede a <strong>graficar</strong> estos valores. Se usa un <strong>plano cartesiano</strong> donde la intersección de los ejes corresponde al valor promedio de las dependencias e influencias. Cada cuadrante representa un tipo de problema; el primer cuadrante de la figura corresponde a los problemas pasivos, el segundo a los críticos, el tercero a los exógenos o estructurales (posteriormente se pueden usar como supuestos en la <strong>MML</strong>) y el cuarto representa las causas. 
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 7.
            span Esquema de definición de cuadrantes en relación a la influencia y la dependencia.
          figure
            img(src="@/assets/curso/temas/tema2/img60.svg", alt="")
            figcaption.my-3.text-regular <strong>Nota.</strong> Tomado de Silva y Sandoval (2012). 

    .row.my-5.align-items-center.p-3(style="background: #FFE9DB")
      .col-lg-4
        p En el ejemplo del punto cuatro, <strong>el problema uno se encuentra en el cuadrante dos de los problemas críticos y al estar aislado nos da la certeza de ser el problema central.</strong> En caso de que exista más de un problema en este cuadrante, podemos suponer que el problema central estará más alejado de la intersección del plano.
      .col-lg-8
            .titulo-sexto.color-acento-contenido.mb-3
                  h5 Figura 3.
                  span Ejemplo de la forma gráfica de la matriz ID.
            figure
              img(src="@/assets/curso/temas/tema2/img10.svg", alt="Muestra el componente formativo un ejemplo de la forma gráfica de la matriz ID. Tomado de Silva y Sandoval. Teniendo en cuenta su dependencia e influencia.")
              figcaption.my-3.text-regular <strong>Nota.</strong> Tomado de Silva y Sandoval (2012).  
    Separador
    #t_2_7.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 2.7 Análisis causa-efecto a través de la "metodología de árboles"

    .row.my-5.align-items-center
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema2/img61.png", alt="")
      .col-lg-8
        .cajon.color-secundario.p-4(data-aos="slide-down",style="background: #E4FBF2")
          p.mt-0 El problema central ya definido anteriormente es el <strong>punto de partida del análisis a efectuar con la herramienta de árboles</strong>, aunque existan otras herramientas de análisis causa-efecto como el método del <strong>“diagrama de flechas” (ADM)</strong> el <strong>“método de la ruta crítica” (CPM)</strong> el <strong>“método del diagrama de precedencias” (PDM) “la técnica de revisión y evaluación de programas” (PERT)</strong> que son métodos complejos usados sobre todo en análisis en el contexto de la industria; además, hay otros más amigables como pueden ser el <strong>“diagrama de Pareto”</strong> o el <strong>“diagrama de Ishikawa” (espina de pescado)</strong>; de todos estos el <strong>“método de árboles”</strong> es el que resulta, en efecto, más conveniente para su aplicación en el EML. 
      
    .row.my-4
      .col-lg-6
        p(data-aos="zoom-in-right") Es importante tener en cuenta que <strong>no hay un problema central definitivo o absoluto</strong> sino que depende de las capacidades y recursos del proyecto. A mayor capacidad de acción, mayor es el reto que se puede asumir y más complejo puede ser el problema central. Lo anterior significa que <strong>no existe una manera única de abordar una problemática</strong> y por tanto, existen <strong>varias formas de solucionarla, distintos niveles en los que se puede actuar y un espectro más o menos amplio en la cobertura o alcance del proyecto.</strong> Precisamente una bondad del <strong>EML</strong> radica en tener claridad a través de este análisis de cómo resulta más efectiva una intervención; esto es más eficaz y más eficiente en relación siempre a la capacidad de solucionarlo.
      .col-lg-6
        p(data-aos="zoom-in-right") También podemos resumir este aporte del método a <strong>una mejor manera de organizar la información</strong> obtenida en un momento dado para lograr orientar de manera efectiva los recursos y esfuerzos hacia un objetivo claro que nos permita obtener el mayor beneficio e impacto posibles. El árbol de problemas es, bajo el <strong>EML</strong>, la herramienta que ayuda a identificar el problema central, pero debido a que el uso de la herramienta no es fácil de abordar desde el contexto de la ruralidad, los anteriores pasos son la forma de <strong>producir insumos de calidad</strong> (análisis de participación de actores, identificación y definición previa de problemas, etc.) para el uso adecuado de esta herramienta clave.

    .row.align-items-center.my-3
      .col-auto
        img(src='@/assets/curso/temas/tema2/img3.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0(data-aos="zoom-in")  Árbol de problemas

    .row.align-items-center.my-4
      .col-lg-8
        p La técnica de la que hace uso esta herramienta se basa en un modelo de relaciones causales que <strong>semeja en su forma a un árbol.</strong>
        p El principio de causalidad es usado por casi toda disciplina científica y nos brinda unos elementos claves para el análisis de los problemas:
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta(style="background: #02DD84; color: black")
              span 1
            | Los problemas son en suma acciones o productos de estas; es decir, <strong>hechos.</strong>
          li 
            .lista-ol--cuadro__vineta(style="background: #02DD84; color: black")
              span 2
            | Las acciones o hechos tienen una relación de precedencia (en el tiempo): si A precede a B, entonces A puede ser causa de B o B es efecto de A, teniendo como condición una proximidad en el espacio y tiempo.
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 4.
          span Ejemplo de causa y efecto. Ejemplo de causa y efecto. Bernal (2021).  
        figure
          img(src="@/assets/curso/temas/tema2/img6.svg", alt="Muestra el componente formativo un ejemplo de causa y efecto, de acuerdo: Desconocimiento de las fuentes de información de precios de mercado. Capacidad limitada de negociación de bienes y*o servicios. Capacidad limitada de negociación de bienes y*o servicios.")
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema2/img7.png", alt="")

    .row.align-items-center.my-4
      .col-lg-12.mb-3.m-auto
        .cajon.color-acento-contenido.p-4(data-aos="slide-down",style="background: #FFE9E1")
          p.mt-0 El ejercicio del árbol de problemas se debe efectuar en dos etapas, la primera de ellas es el <strong>establecimiento de los efectos del problema central denominado “árbol de efectos”</strong> A los efectos (consecuencias) directos del problema central se les esquematiza en un primer nivel hacia arriba de la gráfica. A los demás en un segundo nivel estableciendo las relaciones causales entre ellos (Ortegón et.al, 2005). La gravedad de los efectos también es importante; en proporción a esta se <strong>establecerá la prioridad y el tipo de acciones para su solución o mitigación.</strong> La redacción o el significado de lo descrito en este paso tiene una connotación negativa, pues son problemas, esto de acuerdo con los procedimientos descritos anteriormente en este documento.
    
    .row.align-items-center.my-4
      .col-lg-10.mb-3.m-auto
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 5.
          span Ejemplo de efectos directos e indirectos. Tomado de la guía de proyectos del DNP (2016).
        figure
          img(src="@/assets/curso/temas/tema2/img11.svg", alt="Muestra el componente formativo un ejemplo de efectos directos e indirectos, teniendo en cuenta: Efectos directos Aumento de impactos ambientales (contaminación fuentes y GEI). Mayor valor de la tarifa de aseo para los usuarios. Efectos Indirectos Alto uso de recursos para obtención de materias primas. Aumento del volumen de toneladas dispuestas en relleno. Pérdida de ingresos por ventas potenciales.")
          figcaption.my-3.text-regular <strong>Nota.</strong>Tomado de la guía de proyectos del DNP (2016).
    .row.align-items-center.my-4
      p En la segunda etapa se observan <strong>las causas y de la misma manera en que se procedió en la primera etapaa</strong>, pero hacia abajo en la gráfica, establecemos causas directas en un primer nivel y causas indirectas en un segundo e incluso un tercer nivel, estableciendo la relación causal entre todas ellas. <strong>Es posible que una causa tenga más de una consecuencia y viceversa.</strong> Las causas indirectas dan origen a las directas. Esta etapa es clave debido a que al hallar las causas originarias del problema de manera diferenciada, estableceremos los componentes del proyecto más adelante. En la medida en que se contrarresten las causas (raíces) del problema se estará contribuyendo a la <strong>superación del problema central.</strong>
    
    .row.align-items-center.my-4
      .col-lg-10.mb-3.m-auto
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 6.
          span Ejemplo de causas directas e indirectas
        figure
          img(src="@/assets/curso/temas/tema2/img12.svg", alt="Muestra el componente formativo un ejemplo de causas directas e indirectas, de acuerdo a : Causas directas Deficientes prácticas de separación de materiales. Ineficientes espacios para la valorización de residuos sólidos. Causas Indirectas Inadecuada tradición del manejo de residuos en la fuente. Inapropiado sistema de recolección para el transporte selectivo. Reducida aplicación de tecnología en el proceso de reciclaje. Informalidad y dispersión de los recuperadores.")

    .row.align-items-center.my-4
      p Una vez identificados todos los efectos y causas del problema central <strong>se integra toda la información en un solo cuadro</strong> que representa el resumen de la situación problémica. Aunque este análisis define el camino a seguir en adelante, los hechos descritos aún mantienen el carácter de <strong>hipótesis</strong> hasta tanto no se corroboran en los estudios del proyecto y se someten a evaluación del equipo de trabajo y la población objetivo de manera participativa <strong>(Ortegón et.al, 2005).</strong>

    .row.align-items-center.my-4
      .col-lg-12.mb-3.m-auto
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 7.
          span Ejemplo de árbol de problemas. Tomado de la guía de proyectos del DNP (2016).
        figure
          img(src="@/assets/curso/temas/tema2/img13.png", alt="Muestra el componente formativo un ejemplo de árbol de problemas, según sus efectos, problemas y causas.")
          figcaption.my-3.text-regular <strong>Nota.</strong> Tomado de la guía de proyectos del DNP (2016).
        
    .row.my-3.align-items-center 
      .col-lg-12.crd.crd--avatarHorizontal-left-bgr2.py-3.mb-3
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(src="@/assets/curso/temas/tema2/img62.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            p.m-0 Para avanzar en la elaboración de la propuesta se debe realizar <strong>una descripción más completa del problema</strong> usando todos los elementos definidos como causas y efectos, reforzando estas ideas con información documentada de la zona de estudio, los antecedentes del problema y de anteriores intervenciones, factores agravantes, prospectivas (estimaciones de los efectos por  la prolongación del problema en el tiempo), condiciones actuales del problema y demás datos que refuercen la idea del problema central. El ejemplo tomado del documento oficial del DNP que usamos anteriormente reza así:
   
    hr(style="background:#FF9751")
    .row.align-items-center.my-3
      .col-lg-10.m-auto
        .bloque-texto-b.py-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          p.bloque-texto-f__texto En el municipio XXX se generan aproximadamente 36.000 toneladas de residuos sólidos al año, con una tasa de aprovechamiento de tan solo el 1% por parte de las familias de recuperadores presentes en la zona, según estimaciones realizadas en el Plan Integral de Gestión de Residuos Sólidos - PIGRS. <br><br>
          p.bloque-texto-f__texto Esta situación se explica en gran medida por las inadecuadas prácticas de separación de los residuos de los hogares, el comercio y la industria local, por la forma en la que operan las rutas de transporte para su recolección. Los vehículos compactadores terminan mezclando los residuos orgánicos e inorgánicos, por las restricciones de espacios adecuados y dotados con las condiciones tecnológicas para la valorización de diferentes tipos de residuos. <br><br>
          p.bloque-texto-f__texto También las dificultades organizativas y de intermediación comercial con las que operan regularmente 85 personas identificadas como recuperadores informales dedicados al oficio del reciclaje. <br><br>
          p.bloque-texto-f__texto La situación tiende a agravarse en la medida que crece anualmente la generación de residuos en aproximadamente un 3% anual sin que el plástico, el papel, el vidrio, los metales y los residuos orgánicos se aprovechen y se reincorporen al ciclo productivo. Esto implica una mayor explotación de los recursos naturales para la obtención de estas materias primas y está llevando progresivamente al agotamiento de la vida útil del relleno sanitario donde se disponen los residuos con consecuencias negativas para el medio ambiente y la salud pública. Los afluentes se ven contaminados por la escorrentía de los lixiviados de los materiales orgánicos, la atmósfera por la emisión de gases de efecto invernadero (GEI) y las personas de la zona por la presencia de vectores de transmisión de enfermedades.<br><br>
          p.bloque-texto-f__texto Adicionalmente, el aumento en la demanda del servicio de disposición final de residuos también ha venido representando el incremento del 15% en la tarifa de aseo que los usuarios del sistema tienen que pagar periódicamente según estimaciones realizadas por la unidad de servicios públicos domiciliarios. También la pérdida de ingresos que de otra forma podrán generarse gracias a la posibilidad de venta de materiales recuperados según las cifras de comercialización que han sido estimadas mediante el estudio de mercado que se presenta más adelante. <strong>(DNP, 2016, p.18)</strong>


    .row.align-items-center.my-3
      .col-lg-10.m-auto
        .cajon.color-terciario.p-4(data-aos="slide-down",style="background: #D9F3FF")
          p.mt-0  Como se puede observar, las magnitudes que hacen cuenta de factores problemáticos resultan muy útiles para dimensionar el problema y sus efectos, y más adelante serán variables susceptibles de convertirse en indicadores de gestión, tema que se abordará un poco más adelante. 

    .row.mt-5.mb-4.align-items-center
      .col-auto
        img(src='@/assets/curso/temas/tema2/img3.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0(data-aos="zoom-in") Árbol de objetivos

    .row.mt-5.mb-4.align-items-center
      .col-lg-8
        p Bajo la misma lógica causal y al igual que en el ejercicio de árbol de problemas, <strong>en el árbol de objetivos se procede en primer lugar a redactar cada acción o hecho desde su redacción negativa a su versión opuesta positiva</strong>, expresando las mismas condiciones pero de la manera deseada o esperada.
        p Esta "transmutación" de los problemas se realiza bajo el mismo esquema de árbol, <strong>conservando el sentido y lógica causal del relacionamiento de los problemas.</strong>
        p Así, <strong>el problema central se convierte en el objetivo central o “propósito” del árbol de objetivos</strong> y más adelante será el objetivo general o <strong>“fin”</strong> del proyecto; abajo las causas directas se tornarán en <strong>“medios”</strong> para lograr el propósito en el árbol de objetivos y que se pueden entender como “objetivos específicos” del proyecto; más abajo las causas indirectas se convertirán en <strong>“productos y resultados”</strong> del árbol de objetivos y darán lugar a los <strong>“componentes”</strong> del proyecto y en caso de haber establecido ya causas de tercer nivel, estaremos hablando en este paso de las actividades en que se desagregan los distintos componentes del proyecto.

      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema2/img63.png", alt="")
    
    .row.align-items-center.my-3
      .col-lg-12.m-auto
        .cajon.color-terciario.p-4(data-aos="slide-down",style="background: #D9F3FF")
          p.mt-0 Hasta aquí hablamos de la parte inferior del árbol. Los efectos directos en la parte superior del árbol corresponden con <strong>los fines últimos a los que contribuirá el proyecto.</strong> Una recomendación muy importante es que los objetivos deben ser alcanzables, no se debe plantear por ejemplo, acabar con el hambre en la región o llevar a la población hacia altos niveles de desarrollo pues estos planteamientos deben ser muy objetivos, sensatos y mesurados. En caso de ejecutarse el proyecto, serán <strong>compromisos adquiridos</strong> a los cuales debe respaldar una garantía de cumplimiento.
    
    .row.mt-5.mb-4.align-items-center
      .col-lg-10.m-auto
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 8.
          span Ejemplo de árbol de objetivos. Tomado de la guía de proyectos del DNP (2016).
        figure.my-3
          img(src="@/assets/curso/temas/tema2/img14.svg", alt="Muestra el componente formatico un ejemplo de árbol de objetivos. ")
          figcaption.my-3.text-regular <strong>Nota.</strong> Tomado de la guía de proyectos del DNP (2016).
    .row.mt-5.mb-4.align-items-center
      p Para finalizar este ejercicio correctamente se hace necesaria una <strong>validación</strong>, lo que comprende una revisión de las relaciones entre las hipótesis planteadas, detectar y corregir posibles inconsistencias y de ser necesario, eliminar o adicionar nuevos elementos si se considera relevante, siempre y cuando se justifique debidamente. En toda situación, en la medida en que el ejercicio de análisis de problemas haya sido acertado, las acciones también lo serán, así como las alternativas correspondientes. Aquí se evidencia la importancia de una buena planeación y la justificación de la proporción de esta tarea dentro del proyecto general.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.card
  min-height: 130px
.bloque-texto-b.color-primario.p-4::before
  background-color: #FFF8DA
</style>
