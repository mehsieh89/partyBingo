import React from 'react';
import BingoBoard from './components/bingoBoard.js';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleOnClick() {
    this.setState(this.state)
  }

  render() {
    return (
      <View>
        <View style={styles.title}>
          <Text> CARDI B-INGO </Text>
          <Text> when someone... </Text>
        </View>
        <View>
          <BingoBoard/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
