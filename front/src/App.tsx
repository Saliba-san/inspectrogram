import React from 'react';
import {Main} from "./views/Main";
import {createTheme, ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ImageContextProvider} from "./contexts/ImageContext";
import {SnackContextProvider} from "./contexts/SnackContext";
import { ParametersContext } from './contexts/ParametersContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9b21f5',
      contrastText: '#ccc8c8'
    }
  },
  typography: {
    fontFamily: [
      'Rubik',
      'sans-serif'
    ].join(',')
  }
})

function App() {
  return (
      <ThemeProvider theme={theme}>
        <ImageContextProvider>
          <SnackContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Main/>} />
              </Routes>
            </BrowserRouter>
          </SnackContextProvider>
        </ImageContextProvider>
      </ThemeProvider>
  );
}

export default App;
