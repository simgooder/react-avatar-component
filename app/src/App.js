import React, { Component } from 'react';
import './App.css';
import AvatarSelector from './AvatarSelector.component';

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            avatars: [
                { "src": "img/avatar1.png", "label": "Avatar 1", "id": 1 },
                { "src": "img/avatar2.png", "label": "Avatar 2", "id": 2 },
                { "src": "img/avatar3.png", "label": "Avatar 3", "id": 3 },
                { "src": "img/avatar4.png", "label": "Avatar 4", "id": 4 },
                { "src": "img/avatar5.png", "label": "Avatar 5", "id": 5 },
                { "src": "img/avatar6.png", "label": "Avatar 6", "id": 6 }
            ]
        }
    }


    render() {
    

    return (
      
        <div className="container">

            <AvatarSelector avatars={this.state.avatars}></AvatarSelector>

        </div>

    );
  }
}

export default App;
