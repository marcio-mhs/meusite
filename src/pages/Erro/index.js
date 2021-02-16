import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Sobre from '../Sobre';

class Erro extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
      return (
        <div>
          <h2>Página não encontrada!</h2>
          <h3>Você está produrando por </h3>
          <Link to="/">Ir para Home</Link>
          <Sobre to="/sobre">Ir para Home</Sobre>
        </div>
      );
    }
  }
  
  export default Erro;