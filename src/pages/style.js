import styled from "styled-components";
import homeImg from "../images/logomimos.png"
import { breakpoints } from "../styles/break";
import { TbSquareLetterYFilled } from "react-icons/tb";

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    background-color:#ffffff;
    overflow-x: hidden;
   
    width: 100%;
    height: 100vh;
    border-radius: 8px;

    h1 {
        font-size: 22px;
        width: 70%;
        margin: 22px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color:rgb(66, 66, 66);
    }

    @media (max-width: ${breakpoints.xs}), (max-width: ${breakpoints.sm}), (max-width: ${breakpoints.lg}) {
      padding-inline: 2.5rem;
  }
`;

export const Hero = styled.div`
`

export const Background = styled.div`
    background: url(${homeImg}) no-repeat center;
    width: 120px;
    height: 80px;
`;

export const StyledImage = styled.img`
  width: 80%;
  margin: 0 auto;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  max-height: 400px;

  @media ${breakpoints.xxl} {
    max-height: 380px;
  }

  @media ${breakpoints.xl} {
    max-height: 350px;
  }

  @media ${breakpoints.lg} {
    max-height: 320px;
  }

  @media ${breakpoints.md} {
    max-height: 300px;
  }

  @media ${breakpoints.sm} {
    max-height: 300px;
  }

  @media (max-width: ${breakpoints.xs}) {
    max-height: 300px;
  }
`;

export const About = styled.div`
  margin-top: 400px;
  max-width: 1600px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  color: white;
  padding: 2.5rem;
  position: relative;
  text-align: center;
  border-radius: 8px;

 

  @media (max-width: ${breakpoints.lg}) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 15px;
  }

  @media (max-width: ${breakpoints.xs}) {
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-top: 300px;
    margin-bottom: 150px;
  }
`;

export const DogImage = styled.img`
  position: absolute;
  top: -275px;
  right: 20px;
  width: 20rem;
  height: auto;

  @media (max-width: ${breakpoints.xl}) {
    right: 50px;
  }

  @media (max-width: ${breakpoints.lg}) {
    right: -80px;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 18rem;
    top: -230px;
  }

  @media (max-width: ${breakpoints.xs}) {
    width: 15rem;
    right: -40px;
    top: -200px;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  display: flex;
  margin-left: 1.5rem;
  
  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.8rem;
    margin: 50px;
  }

  @media (max-width: ${breakpoints.xs}) {
    font-size: 1.4rem;
    margin: 20px auto;
    width: 220px;
  }
`;

export const Section = styled.div`
display: flex;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  text-align: left;

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    flex-direction: column;
  }
`;

export const SectionTwo = styled.div`
justify-content: space-between;
  margin-top: 2.5rem;
  text-align: left;
`;

export const SectionThree = styled.div`
justify-content: space-between;
  margin-top: 1.5rem;
  text-align: left;
`;


export const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;

  
  @media (max-width: ${breakpoints.xs}) {
    width: 320px;
    margin: 0 auto;
  }
`;


export const SubtitleTwo = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 6.5rem;

  

  @media (max-width: ${breakpoints.xs}) {
    width: 320px;
    margin: 0 auto;
  }
`;


export const Text = styled.p`
  margin-top: 0.5rem;
  font-size: 1.125rem;
  width: 650px;

  @media (max-width: ${breakpoints.md}) {
    width: 620px;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 480px;
    text-align: start;
    
  }

  @media (max-width: ${breakpoints.xs}) {
    width: 220px;
    margin: 20px 115px  20px auto ;
    text-align: start;
  }
  
`;

export const ValuesList = styled.ul`
  margin-top: 0.5rem;
  font-size: 1.125rem;
  list-style: none;
  padding: 0;

  @media (max-width: ${breakpoints.xs}) {
    width: 200px;
    margin: 20px 0;
  }
`;

export const ValueItem = styled.li`
  margin: 0.5rem 0;
  

  @media (max-width: ${breakpoints.xs}) {
    width: 200px;
    margin: 20px auto;
    text-align: start;
  }
`;

export const TeamImage = styled.img`
  margin-top: 4.5rem;
  margin-left: 12.5rem;
  border-radius: 0.5rem;
  width: 24rem;
  height: auto;

  @media (max-width: ${breakpoints.xl}) {
    margin: 200px 90px 0 50px;
  }

  
  @media (max-width: ${breakpoints.lg}) {
    width: 350px;
    margin: 200px 90px 0 -200px;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 320px;
    margin: 200px 90px 0 -300px;
  }

  @media (max-width: ${breakpoints.sm}) {
    margin: -80px 0 30px 300px;
  }

  @media (max-width: ${breakpoints.xs}) {
    width: 250px;
    margin: 20px auto 10px -10px;
  }
`;

export const Services = styled.div`
   font-size: 32px;
   margin: 80px auto;

  h3 {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    margin: 0 auto;

    @media (max-width: ${breakpoints.xs}) {
      font-size: 1.6rem;
    }
   
  }

  @media (max-width: ${breakpoints.xs}) {
    display: flex;
    margin: 80px auto;
    text-align: center;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr ;
  grid-template-rows: repeat(2, auto);
  gap: 23px;
  justify-content: center;
  width: 100%;

  @media (max-width: ${breakpoints.sm}), (max-width: ${breakpoints.md}), (max-width: ${breakpoints.lg}), (max-width: ${breakpoints.xl}) {
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: repeat(2, auto);
  }

  @media (max-width: ${breakpoints.xs}) {
   grid-template-columns: 1fr;
}
`

export const ServicesImg = styled.img`
  width: 303px;
  height: 189px;
  margin: 0 auto;
`;