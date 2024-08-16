export default {
  global: {
    componenteFormativo:
      'Formulación de proyectos agropecuarios bajo el enfoque metodológico de marco lógico.',
    descripcionCurso:
      'El marco lógico es una metodología versátil y potente que permite un análisis amplio y participativo de problemas y soluciones. Considera el contexto, actores, causas, riesgos y alternativas, utilizando un enfoque sistémico y organizado. Se divide en tres fases: identificación del problema, selección de la mejor solución y construcción de la matriz de marco lógico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades del enfoque de marco lógico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Etapa de análisis',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Análisis del contexto en torno a la problemática de la ruralidad',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Análisis de información secundaria',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Análisis de actores involucrados',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Diagnóstico de la situación problémica',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Identificación de problemas a partir de información primaria',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo:
              'Priorización de problemas a través de la herramienta “Matriz de Vester”',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo:
              'Análisis causa-efecto a través de la "metodología de árboles"',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Etapa de planificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Análisis de alternativas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Matriz de marco lógico',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Indicadores y medios de verificación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Análisis de riesgos y establecimiento de los supuestos del proyecto',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Plan operativo y presupuesto general',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia:
        'Dussán. (2021). Canal en YouTube sobre gestión agropecuaria.',
      tipo: 'Video',
      link: 'https://www.youtube.com/channel/UCRGTHrhfZoFaEy23nhvy9KA',
    },
    {
      tema: '',
      referencia:
        'SENA. (2020). Cartilla resumen marco lógico para formulación de proyectos. SENA.',
      tipo: 'Manual',
      link:
        'https://www.tecnnova.org/wp-content/uploads/2017/03/Cartilla-Resumen-Marco-L%C3%B3gico-para-Formulaci%C3%B3n-de-Proyectos-CEPAL-2011.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Actividad',
      significado:
        'Es la acción que contribuye a la transformación de insumos en productos.',
    },
    {
      termino: 'Actividad económica principal',
      significado:
        'Actividad que genera la mayor parte del valor agregado o la actividad cuyo valor agregado supera al de todas las demás actividades que realiza el proyecto.',
    },
    {
      termino: 'Actividad económica secundaria',
      significado:
        'Actividad independiente que genera productos destinados en última instancia a terceros y no corresponde a alguna actividad principal del proyecto.',
    },
    {
      termino: 'Actividad económica auxiliar',
      significado:
        'Actividad que se realiza para respaldar las actividades de producción principales del proyecto que generan productos o servicios no duraderos. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Alcance',
      significado:
        ': Es la suma total de todos los productos y sus requisitos o características. Permite identificar hasta dónde se profundizan los estudios del proyecto de acuerdo a su ciclo de vida. El alcance está enmarcado por las metas de los productos y los respectivos indicadores para su medición. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Beneficiarios',
      significado:
        'Corresponde a la población objetivo identificada en el diagnóstico del proyecto, la cual indica el número de personas directas para quienes se solucionará el problema identificado previamente. (Ortegón, et.al 2005).',
    },
    {
      termino: 'Beneficio',
      significado:
        'Es la riqueza en el ámbito social, ambiental o económico que obtiene la población objetivo en el momento que se decide ejecutar un proyecto de inversión. La valoración de beneficios depende de la identificación de los problemas resueltos y su descripción tiene que ver con el impacto o los fines que tiene la utilización de los bienes producidos. Los beneficios son de carácter cualitativo y cuantitativo que se presentan bajo la forma del problema resuelto o la necesidad satisfecha. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Bien',
      significado: 'Definición',
    },
    {
      termino: 'Término con extranjerismo',
      significado:
        ': Es un objeto tangible, almacenable o transportable. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Causa',
      significado:
        'Explica los motivos por los cuales se está presentando el problema que se está analizando; la mejor manera de evidenciarlos es preguntándose cuál es el origen del problema. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Componente',
      significado:
        'Dentro de la metodología de marco lógico, los componentes son los bienes o servicios que produce o entrega un programa o proyecto para cumplir un propósito, los cuales son el resultado de una o varias actividades. Se asimilan al concepto de producto en el contexto de cadena de valor. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Efectividad',
      significado:
        'Hace referencia a la medida en que los objetivos de la prestación de servicios se cumplen a través de los productos generados. Este concepto involucra la eficiencia y la eficacia; consistente en realizar las actividades y procesos que realmente deben llevarse a cabo, haciendo un uso óptimo de los recursos involucrados. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Eficiencia',
      significado:
        'El concepto hace referencia al uso óptimo de recursos en una actividad productiva; esto es, obtener el mismo producto con una menor cantidad de recursos por unidad producida o en obtener más productos con la misma cantidad de recursos. En el marco de los proyectos de inversión, la eficiencia puede ser abordada, entre otros, a través del análisis de Eficiencia Técnica. Este análisis evalúa qué tan bueno es un proyecto determinado transformando insumos en productos requeridos (esto es, qué tan productivo es su gasto), en comparación con sí mismo u otros proyectos similares. En este sentido es posible medir la eficiencia técnica como la relación entre la productividad observada de un proyecto y su productividad esperada (o una productividad referente que sea considerada óptima). Este concepto permite responder la pregunta de ¿qué tan bueno es el sector público transformando dinero en servicios prestados, comparado con otros?. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Etapa de funcionamiento u operación',
      significado:
        'Momento en el cual se empieza a utilizar el bien o servicio obtenido en la etapa de inversión y por tanto, se inicia la generación del beneficio. Esta etapa dura el tiempo que se estipula en la etapa de preinversión para alcanzar los objetivos del proyecto, es decir, la operación va hasta el periodo en que se espera que ya no se presente el problema que se está atacando con el proyecto. Durante esta etapa también existe seguimiento, el cual busca medir los resultados y el impacto en la cadena de valor; este se realiza a los componentes y la finalidad en la matriz de marco lógico. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Etapa de inversión',
      significado:
        'Es la etapa en la cual se materializan las acciones que dan como resultado bienes o servicio y culmina cuando el o los productos obtenidos comienzan a generar beneficios. En esta etapa se realizan los procesos de ejecución y seguimiento. La ejecución se desarrolla física y financieramente. Durante este periodo se llevan a cabo las actividades necesarias para la obtención del producto o productos del proyecto. Las actividades deben ser claras, concretas y estar programadas en el tiempo, pues ellas indicarán el monto de recursos que se requiere anualmente para poder lograr el producto en el tiempo estipulado. El seguimiento va de la mano con la ejecución. Este se realiza a los insumos, actividades y productos planteados en la cadena de valor del proyecto a través de indicadores de producto y de gestión que son los que miden el comportamiento físico del proyecto. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Etapa de preinversión',
      significado:
        'Es la etapa del proyecto que involucra la formulación y evaluación ex ante del proyecto. En esta etapa, se identifica el problema o necesidad y se prepara la información pertinente para establecer si desde el punto de vista financiero, técnico, económico y ambiental es viable emprender el proyecto. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Formulación',
      significado:
        'Es a la fase de la preinversión en la cual se identifican la situación actual, la situación esperada y las alternativas de solución para la problemática que se está analizando, que seguidamente pasarán a preparación para iniciar el levantamiento de la información relacionada con los insumos, actividades, costos, tiempos y demás elementos necesarios para obtener el o los productos que las contiene. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Identificación',
      significado:
        'Fase de la formulación del proyecto en la cual se identifica la situación actual (árbol del problema, análisis de participaciones, población y zona afectada), la situación esperada (árbol de objetivos, población y zona objetivo) y las alternativas de solución a través del análisis de objetivos. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Impacto',
      significado:
        'Es el cambio logrado en las condiciones económicas o sociales de la población, como resultado de los productos y resultados obtenidos con el proyecto o programa. Se trata del nivel más elevado de resultados o de la finalidad última de los proyectos, cuando se genera la totalidad de los beneficios previstos en su operación. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Indicador',
      significado:
        'Es una representación cuantitativa (variable o relación entre variables), verificable objetivamente, a partir de la cual se registra, procesa y presenta la información necesaria para medirel avance o retroceso en el logro de un determinado objetivo. En consecuencia, es a partir de indicadores que se pueden determinar objetivamente, los resultados de las intervenciones públicas y valorar su desempeño.Los indicadores deben ser: C  Claros R  Relevantes E  Económicos M  Medibles A  Adecuados. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Indicador de gestión',
      significado:
        'Identifica los recursos físicos, humanos y financieros utilizados en el desarrollo de las acciones; y mide la cantidad de acciones, procesos, procedimientos y operaciones realizadas durante la etapa de implementación. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Indicador de impacto',
      significado:
        'Mide los cambios resultantes en el bienestar de la población objetivo de la intervención como consecuencia (directa o indirecta) de la entrega de los productos. Mide los efectos (directos e indirectos) generados por los productos sobre la población directamente afectada. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Indicador de producto',
      significado:
        'Cuantifica los bienes y servicios (intermedios o finales) producidos y/o provisionados a partir de una determinada intervención, así como los cambios generados por ésta que son pertinentes para el logro de los efectos directos. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Meta',
      significado:
        'Corresponden a la expresión cuantitativa y cualitativa de los logros que se pretenden obtener con el proyecto. Refleja la magnitud o nivel específico de los resultados es decir de los productos, efectos o impactos que se esperan alcanzar. Su medición debe hacerse en términos de tiempo, cantidad y si es posible calidad. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Monitoreo',
      significado:
        'Es una herramienta de gestión, que a través de la recolección y análisis continúo de información, le ayuda al gerente del proyecto a controlar los avances durante la fase de ejecución. Se basa en la comparación entre los resultados esperados y el estado de avance de los mismos, lo que permite identificar y valorar posibles problemas y logros de los procesos de ejecución, así como proporcionar información fiable y oportuna, con el fin de hacer ajustes para lograr el objetivo deseado. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Objetivo general',
      significado:
        'Es la situación deseada para la población con relación al problema identificado. El objetivo general se origina al convertir en positivo el árbol del problema. El objetivo debe ser:• Realistas: Se pueden alcanzar con los recursos disponibles.• Eficaces: No sólo responde a problemas presentes sino al tiempo futuro en que se ubica el objetivo.• Coherentes: El cumplimiento de un objetivo no imposibilita el cumplimiento de otro.• Cuantificables: Son susceptibles de medición en el tiempo. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Perfil',
      significado:
        'En este nivel debe recopilarse la información de origen secundario que aporte datos útiles para el proyecto, como documentos acerca de proyectos similares, mercados y beneficiarios. Esta información es fundamental para preparar y evaluar las alternativas del proyecto y calcular sus costos y beneficios de manera preliminar. Aquí también se analiza la viabilidad legal e institucional del proyecto. Con esta información, se eligen las alternativas que ameritan estudios más detallados o se toma la decisión de aplazar o descartar el proyecto. Este es el nivel mínimo requerido para la inscripción de un proyecto en el BPIN.',
    },
    {
      termino: 'Planeación',
      significado:
        'En términos públicos es la orientación adecuada de los recursos procurando el cumplimiento de objetivos de desarrollo económico y social. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Prefactibilidad',
      significado:
        'En este estudio se evalúan las alternativas que fueron seleccionadas en la fase precedente. Se realizan estudios técnicos especializados de manera que al mejorar la calidad de la información reduzcan la incertidumbre para poder comparar las alternativas y decidir cuáles se descartan y cuál se selecciona. Estos estudios deben incluir al menos los efectos producidos por cambios en las variables relevantes del proyecto (sobre el valor presente neto, VPN, sobre cambios en los gastos de inversión y de operación del proyecto, y las estimaciones de la demanda y de la oferta). (Ortegón et.al, 2005).',
    },
    {
      termino: 'Preparación',
      significado:
        'Consiste en la elaboración de estudios para comparar las alternativas de solución, y así tomar la decisión sobre cuál de ellas es la más adecuada para alcanzar el objetivo propuesto. En esta etapa se determina la magnitud de las inversiones del proyecto, los costos y beneficios del mismo, al tiempo que se completará la información requerida para la construcción de la cadena de valor. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Problema',
      significado:
        'Se define como una situación no deseada, es decir, una situación negativa que padece la comunidad en un momento determinado. Un problema no es la ausencia de su solución, sino un estado existente negativo. (Ortegón et.al, 2005).',
    },
    {
      termino: 'Resultados',
      significado:
        'Son los cambios en las condiciones del sujeto de beneficio enmarcadas en el objetivo general del proyecto, por efecto del consumo de los productos y el cumplimiento de de los supuestos considerados en el mismo. (Ortegón et.al, 2005).',
    },
  ],
  referencias: [
    {
      referencia:
        '-	Aldunate, E., Córdoba, J. (2015). Formulación de programas con la metodología de marco lógico. Naciones Unidas, Santiago de Chile. ',
      link:
        'https://repositorio.cepal.org/bitstream/handle/11362/5607/S057518_es.pdf. ',
    },
    {
      referencia:
        '-	Departamento Nacional de Planeación. (2016). Documento Guía del módulo de capacitación virtual en Teoría de Proyectos. Dirección de Inversiones y Finanzas Públicas (DIFP) Subdirección de Proyectos e Información para la Inversión Pública. ',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Inversiones%20y%20finanzas%20pblicas/MGA_WEB/Documento%20Base%20Modulo%20Teoria%20de%20Proyectos.pdf.',
    },
    {
      referencia:
        '-	Expósito, M. (2003). Diagnóstico Rural Participativo, Una guía práctica. Centro Cultural Poveda.',
      link:
        'http://biblioteca.clacso.edu.ar/Republica_Dominicana/ccp/20120731033315/diagrural.pdf.',
    },
    {
      referencia:
        '-	Geilfus, F. (2002). 80 herramientas para el desarrollo participativo. Diagnóstico, planificación, monitoreo y evaluación. Instituto Interamericano de Cooperación para la Agricultura (IICA).',
      link:
        'http://ejoventut.gencat.cat/permalink/aac2bb0c-2a0c-11e4-bcfe-005056924a59.',
    },
    {
      referencia:
        '-	Instituto de Formación Permanente INSFOP. (2008). Diagnóstico rural participativo y planificación comunitaria. FAO-INSFOP-AECID.',
      link: 'http://www.fao.org/3/at795s/at795s.pdf.',
    },
    {
      referencia:
        '-	Ministerio de desarrollo agropecuario de Panamá. (2017). Guía para la formulación de proyectos de inversión del sector agropecuario bajo el enfoque de planificación estratégica y gestión por resultados. MIDA-FAO.',
      link: 'http://www.fao.org/3/i8097es/I8097ES.pdf.',
    },
    {
      referencia:
        '-	Practical Concepts Incorporated (PCI) (1979). The logical framework, a manager’s guide to a scientific approach to design & evaluation. PCI.',
      link:
        'https://www.usaid.gov/sites/default/files/documents/1865/The-Logical-Framework-A-Managers-Guide.pdf.',
    },
    {
      referencia:
        '-	Sanchez, F. (2003). Planificación estratégica y gestión pública por objetivos. Naciones Unidas, Santiago de Chile',
      link:
        'https://www.cepal.org/es/publicaciones/7284-planificacion-estrategica-gestion-publica-objetivos. ',
    },
    {
      referencia:
        '-	SENA. (2020). SENA. (2020). Cartilla resumen marco lógico para formulación de proyectos. SENA.',
      link:
        'https://www.tecnnova.org/wp-content/uploads/2017/03/Cartilla-Resumen-Marco-L%C3%B3gico-para-Formulaci%C3%B3n-de-Proyectos-CEPAL-2011.pdf.',
    },
    {
      referencia:
        '-	Silva, I. y Sandoval, C. (2012). Metodología para la elaboración de estrategias de desarrollo local. ILPES.',
      link:
        'https://www.cepal.org/es/publicaciones/5518-metodologia-la-elaboracion-estrategias-desarrollo-local.',
    },
    {
      referencia:
        '-	Casimiro, L. (2016). Bases metodológicas para la resiliencia socioecológica de fincas familiares en Cuba. [Tesis de doctorado en agroecología]. Universidad de Antioquia. Medellín, Colombia.',
      link:
        ' https://bibliotecadigital.udea.edu.co/bitstream/10495/6112/1/RodriguezL_2016_BasesMetodol%C3%B3gicasResiliencia.pdf',
    },
    {
      referencia:
        '-	Castiblanco, C. (s. f.). Indicadores de sustentabilidad opciones de adaptación y mitigación Aspectos Distributivos del cambio climático. Cepal',
      link:
        'https://www.cepal.org/sites/default/files/courses/files/presentacion_carmenza_castiblanco.pdf',
    },
    {
      referencia:
        '-	Rodríguez M., y Espinoza, G. (2002). Gestión ambiental en América Latina y el Caribe Evolución, tendencias y principales prácticas. David Wilk.',
      link: '',
    },
    {
      referencia:
        '-	Rodríguez, B., M. (2019). Nuestro planeta, nuestro futuro. Penguin Random House Grupo Editorial. ',
      link: '',
    },
    {
      referencia:
        '-	Sarandón, S. (2020). Cuadernos de la transformación: El papel de la agricultura en la transformación social-ecológica de América Latina. Friedrich-Ebert-Stiftung.',
      link: 'http://library.fes.de/pdf-files/bueros/mexiko/16550.pdf',
    },
    {
      referencia:
        '-	Sarandón, S. (2002). La agricultura como actividad transformadora del ambiente. El Impacto de la Agricultura intensiva de la Revolución Verde. En S. J., Sarandón (Ed.). Agroecología: el camino hacia una agricultura sustentable, (pp. 23-48). Ediciones Científicas Americanas.',
      link: '',
    },
    {
      referencia:
        '-	Sarandón, S. (2009). Biodiversidad, agrobiodiversidad y agricultura sustentable: análisis del Convenio sobre Diversidad Biológica. En M. A. Altieri (Ed). Vertientes del pensamiento agroecológico: fundamentos y aplicaciones. Sociedad Científica Latinoamericana de Agroecología. Socla',
      link:
        'https://www.agroecologia.net/wp-content/uploads/2020/12/biodiversidad-agroecologia-santiago-sarandon.pdf',
    },
    {
      referencia:
        '-	Sarandón, S., y Flores, C. (2014). Agroecología: bases teóricas para el diseño y manejo de agroecosistemas sustentables. ',
      link:
        'https://libros.unlp.edu.ar/index.php/unlp/catalog/view/72/54/181-1',
    },
    {
      referencia:
        '-	Shiva, V. (1991). “Miracle seeds” and the destruction of genetic diversity. In: The violence of the green revolution. Third World Agriculture, Ecology and Politics. (pp. 61102). Third World Network. ',
      link: '',
    },
    {
      referencia:
        '-	Shiva, V. (2014). The GMO Emperor Has No Clothes - Genetic Engineering Is a Failed Technology. En V. Shiva, The Vandana Shiva Reader (pp. 277 - 297). The University Press of Kentucky. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del ecosistema de Recursos Educativos Digitales (RED) ',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },

        {
          nombre: 'Roberto Augusto Bernal Duque',
          cargo: 'Experto temático',
          centro:
            'Centro de Desarrollo Agroempresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Yeison Farid Méndez Ortiz',
          cargo: 'Experto temático',
          centro: 'Centro Agropecuario “La Granja” - Regional Tolima.',
        },
        {
          nombre: 'Orlando Barón Méndez',
          cargo: 'Experto temático',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Fabian Cuartas Donado',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: ' Eulises Orduz Amezquita ',
          cargo: 'Diseñador web',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Rafael Perez Meriño',
          cargo: 'Desarrollo <em>fullstack</em> ',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Eulices Orduz Amézquita',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Nelson Ivan Vera Briceño',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
