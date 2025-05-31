import { useEffect } from "react";

export function Home(){
    // Disparar um código quando o componente for carregado
    useEffect(() => {
        console.log("Componente Home carregado");
    }, []);

    return <div>Página home</div>;
}