import styled from "styled-components";
import { breakpoints } from "../../styles/break";

export const CarouselContainer = styled.div`
  max-width: 80%;
  height: 650px;
  margin: 0 auto;
  text-align: center;
  padding: 23px;

  h2 {
    font-size: 2rem;
    color: ${({theme}) => theme.COLORS.WHITE};
    margin-bottom: 107px;
  }

  @media (max-width: ${breakpoints.xl}) {
    height: 687px;
  }

  @media (max-width: ${breakpoints.lg}) {
    height: 687px;
  }

  @media (max-width: ${breakpoints.xs}) {
    height: 750px;

        h2 {
            font-size: 1.6rem;
        }
           
    }
`;

export const BrandSlide = styled.div`
  background-color: ${({theme}) => theme.COLORS.WHITE};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
 
  height: 168px;
  width: 200px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const BrandImage = styled.img`
  margin: 50px auto;
  height: 59px;
  width: 150px;
`;

export const DogImage = styled.img`
  position: absolute;
  bottom: 10px;
  right: 0px;
  width: 326px;
  height: 364px;
  z-index: 10;

  @media (max-width: ${breakpoints.lg}), (max-width: ${breakpoints.xl}) {
    bottom: 20px;
  }

  @media (max-width: ${breakpoints.md}) {
    bottom: 20px;
  }

  @media (max-width: ${breakpoints.xs}), (max-width: ${breakpoints.sm}) {
    bottom: 20px;
    width: 256px;
    height: 304px;
  } 

 `;