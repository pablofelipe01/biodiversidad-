import Image from "next/image";

export default function Paso5() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center">
        <h1 className="text-4xl font-bold text-green-600">Quinto Paso: Garantía Tecnológica y Política de Uso 🛡️</h1>
        
        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Compromiso de Garantía 📋</h2>
          <p className="mt-4">
            Nos comprometemos a garantizar el funcionamiento óptimo y continuo de toda la infraestructura tecnológica implementada para el proyecto Bonos de Biodiversidad de la Sierra Nevada de Santa Marta. Esto incluye todas las plataformas, contratos inteligentes, interfaces de usuario y sistemas de seguridad desarrollados y desplegados.
          </p>
        </section>

        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Garantía de Funcionamiento Tecnológico ⚙️</h2>
          <ul className="list-disc ml-8 mt-4">
            <li><strong>Calidad y Eficiencia:</strong> Uso de tecnologías de vanguardia y mejores prácticas de la industria.</li>
            <li><strong>Soporte Técnico:</strong> Asistencia especializada para cualquier inconveniente o duda.</li>
            <li><strong>Actualizaciones y Mantenimiento:</strong> Mejoras continuas y mantenimiento preventivo.</li>
          </ul>
        </section>

        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Garantía de Uso y Devolución de Inversión 💰</h2>
          <ul className="list-disc ml-8 mt-4">
            <li>
              <strong>Devolución del 50% de la Inversión Tecnológica:</strong>
              <ul className="list-disc ml-8 mt-2">
                <li>Si la plataforma no ha sido utilizada después de un año de operaciones.</li>
              </ul>
            </li>
            <li>
              <strong>Devolución del 90% de la Inversión Tecnológica:</strong>
              <ul className="list-disc ml-8 mt-2">
                <li>En caso de fallas comprobables que no puedan ser resueltas en un plazo razonable.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Condiciones Generales 📜</h2>
          <ul className="list-disc ml-8 mt-4">
            <li><strong>Alcance:</strong> Aplicable a los costos de desarrollo y despliegue tecnológico ($6,431 USD).</li>
            <li><strong>Exclusiones:</strong> No aplica a factores externos como cambios de mercado, falta de gestión, o eventos de fuerza mayor.</li>
            <li><strong>Colaboración Necesaria:</strong> Requiere cumplimiento de responsabilidades por parte de usuarios y administradores.</li>
          </ul>
        </section>

        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Procedimiento de Reclamación 📝</h2>
          <ul className="list-disc ml-8 mt-4">
            <li><strong>Notificación:</strong> Por escrito, detallando razones y evidencias.</li>
            <li><strong>Evaluación Conjunta:</strong> Análisis técnico de las causas.</li>
            <li><strong>Resolución:</strong> Devolución según las condiciones establecidas.</li>
          </ul>
        </section>

        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Limitaciones y Exenciones de Responsabilidad ⚖️</h2>
          <ul className="list-disc ml-8 mt-4">
            <li><strong>Responsabilidad Limitada:</strong> Solo aspectos tecnológicos, no resultados financieros o de mercado.</li>
            <li><strong>No Responsabilidad por Decisiones del Usuario:</strong> Exclusión de decisiones comerciales o administrativas de los propietarios.</li>
            <li><strong>Validez de la Garantía:</strong> Sujeta al cumplimiento de obligaciones contractuales por parte del cliente.</li>
          </ul>
        </section>

        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Conclusión 🌟</h2>
          <p className="mt-4">
            Esta garantía refleja nuestro compromiso con la calidad y confiabilidad de nuestras soluciones tecnológicas, así como con el éxito y satisfacción de los involucrados en el proyecto. Nuestro objetivo es proporcionar una plataforma robusta y eficiente que contribuya al logro de los objetivos de conservación y sostenibilidad establecidos.
          </p>
          <p className="mt-4 italic">
            Nota: Este compromiso de garantía es una parte integral del acuerdo de colaboración y está sujeto a los términos y condiciones detallados en los contratos y documentos legales asociados al proyecto.
          </p>
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