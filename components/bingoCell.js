import React, { Component } from 'react';
import { options } from './options.js';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

class BingoCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: false,
      cell: {
        height: 90,
        width: 72,
        borderRadius: 2,
        borderWidth: 2,
      },
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    if (!this.state.highlight) {
      this.setState({
        highlight: true,
        cell: {
          height: 90,
          width: 72,
          borderRadius: 2,
          borderWidth: 2,
          backgroundColor: "green",
        }
      });
    } else {
      this.setState({
          highlight: false,
          cell: {
            height: 90,
            width: 72,
            borderRadius: 2,
            borderWidth: 2,
          }
      });
    }
  }

  render() {
    return (
      <View style={this.state.cell}>
        <TouchableHighlight onPress={this.handleOnClick}>
          <View style={styles.box}>
            <Text> {this.props.data} </Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    height: "100%",
    width: "100%",
  },
});

export default BingoCell;
