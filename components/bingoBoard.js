import React from 'react';
import options from './options.js';
import { Text, View, StyleSheet } from 'react-native';

export default class BingoBoard extends React.Component {

  render() {
    let board = [
          [0, 1, 2, 3, 4],
          [5, 6, 7, 8, 9],
          [10, 11, 'free', 13, 14],
          [15, 16, 17, 18, 19],
          [20, 21, 22, 23, 24]
        ]
    return (
      <View style={styles.board}>
        {
          board.map((row, rowIndex) => {
            return row.map(function(col, colIndex) {
              return (
                <View style={styles.text} key={colIndex}>
                  <Text> {board[rowIndex][colIndex]} </Text>
                </View>)
            })
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  board: {
    marginLeft: 15,
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    flexWrap: "wrap",
  },
  text: {
    height: 70,
    width: 70,
    borderRadius: 2,
    borderWidth: 2,
  }
});
