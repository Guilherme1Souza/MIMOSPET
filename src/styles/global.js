import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: ${({ theme }) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antialiased;
        font-family: "Montserrat", serif;
      
    }
    @keyframes linearGradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
    body, input, button, textarea {
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button, a {
        cursor: pointer;

    }
`;