import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

import { white, red } from "./utils/colors";

import { createStackNavigator } from "react-navigation";
import { Constants } from "expo";

import DeckList from "./components/DeckList";
import DeckDetail from "./components/DeckDetail";
import Quiz from "./components/Quiz";
import NewDeck from "./components/NewDeck";
import NewCard from "./components/NewCard";

function CustomStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const MainNavigator = createStackNavigator(
  {
    Home: { screen: DeckList },
    DeckDetail: {
      screen: DeckDetail,
      navigationOptions: {
        title: "Details"
      }
    },
    Quiz: { screen: Quiz },
    NewDeck: { screen: NewDeck },
    NewCard: { screen: NewCard }
  },
  {
    navigationOptions: {
      title: "Flash Cards",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: red
      }
    }
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <CustomStatusBar backgroundColor="black" barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
