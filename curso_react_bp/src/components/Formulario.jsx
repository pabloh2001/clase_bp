import React from "react";

const Formulario = () => {
    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [lista, setLista] = React.useState([])

    const guardar= (e) => {
        e.preventDefault()

        if(!fruta.trim()){
            return alert('campo fruta vacio')
        }

        if(!descripcion.trim()){
            return alert('campo descripcion vacio')
        }

        setLista([... lista,{nombreFruta: fruta, nombreDescripcion: descripcion}
        ])
    }

    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={guardar}>
                <input type="text" placeholder="Ingrese fruta" onChange={(e) => setFruta(e.target.value)}/>
                <input type="text" placeholder="Ingrese description" onChange={(e) => setDescripcion(e.target.value)}/>
                <button type="submit">enviar</button>
            </form>
            <ul>
                {
                    lista.map((item, index) => (
                        <li key={index}>
                            <h4>{item.nombreFruta} - {item.nombreDescripcion}</h4>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Formulario