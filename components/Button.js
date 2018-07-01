import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default class Button extends Component {
  render() {
    const { children, backgroundColor, onPress } = this.props;

    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={onPress}
      >
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    );
  }
}

Button.defaultProps = {
  backgroundColor: "green"
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 14,
    margin: 10
  },
  text: {
    color: "#fff",
    textAlign: "center"
  }
});
