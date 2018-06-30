import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { white, gray } from "../utils/colors";

export class DeckDetail extends Component {
  render() {
    const { title, questions, onPress } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.amount}>{questions.length} Cards</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DeckDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    padding: 5,
    height: 60
  },
  button: {
    flex: 1
  },
  title: {
    fontSize: 20
  },
  amount: {
    color: gray
  }
});
