import React, { Component } from 'react';
import { render } from 'react-dom';
import { Card, CardWrapper } from 'react-swipeable-cards';
import './App.css';
//import Objeto from './Objeto.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      objetos: [
        {
          'descripccion': 'Abrigo MANGO',
          'tipo': 'Ropa',
          'talla': 'S',
          'p-minimo': 80000,
          'p-maximo': 100000,
          'foto': null
        },
        {
          'descripccion': 'Vestido color palo de rosa.Una sola postura. Tela: Piel de durazno. (Personas de 1,60m de estatura, contextura delgada)',
          'tipo': 'Ropa',
          'talla': 'S',
          'p-minimo': 50000,
          'p-maximo': 60000,
          'foto': null
        }
      ]
    };
  }

  componentDidMount() {
    fetch('/getData')
      .then((res) => {
        return res.json();
      })
      .then((json) => this.setState({ objetos: json }))
      .catch((err) => console.log(err));

  }

  renderObjetos() {
    return this.state.objetos.map((obj) =>
      //<Objeto objeto = {obj} />
      <div key={obj.descripccion}>{obj.tipo} - {obj.descripccion}</div>
    );
  }
  render() {
    const wrapperStyle = {
      backgroundColor: "#024773"
    }
    
    const cardStyle = {
      backgroundColor: "#059FFF"
    }
    return (
      <div className='App'>
        <h1>Swipe&Swap</h1>
        <CardWrapper>
          <Card>
            <h2>Abrigo MNG</h2>
            <img src="https://bit.ly/2xfiqV7"></img>
            <p>
              <ul>
                <li>Hermoso abrigo, muy comodo y suave casi no lo utilizo.</li>
                <li>Talla: S</li>
                <li>Tipo: Ropa</li>
              </ul>
              
              
              

            </p>
            
            
            

          
         
          </Card>
          <Card>
            <h2>ola</h2>
          </Card>
          <Card>
            <h2>k ase</h2>
          </Card>
        </CardWrapper>
       

        {this.renderObjetos()}
      </div>
    );
  }
}

export default App;

