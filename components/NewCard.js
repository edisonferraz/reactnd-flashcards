import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";

import { addCardToDeck } from "../actions";
import * as colors from "../utils/colors";
import Button from "./Button";

class NewCard extends Component {
  state = {
    question: "",
    answer: ""
  };

  onChangeText = (key, text) => {
    this.setState({
      [key]: text
    });
  };

  submitDeck = () => {
    const title = this.props.navigation.state.params;
    const card = this.state;

    this.props
      .addCardToDeck(title, card)
      .then(() => this.props.navigation.goBack());

    Keyboard.dismiss();
  };

  render() {
    return (
      <View>
        <View>
          <TextInput
            style={[styles.textInput, { marginTop: 50 }]}
            value={this.state.question}
            onChangeText={text => this.onChangeText("question", text)}
            placeholder="Question"
            underlineColorAndroid="transparent"
          />

          <TextInput
            style={[styles.textInput, { marginBottom: 10 }]}
            value={this.state.answer}
            onChangeText={text => this.onChangeText("answer", text)}
            placeholder="Answer"
            underlineColorAndroid="transparent"
          />
        </View>
        <Button onPress={this.submitDeck}>Add Card</Button>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCardToDeck: (title, card) => dispatch(addCardToDeck(title, card))
});

export default connect(
  null,
  mapDispatchToProps
)(NewCard);

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#fff",
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 4,
    color: colors.gray,
    height: 40,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10
  }
});
