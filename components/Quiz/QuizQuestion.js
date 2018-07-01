import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import * as colors from "../../utils/colors";
import Button from "../Button";

export default class QuizQuestion extends Component {
  render() {
    const { question, toggleView } = this.props;

    return (
      <View>
        <Text style={styles.question}>{question}</Text>
        <TouchableOpacity onPress={toggleView}>
          <Text style={styles.buttonText}>Answer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  question: {
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
