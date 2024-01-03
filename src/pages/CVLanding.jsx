import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import MobileCardsSlider from "../components/MobileCardsSlider";
import { ContactCard } from "../components/ContactCard";
import {AccordionJobs} from '../components/AccordionJobs';
import cads_img from '../assets/imgs/site/cads.png';
import { AnimatedLink } from '../components/AnimatedLink';

export function CVLanding(){
    return(
        <>
        LANDING
        <MobileCardsSlider></MobileCardsSlider>
        <ContactCard></ContactCard>
        <div className='m-4'>
            <h1 className="text-3xl font-bold mt-8">Experiencia</h1>
            <p className='py-8'>Actualmente me encuentro disfrutando de la carrera de Ing. en Ciencias Computacionales con especialización en Inteligencia de Datos en la Universidad de Guadalajara.Por suerte  me encuentro disfrutando de la carrera de Ing. en Ciencias Computacionales.</p>
            <div className='grid grid-cols-2 gap-10'>
            <div></div>
            <div>
                <img width={50} src="https://picsum.photos/200/200" alt="" />
                <p className='font-bold py-4'>Asistente de Sistemas</p>
                <p>Actualmente me encuentro disfrutando de la carrera de Ing. en Ciencias.</p>
            </div>
            <div>
                <img width={50} src="https://picsum.photos/200/200" alt="" />
                <p className='font-bold py-4'>Asistente de Sistemas</p>
                <p>Actualmente me encuentro disfrutando de la carrera de Ing. en Ciencias.</p>
            </div>
            <div>
                <img width={50} src="https://picsum.photos/200/200" alt="" />
                <p className='font-bold py-4'>Asistente de Sistemas</p>
                <p>Actualmente me encuentro disfrutando de la carrera de Ing. en Ciencias.</p>
            </div>
            <div>
                <img width={50} src="https://picsum.photos/200/200" alt="" />
                <p className='font-bold py-4'>Asistente de Sistemas</p>
                <p>Actualmente me encuentro disfrutando de la carrera de Ing. en Ciencias.</p>
            </div>
            <div>
                <img width={50} src="https://picsum.photos/200/200" alt="" />
                <p className='font-bold py-4'>Asistente de Sistemas</p>
                <p>Actualmente me encuentro disfrutando de la carrera de Ing. en Ciencias.</p>
            </div>
            </div>
            <p className='py-4'>Ing. en Ciencias Computacionales con especialización en Inteligencia de Datos en la Universidad de Guadalajara.</p>
            <AccordionJobs></AccordionJobs>
            <div className='relative'>
            <div className='absolute inset-x-0 top-4 px-4'>
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
            <p className='py-4'>Ing. en Ciencias Computacionales con especialización en Inteligencia de Datos en la Universidad de Guadalajara.</p>
        </div>
        </>
    )
}