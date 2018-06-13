import React from "react";
import { StyleSheet, Text, View } from "react-native";

import initialDecks from "./utils/data.json";

export default class App extends React.Component {
  render() {
    {
      return (
        <View style={styles.container}>
          {Object.keys(initialDecks).map(key => {
            const value = initialDecks[key];
            return <Text key={value.title}>{JSON.stringify(value.title)}</Text>;
          })};
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
