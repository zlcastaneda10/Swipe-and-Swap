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
// I think to look it more organize separate each class with a different file. and its export which i think is giving trouble
class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      objetos: [
       
      ],
      actual: -1
    };
  }

  getEndCard() {
    return(
      <MyEndCard/>
    );
  }

    //fetch shouldnt it be api/getData? if not then it hink it will make it better putting it
  componentDidMount() {
    fetch('/getData')
      .then((res) => {
        return res.json();
      })
      .then((json) => this.setState({ objetos: json }))
      .catch((err) => console.log(err));

  }
  onSwipeRight(obj) {
    let objActual = this.state.objetos[this.state.actual];
    alert('Its a Match!! Please contact '+objActual.user);
    console.log(this.state.objetos[this.state.actual]);
    
    console.log('I was swiped right.');
  }

  onSwipe(obj) {
    console.log('I was swiped.');
    let cont = this.state.actual+1;
    console.log(cont);
    this.setState({actual:cont});
    
  }

  onSwipeLeft(obj) {
    console.log('I was swiped left.');
  }

  

  onDoubleTap(obj) {
    console.log('I was double tapped.');
  }


  renderObjetos() {
    return this.state.objetos.map((obj) =>
      //<Objeto objeto = {obj} />
      <Card key={obj.foto} 
        onSwipeRight={this.onSwipeRight.bind(this)}
        onSwipe={this.onSwipe.bind(this)}
        onSwipeLeft={this.onSwipeLeft.bind(this)}
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

