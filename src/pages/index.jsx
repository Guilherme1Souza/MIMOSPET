import { Container, Hero, StyledImage, About, DogImage, Title, Section, SectionTwo, Subtitle, SubtitleTwo, Text, ValuesList, ValueItem, TeamImage } from "./style";
import { Nav } from "../components/nav";
import Slider from "react-slick";

import img1 from "../images/brinquedos.gif"
import img2 from "../images/banho.gif"
import img3 from "../images/farmacia.gif"
import img4 from "../images/petiscos.gif"
import img5 from "../images/racao.gif"
import imgDog from "../images/dog.png"
import imgTeam from "../images/equipe.png"


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
      <About>
      <DogImage src={imgDog} alt="Cachorro Mimo’s Pet" />
      <Title>Bem vindo ao Mimo’s Pet</Title>
      <Section>
      <SectionTwo>
        <Subtitle>Nosso Compromisso</Subtitle>
        <Text>
          Queremos fazer parte da vida do seu pet, contribuindo para o seu
          bem-estar e felicidade. Seja em um banho relaxante, na escolha da
          ração ideal e conforto para seu pet.
        </Text>
        <SubtitleTwo>Conheça nossos valores</SubtitleTwo>
        <ValuesList>
          <ValueItem>🐾 Amor pelos Animais</ValueItem>
          <ValueItem>🐾 Qualidade e segurança</ValueItem>
          <ValueItem>🐾 Responsabilidade Social</ValueItem>
          <ValueItem>🐾 Respeito e Empatia</ValueItem>
        </ValuesList>
      </SectionTwo>
        <TeamImage src={imgTeam} alt="Equipe Mimo’s Pet" />
      </Section>
      </About>
    </Container>
  );
}
