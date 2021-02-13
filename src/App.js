import React from 'react';

const Equipe = (props) => {
    return(
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
            <Social fb={props.facebook}/>
        </div>
    )
}   

const Sobre = (props) => {
  return(
      <div>
          <h2>Olá sou o(a) {props.nome}</h2>
          <h3>Cargo: {props.cargo}</h3>
          <h3>Idade: {props.idade}</h3>
          <hr/>
      </div>
  )
}

const Social = (props) => {
  return (
    <div>
      <a href={props.fb}>Facebook</a>
      <a>Linkedin</a>
      <a>Youtube</a>
    </div>
  )
}

function App() {
  return (
    <div>
        <h1>Conheça nossa equipe</h1> 
        <Equipe nome="Marcio" cargo="programador" idade="38" facebook="https://www.facebook.com/marciomhs/"/>
        <Equipe nome="Mario" cargo="programador" idade="36" facebook="https://www.facebook.com/mario.h.souza.1"/>
    </div>
  );
}

export default App;