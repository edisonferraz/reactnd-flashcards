import React, { Component } from "react";
import { connect } from "react-redux";

import { View, Text, StyleSheet, TextInput, Keyboard } from "react-native";
import * as colors from "../utils/colors";
import Button from "./Button";
import { createDeck } from "../actions";

class NewDeck extends Component {
  state = {
    title: "",
    titleRequired: false
  };

  onChangeText = text => {
    this.setState({
      title: text
    });
  };

  submitDeck = () => {
    const { title } = this.state;

    if (!title.trim()) {
      this.setState({
        titleRequired: true
      });
      return;
    }

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
        <TextInput
          style={[
            styles.textInput,
            this.state.titleRequired ? styles.inputRequired : {}
          ]}
          value={this.state.title}
          onChangeText={this.onChangeText}
          placeholder="What is the title of your new deck?"
          underlineColorAndroid="transparent"
        />
        {this.state.titleRequired && (
          <Text style={styles.txtRequired}>Title is required</Text>
        )}
        <Button onPress={this.submitDeck}>Create Deck</Button>
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
  textInput: {
    backgroundColor: "#fff",
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 4,
    color: colors.gray,
    height: 40,
    marginTop: 40,
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
