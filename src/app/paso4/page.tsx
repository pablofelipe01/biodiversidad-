import Image from "next/image";

export default function Paso4() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center">
        <h1 className="text-4xl font-bold text-green-600">Cuarto Paso: Estudio de Biodiversidad y Registro como Reserva Natural de la Sociedad Civil 🌿</h1>
        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Detalles del Proceso 📋</h2>
          <ul className="list-disc ml-8 mt-4">
            <li><strong>Fecha:</strong> Posterior al 15 de noviembre.</li>
            <li>
              <strong>Acciones:</strong>
              <ul className="list-disc ml-8 mt-4">
                <li>
                  Contratación de Biólogos Especializados:
                  <ul className="list-disc ml-8 mt-2">
                    <li>Profesionales propuestos: Mariana Herrera, Mateo Villegas y Nicolás Salcedo.</li>
                    <li>Realización de un informe exhaustivo sobre la biodiversidad presente en las 900 hectáreas del proyecto.</li>
                  </ul>
                </li>
                <li>
                  Elaboración del Estudio de Biodiversidad:
                  <ul className="list-disc ml-8 mt-2">
                    <li>Inventario de Especies: Documentación de flora y fauna, incluyendo especies endémicas y en peligro de extinción.</li>
                    <li>Análisis de Ecosistemas: Identificación de ecosistemas clave y su estado de conservación.</li>
                    <li>Evaluación de Impacto Ambiental: Análisis de amenazas y propuestas de mitigación.</li>
                  </ul>
                </li>
                {/* Continue in Part 2 */}
                <li>
                  Preparación y Presentación de Documentación Legal:
                  <ul className="list-disc ml-8 mt-2">
                    <li>Recolección de Documentos Requeridos: Títulos de propiedad, mapas, planes de manejo, entre otros.</li>
                    <li>Elaboración del Plan de Manejo Ambiental: Directrices para la conservación y uso sostenible del área.</li>
                    <li>Presentación ante Parques Nacionales Naturales de Colombia (PNNC): Solicitud formal de registro como Reserva Natural de la Sociedad Civil.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Detalles del Estudio de Biodiversidad 🔬</h2>
          <p className="mt-4">
            El estudio de biodiversidad es fundamental para justificar la importancia ecológica del área y obtener el estatus legal que proteja la zona a largo plazo. A continuación, se detallan los componentes clave:
          </p>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">1. Importancia del Estudio</h3>
          <ul className="list-disc ml-8 mt-2">
            <li><strong>Justificación Científica:</strong> Provee evidencia sobre el valor ecológico del área, fundamental para su protección legal.</li>
            <li><strong>Herramienta de Gestión:</strong> Identifica las necesidades de conservación y orienta las acciones de manejo.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">2. Componentes del Estudio</h3>
          <div className="ml-8 mt-2">
            <strong>Inventario Biológico:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Flora: Catalogación de especies vegetales, identificación de especies endémicas y/o amenazadas.</li>
              <li>Fauna: Registro de mamíferos, aves, reptiles, anfibios e insectos, con énfasis en especies de interés especial.</li>
            </ul>
            {/* Continue in Part 3 */}
            <strong>Análisis de Hábitats y Ecosistemas:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Caracterización de los diferentes tipos de ecosistemas presentes (bosques húmedos tropicales, páramos, etc.).</li>
              <li>Evaluación de la conectividad ecológica y corredores biológicos.</li>
            </ul>
            <strong>Evaluación de Amenazas:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Identificación de factores de riesgo como deforestación, contaminación, especies invasoras.</li>
            </ul>
            <strong>Propuestas de Conservación:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Estrategias para la preservación y restauración de ecosistemas.</li>
              <li>Planes de monitoreo y seguimiento de biodiversidad.</li>
            </ul>
          </div>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">3. Profesionales Involucrados</h3>
          <ul className="list-disc ml-8 mt-2">
            <li><strong>Mariana Herrera:</strong> Especialista en botánica y conservación de flora.</li>
            <li><strong>Mateo Villegas:</strong> Zoólogo con experiencia en fauna silvestre y manejo de vida silvestre.</li>
            <li><strong>Nicolás Salcedo:</strong> Ecólogo experto en ecosistemas tropicales y planificación ambiental.</li>
          </ul>
        </section>
        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Registro como Reserva Natural de la Sociedad Civil 📜</h2>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">1. Fundamento Legal</h3>
          <div className="ml-8 mt-2">
            <strong>Ley 99 de 1993:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Artículo 109: Promueve la creación de Reservas Naturales de la Sociedad Civil como parte del Sistema Nacional de Áreas Protegidas.</li>
              <li>Artículo 110: Establece incentivos para los propietarios que declaren sus predios como reservas naturales.</li>
            </ul>
            <strong>Decreto 1996 de 1999:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Reglamenta los artículos 109 y 110 de la Ley 99 de 1993.</li>
              <li>Define los procedimientos y requisitos para el registro de Reservas Naturales de la Sociedad Civil.</li>
            </ul>
            {/* Continue in Part 4 */}
            <strong>Decreto 1076 de 2015:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Compila y actualiza la normativa ambiental, incluyendo lo referente a Reservas Naturales de la Sociedad Civil.</li>
            </ul>
          </div>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">2. Proceso de Registro</h3>
          <div className="ml-8 mt-2">
            <strong>Manifestación de Voluntad del Propietario:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Declaración formal del propietario o propietarios de destinar el área como reserva natural.</li>
            </ul>
            <strong>Presentación de Documentación:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Solicitud Formal: Diligenciamiento del formato oficial de solicitud de registro.</li>
              <li>Documentos de Propiedad: Certificados de libertad y tradición que acrediten la titularidad del predio.</li>
              <li>Mapa del Predio: Planos y georreferenciación del área a registrar.</li>
              <li>Plan de Manejo Ambiental: Documento que describe las acciones de conservación y uso sostenible del área.</li>
            </ul>
            <strong>Evaluación por parte de PNNC:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Revisión de la documentación y verificación del cumplimiento de requisitos.</li>
              <li>Visita de campo para corroborar la información presentada.</li>
            </ul>
            <strong>Registro y Certificación:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Una vez aprobada, el área es registrada oficialmente como Reserva Natural de la Sociedad Civil.</li>
              <li>Se emite una certificación que acredita el estatus legal de la reserva.</li>
            </ul>
          </div>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">3. Beneficios del Registro</h3>
          <ul className="list-disc ml-8 mt-2">
            <li><strong>Protección Legal:</strong> El área queda amparada por las normativas ambientales, dificultando actividades que la perjudiquen.</li>
            <li><strong>Incentivos Económicos:</strong> Posibilidad de acceder a exenciones tributarias y otros beneficios.</li>
            <li><strong>Reconocimiento y Apoyo:</strong> Mayor visibilidad y respaldo por parte de entidades ambientales y organizaciones internacionales.</li>
          </ul>
        </section>
        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Cómo Este Paso Garantiza la Viabilidad Legal y Sustentabilidad del Proyecto ⚖️</h2>
          <ul className="list-disc ml-8 mt-4">
            <li>
              <strong>Cumplimiento Normativo:</strong>
              <ul className="list-disc ml-8 mt-2">
                <li>Al seguir los procedimientos establecidos en la legislación colombiana, el proyecto se alinea con las políticas nacionales de conservación.</li>
                <li>Evita posibles sanciones o impedimentos legales que puedan surgir por falta de regulación.</li>
              </ul>
            </li>
            {/* Continue in Part 5 */}
            <li>
              <strong>Fundamentación Científica y Legal:</strong>
              <ul className="list-disc ml-8 mt-2">
                <li>El estudio de biodiversidad proporciona la base científica necesaria para justificar la importancia de conservar el área.</li>
                <li>La documentación legal respalda la voluntad del propietario y formaliza el compromiso con la conservación.</li>
              </ul>
            </li>
            <li>
              <strong>Protección a Largo Plazo:</strong>
              <ul className="list-disc ml-8 mt-2">
                <li>El registro como Reserva Natural de la Sociedad Civil garantiza que el área esté protegida más allá de los cambios políticos o administrativos.</li>
                <li>Establece un marco para la continuidad del proyecto y la preservación de los ecosistemas.</li>
              </ul>
            </li>
            <li>
              <strong>Credibilidad y Confianza:</strong>
              <ul className="list-disc ml-8 mt-2">
                <li>Al cumplir con los requisitos legales y contar con estudios científicos, el proyecto gana legitimidad ante inversionistas, socios y la comunidad.</li>
                <li>Facilita la colaboración con entidades gubernamentales y organizaciones no gubernamentales.</li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Impacto en el Proyecto 🌟</h2>
          <ul className="list-disc ml-8 mt-4">
            <li>
              <strong>Aumento del Valor Ecológico y Social:</strong>
              <ul className="list-disc ml-8 mt-2">
                <li>La protección legal y el reconocimiento de la reserva incrementan su importancia a nivel nacional e internacional.</li>
                <li>Contribuye a la conservación de especies y ecosistemas clave, aportando al bienestar ambiental y social.</li>
              </ul>
            </li>
            <li>
              <strong>Atracción de Inversiones y Fondos:</strong>
              <ul className="list-disc ml-8 mt-2">
                <li>Proyectos con respaldo legal y científico son más atractivos para inversionistas y donantes.</li>
                <li>Posibilidad de acceder a fondos destinados a la conservación y desarrollo sostenible.</li>
              </ul>
            </li>
            <li>
              <strong>Sinergias y Alianzas Estratégicas:</strong>
              <ul className="list-disc ml-8 mt-2">
                <li>Facilita la creación de alianzas con instituciones académicas, organizaciones ambientales y comunidades locales.</li>
                <li>Promueve la participación en programas y redes de conservación.</li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Conclusión 📝</h2>
          <p className="mt-4">
            La unificación del estudio de biodiversidad y el registro legal en un solo paso estratégico fortalece la viabilidad y sostenibilidad del proyecto. Al fundamentar científicamente la importancia ecológica del área y cumplir con las normativas legales, se garantiza la protección a largo plazo de las 900 hectáreas en la Sierra Nevada de Santa Marta. Este enfoque integral no solo cumple con los objetivos de conservación, sino que también mejora la posición del proyecto para atraer apoyo y colaboración, asegurando su éxito y legado para las generaciones futuras.
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
         