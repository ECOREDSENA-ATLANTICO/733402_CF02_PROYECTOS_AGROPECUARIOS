<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Generalidades del enfoque de marco lógico
  
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.png')})`}"
        )

      .bloque-texto-g__texto.p-4(data-aos="flip-up")
        p.mb-0 La metodología de elaboración de proyectos bajo el<strong> Enfoque de Marco Lógico (EML)</strong> es en sí, una <strong>herramienta para la ordenación de información relacionada a un proyecto, basada en el razonamiento lógico</strong>; es decir, donde a partir de unas observaciones asumidas como verdaderas, se puede inferir, en ambos sentidos (causas o efectos), otras que en consecuencia, también serán verdaderas y que se denominan hipótesis. El EML se usa principalmente para la indagación de problemas, diseño, ejecución y evaluación de proyectos (CEPAL, 2005). Se enfoca principalmente hacia la consecución de objetivos pero facilitando la participación de los interesados, llamados stakeholders.

    .row.my-4.align-items-center
        p.text-bold <strong>El EML se puede usar en todas las etapas del proyecto, sea para el análisis de macropolíticas de desarrollo, del contexto de una actividad productiva en un momento y lugar dados, en la formulación de los proyectos, la valoración o evaluación, ejecución y/o desempeño de estos (PCI, 1979).</strong> 
        p Este documento se enfocará en la primera parte del ciclo del proyecto, correspondiente al diseño, que abarca dos etapas, el análisis y la planificación.

        .row.justify-content-center
          .col-lg-8
              .container.tarjeta.tarjeta--blanca.p-4.p-md-5

                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Figura 1.
                  span Cultivo de quinua (Lenguazaque - Cundinamarca, 2019)  
                
                figure
                  img(data-aos="flip-down",src='@/assets/curso/temas/tema1/img2.svg', alt='Texto que describa la imagen')
                  figcaption.my-3.text-regular <strong>Nota.</strong> Marco lógico y ciclo de vida del proyecto. Bernal (2021).

    div.p-4.my-3(data-aos="flip-right",style="background: #E4FBF2")
      .row.my-4.align-items-center
        .col-lg-8.my-2
          p Además de dar respuesta a otras metodologías que presentan problemas comunes mencionados ya en la introducción, <strong>el método posee otras ventajas:</strong>
          ol.px-4.lista-ol
            li 
              span.text-bold 1. 
              | Proporcionar una terminología uniforme que facilite la comunicación.
            li 
              span.text-bold 2. 
              | Estandarizar la forma de presentar metas, objetivos y supuestos lo que implica un acuerdo preciso.
            li 
              span.text-bold 3. 
              | Suministrar referentes comunes de análisis para el uso de todos los involucrados.
            li 
              span.text-bold 4. 
              | Aportar a la eficiencia para el uso de recursos por focalizarse en puntos técnicos críticos (cuellos de botella).
            li 
              span.text-bold 5. 
              | Facilitar la organización lógica de los planes de acción.
            li 
              span.text-bold 6. 
              | Permitir el seguimiento y la evaluación a lo largo del proyecto.
            li 
              span.text-bold 7. 
              | Permitir la visualización global del proyecto desde una sola herramienta.
        .col-lg-4.my-2
          figure(data-aos="slide-down")
            img(src="@/assets/curso/temas/tema1/img3.png", alt="Imagen decorativa")
    
    .row.my-4.align-items-center
      .col-lg-10.my-2.m-auto
        .cajon.color-acento-contenido.p-4(data-aos="slide-down",style="background: #FFF4EC")
          p.mt-0 Una aclaración importante de Ortegón et al. (2005) es que el EML es un excelente apoyo para el análisis y formulación de un proyecto, pero no sustituye la creatividad a la hora de resolver problemas. Los resultados de su aplicación si bien son sucintos, no implican su solución, aunque dejan ver claramente su origen y sus posibles soluciones.
    
    .row.my-4.align-items-center
      .col-lg-12.my-2
        strong El EML cuenta con una herramienta principal que es la Matriz de Marco Lógico (MML).  
        span Si bien la matriz es destacable, el enfoque es más completo, pues recoge instrumentos desde el análisis original hasta el análisis prospectivo del proyecto.  La MML es el producto de la aplicación del método, que puede visualizarse en dos etapas o fases claramente diferenciadas:

    .row.my-4.align-items-center
      .col-lg-12.my-2.m-auto
        .row.my-2.text-center 
          .col-lg-6.my-2(data-aos="fade-up-left")
            div.py-4(style="background: #B3E6FF; border-radius:10px")
              p.mb-0 <strong>1.</strong> El análisis causal o identificación de problemas y soluciones.
          .col-lg-6.my-2(data-aos="fade-up-right")
            div.py-4(style="background: #B3E6FF; border-radius:10px")
              p.mb-0 <strong>2.</strong> La planificación o plan operativo.

    TabsB.color-acento-contenido.my-4(data-aos="zoom-in")(style="background: #FFF4EC")
      .tarjeta.p-4.bgr2(titulo="Etapa de análisis" :icono="require('@/assets/curso/temas/tema1/img5.svg')")
        p En esta fase se realiza <strong>una indagación en la problemática y el contexto</strong> donde se desenvuelven los actores, el estado del arte frente a las actividades productivas, la dinámica de las relaciones sociales y culturales, las actividades o modelos organizacionales colaborativos, el trasfondo político, los antecedentes históricos y las capacidades actuales de la población, así como el acceso a factores productivos o recursos tecnológicos, el manejo de recursos naturales e impacto ambiental y la participación política (interacción con el estado o gobierno y el uso de mecanismos de participación ciudadana), entre otros. 
        div.p-4.my-3(style="background: #FFD5B8; border-radius: 10px")
          p.mb-0 En términos del marco normativo que brinda el sistema nacional de innovación agropecuaria, <strong>los ejes de análisis se resumen en los cinco aspectos del enfoque de extensión agropecuaria,</strong> pero en la realidad la situación de una población puede obedecer a diversos factores que además al abordarse merecen una visión holística (desde distintos campos de conocimiento) de los fenómenos que transcurren en ese preciso momento y a esa población en especial en su idiosincrasia particular.
        p Una vez se identifican y priorizan, esto es, se establecen las relaciones y el grado de influencia de cada problema con todos los demás, se plantean en los mismos términos, posibles soluciones a cada problema y de esta manera las relaciones entre estas soluciones usando la misma dinámica. <strong>Una forma de representar este ejercicio es a través de una imagen o “fotografía” del momento actual y una imagen del futuro positivo.</strong>
        p Esta fase comprenderá los siguientes análisis: <strong>información secundaria, actores involucrados, identificación de problemas (diagnóstico), matriz de priorización de problemas, árbol de problemas, árbol de objetivos y selección de alternativa óptima.</strong>
      .tarjeta.p-4.bgr2(titulo="Etapa de planificación" :icono="require('@/assets/curso/temas/tema1/img6.svg')")
        p A partir de los análisis anteriores se establece una estrategia que implique el logro de los objetivos planteados desde las ideas y soluciones, esto es, el mapa del plan de acción, plasmado en la primera columna que se concreta en la MML. Seguido al planteamiento de lo relacionado a esta columna, denominada “resumen narrativo del proyecto” constituido por las actividades, productos, objetivos y fin del proyecto, se tiene la segunda columna que corresponde a los indicadores, la tercera que está formada por los medios de verificación y la cuarta que se trata de los supuestos.
        div.p-4.my-3(style="background: #FFD5B8; border-radius: 10px")
          p.mb-0 Aunque la <strong>MML</strong> es vigente, es posible robustecer esta metodología a través de la incorporación de otras herramientas o incluso la modificación de la <strong>MML</strong>, como por ejemplo lo hace la <strong>MBR</strong> (matriz basada en resultados, una variante, así como lo es <strong>ZOPP</strong>, de la MML). 
        p Para avanzar en la planificación se complementa el ejercicio a través de un cronograma que puede ser un diagrama de Gantt o similar. Si al cronograma se agrega un análisis de costos de las actividades y además una delegación de responsabilidades a un equipo de trabajo, contará con los insumos necesarios para el establecimiento del <strong>plan de acción.</strong>

        .row.mb-4
          .col-lg-10.m-auto
            .row.align-items-center.grad1.p-3
              .col-lg-2
                figure
                  img(src='@/assets/curso/temas/tema1/img7.svg', alt='Imagen decorativa' width="64px" height="64px")
              .col-lg-7
                h2.text-light Anexo. Tabla 1
                .text-light.mb-0 Actividades del enfoque de marco lógico, herramientas y resultados a obtener. Bernal (2021).
              .col-lg-3.text-center
                a.boton(:href="obtenerLink('/downloads/anexo_tabla1.pdf')" target="_blank" type="application/pdf")
                  span Descargar
                  i.fas.fa-file-download
  </template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass"></style>
