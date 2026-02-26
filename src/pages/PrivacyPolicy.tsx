import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-primary/30">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-lg border-b border-white/10 py-4">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-brand-primary transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Volver al inicio</span>
          </Link>
          <div className="flex items-center gap-2">
            <img src="/Logo_ib-mexico.png" alt="Inside Business Mexico" className="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
            <span className="font-display font-bold text-lg tracking-tighter">Inside Business Mexico</span>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6">
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight">Aviso de Privacidad</h1>
          
          <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-400 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Quiénes somos</h2>
              <p>La dirección de nuestra web es: <a href="https://ib-mexico.com" className="text-brand-primary hover:underline">https://ib-mexico.com</a>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Qué datos personales recogemos y por qué los recogemos</h2>
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Comentarios</h3>
              <p>
                Cuando los visitantes dejan comentarios en la web, recopilamos los datos que se muestran en el formulario de comentarios, 
                así como la dirección IP del visitante y la cadena de agentes de usuario del navegador para ayudar a la detección de spam.
              </p>
              <p className="mt-4">
                Una cadena anónima creada a partir de tu dirección de correo electrónico (también llamada hash) puede ser proporcionada al servicio de Gravatar para ver si la estás usando. 
                La política de privacidad del servicio Gravatar está disponible aquí: <a href="https://automattic.com/privacy/" target="_blank" rel="noreferrer" className="text-brand-primary hover:underline">https://automattic.com/privacy/</a>. 
                Después de la aprobación de tu comentario, la imagen de tu perfil es visible para el público en el contexto de su comentario.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Medios</h2>
              <p>
                Si subes imágenes a la web deberías evitar subir imágenes con datos de ubicación (GPS EXIF) incluidos. 
                Los visitantes de la web pueden descargar y extraer cualquier dato de localización de las imágenes de la web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Formularios de contacto</h2>
              <p>
                Recopilamos la información que nos proporcionas a través de nuestros formularios de contacto para responder a tus consultas y brindarte información sobre nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
              <p>
                Si dejas un comentario en nuestro sitio puedes elegir guardar tu nombre, dirección de correo electrónico y web en cookies. 
                Esto es para tu comodidad, para que no tengas que volver a rellenar tus datos cuando dejes otro comentario. Estas cookies tendrán una duración de un año.
              </p>
              <p className="mt-4">
                Si tienes una cuenta y te conectas a este sitio, instalaremos una cookie temporal para determinar si tu navegador acepta cookies. 
                Esta cookie no contiene datos personales y se elimina al cerrar el navegador.
              </p>
              <p className="mt-4">
                Cuando inicias sesión, también instalaremos varias cookies para guardar tu información de inicio de sesión y tus opciones de visualización de pantalla. 
                Las cookies de inicio de sesión duran dos días, y las cookies de opciones de pantalla duran un año. Si seleccionas “Recordarme”, tu inicio de sesión perdurará durante dos semanas. 
                Si sales de tu cuenta, las cookies de inicio de sesión se eliminarán.
              </p>
              <p className="mt-4">
                Si editas o publicas un artículo se guardará una cookie adicional en tu navegador. Esta cookie no incluye datos personales y simplemente indica el ID del artículo que acabas de editar. Caduca después de 1 día.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contenido incrustado de otros sitios web</h2>
              <p>
                Los artículos de este sitio pueden incluir contenido incrustado (por ejemplo, vídeos, imágenes, artículos, etc.). 
                El contenido incrustado de otras web se comporta exactamente de la misma manera que si el visitante hubiera visitado la otra web.
              </p>
              <p className="mt-4">
                Estas web pueden recopilar datos sobre ti, utilizar cookies, incrustar un seguimiento adicional de terceros, y supervisar tu interacción con ese contenido incrustado, 
                incluido el seguimiento de tu interacción con el contenido incrustado si tienes una cuenta y estás conectado a esa web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Analítica</h2>
              <p>Utilizamos herramientas de análisis para comprender cómo los visitantes interactúan con nuestro sitio web y mejorar nuestra oferta de servicios.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Cuánto tiempo conservamos tus datos</h2>
              <p>
                Si dejas un comentario, el comentario y sus metadatos se conservan indefinidamente. 
                Esto es para que podamos reconocer y aprobar comentarios sucesivos automáticamente en lugar de mantenerlos en una cola de moderación.
              </p>
              <p className="mt-4">
                De los usuarios que se registran en nuestra web (si los hay), también almacenamos la información personal que proporcionan en su perfil de usuario. 
                Todos los usuarios pueden ver, editar o eliminar su información personal en cualquier momento (excepto que no pueden cambiar su nombre de usuario). 
                Los administradores de la web también pueden ver y editar esa información.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Qué derechos tienes sobre tus datos</h2>
              <p>
                Si tienes una cuenta o has dejado comentarios en esta web, puedes solicitar recibir un archivo de exportación de los datos personales que tenemos sobre ti, 
                incluyendo cualquier dato que nos hayas proporcionado. También puedes solicitar que eliminemos cualquier dato personal que tengamos sobre ti. 
                Esto no incluye ningún dato que estemos obligados a conservar con fines administrativos, legales o de seguridad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Dónde enviamos tus datos</h2>
              <p>Los comentarios de los visitantes puede que los revise un servicio de detección automática de spam.</p>
            </section>
          </div>
        </motion.article>
      </main>

      <footer className="border-t border-white/5 py-12 bg-brand-dark/50">
        <div className="max-w-4xl mx-auto px-6 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Inside Business Mexico. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
