import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import cads_img from '../assets/imgs/site/cads.png';

export function ScholarshipBlock(){
    return(
        <>
            <div className='relative'>
                <div className='absolute inset-x-0 top-4 px-4 m-4'>
                    <h1 className=' text-3xl font-bold'>Scholarship</h1>
                </div>
                <img width={900} src={cads_img} alt="" />
            </div>
            <Splide
            options={{
            type: 'loop',
            perPage:3,
            arrows: false,
            pagination: false,
            padding: 0,
            drag: 'free'}}>
                <SplideSlide>
                    <img className='max-h-24' src="https://picsum.photos/300/200" alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img className='max-h-24' src="https://picsum.photos/300/200" alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img className='max-h-24' src="https://picsum.photos/300/200" alt="" />
                </SplideSlide>
            </Splide>
            <div className='m-4'>            
                <p className='py-4'>Mi formación escolar no solo ha reforzado mis habilidades técnicas, sino que también ha otorgado una sólida base teórica y práctica, y ha desarrollado mi capacidad para liderar proyectos, comprender las necesidades del usuario y crear soluciones digitales que aportan valor real:</p>
                <div className='grid grid-cols-2 gap-10'>
                    <div></div>
                    <div>
                        <img width={50} src="https://picsum.photos/200/200" alt="" />
                        <p className='font-bold py-4'>Ingeniería en Ciencias Computacionales</p>
                        <p>Inteligencia de Datos: Universidad de Guadalajara Cutonalá.</p>
                    </div>
                    <div>
                        <img width={50} src="https://picsum.photos/200/200" alt="" />
                        <p className='font-bold py-4'>Bachillerato General por Competencias</p>
                        <p>Liderazgo y política en la sociedad mexicana: UdeG Preparatoria No. 2</p>
                    </div>
                    <div>
                        <img width={50} src="https://picsum.photos/200/200" alt="" />
                        <p className='font-bold py-4'>Secundaria</p>
                        <p>Colegio Independencia Salesianas A.C.</p>
                    </div>
                    <div>
                        <img className='rounded-lg' width={50} src="https://picsum.photos/200/200" alt="" />
                        <p className='font-bold py-4'>Primaria</p>
                        <p>Colegio Alfred Binet de Guadalajara</p>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}