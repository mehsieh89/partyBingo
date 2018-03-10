import React, { Component } from 'react';
import BingoCell from './bingoCell.js';
import { options } from './options.js';
import { Text, View, StyleSheet } from 'react-native';

class BingoBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 'FREE', 12, 13],
        [14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23]
      ],
    }
  }

  componentDidMount() {
    let boardInput = this.props.shuffle(options);
    this.props.importBoard(boardInput);
  }

  render() {
    let optionsBoard = this.props.board
    let board = this.state.board

    return (
      <View key={Date.now()} style={styles.board}>
        {
          board.map((row, rowIndex) => {
            return row.map(function(col, colIndex) {
              if (rowIndex === 2 && colIndex === 2) {
                return (
                  <View style={styles.free} key={colIndex}>
                    <Text style={styles.text}> {board[2][2]} </Text>
                  </View>
                )
              } else {
                let index = board[rowIndex][colIndex];
                return (
                  <BingoCell
                    key={colIndex}
                    data={optionsBoard[board[rowIndex][colIndex]]}
                  />
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
    marginLeft: 2,
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#6C648B"
  },
  free: {
    marginLeft: -2,
    marginTop: -2,
    backgroundColor: "#6BBAA7",
    height: 90,
    width: 72,
    borderRadius: 2,
    borderWidth: 2,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
});

export default BingoBoard;
