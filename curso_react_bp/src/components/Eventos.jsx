import React from "react";

const Eventos = () => {
    const [texto, setTexto] = React.useState('Texto inicial')
    const eventoClick = () => {
        console.log('me diste click')
        setTexto('Cambié el texo')
    }
    
    return (
        <>
            <button onClick={eventoClick}>Dame click</button>
        </>
    )
}

export default Eventos