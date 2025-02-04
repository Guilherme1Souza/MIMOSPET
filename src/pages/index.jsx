import { Container, Hero, StyledImage } from "./style";
import { Nav } from "../components/nav";
import Slider from "react-slick";

import img1 from "../images/brinquedos.gif"
import img2 from "../images/banho.gif"
import img3 from "../images/farmacia.gif"
import img4 from "../images/petiscos.gif"
import img5 from "../images/racao.gif"


export function Index() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <Container>
      <Nav />
      <Hero>
        <Slider {...settings}>
          <div>
            <StyledImage src={img1} alt="Slide 1" />
          </div>
          <div>
            <StyledImage src={img2} alt="Slide 2" />
          </div>
          <div>
            <StyledImage src={img3} alt="Slide 3" />
          </div>
          <div>
            <StyledImage src={img4} alt="Slide 4" />
          </div>
          <div>
            <StyledImage src={img5} alt="Slide 5" />
          </div>
        </Slider>
      </Hero>
    </Container>
  );
}
