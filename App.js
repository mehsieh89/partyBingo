import React from 'react';
import BingoBoard from './components/bingoBoard.js';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.title}>
          <Text> PARTY BINGO </Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
