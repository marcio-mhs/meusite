import React, {Component} from 'react';

class Equipe extends Component {
  render () {
    return (
      <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
    );
  }
}

class Sobre extends Component{
  render(){
    return (
      <div>
        <h2>Olá {this.props.nome}</h2>
        <h3>Cargo {this.props.cargo}</h3>
        <h3>idade {this.props.idade}</h3>
        <hr/>
      </div>
    );    
  }
}

function App() {
  return (
    <div>
        <h1>Conheça nossa equipe</h1> 
        <Equipe nome="Marcio" cargo="Programador" idade="38" />
    </div>
  );
}

export default App;