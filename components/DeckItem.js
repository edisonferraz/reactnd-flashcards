import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as colors from "../utils/colors";

export default class DeckDetail extends Component {
  render() {
    const { title, questions, onPress } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.title}>
            <MaterialCommunityIcons name="cards-playing-outline" size={20} />{" "}
            {title}
          </Text>
          <Text style={styles.amount}>{questions.length} Cards</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10
  },
  button: {
    flex: 1
  },
  title: {
    fontSize: 22,
    color: colors.red
  },
  amount: {
    color: colors.gray,
    fontSize: 14,
    paddingLeft: 24
  }
});
