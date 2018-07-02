import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import * as colors from "../../utils/colors";

const QuizQuestion = ({ question, toggleView }) => (
  <View>
    <Text style={styles.question}>{question}</Text>
    <TouchableOpacity onPress={toggleView}>
      <Text style={styles.buttonText}>Answer</Text>
    </TouchableOpacity>
  </View>
);

export default QuizQuestion;

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
