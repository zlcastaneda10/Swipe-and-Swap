import React, { Component } from 'react';
import {Jumbotron, Button, Container, Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption } from 'reactstrap';

const items = [
  {
    src: 'https://bit.ly/2NPY1iG',
    altText: 'Sweater',
    caption: 'Acogedor y calentito',
  },
  {
    src: 'https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    altText: 'Jeans',
    caption: 'Me los regalaron y no me quedan'
  },
  {
    src: 'https://images.pexels.com/photos/325867/pexels-photo-325867.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    altText: 'Pantuflas de bebe',
    caption: 'Sin estrenar'
  }
];

export default class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <div>
        
        <Jumbotron className="home_header_img">
          <Container >
            <h1 className="display-3 merienda">Swipe, Match & Swap</h1>
            <p className="lead">Renueva tu guardaropa intercambiando prendas con otros miembros de la comunidad</p>
            <hr className="my-2" />
            <p>¿Que estas esperando? Grandes tesoros aguardan.</p>           
            <p className="lead">
              <Button onClick={()=>{window.location = '/signUp';}} className="nav_btn">Sign Up</Button>
            </p>
          </Container>
        </Jumbotron>
        <Container>
          <h1 className="merienda">Algunas de nuestras prendas</h1>
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>

         
        </Container>
        
      </div>
    );
  }
}
