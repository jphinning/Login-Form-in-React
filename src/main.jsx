import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './utils/theme';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Expenses from "./routes/Expenses"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </BrowserRouter> 
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);