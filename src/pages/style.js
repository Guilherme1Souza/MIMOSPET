import styled from "styled-components";
import homeImg from "../images/logomimos.png"
import { breakpoints } from "../styles/break";

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    background-color:#ffffff;
    width: 80%;
    height: 100vh;
    border-radius: 8px;

    h1 {
        font-size: 22px;
        width: 70%;
        margin: 22px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color:rgb(66, 66, 66);
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
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  max-height: 400px; /* Padrão para telas grandes */

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
    max-height: 280px;
  }

  @media ${breakpoints.xs} {
    max-height: 250px;
  }
`;
