import Image from "next/image";

export default function Comercial() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center">
        <h1 className="text-4xl font-bold text-green-600">Sexto Paso: Comercialización de los Bonos de Biodiversidad 🌿💼</h1>
        
        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Acciones Principales 📋</h2>
          <ul className="list-disc ml-8 mt-4">
            <li><strong>Identificación de Empresas y Organizaciones Interesadas:</strong> Establecer una lista de potenciales clientes B2B.</li>
            <li><strong>Presentaciones y Negociaciones Corporativas:</strong> Organizar reuniones para exponer beneficios y oportunidades.</li>
            <li><strong>Lanzamiento de Campañas Publicitarias a Gran Escala:</strong> Implementar estrategias de marketing digital y tradicional.</li>
            <li><strong>Expansión a Mercados Internacionales:</strong> Explorar oportunidades en mercados globales.</li>
          </ul>
        </section>

        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Estrategias de Comercialización 🚀</h2>
          
          <h3 className="text-2xl font-semibold text-green-500 mt-4">1. Análisis del Mercado de Bonos de Biodiversidad</h3>
          <ul className="list-disc ml-8 mt-2">
            <li><strong>Crecimiento del Mercado:</strong> Emisiones por más de $1 billón de dólares en bonos verdes y sostenibles en 2021.</li>
            <li><strong>Demanda Creciente:</strong> Interés en activos con rendimientos financieros e impacto ambiental positivo.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-green-500 mt-4">2. Identificación de Clientes B2B</h3>
          <ul className="list-disc ml-8 mt-2">
            <li>Empresas comprometidas con la sostenibilidad</li>
            <li>Organizaciones ambientales y ONGs</li>
            <li>Fondos de inversión sostenibles</li>
          </ul>

          <h3 className="text-2xl font-semibold text-green-500 mt-4">3. Presentaciones y Negociaciones Corporativas</h3>
          <ul className="list-disc ml-8 mt-2">
            <li>Elaboración de materiales de venta</li>
            <li>Reuniones personalizadas</li>
            <li>Participación en eventos y conferencias</li>
          </ul>

          <h3 className="text-2xl font-semibold text-green-500 mt-4">4. Campañas Publicitarias y Marketing</h3>
          <ul className="list-disc ml-8 mt-2">
            <li>Marketing digital</li>
            <li>Relaciones públicas</li>
            <li>Alianzas estratégicas</li>
          </ul>

          <h3 className="text-2xl font-semibold text-green-500 mt-4">5. Expansión a Mercados Internacionales</h3>
          <ul className="list-disc ml-8 mt-2">
            <li>Análisis de mercados objetivo</li>
            <li>Cumplimiento de estándares internacionales</li>
            <li>Adaptación cultural y legal</li>
          </ul>
        </section>

        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Contexto y Potencial en América Latina 🌎</h2>
          <ul className="list-disc ml-8 mt-4">
            <li><strong>Crecimiento Regional:</strong> Alta biodiversidad y desafíos significativos en conservación.</li>
            <li><strong>Iniciativas y Tendencias:</strong> Promoción de inversión en proyectos sostenibles.</li>
            <li><strong>Oportunidades de Negocio:</strong> Potencial para expandir el modelo a otras áreas y ecosistemas.</li>
          </ul>
        </section>

        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Datos Relevantes del Mercado 📊</h2>
          <ul className="list-disc ml-8 mt-4">
            <li><strong>Tamaño del Mercado de Bonos Verdes:</strong> $290,000 millones de dólares en emisiones globales en 2020.</li>
            <li><strong>Interés de Inversionistas:</strong> 85% de inversionistas individuales interesados en inversiones sostenibles.</li>
            <li><strong>Potencial Económico:</strong> Oportunidades por $10.1 billones de dólares hasta 2030 en modelos sostenibles.</li>
          </ul>
        </section>

        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Contribución al Éxito del Proyecto 🏆</h2>
          <ul className="list-disc ml-8 mt-4">
            <li><strong>Financiamiento Sostenible:</strong> Asegura fondos para la conservación de la reserva.</li>
            <li><strong>Escalabilidad y Replicabilidad:</strong> Posibilidad de replicar el modelo en otros proyectos.</li>
            <li><strong>Impacto Social y Ambiental:</strong> Involucra a empresas y ciudadanos en la conservación.</li>
          </ul>
        </section>

        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Conclusión 📝</h2>
          <p className="mt-4">
            La comercialización integral de los Bonos de Biodiversidad es crucial para el éxito financiero y ambiental del proyecto. Aprovechando las tendencias globales y regionales, e implementando estrategias de marketing efectivas, el proyecto no solo cumplirá sus objetivos de conservación, sino que también se posicionará como un innovador en el mercado de inversiones sostenibles, abriendo nuevas oportunidades de negocio y ampliando su impacto positivo en América Latina y el mundo.
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