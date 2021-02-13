import React, {Component} from 'react';

class Membro extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: false
        };
        this.sair = this.sair.bind(this);
        this.entrar = this.entrar.bind(this);
    }

    entrar(){
        this.setState({status: true});
    }

    sair(){
        this.setState({status: false});
    }

  render(){
    return (
      <div>
        {this.state.status ?
            <div>
                <h2>Bem vindo ao Sistema</h2>
                <button onClick={this.sair}>Sair</button>
            </div> :
            <div>
                Faça o login
                <button onClick={this.entrar}>Entrar no Sistema</button>
            </div>
        }
        
      </div>
    );
  }
}

export default Membro;