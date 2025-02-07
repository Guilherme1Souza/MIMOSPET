import {
  Container,
  Hero,
  StyledImage,
  About,
  DogImage,
  Title,
  Section,
  SectionTwo,
  Subtitle,
  SubtitleTwo,
  Text,
  ValuesList,
  ValueItem,
  TeamImage,
  Services,
  ServicesGrid,
  ServicesImg,
} from "./style";

import { Nav } from "../components/nav";
import { CarrosselMarcas } from "../components/carrosselMarcas";
import Slider from "react-slick";

import img1 from "../images/brinquedo_hero.png"
import img2 from "../images/banho_hero.png"
import img3 from "../images/racao_hero.png"
import img4 from "../images/bifinho_hero.png"
import imgDog from "../images/dog.png"
import imgTeam from "../images/equipe.png"
import cardBanho from "../images/card_banho.png"
import cardFarmacia from "../images/card_farmcia.png"
import cardVariedades from "../images/card_variedades.png"
import cardBrinquedos from "../images/card_brinquedos.png"
import { Job } from "../components/trabalheConosco";


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
            <SubtitleTwo>Conheça nossos valores: </SubtitleTwo>
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
      <Services>
        <h3>Nossos serviços</h3>
      </Services>
      <ServicesGrid>
        <ServicesImg src={cardBanho} alt="Card de banho e tosa" />
        <ServicesImg src={cardFarmacia} alt="Card de banho e tosa" />
        <ServicesImg src={cardVariedades} alt="Card de banho e tosa" />
        <ServicesImg src={cardBrinquedos} alt="Card de banho e tosa" />
      </ServicesGrid>
      <About >
    <CarrosselMarcas></CarrosselMarcas>
      </About>
      <Job></Job>
    </Container>
  );
}
