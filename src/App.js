import React, {Component} from 'react';
import Feed from './components/Feed';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        feed: [
            {id: 1, username: 'Marcio', curtidas: 10, comentarios: 2},
            {id: 2, username: 'Cremilda', curtidas: 20, comentarios: 12},
            {id: 2, username: 'Mario', curtidas: 15, comentarios: 9},
            {id: 2, username: 'Elves', curtidas: 1, comentarios: 0},
        ]
    };
  }

  render(){
    return (
      <div>
        {this.state.feed.map((item) => {
          return(
            <Feed id={item.id} username={item.username} 
              curtidas={item.curtidas} comentarios={item.comentarios} />
          );
        })}        
      </div>
    );
  }
}

export default App;