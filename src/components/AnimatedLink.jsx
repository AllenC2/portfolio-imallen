import { useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";

export function AnimatedLink(props){
    const navigate = useNavigate();

    const handleNavigation = () => {
        // Maneja la ruta para volver a la página anterior si es requerida
        const navigateAction = () => {
            if (props.to === 'back') {
                navigate(-1);
            } else {
                navigate(props.to);
            }
        };

        // Si startViewTransition está disponible, se hace la transición
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                flushSync(navigateAction);
            });
        } else {
            flushSync(navigateAction);
        }
    };

    return (
        <a href={props.to} onClick={(ev) => {
            ev.preventDefault();
            handleNavigation();
        }}>
            {props.children}
        </a>
    );
}