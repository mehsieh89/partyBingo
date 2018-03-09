import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BingoBoard from './bingoBoard.js';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-material-ui';
import { checkTest } from '../actions';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState(this.state)
  }

  render() {
    return (
      <View>
        <View>
          <View style={styles.title}>
            <Text> CARDI B-INGO </Text>
            <Text> when someone... </Text>
          </View>
          <View>
            <BingoBoard/>
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
    checkTest: checkTest,
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    test: state.allReducers.test,
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
  icon: {
    position: 'relative',
  },
  button: {
    width: '30%',
    position: 'relative',
    alignItems: 'center',
    top: 470,
  },
});
