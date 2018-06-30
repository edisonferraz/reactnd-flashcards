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
            style={styles.textInput}
            value={this.state.question}
            onChangeText={text => this.onChangeText("question", text)}
            placeholder="Question"
          />

          <TextInput
            style={styles.textInput}
            value={this.state.answer}
            onChangeText={text => this.onChangeText("answer", text)}
            placeholder="Answer"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={this.submitDeck}>
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>
        </View>
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
    margin: 16
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    marginTop: 10
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  }
});
