import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { gray } from "../utils/colors";
import { getDecks } from "../actions";

class DeckDetail extends Component {
  componentDidMount = () => {
    this.props.getDecks();
  };

  render() {
    const key = this.props.navigation.state.params;
    const { title, questions } = this.props.decks[key];

    return (
      <View>
        <Text>{title}</Text>
        <Text style={styles.amount}>{questions.length} cards</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("NewCard", title);
          }}
        >
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonStartQuiz]}>
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: "#000",
    padding: 10,
    marginTop: 10
  },
  buttonStartQuiz: {
    backgroundColor: "green"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  },
  amount: {
    color: gray
  }
});
