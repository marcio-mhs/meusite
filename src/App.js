import React from 'react';

const Bemvindo = (props) => {
    return(
        <div>
            <h2>Bem vindo {props.nome}</h2>
            <h3>Tenho {props.idade} anos.</h3>
        </div>
    )
}

function App() {
  return (
    <div>
        Olá Mundo!
        <Bemvindo nome="Marcio" idade="38"/>
        <Bemvindo nome="Cremilda" idade="49"/>
        <h1>Curso React</h1> 
    </div>
  );
}

export default App;