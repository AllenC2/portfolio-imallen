import { InstagramIcon } from '../assets/icons/InstagramIcon'
import { BehanceIcon } from '../assets/icons/BehanceIcon'
import { TwitterXIcon } from '../assets/icons/TwitterXIcon'  
import { useEffect, useState } from 'react'

export function ContactCard(){

    const [mode, setMode] = useState('dark');

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
    <div className="px-6">
        <h1 className="text-4xl font-bold text-center">
          Hi, I'm Allen
        </h1>
        <h2 className="text-center">Web Designer and Developer who enjoys building  smart solutions from brilliant ideas.</h2>
        <div className='flex justify-center space-x-8 p-6'>
          <TwitterXIcon height="20" color={mode === 'dark' ? '#fcf8fc' : '#282727'}></TwitterXIcon>
          <InstagramIcon height="20" color={mode === 'dark' ? '#fcf8fc' : '#282727'}></InstagramIcon>
          <BehanceIcon height="20" color={mode === 'dark' ? '#fcf8fc' : '#282727'}></BehanceIcon>
        </div>
    </div>
    )
}