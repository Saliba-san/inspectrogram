import React from 'react';
import {Main} from "./views/Main";
import {createTheme, ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ImageContextProvider} from "./contexts/ImageContext";

const theme = createTheme({
  palette: {
    primary: {
      main: '#9b21f5',
      contrastText: '#fff'
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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main/>} />
            </Routes>
          </BrowserRouter>
        </ImageContextProvider>
      </ThemeProvider>
  );
}

export default App;
