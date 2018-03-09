import React, { Component } from 'react';
import { options } from './options.js';
import { Text, View, StyleSheet } from 'react-native';

class BingoBoard extends Component {
  constructor(props) {
    super(props);
    this.shuffleArray = this.shuffleArray.bind(this);
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    let newArray = array.slice(0, 24);
    return newArray;
  }

  render() {
    let board = [
          [0, 1, 2, 3, 4],
          [5, 6, 7, 8, 9],
          [10, 11, 'FREE', 12, 13],
          [14, 15, 16, 17, 18],
          [19, 20, 21, 22, 23]
        ]
    let boardInput = this.shuffleArray(options);

    return (
      <View style={styles.board}>
        {
          board.map((row, rowIndex) => {
            return row.map(function(col, colIndex) {
              if (rowIndex === 2 && colIndex === 2) {
                return (
                  <View style={styles.text} key={colIndex}>
                    <Text> {board[2][2]} </Text>
                  </View>
                )
              } else {
                let index = board[rowIndex][colIndex];
                return (
                  <View style={styles.text} key={colIndex}>
                    <Text> {boardInput[board[rowIndex][colIndex]]} </Text>
                  </View>
                )
              }
            })
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  board: {
    marginLeft: 5,
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    flexWrap: "wrap",
  },
  text: {
    height: 90,
    width: 72,
    borderRadius: 2,
    borderWidth: 2,
  }
});

export default BingoBoard;
