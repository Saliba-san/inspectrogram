import React from 'react';
import {Main} from "./views/Main";
import {createTheme, ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ImageContextProvider} from "./contexts/ImageContext";
import {SnackContextProvider} from "./contexts/SnackContext";
import {ParametersContext, ParametersContextProvider} from './contexts/ParametersContext';
import {MusicContext, MusicContextProvider} from "./contexts/MusicasContext";

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
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
  },
})

function App() {
  return (
      <ThemeProvider theme={theme}>
        <MusicContextProvider>
          <ImageContextProvider>
            <SnackContextProvider>
              <ParametersContextProvider>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Main/>} />
                  </Routes>
                </BrowserRouter>
              </ParametersContextProvider>
            </SnackContextProvider>
          </ImageContextProvider>
        </MusicContextProvider>
      </ThemeProvider>
  );
}

export default App;
