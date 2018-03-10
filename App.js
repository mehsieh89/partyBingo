import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-material-ui';
import Main from './components/main.js';
import allReducers from './reducers';

const uiTheme = {
  palette: {
    primaryColor: '#6C648B',
  }
};
const store = createStore(allReducers);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider uiTheme={uiTheme}>
          <Main/>
        </ThemeProvider>
      </Provider>
    );
  }
}
