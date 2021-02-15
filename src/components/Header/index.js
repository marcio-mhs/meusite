import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
      return (
        <div>
          <header>
              Meu projeto Header<br/>
              <Link to="/sobre">Sobre</Link>
              <hr/>
              
          </header>
        </div>
      );
    }
  }
  
  export default Header;