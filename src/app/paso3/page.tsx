import Image from "next/image";

export default function Paso3() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center">
        <h1 className="text-4xl font-bold text-green-600">Tercer Paso: Formalización de la DAO 🏛️</h1>
        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Detalles de la Formalización 📋</h2>
          <ul className="list-disc ml-8 mt-4">
            <li><strong>Fecha:</strong> Semana del 11 al 15 de noviembre.</li>
            <li>
              <strong>Acciones:</strong>
              <ul className="list-disc ml-8 mt-4">
                <li>
                  Desarrollo de la DAO y Mecanismos de Gobernanza:
                  <ul className="list-disc ml-8 mt-2">
                    <li>Utilización de la tecnología Aragon DAO para crear la organización autónoma descentralizada.</li>
                    <li>Emisión de 100 tokens de votación para distribuir entre los socios.</li>
                    <li>Establecimiento de las reglas y estatutos que regirán el funcionamiento de la DAO.</li>
                  </ul>
                </li>
                <li>
                  Implementación de Billeteras Digitales para Socios:
                  <ul className="list-disc ml-8 mt-2">
                    <li>Apertura de billeteras EVM compatibles utilizando Phantom Wallet para cada socio.</li>
                    <li>Asistencia en la configuración y seguridad de las billeteras.</li>
                  </ul>
                </li>
                <li>
                  Despliegue del Contrato Principal:
                  <ul className="list-disc ml-8 mt-2">
                    <li>Implementación del contrato inteligente que gobernará la DAO.</li>
                    <li>Integración con los NFTs de biodiversidad y recursos de inversión de los socios.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="text-2xl font-semibold text-green-500 mt-4">
  <strong>Costo:</strong>{' '}
  <a 
    href="https://buy.stripe.com/28odRh5eR3IF68o6p8" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <strong>$2,169 USD.</strong>
  </a>
</li>
          </ul>
        </section>
        {/* Continue in Part 2 */}
        <section className="text-left">
          <h2 className="text-3xl font-semibold text-blue-500">Detalles de la Formalización de la DAO 🏗️</h2>
          <p className="mt-4">
            La formalización de la DAO (Organización Autónoma Descentralizada) es esencial para establecer una estructura de gobernanza participativa y transparente que involucre a todos los socios en la toma de decisiones del proyecto. A continuación, se detallan los componentes y tecnologías involucradas en este paso:
          </p>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">1. Uso de Aragon DAO para la Creación de la Organización 🏛️</h3>
          <div className="ml-8 mt-2">
            <strong>Descripción:</strong> Plataforma de código abierto que permite la creación y gestión de organizaciones descentralizadas en la blockchain de Ethereum y otras redes compatibles con EVM.
            <br />
            <strong>Beneficios:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Personalización: Permite diseñar estructuras de gobernanza a medida, adaptadas a las necesidades específicas del proyecto.</li>
              <li>Seguridad: Ofrece contratos inteligentes auditados y seguros.</li>
              <li>Transparencia: Todas las acciones y decisiones se registran en la blockchain, siendo accesibles para todos los miembros.</li>
            </ul>
            <strong>Implementación:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Configuración Inicial: Creación de la DAO en la plataforma Aragon, estableciendo los parámetros básicos.</li>
              <li>Modularidad: Añadir módulos específicos para funcionalidades como votaciones, finanzas y roles de miembros.</li>
              <li>Interfaz de Usuario: Proporcionar a los socios una interfaz amigable para interactuar con la DAO.</li>
            </ul>
          </div>
          <h3 className="text-2xl font-semibold text-green-500 mt-4">2. Emisión de 100 Tokens de Votación 🗳️</h3>
          <div className="ml-8 mt-2">
            <strong>Objetivo:</strong> Distribuir tokens de gobernanza que otorguen derechos de voto a los socios, permitiéndoles participar en la toma de decisiones.
            <br />
            <strong>Características:</strong>
            <ul className="list-disc ml-8 mt-2">
              <li>Cantidad: Se emitirán 100 tokens de votación.</li>
              <li>Distribución: Los tokens se asignarán a los socios según criterios establecidos (por ejemplo, nivel de inversión, aportes al proyecto).</li>
              <li>Funcionalidad: Cada token representa un voto en las decisiones propuestas dentro de la DAO.</li>
              <li>Transferibilidad: Definir si los tokens pueden ser transferidos o son intransferibles para mantener la integridad de la gobernanza.</li>
            </ul>
          </div>
          {/* Continue in Part 3 */}
          <h3 className="text-2xl font-semibold text-green-500 mt-4">3. Establecimiento de Reglas y Estatutos de la DAO 📜</h3>
        <div className="ml-8 mt-2">
          <strong>Reglas de Gobernanza:</strong>
          <ul className="list-disc ml-8 mt-2">
            <li>Procesos de Votación: Definir cómo se proponen, discuten y votan las iniciativas.</li>
            <li>Quórum y Mayorías: Establecer el porcentaje mínimo de participación y la mayoría necesaria para aprobar decisiones.</li>
            <li>Roles y Permisos: Asignación de funciones específicas (administradores, moderadores, tesoreros) y sus responsabilidades.</li>
          </ul>
          <strong>Estatutos Legales:</strong>
          <ul className="list-disc ml-8 mt-2">
            <li>Misión y Visión: Documentar los objetivos a corto y largo plazo del proyecto.</li>
            <li>Políticas Internas: Normas sobre conflictos de interés, confidencialidad y comportamiento ético.</li>
            <li>Manejo de Activos: Protocolos para la gestión de fondos y activos digitales, incluyendo los NFTs de biodiversidad.</li>
          </ul>
        </div>
        <h3 className="text-2xl font-semibold text-green-500 mt-4">4. Administración de Recursos de NFTs de Biodiversidad y/o Inversión de Socios 🌿💰</h3>
        <div className="ml-8 mt-2">
          <strong>Gestión Colectiva de NFTs:</strong>
          <ul className="list-disc ml-8 mt-2">
            <li>Los NFTs representan activos de biodiversidad que deben ser administrados en beneficio del proyecto.</li>
            <li>Decisiones sobre acuñación, distribución y posibles usos de los NFTs serán tomadas a través de la DAO.</li>
          </ul>
          <strong>Inversiones de Socios:</strong>
          <ul className="list-disc ml-8 mt-2">
            <li>Transparencia en cómo se utilizan los fondos aportados por los socios.</li>
            <li>Posibilidad de proponer y votar sobre nuevas inversiones o proyectos relacionados.</li>
          </ul>
        </div>
        <h3 className="text-2xl font-semibold text-green-500 mt-4">5. Apertura de Billeteras EVM Compatibles para los Socios (Phantom Wallet) 👛</h3>
        <div className="ml-8 mt-2">
          <strong>Descripción:</strong> Billetera digital inicialmente desarrollada para Solana, pero que también ofrece compatibilidad con redes EVM mediante extensiones o integraciones específicas.
          <br />
          <strong>Beneficios:</strong>
          <ul className="list-disc ml-8 mt-2">
            <li>Seguridad: Almacenamiento seguro de claves privadas y activos digitales.</li>
            <li>Usabilidad: Interfaz intuitiva que facilita la gestión de activos y la interacción con contratos inteligentes.</li>
          </ul>
          <strong>Implementación:</strong>
          <ul className="list-disc ml-8 mt-2">
            <li>Creación de Billeteras: Guiar a los socios en la instalación y configuración de Phantom Wallet para redes EVM.</li>
            <li>Seguridad: Instrucciones sobre buenas prácticas para proteger sus billeteras (copias de seguridad, gestión de frases semillas).</li>
            <li>Integración con la DAO: Configuración para que las billeteras puedan interactuar con la DAO y los contratos inteligentes asociados.</li>
          </ul>
        </div>
        {/* Continue in Part 4 */}
        
        <h3 className="text-2xl font-semibold text-green-500 mt-4">6. Despliegue del Contrato Principal 📄</h3>
        <div className="ml-8 mt-2">
          <strong>Contrato Inteligente de la DAO:</strong>
          <ul className="list-disc ml-8 mt-2">
            <li>Desarrollo o personalización de un contrato inteligente que establezca las reglas y funcionalidades de la DAO.</li>
            <li>Verificación y Auditoría: Asegurar que el contrato es seguro y funciona según lo previsto antes de su implementación.</li>
          </ul>
          <strong>Integración con Otros Contratos:</strong>
          <ul className="list-disc ml-8 mt-2">
            <li>Conexión con los contratos de los NFTs y otros activos digitales.</li>
            <li>Establecer interoperabilidad entre diferentes componentes del ecosistema del proyecto.</li>
          </ul>
        </div>
      </section>
      <section className="text-left">
        <h2 className="text-3xl font-semibold text-blue-500">Cómo este Paso Garantiza el Funcionamiento, Seguridad y Gestión ⚙️</h2>
        <ul className="list-disc ml-8 mt-4">
          <li><strong>Funcionamiento Óptimo:</strong> Participación activa y eficiencia en la toma de decisiones.</li>
          <li><strong>Seguridad:</strong> Contratos inteligentes auditados y protección de activos digitales.</li>
          <li><strong>Gestión Eficiente:</strong> Transparencia total y automatización de procesos.</li>
          <li><strong>Cumplimiento Legal y Normativo:</strong> Documentación formal y responsabilidad compartida.</li>
        </ul>
      </section>
      <section className="text-left">
        <h2 className="text-3xl font-semibold text-blue-500">Impacto en el Proyecto 🌟</h2>
        <ul className="list-disc ml-8 mt-4">
          <li><strong>Fortalecimiento de la Comunidad:</strong> Mayor compromiso y cohesión del grupo.</li>
          <li><strong>Sostenibilidad a Largo Plazo:</strong> Adaptabilidad a cambios y desafíos futuros.</li>
          <li><strong>Atracción de Nuevos Miembros e Inversionistas:</strong> Transparencia y descentralización como atractivos.</li>
        </ul>
      </section>
      <section className="text-left">
        <h2 className="text-3xl font-semibold text-blue-500">Conclusión 📝</h2>
        <p className="mt-4">
          La formalización de la DAO es un paso clave para consolidar la estructura organizativa y asegurar el éxito a largo plazo del proyecto. Al utilizar Aragon DAO y facilitar herramientas como Phantom Wallet, se establece un sistema de gobernanza descentralizado, transparente y seguro. Esto no solo empodera a los socios actuales, sino que también posiciona al proyecto como una iniciativa innovadora en el uso de tecnología blockchain para la conservación ambiental.
        </p>
      </section>
        
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
      </main>
      
    </div>
    
  );
}
