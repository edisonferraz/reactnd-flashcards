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

import { createDeck } from "../actions";

class NewDeck extends Component {
  state = {
    title: ""
  };

  onChangeText = text => {
    this.setState({
      title: text
    });
  };

  submitDeck = () => {
    const { title } = this.state;
    const newDeck = {
      [title]: { title, questions: [] }
    };

    this.props
      .createDeck(newDeck)
      .then(() => this.props.navigation.navigate("Home"));

    Keyboard.dismiss();
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>What is the title of your new deck?</Text>
          <TextInput
            style={styles.textInput}
            value={this.state.title}
            onChangeText={this.onChangeText}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={this.submitDeck}>
            <Text style={styles.buttonText}>Create Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createDeck: deck => dispatch(createDeck(deck))
});

export default connect(
  null,
  mapDispatchToProps
)(NewDeck);

const styles = StyleSheet.create({
  container: {},
  text: {
    margin: 20
  },
  textInput: {
    margin: 20
  },
  button: {
    backgroundColor: "#000",
    padding: 10
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  }
});
