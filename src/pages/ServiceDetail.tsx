import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Shield, 
  Network, 
  Headset, 
  Cpu, 
  LifeBuoy, 
  Code2, 
  ShoppingBag, 
  CreditCard, 
  FileText,
  Zap,
  Lock,
  BarChart3,
  Cloud,
  Monitor
} from 'lucide-react';

const servicesData: Record<string, any> = {
  'networking-y-conectividad': {
    title: 'Networking y Conectividad Empresarial',
    icon: Network,
    logos: ['ubiquiti.png', 'aruba.png', 'grandstream.png'],
    description: 'Diseño e implementación de redes LAN, switching y cableado estructurado de alto rendimiento en el sureste de México.',
    content: `
      <p>En la era digital actual, una red robusta y confiable es la columna vertebral de cualquier operación empresarial exitosa. En Inside Business Mexico, nos especializamos en el diseño, implementación y gestión de infraestructuras de networking que garantizan el máximo rendimiento y disponibilidad para su negocio en todo el sureste de México.</p>
      
      <h3>Infraestructura de Red de Clase Mundial</h3>
      <p>Nuestras soluciones de networking empresarial van más allá de la simple conexión de dispositivos. Analizamos las necesidades específicas de su organización para crear arquitecturas de red escalables que soporten el crecimiento futuro. Trabajamos con los fabricantes líderes de la industria como Cisco, Aruba y Fortinet para entregar soluciones de switching, routing y wireless de última generación.</p>
      
      <h3>Cableado Estructurado y Fibra Óptica</h3>
      <p>La base física de su red es crítica. Realizamos instalaciones de cableado estructurado siguiendo los más estrictos estándares internacionales (TIA/EIA). Ya sea que necesite una actualización a Categoría 6A para soportar 10Gbps o la implementación de dorsales de fibra óptica monomodo o multimodo para conectar edificios, nuestro equipo técnico certificado garantiza una instalación impecable y certificada.</p>
      
      <h3>Soluciones Wireless de Alta Densidad</h3>
      <p>Con el aumento de dispositivos móviles y el Internet de las Cosas (IoT), una red Wi-Fi empresarial debe ser capaz de manejar alta densidad de usuarios sin comprometer la velocidad ni la seguridad. Implementamos soluciones de Wi-Fi 6 y Wi-Fi 6E con gestión centralizada en la nube, permitiendo un control total sobre quién accede a su red y qué recursos utiliza.</p>
      
      <h3>Optimización y Monitoreo</h3>
      <p>No solo instalamos su red; nos aseguramos de que funcione de manera óptima. Ofrecemos servicios de análisis de tráfico, optimización de ancho de banda y monitoreo proactivo 24/7. Esto nos permite identificar y resolver cuellos de botella antes de que afecten la productividad de sus colaboradores.</p>
      
      <p>Ubicados estratégicamente en el sureste de México, brindamos soporte técnico presencial rápido a empresas en toda la región, asegurando que su conectividad nunca sea un impedimento para el éxito de su empresa.</p>
    `,
    features: [
      'Certificación de cableado estructurado Cat 6, 6A y 7',
      'Diseño de redes de fibra óptica para campus industriales',
      'Implementación de SD-WAN para sucursales remotas',
      'Configuración de VLANs y segmentación de red para seguridad',
      'Soporte técnico especializado en el sureste de México'
    ]
  },
  'ciberseguridad-empresarial': {
    title: 'Ciberseguridad y Auditoría de Redes',
    icon: Shield,
    logos: ['hllstone.png', 'fortinet.png', 'sophos.png', 'endpoint.png', 'eset.png', 'kaspersky.png', 'sangfor.png', 'bitdefender.png'],
    description: 'Protección avanzada contra amenazas digitales, firewalls de próxima generación, SASE y auditorías de seguridad en el sureste de México.',
    content: `
      <p>La ciberseguridad ya no es una opción, es una necesidad crítica para la supervivencia de cualquier empresa en el entorno digital actual. En Inside Business Mexico, ofrecemos soluciones de ciberseguridad integral diseñadas para proteger los activos más valiosos de su organización contra ataques sofisticados de ransomware, phishing y malware en toda la región del sureste de México.</p>
      
      <h3>Arquitectura SASE (Secure Access Service Edge)</h3>
      <p>Destacamos en la implementación de arquitecturas SASE, unificando las capacidades de red y seguridad en la nube para proporcionar un acceso seguro y rápido a los usuarios, sin importar dónde se encuentren. SASE es el futuro de la seguridad perimetral para fuerzas de trabajo distribuidas.</p>

      <h3>Protección Perimetral con NGFW</h3>
      <p>Implementamos Firewalls de Próxima Generación (NGFW) que ofrecen una visibilidad completa del tráfico de red y un control granular sobre las aplicaciones. Nuestras soluciones de Fortinet y Palo Alto integran prevención de intrusiones (IPS), antivirus de red y filtrado web avanzado para detener las amenazas antes de que ingresen a su infraestructura local.</p>
      
      <h3>Auditoría de Redes y Análisis de Vulnerabilidades</h3>
      <p>¿Sabe qué tan vulnerable es su red hoy mismo? Realizamos auditorías de seguridad exhaustivas y escaneos de vulnerabilidades para identificar puntos débiles en sus sistemas, servidores y aplicaciones. Entregamos informes detallados con recomendaciones claras y priorizadas para mitigar riesgos, ayudando a su empresa en el sureste de México a cumplir con normativas internacionales de seguridad.</p>
      
      <h3>Seguridad en el Endpoint y EDR</h3>
      <p>Con el trabajo remoto, el perímetro de seguridad se ha extendido hasta los dispositivos de los usuarios. Nuestras soluciones de Detección y Respuesta en el Endpoint (EDR) utilizan inteligencia artificial para detectar comportamientos anómalos y bloquear ataques de día cero que los antivirus tradicionales no pueden ver.</p>
      
      <h3>Estrategia de Zero Trust</h3>
      <p>Ayudamos a las empresas a adoptar un modelo de "Confianza Cero", donde cada intento de acceso a los recursos corporativos debe ser verificado, independientemente de si proviene de dentro o fuera de la red. Esto minimiza drásticamente la superficie de ataque y protege contra amenazas internas.</p>
      
      <p>Como expertos en ciberseguridad en el sureste de México, entendemos los retos específicos de las industrias locales, brindando la tranquilidad necesaria para que su negocio opere sin interrupciones.</p>
    `,
    features: [
      'Implementación de Arquitectura SASE',
      'Firewalls Fortinet y Sophos',
      'Análisis de vulnerabilidades y pruebas de penetración',
      'Protección contra Ransomware con respaldo inmutable',
      'Monitoreo de seguridad 24/7 (SOC)'
    ]
  },
  'comunicaciones-unificadas': {
    title: 'Comunicaciones Unificadas y Telefonía IP',
    icon: Headset,
    logos: ['grandstream.png', 'teams.png', 'zoom.png'],
    description: 'Sistemas de colaboración, videoconferencia y telefonía IP con enfoque en omnicanalidad para empresas en el sureste de México.',
    content: `
      <p>La comunicación efectiva es el motor de la colaboración empresarial. En Inside Business Mexico, integramos voz, video, mensajería y presencia en una sola plataforma coherente que permite a su equipo trabajar de manera más inteligente, no más dura, desde cualquier lugar del sureste mexicano.</p>
      
      <h3>Omnicanalidad en la Atención al Cliente</h3>
      <p>Destacamos la omnicanalidad como pilar fundamental. Unificamos todos los canales de contacto (voz, chat, redes sociales, email) en una sola interfaz, permitiendo a sus agentes brindar una experiencia de cliente fluida y sin interrupciones, mejorando la satisfacción y los tiempos de respuesta.</p>

      <h3>Telefonía IP de Siguiente Generación</h3>
      <p>Migre su antigua central telefónica a una solución de Voz sobre IP (VoIP) flexible y económica. Nuestras soluciones basadas en IP-PBX permiten una escalabilidad ilimitada, integración con dispositivos móviles y funciones avanzadas como operadora automática, grabación de llamadas y conferencias integradas, ideales para oficinas y sucursales en todo el sureste de México.</p>
      
      <h3>Salas de Videoconferencia Profesionales</h3>
      <p>En el mundo del trabajo híbrido, las reuniones virtuales deben ser tan claras y efectivas como las presenciales. Diseñamos e instalamos sistemas de videoconferencia profesional para salas de juntas de todos los tamaños, utilizando tecnología de audio y video de alta definición que se integra perfectamente con Microsoft Teams, Zoom y Webex.</p>
      
      <h3>Colaboración en Tiempo Real</h3>
      <p>Facilitamos la adopción de herramientas de colaboración que permiten a sus empleados compartir documentos, chatear y realizar llamadas de video con un solo clic. Esto reduce la dependencia del correo electrónico y acelera la toma de decisiones en su organización.</p>
      
      <h3>Soporte y Mantenimiento</h3>
      <p>Un sistema de comunicación caído es una pérdida de oportunidades. Ofrecemos planes de mantenimiento preventivo y correctivo para asegurar que sus sistemas de comunicación siempre estén operativos. Nuestro equipo técnico está listo para atender cualquier incidencia de forma remota o presencial en todo el sureste de México.</p>
    `,
    features: [
      'Estrategias de Omnicanalidad integradas',
      'Conmutadores IP físicos y en la nube',
      'Equipamiento para salas de juntas inteligentes',
      'Integración de telefonía con CRMs',
      'Soluciones de Contact Center para atención al cliente'
    ]
  },
  'computo-empresarial': {
    title: 'Cómputo Empresarial',
    icon: Cpu,
    logos: ['dell.png', 'synology.png', 'lenovo.png', 'hewlett.png'],
    description: 'Infraestructura de servidores, almacenamiento SAN/NAS y virtualización para empresas en el sureste de México.',
    content: `
      <p>El procesamiento y almacenamiento de datos son el corazón de su infraestructura tecnológica. En Inside Business Mexico, proveemos soluciones de hardware empresarial de alto rendimiento que garantizan la integridad, disponibilidad y velocidad de acceso a su información crítica en todo el sureste de México.</p>
      
      <h3>Servidores Empresariales de Alto Rendimiento</h3>
      <p>Ofrecemos una amplia gama de servidores de rack y torre de los principales fabricantes como Dell Technologies, HPE y Lenovo. Ya sea que necesite un servidor de archivos básico o un clúster de servidores de alta densidad para aplicaciones críticas, diseñamos la configuración exacta que su negocio requiere.</p>
      
      <h3>Almacenamiento SAN y NAS</h3>
      <p>La explosión de datos requiere soluciones de almacenamiento inteligentes. Implementamos sistemas de almacenamiento conectado a red (NAS) para compartir archivos de manera eficiente y redes de área de almacenamiento (SAN) para aplicaciones que demandan baja latencia y alta disponibilidad. Nuestras soluciones incluyen tecnologías de deduplicación y compresión para maximizar su inversión.</p>
      
      <h3>Virtualización de Servidores</h3>
      <p>Optimice sus costos de hardware y energía mediante la virtualización. Somos expertos en la implementación de entornos virtuales con VMware vSphere y Microsoft Hyper-V, permitiéndole ejecutar múltiples servidores virtuales en un solo equipo físico, facilitando la administración y mejorando los tiempos de recuperación ante desastres.</p>
      
      <h3>Continuidad del Negocio y Respaldo</h3>
      <p>Protegemos su operación contra fallos de hardware. Diseñamos estrategias de respaldo 3-2-1 (tres copias, dos medios distintos, una fuera de sitio) para asegurar que sus datos siempre sean recuperables. Ofrecemos soluciones de respaldo inmutable para protegerse contra el borrado accidental o ataques de ransomware.</p>
    `,
    features: [
      'Venta y configuración de servidores Dell y HP',
      'Sistemas de almacenamiento masivo y alta disponibilidad',
      'Migración de servidores físicos a virtuales',
      'Soluciones de respaldo en la nube y local',
      'Mantenimiento preventivo de centros de datos'
    ]
  },
  'hiperconvergencia-hci': {
    title: 'Hiperconvergencia HCI',
    icon: Cloud,
    logos: ['nutanix.png', 'vmware.png', 'hyperv.png'],
    description: 'Infraestructura hiperconvergente para simplificar la gestión y escalar recursos de forma eficiente.',
    content: `
      <p>La Hiperconvergencia (HCI) transforma la complejidad del centro de datos tradicional en una solución ágil y fácil de administrar. En Inside Business Mexico, implementamos plataformas HCI que combinan cómputo, almacenamiento y redes en un solo sistema definido por software.</p>
      
      <h3>Simplicidad y Escalabilidad</h3>
      <p>Con HCI, olvídese de administrar silos separados de servidores y almacenamiento SAN. Todo se gestiona desde una única interfaz intuitiva. Además, escalar su infraestructura es tan sencillo como añadir un nuevo nodo al clúster, sin interrupciones ni configuraciones complejas.</p>
      
      <h3>Rendimiento y Alta Disponibilidad</h3>
      <p>Las soluciones hiperconvergentes están diseñadas para ofrecer un rendimiento excepcional para bases de datos, VDI (Virtual Desktop Infrastructure) y aplicaciones críticas. La redundancia integrada asegura que, en caso de fallo de hardware, sus aplicaciones sigan funcionando sin tiempo de inactividad.</p>
      
      <h3>Reducción de Costos (TCO)</h3>
      <p>Al consolidar el hardware y simplificar la gestión, la hiperconvergencia reduce significativamente los costos operativos y de capital, optimizando el espacio en el rack y el consumo de energía.</p>
    `,
    features: [
      'Implementación de clústeres hiperconvergentes',
      'Gestión unificada de cómputo y almacenamiento',
      'Escalabilidad horizontal sin interrupciones',
      'Alta disponibilidad y recuperación ante desastres integrada',
      'Optimización de costos operativos (OPEX)'
    ]
  },
  'help-desk-y-service-desk': {
    title: 'Help Desk y Service Desk',
    icon: LifeBuoy,
    logos: ['prtg.png', 'teamviewer.png'],
    description: 'Servicios de soporte técnico especializado, mesa de ayuda y mantenimiento preventivo en el sureste de México.',
    content: `
      <p>La continuidad operativa de su empresa depende de un soporte técnico ágil y profesional. En Inside Business Mexico, ofrecemos servicios de Help Desk y Service Desk diseñados para resolver incidencias de forma rápida y eficiente, permitiendo que su equipo se enfoque en lo que realmente importa: su negocio en todo el sureste de México.</p>
      
      <h3>Mesa de Ayuda Basada en ITIL</h3>
      <p>Nuestros servicios de mesa de ayuda siguen las mejores prácticas de ITIL (Information Technology Infrastructure Library). Esto garantiza un proceso estandarizado para la recepción, categorización, priorización y resolución de tickets, asegurando que ningún problema quede sin atención y que se cumplan los niveles de servicio (SLAs) acordados.</p>
      
      <h3>Soporte Presencial y Remoto</h3>
      <p>Entendemos que algunas situaciones requieren manos en el sitio. Contamos con un equipo de ingenieros listos para desplazarse a sus oficinas en toda la región para resolver problemas de hardware o red. Para incidencias de software, nuestro soporte remoto seguro nos permite intervenir en segundos, minimizando los tiempos de inactividad.</p>
      
      <h3>Mantenimiento Preventivo Programado</h3>
      <p>La mejor forma de resolver un problema es evitando que suceda. Ofrecemos planes de mantenimiento preventivo para sus equipos de cómputo, servidores y dispositivos de red. Limpieza física, optimización de software, actualización de parches de seguridad y revisión de estados de salud de discos duros son parte de nuestra rutina para extender la vida útil de su inversión tecnológica.</p>
      
      <h3>Gestión de Activos de TI</h3>
      <p>Le ayudamos a mantener un inventario actualizado de todo su parque tecnológico. Saber qué tiene, quién lo usa y cuándo vence su garantía es fundamental para una planeación financiera inteligente y para asegurar que su empresa siempre cuente con las herramientas adecuadas.</p>
    `,
    features: [
      'Soporte técnico presencial en el sureste de México',
      'Asistencia remota inmediata 24/7',
      'Mantenimiento preventivo de hardware y software',
      'Administración de garantías con fabricantes',
      'Consultoría técnica para proyectos especiales'
    ]
  },
  'ingenieria-de-software': {
    title: 'Ingeniería de Software',
    icon: Code2,
    logos: ['mysql.png', 'java.png', 'php.png', 'css.png', 'js.png'],
    description: 'Desarrollo de aplicaciones a medida y soluciones de software empresarial.',
    content: `
      <p>La tecnología debe adaptarse a su negocio, no al revés. En Inside Business Mexico, creamos soluciones de software personalizadas que impulsan la innovación y la eficiencia operativa de las empresas en el sureste de México.</p>
      
      <h3>Desarrollo de Aplicaciones a la Medida</h3>
      <p>Nuestro equipo de desarrollo utiliza metodologías ágiles para crear aplicaciones web y móviles que resuelven retos específicos de su industria. Desde sistemas de gestión de inventarios hasta portales de clientes personalizados, construimos herramientas escalables, seguras y fáciles de usar que dan una ventaja competitiva real a su organización.</p>
      
      <h3>Integración de Sistemas</h3>
      <p>Conectamos sus sistemas existentes para crear un flujo de información unificado. Desarrollamos APIs y middleware que permiten la comunicación entre su ERP, CRM y otras plataformas, eliminando la duplicación de datos y los procesos manuales.</p>
      
      <h3>Modernización de Aplicaciones</h3>
      <p>Si su empresa cuenta con sistemas antiguos que frenan su crecimiento, le ayudamos a modernizarlos. Utilizamos arquitecturas modernas para transformar aplicaciones monolíticas en sistemas ágiles que pueden actualizarse y escalarse de forma independiente.</p>
    `,
    features: [
      'Desarrollo web y móvil personalizado',
      'Integración de sistemas y desarrollo de APIs',
      'Modernización de aplicaciones legadas',
      'Automatización de procesos de negocio',
      'Soporte especializado en el sureste de México'
    ]
  },
  'cloud': {
    title: 'Soluciones Cloud',
    icon: Cloud,
    logos: ['gigas.png', 'azure.png'],
    description: 'Migración y gestión de infraestructura en la nube (AWS, Azure, Google Cloud).',
    content: `
      <p>La nube ofrece agilidad, escalabilidad y eficiencia de costos. En Inside Business Mexico, le ayudamos a diseñar y ejecutar una estrategia de nube que se alinee con sus objetivos de negocio.</p>
      
      <h3>Estrategia y Migración a la Nube</h3>
      <p>Le acompañamos en su viaje hacia la nube (AWS, Microsoft Azure, Google Cloud). Analizamos sus cargas de trabajo actuales para determinar la mejor estrategia de migración: Rehosting, Replatforming o Refactoring. El objetivo es reducir sus costos de infraestructura física mientras aumenta la disponibilidad y la capacidad de recuperación ante desastres.</p>
      
      <h3>Soluciones de Nube Híbrida</h3>
      <p>Entendemos que no todo puede o debe estar en la nube pública. Diseñamos entornos de nube híbrida que combinan la seguridad y el control de sus servidores locales con la elasticidad y potencia de la nube pública, permitiendo un flujo de datos seguro y eficiente entre ambos mundos.</p>
      
      <h3>Gestión y Optimización</h3>
      <p>Una vez en la nube, nos aseguramos de que su entorno esté optimizado para el rendimiento y el costo. Implementamos políticas de gobernanza, monitoreamos el uso de recursos y aplicamos las mejores prácticas de seguridad en la nube.</p>
    `,
    features: [
      'Migración de servidores locales a la nube',
      'Implementación de Microsoft 365 y Google Workspace',
      'Consultoría en arquitectura de nube segura',
      'Gestión de entornos de nube híbrida',
      'Optimización de costos en la nube'
    ]
  },
  'retail': {
    title: 'Retail',
    icon: ShoppingBag,
    logos: ['dell.png', 'lenovo.png', 'hewlett.png', 'brother.png', 'ricoh.png', 'hp.png', 'epson.png'],
    description: 'Venta y distribución de equipos de cómputo, impresoras y periféricos de las mejores marcas para empresas en el sureste de México.',
    content: `
      <p>En Inside Business Mexico, entendemos que contar con las herramientas adecuadas es fundamental para la productividad diaria. Nuestro servicio de Retail se enfoca en proveer a las empresas de todo el sureste de México con hardware de última generación, garantizando calidad, garantía y el mejor costo-beneficio del mercado.</p>
      
      <h3>Equipos de Cómputo Empresarial</h3>
      <p>Distribuimos laptops, desktops y estaciones de trabajo (workstations) diseñadas para el uso rudo empresarial. Trabajamos con marcas líderes como Dell, HP y Lenovo, ofreciendo configuraciones que se adaptan desde tareas administrativas hasta diseño gráfico y procesamiento de datos pesado.</p>
      
      <h3>Impresión y Digitalización</h3>
      <p>Contamos con una amplia gama de impresoras láser, multifuncionales y escáneres de alta velocidad. Ya sea que su oficina requiera impresión a color de alta fidelidad o digitalización masiva de documentos, tenemos la solución perfecta con marcas como Epson, HP y Brother.</p>
      
      <h3>Periféricos y Accesorios</h3>
      <p>Complementamos su infraestructura con monitores de alta resolución, teclados ergonómicos, sistemas de respaldo de energía (UPS) y todo lo necesario para crear espacios de trabajo eficientes y cómodos para sus colaboradores.</p>
      
      <h3>Garantía y Soporte Local</h3>
      <p>A diferencia de las compras en línea genéricas, al adquirir su equipo con nosotros, cuenta con el respaldo de un equipo técnico local que le ayudará con la configuración inicial y la gestión de garantías directamente con el fabricante.</p>
    `,
    features: [
      'Venta de laptops y desktops empresariales',
      'Impresoras y multifuncionales de alto volumen',
      'Sistemas de protección eléctrica y UPS',
      'Accesorios y periféricos especializados',
      'Entrega y configuración en sitio en el sureste de México'
    ]
  },
  'financiamiento-y-credito-simple': {
    title: 'Financiamiento y Crédito Simple',
    icon: CreditCard,
    logos: ['hpfinancial.png', 'dellfinancial.png'],
    description: 'Soluciones financieras flexibles para la adquisición de tecnología sin descapitalizar su empresa.',
    content: `
      <p>La actualización tecnológica es vital, pero a menudo requiere una inversión inicial considerable. En Inside Business Mexico, facilitamos el acceso a la mejor tecnología a través de esquemas de financiamiento y crédito simple diseñados para empresas en el sureste mexicano que buscan mantener su flujo de caja saludable.</p>
      
      <h3>Crédito Simple para Tecnología</h3>
      <p>Adquiera la infraestructura que su empresa necesita hoy y páguela en plazos fijos. Este esquema le permite ser dueño del equipo desde el primer día, facilitando la planificación financiera y aprovechando los beneficios de la depreciación de activos.</p>
      
      <h3>Financiamiento a Medida</h3>
      <p>Trabajamos con diversas instituciones financieras para ofrecer planes de crédito que se ajusten a los ciclos de ingresos de su negocio. Ya sea para un proyecto de infraestructura de red o para la renovación total de su parque de cómputo, tenemos una opción financiera para usted.</p>
      
      <h3>Beneficios Fiscales y Operativos</h3>
      <p>El financiamiento de TI le permite mantener su capital de trabajo intacto para las operaciones clave de su negocio, mientras adquiere tecnología que mejora su productividad y competitividad en el mercado.</p>
      
      <h3>Proyectos Llave en Mano</h3>
      <p>Podemos incluir en el financiamiento no solo el hardware, sino también el software y los servicios de implementación, permitiéndole arrancar proyectos complejos con una inversión inicial mínima.</p>
    `,
    features: [
      'Crédito simple con tasas competitivas',
      'Plazos flexibles de 12 a 48 meses',
      'Aprobación ágil para empresas',
      'Financiamiento de proyectos integrales',
      'Asesoría financiera especializada en TI'
    ]
  },
  'xaas': {
    title: 'XAAS (Everything as a Service)',
    icon: Monitor,
    logos: ['hpfinancial.png', 'dellfinancial.png'],
    description: 'Todo como Servicio: hardware, software e infraestructura bajo un modelo de suscripción.',
    content: `
      <p>El modelo XAAS (Everything as a Service) está revolucionando la forma en que las empresas consumen tecnología. En lugar de comprar y mantener activos, usted paga una suscripción mensual por el uso de la tecnología, incluyendo hardware, software y servicios de soporte.</p>
      
      <h3>Device as a Service (DaaS)</h3>
      <p>Equipe a su personal con las últimas laptops y desktops sin la carga de la gestión del ciclo de vida. Nuestro servicio DaaS incluye la entrega, configuración, soporte continuo y retiro seguro del equipo al final de su vida útil, todo por una cuota mensual predecible.</p>
      
      <h3>Infrastructure as a Service (IaaS)</h3>
      <p>Consuma recursos de cómputo, almacenamiento y redes bajo demanda. Ya sea en la nube pública o mediante infraestructura dedicada en sus instalaciones (on-premise as a service), pague solo por lo que utiliza y escale rápidamente según las necesidades de su negocio.</p>
      
      <h3>Software as a Service (SaaS)</h3>
      <p>Acceda a las aplicaciones empresariales líderes (como Microsoft 365, Google Workspace, CRMs y ERPs) a través de la nube. Nos encargamos de la implementación, migración de datos y soporte a usuarios, asegurando que su equipo siempre tenga acceso a las últimas herramientas de productividad.</p>
      
      <h3>Beneficios del Modelo XAAS</h3>
      <p>Transforme sus gastos de capital (CAPEX) en gastos operativos (OPEX). Reduzca la carga de trabajo de su equipo de TI, mejore la agilidad empresarial y asegure que su tecnología siempre esté actualizada y segura.</p>
    `,
    features: [
      'Device as a Service (DaaS) para equipos de cómputo',
      'Infrastructure as a Service (IaaS) escalable',
      'Software as a Service (SaaS) y herramientas de productividad',
      'Soporte técnico y gestión del ciclo de vida incluidos',
      'Facturación mensual predecible y transparente'
    ]
  },
  'infraestructura-y-redes-empresariales': {
    title: 'Infraestructura y Redes Empresariales',
    icon: Network,
    logos: ['leviton.png', 'panduit.png', 'condunet.png'],
    description: 'Soluciones integrales de redes empresariales, cobre, fibra óptica y gestión de garantías.',
    content: `
      <p>La infraestructura física de red es la base sobre la cual se construye toda la estrategia tecnológica de una empresa. En Inside Business Mexico, ofrecemos soluciones avanzadas de infraestructura y redes empresariales que garantizan una conectividad ininterrumpida y de alta velocidad para organizaciones en el sureste de México.</p>
      
      <h3>Soluciones de Cobre y Fibra Óptica</h3>
      <p>Implementamos sistemas de cableado estructurado en cobre (Categorías 6, 6A y 7) y fibra óptica (Monomodo y Multimodo) utilizando componentes de la más alta calidad. Nuestras instalaciones están diseñadas para soportar las demandas de ancho de banda actuales y futuras, asegurando una transmisión de datos eficiente y confiable.</p>
      
      <h3>Tecnología Forty Gigabit (40G)</h3>
      <p>Para empresas con necesidades extremas de procesamiento de datos y centros de datos modernos, implementamos soluciones de red de 40 Gigabit. Esta tecnología permite manejar grandes volúmenes de información con latencias mínimas, ideal para entornos de virtualización densa y aplicaciones críticas de negocio.</p>
      
      <h3>Redes Empresariales de Alto Desempeño</h3>
      <p>Diseñamos arquitecturas de red inteligentes que optimizan el flujo de información. Desde la segmentación lógica mediante VLANs hasta la implementación de protocolos de redundancia, nos aseguramos de que su red empresarial sea resiliente, segura y fácil de administrar.</p>
      
      <h3>Gestión Integral de Garantías</h3>
      <p>Entendemos que su inversión debe estar protegida. Ofrecemos un servicio especializado de gestión de garantías con los principales fabricantes de infraestructura. Nos encargamos de todo el proceso técnico y administrativo para asegurar que sus componentes de red siempre cuenten con el respaldo oficial, minimizando cualquier riesgo operativo.</p>
    `,
    features: [
      'Redes empresariales de alto desempeño',
      'Soluciones de cobre y fibra óptica',
      'Tecnología Forty Gigabit (40G)',
      'Gestión integral de garantías con fabricantes',
      'Certificación de nodos de red bajo estándares TIA/EIA'
    ]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-primary/30">
      <Helmet>
        <title>{`${service.title} en el Sureste de México | Expertos en TI`}</title>
        <meta name="description" content={`${service.description} Ofrecemos soporte técnico, redes empresariales y soluciones tecnológicas en el sureste de México.`} />
      </Helmet>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-lg border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-brand-primary transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Volver al inicio</span>
          </Link>
          <div className="flex items-center gap-2">
            <img src="/Logo_ib-mexico.webp" alt="Inside Business Mexico - Expertos en TI en el sureste de México" className="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
            <span className="font-display font-bold text-lg tracking-tighter hidden sm:block">Inside Business Mexico</span>
          </div>
        </div>
      </header>

      <main className="pt-24 lg:pt-32 pb-16 lg:pb-24 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 lg:mb-8">
                <Icon size={28} className="lg:hidden" />
                <Icon size={32} className="hidden lg:block" />
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 tracking-tight leading-tight">{service.title}</h1>
              <p className="text-base lg:text-xl text-zinc-400 leading-relaxed mb-6 lg:mb-8 font-medium">
                {service.description}
              </p>
              
              <div 
                className="prose prose-sm lg:prose-base prose-invert prose-zinc max-w-none space-y-4 lg:space-y-6 text-zinc-400 leading-relaxed mb-10 lg:mb-12"
                dangerouslySetInnerHTML={{ __html: service.content }}
              />

              {service.logos && service.logos.length > 0 && (
                <div className="mt-12 lg:mt-16">
                  <h3 className="text-lg lg:text-xl font-bold mb-6 lg:mb-8 flex items-center gap-3">
                    <div className="w-6 lg:w-8 h-1 bg-brand-primary rounded-full" />
                    Tecnologías y Marcas
                  </h3>
                  <div className="glass-card p-6 lg:p-8 rounded-2xl lg:rounded-3xl border-white/5 overflow-hidden relative">
                    <div className="flex gap-12 items-center animate-marquee whitespace-nowrap py-4">
                      {[...service.logos, ...service.logos, ...service.logos].map((logo: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 min-w-[100px] justify-center">
                          <img 
                            src={`/partners/${logo}`} 
                            alt={`Tecnología ${logo.split('.')[0]} - Inside Business Mexico`} 
                            className="h-10 lg:h-12 w-auto object-contain"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              if (target.dataset.failed) return;
                              target.dataset.failed = "true";
                              target.style.display = 'none';
                              const span = document.createElement('span');
                              span.className = "font-display font-black text-lg lg:text-xl italic uppercase text-zinc-500/50";
                              span.innerText = logo.split('.')[0];
                              target.parentNode?.appendChild(span);
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 lg:p-8 rounded-2xl lg:rounded-3xl border-white/10 lg:sticky lg:top-32 hover:bg-white/[0.05] transition-colors duration-500"
            >
              <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6 flex items-center gap-2">
                <Zap className="text-brand-primary" size={20} />
                Características Clave
              </h3>
              <ul className="space-y-4 mb-8">
                {service.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="text-brand-primary shrink-0 mt-0.5" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="p-6 bg-brand-primary/10 rounded-2xl border border-brand-primary/20 mb-8">
                <h4 className="font-bold text-white mb-2">¿Necesitas una cotización?</h4>
                <p className="text-xs text-zinc-400 mb-4">Nuestro equipo de expertos en el sureste de México está listo para asesorarte.</p>
                <Link 
                  to="/#contacto" 
                  state={{ selectedService: service.title }}
                  className="btn-primary w-full py-3 text-sm"
                  onClick={() => {
                    setTimeout(() => {
                      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Contactar Ahora
                </Link>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Otros Servicios</h4>
                <div className="grid gap-2">
                  {Object.entries(servicesData)
                    .filter(([key]) => key !== slug)
                    .map(([key, data]) => (
                      <Link 
                        key={key} 
                        to={`/servicios/${key}`}
                        className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-brand-primary/30 hover:bg-white/10 transition-all text-sm flex items-center justify-between group"
                      >
                        <span className="text-zinc-300 group-hover:text-white transition-colors">{data.title}</span>
                        <ChevronRight size={14} className="text-zinc-500 group-hover:text-brand-primary transition-colors" />
                      </Link>
                    ))}
                </div>
              </div>
            </motion.div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-white/5 py-12 bg-brand-dark/50">
        <div className="max-w-7xl mx-auto px-6 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Inside Business Mexico. Atendemos a todo el sureste de México.</p>
        </div>
      </footer>
    </div>
  );
};

const ChevronRight = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

export default ServiceDetail;
