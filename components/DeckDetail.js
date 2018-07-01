import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { gray } from "../utils/colors";
import { getDecks } from "../actions";
import * as colors from "../utils/colors";
import Button from "./Button";

class DeckDetail extends Component {
  componentDidMount = () => {
    this.props.getDecks();
  };

  render() {
    const key = this.props.navigation.state.params;
    const { title, questions } = this.props.decks[key];

    return (
      <View>
        <Text style={styles.deckTitle}>{title}</Text>
        <Text style={styles.amount}>{questions.length} cards</Text>

        <Button
          backgroundColor={colors.blue}
          onPress={() => {
            this.props.navigation.navigate("NewCard", title);
          }}
        >
          Add Card
        </Button>

        {questions.length > 0 && (
          <Button
            onPress={() => {
              this.props.navigation.navigate("Quiz", { title, questions });
            }}
          >
            Start Quiz
          </Button>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  decks: state
});

const mapDispatchToProps = dispatch => ({
  getDecks: () => dispatch(getDecks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckDetail);

const styles = StyleSheet.create({
  deckTitle: {
    fontSize: 26,
    textAlign: "center",
    paddingTop: 50
  },
  amount: {
    color: gray,
    fontSize: 18,
    textAlign: "center",
    paddingBottom: 40
  },
  button: {
    backgroundColor: "#4e4cb8",
    borderRadius: 4,
    padding: 14,
    margin: 10
  },
  buttonStartQuiz: {
    backgroundColor: "green"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  }
});
