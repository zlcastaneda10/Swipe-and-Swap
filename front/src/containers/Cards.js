import React, { Component } from 'react';
import { Card, CardWrapper } from 'react-swipeable-cards';
import '../Cards.css';
import { Button} from 'reactstrap';
//import Objeto from './Objeto.js';

// Create custom end card
class MyEndCard extends Component {
  render() {
    return(
      <div>
        <h1 className="merienda titulo_carta end">We don't have anything else to show you</h1>
        <span className="emoji">😥</span>
        <br></br>
        <Button outline color="danger" onClick={()=>{ window.location.assign('/AddObjects');}}
          className="nav_btn">Add an object</Button>
      </div>
    );
  }
}

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

  getEndCard() {
    return(
      <MyEndCard/>
    );
  }

  componentDidMount() {
    fetch('/getData')
      .then((res) => {
        return res.json();
      })
      .then((json) => this.setState({ objetos: json }))
      .catch((err) => console.log(err));

  }

  onSwipe(obj) {
    console.log('I was swiped.');
  }

  onSwipeLeft(obj) {
    console.log('I was swiped left.');
  }

  onSwipeRight(obj) {
    alert('Its a Match!!');
    console.log('I was swiped right.');
  }

  onDoubleTap(obj) {
    console.log('I was double tapped.');
  }


  renderObjetos() {
    return this.state.objetos.map((obj) =>
      //<Objeto objeto = {obj} />
      <Card key={obj.descripccion} onSwipe={this.onSwipe.bind(this)}
        onSwipeLeft={this.onSwipeLeft.bind(this)}
        onSwipeRight={this.onSwipeRight.bind(this)}
        onDoubleTap={this.onDoubleTap.bind(this)}>
        <h1 className="merienda titulo_carta">{obj.titulo}</h1>
        <img src={obj.foto}></img>
        
        <ul>
          <li> {obj.descripccion}</li>
          <li>Talla: {obj.talla}</li>
          <li>Tipo: {obj.tipo}</li>
          
        </ul>
        
       
      </Card>

    );
  }
  render() {
    
    return (
      <div className='App'>
        <h1>Swipe&Swap</h1>
        <CardWrapper  addEndCard={this.getEndCard.bind(this)}>{this.renderObjetos()}</CardWrapper>       
      </div>
    );
  }
}

export default Cards;

