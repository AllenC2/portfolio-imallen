export function SoftSkillsBlock() {
    return(
        <div className="m-4">
        <h1 className="text-3xl font-bold mt-8">Soft Skills</h1>
        <p className='py-8'>Justamente dentro del ambiente escolar pude forjar mi actidud ante el trabajo en equipo, donde obtuve algunas habilidades interpesonales y sociales como:</p>
        <div className="grid grid-cols-3">
            <div className="text-center py-8">
                <i className="bg-red-500">O</i>
                <p>Ser proactivo en la búsqueda de nuevas ideas.</p>
            </div>
            <div className="text-center py-8">
                <i className="bg-red-500">O</i>
                <p>Usar el sentido común para encontrar soluciones.</p>
            </div>
            <div className="text-center py-8">
                <i className="bg-red-500">O</i>
                <p>Fomentar el compañerismo para motivar el avance.</p>
            </div>
        </div>
        </div>
    )
}