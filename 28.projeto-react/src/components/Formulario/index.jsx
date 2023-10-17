import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    const alteraNome = (evento) => {
        setNome (estadoAnterior => {            
            return evento.target.value;
        })
    }

    useEffect(() => {
        console.log('O estado mudou.');

        return () => {
            console.log("o componente finalizou.")
        }

    }, [nome])

    useEffect(() => {
        console.log('A materiaA mudou para:' + materiaA)
    }, [materiaA, materiaB, materiaC])

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if(media >= 7) {
            return (
                <p>Olá, {nome}. Você foi aprovado.</p>
            )
        } else {
            return (
                <p>Olá, {nome}. Você não foi aprovado.</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5,6].map(item => {
                    <li key={item}>{item}</li>
                })}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(Number(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(Number(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(Number(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario