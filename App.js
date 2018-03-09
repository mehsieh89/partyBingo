import React from 'react';
import { ThemeProvider } from 'react-native-material-ui';
import Main from './components/main.js';

const uiTheme = {};

export default class App extends React.Component {

  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Main/>
      </ThemeProvider>
    );
  }
}
