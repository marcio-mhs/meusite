import React, {Component} from 'react';

class Membro extends Component{
    

  render(){
    return (
      <div>
        {this.state.fedd.map((item)=>{
            return(
                <div key={item.id}>
                    <h3>{item.username}</h3>
                    <a>{item.curtidas} curtidas 
                    / {item.comentarios} comentarios</a>
                </div>
            );
        })}
      </div>
    );
  }
}

export default Membro;