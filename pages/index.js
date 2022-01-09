import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Contador />
        </div>)
}

function Contador() {
    const [Contador, setcontador] = useState(1)

    function adicionarcontador() {
        setcontador(Contador + 1)
    }

    function zerarcont(){
        setcontador (Contador == 0)
            Contador = 0
        

    }

    return (
        <div>
            <div>{Contador}</div>
            <button onClick={adicionarcontador}>Adicionar</button>
            <button onClick={zerarcont}>Zerar</button>
        </div>

        
    )
}

export default Home