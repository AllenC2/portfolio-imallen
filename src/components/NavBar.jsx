import { useState, useEffect } from 'react';
import {AlienIcon} from '../assets/icons/AlienIcon'
import {WorldIcon} from '../assets/icons/WorldIcon'
import {SunIcon} from '../assets/icons/SunIcon'
import { MoonIcon } from '../assets/icons/MoonIcon';

export default function NavBar (){

    const toggleDarkMode = ()=>{
        document.documentElement.classList.toggle("dark");
    }
    
    const [mode, setMode] = useState('light');

    useEffect(() => {
        // Función para verificar y actualizar el modo
        const checkAndUpdateMode = () => {
          const htmlElement = document.querySelector('html');
    
          // Verifica si tiene la clase 'dark'
          if (htmlElement.classList.contains('dark')) {
            setMode('dark');
          } else {
            setMode('light');
          }
        };
    
        // Ejecuta la función al montar el componente
        checkAndUpdateMode();
    
        // Agrega un event listener para detectar cambios en las clases de la etiqueta <html>
        const observer = new MutationObserver(checkAndUpdateMode);
        observer.observe(document.querySelector('html'), { attributes: true, attributeFilter: ['class'] });
    
        // Limpia el observer cuando el componente se desmonta
        return () => observer.disconnect();
    }, []); 

    return(
        <div className=" w-full z-10">
            <div className="max-w-screen-xl px-4 mx-auto lg:pb-24 ">
                <div className="grid grid-cols-4 mx-auto mt-2 py-2 w-full">
                    <div className="flex items-center col-span-1">
                        <AlienIcon color={mode === 'dark' ? '#fcf8fc' : '#282727'} clases="drop-shadow-azulito" height="20" />
                    </div>
                    <div className="flex justify-end col-span-3">
                        <button className=" text-xs font-bold py-2 px-4 rounded flex items-center">
                        <WorldIcon color={mode === 'dark' ? '#fcf8fc' : '#282727'} clases="mr-1" height="16" />
                            | ESP
                        </button>
                        <button onClick={toggleDarkMode} className=" text-xs font-bold py-2 rounded flex items-center">
                            {mode === 'dark' ? <SunIcon color="#fcf8fc" clases="mr-1" height="20" /> : <MoonIcon color="#282727" clases="mr-1" height="20" />}
                            | {mode === 'dark' ? 'LM' : 'DM'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}