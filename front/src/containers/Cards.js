import React, { Component } from 'react';
import { Card, CardWrapper } from 'react-swipeable-cards';
import '../Cards.css';
//import Objeto from './Objeto.js';


class Cards extends Component {
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
      <Card key={obj.descripccion}>
        <h1>{obj.titulo}</h1>
        <img src={obj.foto}></img>
        
        <ul>
          <li> {obj.descripccion}</li>
          <li>Talla: {obj.talla}</li>
          <li>Tipo: {obj.tipo}</li>
          <li></li>
        </ul>
        
       
      </Card>
      
    );
  }
  render() {
    const wrapperStyle = {
      backgroundColor: '#024773'
    };
    
    const cardStyle = {
      backgroundColor: '#059FFF'
    };
    return (
      <div className='App'>
        <h1>Swipe&Swap</h1>
        <CardWrapper>{this.renderObjetos()}</CardWrapper>       
      </div>
    );
  }
}

export default Cards;

