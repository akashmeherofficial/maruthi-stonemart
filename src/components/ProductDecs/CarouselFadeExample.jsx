import Carousel from 'react-bootstrap/Carousel';
import ferrarif from '../../assets/images/ferrarif.png'
import ferrarilu from '../../assets/images/ferrarilu.png'
import ferrarib from '../../assets/images/ferrarib.png'
import ferraril from '../../assets/images/ferraril.png'

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ferrarif}
          alt="First slide"
        
        />
        <Carousel.Caption>
          <h3>Front</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ferrarilu}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Upside</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ferrarib}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Back</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ferraril}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>LeftSide</h3>
        
  
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;