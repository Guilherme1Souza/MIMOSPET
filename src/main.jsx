import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import { Index } from './pages/index.jsx'
import Global from './styles/global';
import theme from './styles/theme';
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider theme={theme}>
       <Global />
    <Index />
    </ThemeProvider>
  </StrictMode>,
)
