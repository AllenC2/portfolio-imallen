import { Accordion } from "./Accordion";
import { useState } from "react";

export  function AccordionJobs(){
    const [openAccordion, setOpenAccordion] = useState(null);
    const handleClick = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
      };
    return(
        <>
            <Accordion
            title="Diseñador Web"
            lugar="Freelance Autónomo - Guadalajara, Jal."
            periodo="Noviembre 2020 al Presente" 
            icon1="figma" 
            icon2="react" 
            icon3=""
            isOpen={openAccordion === 0}
            onClick={() => handleClick(0)}>
            <ul className="list-disc list-outside px-4"> 
                <li className="my-6">Me especializo en desarrollar páginas web responsivas y atractivas para sectores variados, trabajando el diseño gráfico junto a la fotografía para producir contenidos visuales que resalten la identidad de las marca.</li>
                <li className="mb-6">Utilizo tecnologías de desarrollo web front y back end, como Typescript, React, Laravel, Tailwind, SQL entre otras.</li>
                <li className="mb-6">Trabajo directamente con mis clientes para comprender a fondo las necesidades y la visión que tienen al respecto, gestionando cada proyecto desde su conceptualización y diseño hasta la implementación y el soporte posterior al lanzamiento.</li>
                <li className="mb-6">Estoy continuamente adoptando nuevas tendencias en diseño web y optimización SEO para mejorar el diseño y rendimiento de los sitios web que desarrollo.</li>
            </ul>
            </Accordion>

            <Accordion
            title="Asistente de Sistemas" 
            lugar="Tequila Enterprises - Guadalajara, Jal." 
            periodo="Septiembre 2018 a Octubre 2020" 
            icon1="wp" 
            icon2="php" 
            icon3=""
            isOpen={openAccordion === 1}
            onClick={() => handleClick(1)}>
            <ul className="list-disc list-outside px-4">
                <li className="my-6">Diseñé sitios web responsivos y amigables para la gestión de inventarios y control en las fases de producción y envasado.</li>
                <li className="mb-6">Colaboré estrechamente con el equipo de trabajo para implementar diseños atractivos y funcionales, optimizando la experiencia del usuario.</li>
                <li className="mb-6">Implementé pruebas exhaustivas de compatibilidad en diferentes navegadores y dispositivos.</li>
                <li className="mb-6">Realicé el mantenimiento recurrente y actualicé sitios web existentes, asegurando la consistencia y la seguridad.</li>
            </ul>
            </Accordion>

            <Accordion 
            title="Gerente de Cuentas" 
            lugar="Pragmática - Guadalajara, Jal." 
            periodo="Enero 2017 a Octubre 2018" 
            icon1="adwords" 
            icon2="meta" 
            icon3="illustrator"
            isOpen={openAccordion === 2}
            onClick={() => handleClick(2)}>
            <ul className="list-disc list-outside px-4">
                <li className="my-6">Actué como el enlace entre la agencia y varios clientes con los que trabajé estrechamente para entender sus objetivos, desafíos y necesidades comerciales.</li>
                <li className="mb-6">Colaboré con el equipo interno de diseño y desarrollo de estrategias digitales personalizadas que se alinearan con los objetivos del proyecto.</li>
                <li className="mb-6">Realicé un seguimiento y analicé el rendimiento de las campañas, y generé informes periódicos para los clientes.</li>
            </ul>
            </Accordion>
        </>
    )
}