import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import * as colors from "../utils/colors";
import QuizQuestion from "./Quiz/QuizQuestion";
import QuizAnswer from "./Quiz/QuizAnswer";
import QuizResult from "./Quiz/QuizResult";

export default class Quiz extends Component {
  state = {
    step: 0,
    showQuestion: true,
    correctAnswers: 0
  };

  toggleView = () => {
    this.setState({
      showQuestion: !this.state.showQuestion
    });
  };

  btnAnswer = (numberOfQuestions, correctAnswer) => {
    this.setState({
      step:
        this.state.step === numberOfQuestions
          ? this.state.step
          : this.state.step + 1,
      showQuestion: true,
      correctAnswers:
        correctAnswer === true
          ? this.state.correctAnswers + 1
          : this.state.correctAnswers
    });
  };

  restartQuiz = () => {
    this.setState({
      step: 0,
      showQuestion: true,
      correctAnswers: 0
    });
  };

  render() {
    const { title, questions } = this.props.navigation.state.params;
    const numberOfQuestions = questions.length;
    const index = this.state.step < numberOfQuestions ? this.state.step : 0;
    const question = questions[index].question;
    const answer = questions[index].answer;

    if (this.state.step === numberOfQuestions) {
      return (
        <QuizResult
          correctAnswers={this.state.correctAnswers}
          numberOfQuestions={numberOfQuestions}
          restartQuiz={this.restartQuiz}
        />
      );
    }

    return (
      <View>
        <Text style={styles.step}>
          {this.state.step + 1} / {numberOfQuestions}
        </Text>

        {this.state.showQuestion ? (
          <QuizQuestion question={question} toggleView={this.toggleView} />
        ) : (
          <QuizAnswer
            answer={answer}
            numberOfQuestions={numberOfQuestions}
            toggleView={this.toggleView}
            btnAnswer={this.btnAnswer}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  step: {
    backgroundColor: colors.red,
    borderRadius: 4,
    color: colors.white,
    fontSize: 14,
    padding: 6,
    margin: 10,
    width: 45
  }
});
