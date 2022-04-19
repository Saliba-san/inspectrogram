import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Main} from "./views/Main";

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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main/>} />
            </Routes>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
