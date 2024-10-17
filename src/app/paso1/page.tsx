import Image from "next/image";

export default function Paso1() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center">
        <h1 className="text-4xl font-bold text-green-600">Primer Paso: Montaje del Full Dev Rig 💻</h1>
        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Detalles del Montaje 🛠️</h2>
          <ul className="list-disc ml-8 mt-4">
            <li><strong>Fecha:</strong> Semana del 14 al 19 de octubre.</li>
            <li>
              <strong>Acciones:</strong>
              <ul className="list-disc ml-8 mt-4">
                <li>
                  Adquisición y Configuración de Infraestructura Tecnológica:
                  <ul className="list-disc ml-8 mt-2">
                    <li>Implementación de un entorno de desarrollo robusto y escalable utilizando tecnologías de vanguardia.</li>
                  </ul>
                </li>
                <li>
                  Implementación de Ecosistemas para Emisión y Gestión de Bonos:
                  <ul className="list-disc ml-8 mt-2">
                    <li>Configuración de plataformas y herramientas necesarias para la emisión, mantenimiento y administración de los bonos de biodiversidad.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="text-2xl font-semibold text-green-500 mt-4">
  <strong>Costo:</strong>{' '}
  <a 
    href="https://buy.stripe.com/5kA28zePrcfbcwMcNu" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <strong>$2,790 USD.</strong>
  </a>
</li>
          </ul>
        </section>
        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Detalles de la Infraestructura Tecnológica 🏗️</h2>
          <p className="mt-4">
            La infraestructura tecnológica es el corazón del proyecto y está diseñada para garantizar el funcionamiento óptimo, la seguridad y una gestión eficiente de todos los componentes del sistema. A continuación, se detallan las tecnologías utilizadas y cómo contribuyen al éxito del proyecto:
          </p>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">1. Next.js 🚀</h3>
          <div className="ml-8 mt-2">
            <strong>Descripción:</strong> Framework de React que permite el renderizado del lado del servidor y la generación de sitios web estáticos.
            <br />
            <strong>Beneficios:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Mejora el rendimiento y la velocidad de carga de la aplicación.</li>
              <li>Facilita el SEO, lo que aumenta la visibilidad en motores de búsqueda.</li>
              <li>Permite una experiencia de usuario fluida y responsiva.</li>
            </ul>
          </div>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">2. Thirdweb 🔗</h3>
          <div className="ml-8 mt-2">
            <strong>Descripción:</strong> Plataforma que simplifica la creación, implementación y gestión de contratos inteligentes y tokens NFT.
            <br />
            <strong>Beneficios:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Acelera el desarrollo de contratos inteligentes seguros y auditables.</li>
              <li>Facilita la interacción con la blockchain de Polygon.</li>
              <li>Proporciona herramientas para gestionar activos digitales de manera eficiente.</li>
            </ul>
          </div>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">3. Polygon (Matic Network) ⛓️</h3>
          <div className="ml-8 mt-2">
            <strong>Descripción:</strong> Red blockchain de segunda capa que ofrece transacciones rápidas y de bajo costo.
            <br />
            <strong>Beneficios:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Reduce significativamente los costos de gas en comparación con Ethereum.</li>
              <li>Escalabilidad para manejar un gran volumen de transacciones.</li>
              <li>Seguridad y descentralización garantizadas por su conexión con Ethereum.</li>
            </ul>
          </div>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">4. Vercel 🚢</h3>
          <div className="ml-8 mt-2">
            <strong>Descripción:</strong> Plataforma de despliegue y alojamiento optimizada para aplicaciones Next.js.
            <br />
            <strong>Beneficios:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Despliegue continuo e integración con herramientas de desarrollo.</li>
              <li>Infraestructura global que garantiza tiempos de respuesta rápidos en todo el mundo.</li>
              <li>Soporte para funciones sin servidor (serverless), mejorando la escalabilidad.</li>
            </ul>
          </div>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">5. TypeScript 📝</h3>
          <div className="ml-8 mt-2">
            <strong>Descripción:</strong> Superset de JavaScript que añade tipado estático al lenguaje.
            <br />
            <strong>Beneficios:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Detecta errores en tiempo de compilación, aumentando la fiabilidad del código.</li>
              <li>Mejora la mantenibilidad y escalabilidad del proyecto.</li>
              <li>Facilita la colaboración entre desarrolladores al ser más descriptivo.</li>
            </ul>
          </div>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">6. MySQL 🗄️</h3>
          <div className="ml-8 mt-2">
            <strong>Descripción:</strong> Sistema de gestión de bases de datos relacionales.
            <br />
            <strong>Beneficios:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Almacena de forma segura y estructurada la información crítica del proyecto.</li>
              <li>Soporta transacciones y consultas complejas.</li>
              <li>Amplia comunidad y soporte, asegurando estabilidad y continuidad.</li>
            </ul>
          </div>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">7. n8n 🔄</h3>
          <div className="ml-8 mt-2">
            <strong>Descripción:</strong> Herramienta de automatización de flujos de trabajo de código abierto.
            <br />
            <strong>Beneficios:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Automatiza procesos internos, reduciendo la carga operativa.</li>
              <li>Integra diferentes servicios y APIs sin necesidad de codificación extensa.</li>
              <li>Mejora la eficiencia y reduce errores humanos en tareas repetitivas.</li>
            </ul>
          </div>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">8. Airtable 📊</h3>
          <div className="ml-8 mt-2">
            <strong>Descripción:</strong> Plataforma que combina una base de datos con la facilidad de uso de una hoja de cálculo.
            <br />
            <strong>Beneficios:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Gestiona y comparte información de forma colaborativa.</li>
              <li>Personalizable para adaptarse a diferentes necesidades del proyecto.</li>
              <li>Integración con n8n para automatización avanzada.</li>
            </ul>
          </div>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">9. Tailwind CSS 🎨</h3>
          <div className="ml-8 mt-2">
            <strong>Descripción:</strong> Framework CSS de utilidad que permite un diseño altamente personalizado.
            <br />
            <strong>Beneficios:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Acelera el desarrollo de interfaces atractivas y responsivas.</li>
              <li>Elimina la necesidad de escribir CSS personalizado extenso.</li>
              <li>Garantiza consistencia en el diseño a lo largo de toda la aplicación.</li>
            </ul>
          </div>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">10. Unlock Protocol 🔑</h3>
          <div className="ml-8 mt-2">
            <strong>Descripción:</strong> Protocolo descentralizado para la creación de sistemas de membresía y acceso.
            <br />
            <strong>Beneficios:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Gestiona suscripciones y accesos mediante contratos inteligentes.</li>
              <li>Facilita la implementación de modelos de negocio basados en membresías.</li>
              <li>Proporciona transparencia y seguridad en la gestión de suscripciones.</li>
            </ul>
          </div>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">11. Proton VPN 🔒</h3>
          <div className="ml-8 mt-2">
            <strong>Descripción:</strong> Servicio de red privada virtual (VPN) de alta seguridad.
            <br />
            <strong>Beneficios:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Protege las conexiones durante el desarrollo y mantenimiento, evitando interceptaciones.</li>
              <li>Asegura el acceso a recursos de forma segura desde cualquier ubicación.</li>
              <li>Garantiza la privacidad y confidencialidad de la información sensible.</li>
            </ul>
          </div>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">12. Stripe 💳</h3>
          <div className="ml-8 mt-2">
            <strong>Descripción:</strong> Plataforma de pagos en línea que soporta transacciones globales.
            <br />
            <strong>Beneficios:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Procesa pagos con tarjetas de crédito y otros métodos de forma segura.</li>
              <li>Cumple con los estándares de seguridad PCI DSS.</li>
              <li>Ofrece herramientas para manejar suscripciones y facturación recurrente.</li>
            </ul>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
        >
          <Image
            aria-hidden
            src="/icons/back-arrow.svg"
            alt="Back arrow icon"
            width={16}
            height={16}
          />
          Regresar al Inicio
        </a>
      </footer>
    </div>
  );
}