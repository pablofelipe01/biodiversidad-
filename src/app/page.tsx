import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center">
        <h1 className="text-4xl font-bold text-green-600">Proyecto de Bonos de Biodiversidad en la Sierra Nevada de Santa Marta 🌱🌳</h1>
        <Image src="/image1.png" alt="Sierra Nevada" width={600} height={400} className="rounded-lg" />
        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Resumen Ejecutivo 📝</h2>
          <p className="mt-4">
            El proyecto Bonos de Biodiversidad de la Sierra Nevada de Santa Marta busca preservar 900 hectáreas de ecosistemas naturales a través de la emisión de 10,000 NFTs con suscripción anual de $100 USD cada uno. La iniciativa pretende contrarrestar el desarrollo desproporcionado de infraestructura turística en la zona, declarando el área como Reserva Natural de la Sociedad Civil y promoviendo su conservación a largo plazo mediante herramientas tecnológicas y financieras innovadoras.
          </p>
        </section>
        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Introducción 📚</h2>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">Contexto y Justificación 🌍</h3>
          <ul className="list-disc ml-8 mt-4">
            <li><strong>Importancia Ecológica:</strong> La Sierra Nevada de Santa Marta es una de las regiones con mayor biodiversidad en Colombia, hogar de numerosas especies endémicas y ecosistemas vitales.</li>
            <li><strong>Amenazas Actuales:</strong> El crecimiento desmedido de la infraestructura turística está poniendo en riesgo la integridad ecológica de la zona.</li>
            <li><strong>Necesidad de Conservación:</strong> Es imprescindible implementar medidas que garanticen la preservación de estos ecosistemas para las generaciones futuras.</li>
          </ul>
        </section>
        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Objetivos del Proyecto 🎯</h2>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">Objetivo General 🏆</h3>
          <p className="ml-8 mt-4">
            Conservar 900 hectáreas de ecosistemas naturales en la Sierra Nevada de Santa Marta mediante la creación de una Reserva Natural de la Sociedad Civil.
          </p>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">Objetivos Específicos 🎯</h3>
          <ul className="list-disc ml-8 mt-4">
            <li>Emitir 10,000 Bonos de Biodiversidad (NFTs) con una suscripción anual de $100 USD.</li>
            <li>Establecer una DAO para la administración transparente y descentralizada del proyecto.</li>
            <li>Desarrollar y desplegar contratos inteligentes que faciliten la emisión y gestión de los bonos.</li>
            <li>Crear una plataforma en línea para la comercialización y gestión de las suscripciones.</li>
          </ul>
        </section>
        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Componentes del Proyecto 🧭</h2>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">1. Organización Autónoma Descentralizada (DAO) 🏛️</h3>
          <ul className="list-disc ml-8 mt-4">
            <li>Creación y despliegue de una DAO que gestione la emisión y administración de los bonos.</li>
            <li>Mecanismos de gobernanza que permitan la participación de los suscriptores en decisiones clave.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">2. Desarrollo de Smart Contracts 💻</h3>
          <ul className="list-disc ml-8 mt-4">
            <li>Emisión de Tokens: Contratos inteligentes que representen cada bono NFT.</li>
            <li>Gestión de Suscripciones: Automatización de renovaciones y pagos anuales.</li>
            <li>Integración con Unlock Protocol: Facilitar el acceso y manejo de los bonos.</li>
            <li>Gobernanza de la DAO: Reglamentación y ejecución de decisiones colectivas.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">3. Frontend para Comercialización 🌐</h3>
          <ul className="list-disc ml-8 mt-4">
            <li>Interfaz de Usuario Intuitiva: Plataforma web para la compra y gestión de bonos.</li>
            <li>Experiencia de Usuario Óptima: Facilidad de navegación y seguridad en transacciones.</li>
            <li>Soporte Multilingüe: Accesibilidad para inversionistas internacionales.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">4. Costos Tecnológicos 💰</h3>
          <ul className="list-disc ml-8 mt-4">
            <li>Full Dev Rig: Infraestructura tecnológica necesaria ($2,790 USD).</li>
            <li>Desarrollo y Despliegue de Smart Contracts: Programación y certificación ($3,641 USD).</li>
            <li><strong>Total:</strong> $6,431 USD.</li>
          </ul>
        </section>
        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Modelo de Negocio 💼</h2>
          <ul className="list-disc ml-8 mt-4">
            <li>Emisión Anual: 10,000 tokens x $100 USD = $1,000,000 USD anuales.</li>
            <li>Comisión del Desarrollador: 5% sobre la comercialización = $50,000 USD anuales.</li>
            <li>Sostenibilidad Financiera: Fondos destinados a la conservación y mantenimiento de la reserva.</li>
          </ul>
        </section>
        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Ventajas de la Propuesta 🌟</h2>
          <ul className="list-disc ml-8 mt-4">
            <li><strong>Innovación Financiera:</strong> Primer bono de biodiversidad tokenizado en la red Polygon.</li>
            <li><strong>Accesibilidad:</strong> Participación de pequeños inversionistas a nivel global.</li>
            <li><strong>Transparencia:</strong> Uso de blockchain para seguimiento y trazabilidad de los bonos.</li>
            <li><strong>Eficiencia:</strong> Reducción de costos y agilización de procesos en comparación con emisiones tradicionales.</li>
          </ul>
        </section>
        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="/paso1"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            🔗 Paso 1
          </a>
          <a
            href="/paso2"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            🔗 Paso 2
          </a>
          <a
            href="/paso3"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            🔗 Paso 3
          </a>
          <a
            href="/paso4"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            🔗 Paso 4
          </a>
          <a
            href="/comercial"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            🔗 Comercial
          </a>
          <a
            href="/paso5"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            🔗 Garantía
          </a>
        </div>
        
      </main>
      
    </div>
  );
}
