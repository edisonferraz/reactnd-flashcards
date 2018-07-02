import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet, TextInput, Keyboard } from "react-native";

import { addCardToDeck } from "../actions";
import * as colors from "../utils/colors";
import Button from "./Button";

class NewCard extends Component {
  state = {
    question: "",
    answer: "",
    questionRequired: false,
    answerRequired: false
  };

  onChangeText = (key, text) => {
    this.setState({
      [key]: text
    });
  };

  submitCard = () => {
    const title = this.props.navigation.state.params;
    const card = this.state;

    if (!card.question.trim()) {
      this.setState({
        questionRequired: true
      });
    }

    if (!card.answer.trim()) {
      this.setState({
        answerRequired: true
      });
    }

    if (!card.question.trim() || !card.answer.trim()) {
      return;
    }

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
            style={[
              styles.textInput,
              { marginTop: 50 },
              this.state.questionRequired ? styles.inputRequired : {}
            ]}
            value={this.state.question}
            onChangeText={text => this.onChangeText("question", text)}
            placeholder="Question"
            underlineColorAndroid="transparent"
          />
          {this.state.questionRequired && (
            <Text style={styles.txtRequired}>Question is required</Text>
          )}

          <TextInput
            style={[
              styles.textInput,
              this.state.questionRequired ? styles.inputRequired : {}
            ]}
            value={this.state.answer}
            onChangeText={text => this.onChangeText("answer", text)}
            placeholder="Answer"
            underlineColorAndroid="transparent"
          />
          {this.state.answerRequired && (
            <Text style={styles.txtRequired}>Answer is required</Text>
          )}
        </View>
        <Button onPress={this.submitCard}>Add Card</Button>
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
  },
  inputRequired: {
    borderColor: "red"
  },
  txtRequired: {
    color: "red",
    margin: 10,
    marginTop: 5,
    fontSize: 12
  }
});
