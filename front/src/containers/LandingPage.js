import React, { Component } from 'react';
import {Jumbotron, Button, Container, Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption } from 'reactstrap';

const items = [
  {
    src: 'https://bit.ly/2p9IZ9y',
    altText: 'Blusa ELA',
    caption: 'Hermosa'
  },
  {
    src: 'https://bit.ly/2xg8nhq',
    altText: 'Vestido Largo',
    caption: '1 postura'
  },
  {
    src: 'https://bit.ly/2pbB3os',
    altText: 'Chaqueta Azul',
    caption: 'Chaqueta Azul'
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
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div>
        <div>
          <Jumbotron className="home_header_img">
            <Container >
              <h1 className="display-3 merienda">Swipe, Match & Swap</h1>
              <p className="lead">Renueva tu guardaropa intercambiando prendas con otros miembros de la comunidad</p>
              <hr className="my-2" />
              <p>¿Que estas esperando? Grandes tesoros te esperan.</p>           
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
      </div>
    );
  }
}
