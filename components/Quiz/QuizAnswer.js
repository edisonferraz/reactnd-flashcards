import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import * as colors from "../../utils/colors";
import Button from "../Button";

export default class QuizAnswer extends Component {
  render() {
    const { answer, numberOfQuestions, toggleView, btnAnswer } = this.props;

    return (
      <View>
        <Text style={styles.answer}>{answer}</Text>

        <TouchableOpacity onPress={toggleView}>
          <Text style={styles.buttonText}>Question</Text>
        </TouchableOpacity>

        <Button onPress={() => btnAnswer(numberOfQuestions, true)}>
          Correct
        </Button>

        <Button
          backgroundColor={colors.red}
          onPress={() => btnAnswer(numberOfQuestions)}
        >
          Incorrect
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  answer: {
    color: colors.red,
    fontSize: 24,
    textAlign: "center"
  },
  buttonText: {
    color: colors.gray,
    textAlign: "center",
    marginBottom: 20
  }
});
