import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import CarouselImage1 from 'assets/img/soroush-karimi.jpg';
import CarouselImage2 from 'assets/img/federico-beccari.jpg'
import CarouselImage3 from 'assets/img/joshua-stannard.jpg'
// core components

const items = [
  {
    src: CarouselImage1,
    altText: "Somewhere",
    caption: "Somewhere",
  },
  {
    src: CarouselImage2,
    altText: "Somewhere else",
    caption: "Somewhere else",
  },
  {
    src: CarouselImage3,
    altText: "Here it is",
    caption: "Here it is",
  },
];

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section pt-o" id="carousel">
        <Container>
          <Row>
          
            <Col className="ml-auto mr-auto" md="12">
            <div className="title">
            <h3>Carousel</h3>
            </div>
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#mauro"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Anterior</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#mauro"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                   <span className="fa fa-angle-right" />
                    <span className="sr-only">Siguiente</span> 
                  </a>
                </Carousel>
                
              </Card>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
