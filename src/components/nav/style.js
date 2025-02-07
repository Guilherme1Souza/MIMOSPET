import styled from "styled-components";
import { breakpoints } from '../../styles/break';
import homeImg from "../../images/logomimos.png"

export const Navegação = styled.nav`
  position: relative;
  background-color:#ffff;

  .nav {
    display: flex;
    align-items: center;

    height: 100px;

    > svg {
      width: 25px;
      height: 25px;
    padding: 5px;
    cursor: pointer;
    color: ${({theme}) => theme.COLORS.GRAY_400};

    &:hover {
      color: ${({theme}) => theme.COLORS.PRIMARY};
      cursor: pointer;
    }

    @media (max-width: ${breakpoints.xs}) {
  display: none;
}

  }
    .nav-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 68px;
      margin-left: 50px;
      padding-right: 60px;
      list-style: none;

      @media (max-width: ${breakpoints.xxxl}) {
        margin-left: 180px;
        padding-right: 60px;
      }

      @media (max-width: ${breakpoints.xxl}) {
        margin-left: 80px;
        gap: 50px;
        padding-right: 40px;
      }

      @media (max-width: ${breakpoints.xl}) {
        margin-left: 40px;
        padding-right: 40px;
      }

      @media (max-width: ${breakpoints.lg}) {
        margin-left: 50px;
        gap: 40px;
        padding-right: 20px;
      }

      @media (max-width: ${breakpoints.md}) {
       margin-left: 50px;
       padding-right: 20px;
      }

      @media (max-width: ${breakpoints.sm}) {
        flex-direction: column;
        margin: 0 auto;
        gap: 60px;
        
      
      }

      @media (max-width: ${breakpoints.xs}) {
        display: flex;
        margin: 0 auto;
        gap: 50px;
      }

      li a, li button {
        color: ${({theme}) => theme.COLORS.GRAY_400};
        background: transparent;
        border: none;
        text-decoration: none;
        font-family: "Segoe UI", Verdana, sans-serif;
        font-weight: bold;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: ${({theme}) => theme.COLORS.SECONDARY};
          transition: width 0.3s ease-in-out;
        }

        &:hover::before {
          width: 100%;
        }

        &:hover {
          color: ${({theme}) => theme.COLORS.SECONDARY};
        }
      }
    }

    @media (max-width: ${breakpoints.lg}) {
      li a {
          font-size: 14px;
        }
    }

    
    @media (max-width: ${breakpoints.md}) {
      li a {
          font-size: 12px;
        }
     }

    @media (max-width: ${breakpoints.sm}) {
      li a {
          font-size: 20px;
        }
     }

    @media (max-width: ${breakpoints.xs}) {
      li a {
          font-size: 16px;
        }
     }
  }

  .hamburger-menu {
    display: none;
    font-size: 2rem;
    cursor: pointer;
    margin-left: -50px;
    z-index: 1000;
    color: ${({theme}) => theme.COLORS.BLACK};

    svg {
      margin: 40px;
    }

    @media (max-width: ${breakpoints.sm}) {
      display: block;
    }
  }

  .header {
    display: flex;
    justify-content: center;

    @media (max-width: ${breakpoints.sm}) {
      position: fixed;
      top: 100px;
      left: -100%;
      width: 50%;
      height: 80%;
      background-color: ${({theme}) => theme.COLORS.TEXT};
      transition: left 0.3s ease-in-out;
      flex-direction: column;
      border-radius: 0 50px 50px 0;
      z-index: 999;

      &.open {
        left: 0;
      }
    }

    @media (max-width: ${breakpoints.xs}) {
      width: 50%;
      height: 75%;
    }
  }
`;

export const Background = styled.div`
    background: url(${homeImg}) no-repeat center;
   
    width: 120px;
    height: 80px;
    
    @media (max-width: ${breakpoints.md}) {
      width: 100px;
      object-fit: cover;
     }

    @media (max-width: ${breakpoints.xs}), (max-width: ${breakpoints.sm}) {
  display: none;
}

`;

