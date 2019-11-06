import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';


const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FFFEBD',
        dark: "#F7CE65",
      },
      secondary: {
        main: "#FFFFFF",
        dark: "#930C10",
        light: "#FFFFFF",
      },
      redWine: {
          main: "#930C10",
      },
      brown: {
          main: "#290000",
      }
      ,
      black: {
          main: "#030303",
      }
    }
  })
  

ReactDOM.render(
<MuiThemeProvider theme={theme}>
<App />
</MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
