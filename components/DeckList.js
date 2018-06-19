import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { red } from "../utils/colors";

export default class DeckList extends Component {
  render() {
    return (
      <View>
        <Text>DeckList</Text>

        <TouchableOpacity
          style={{
            backgroundColor: red,
            padding: 10,
            paddingLeft: 30,
            paddingRight: 30,
            height: 45,
            borderRadius: 2,
            alignSelf: "flex-end",
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => this.props.navigation.navigate("DeckDetail")}
        >
          <Text>Deck Detail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
