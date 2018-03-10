import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { options } from './options.js';
import BingoBoard from './bingoBoard.js';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-material-ui';
import { importBoard } from '../actions';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleOnClick = this.handleOnClick.bind(this);
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

  handleOnClick() {
    let newBoard = this.shuffleArray(options);
    this.props.importBoard(newBoard);
  }

  render() {
    return (
      <View>
        <View>
          <View style={styles.title}>
            <Text style={styles.appName}> CARDI B-INGO </Text>
            <Text style={styles.desc}> when someone... </Text>
          </View>
          <View>
            <BingoBoard
              importBoard={this.props.importBoard}
              board={this.props.board}
              shuffle={this.shuffleArray}
            />
          </View>
        </View>
        <View style={styles.button}>
          <Button
            raised
            primary={true}
            icon='replay'
            text="Again!"
            onPress={this.handleOnClick} />
          </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    importBoard: importBoard,
  }, dispatch);
}

const mapStateToProps = (state) => {
  const { allReducers } = state;
  return {
    board: allReducers.board,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '30%',
    position: 'relative',
    alignItems: 'center',
    top: 470,
  },
  appName: {
    fontSize: 36,
  },
  desc: {
    fontSize: 20,
    fontStyle: 'italic',
  }
});
