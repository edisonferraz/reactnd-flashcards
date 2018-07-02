import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import {
  calculatePercentage,
  clearLocalNotification,
  setLocalNotification
} from "../../utils/helpers";
import * as colors from "../../utils/colors";
import Button from "../Button";

export default class QuizResult extends Component {
  componentDidMount = () => {
    clearLocalNotification().then(setLocalNotification);
  };

  render() {
    const {
      correctAnswers,
      numberOfQuestions,
      restartQuiz,
      backToDeck
    } = this.props;

    return (
      <View>
        <Text style={styles.title}>
          <Entypo name="area-graph" size={70} />
        </Text>

        <Text style={styles.percentage}>
          You got {calculatePercentage(numberOfQuestions, correctAnswers)}%
        </Text>

        <Text style={styles.numbers}>
          {correctAnswers} of {numberOfQuestions}
        </Text>

        <Button onPress={restartQuiz}>Restart Quiz</Button>

        <Button backgroundColor={colors.lightPurp} onPress={backToDeck}>
          Back to Deck
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: "#ccc",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 10
  },
  percentage: {
    color: colors.red,
    textAlign: "center",
    fontSize: 28
  },
  numbers: {
    color: colors.gray,
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20
  }
});
