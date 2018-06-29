import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from "react-native";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import thunk from "redux-thunk";

import { white, red } from "./utils/colors";

import { createStackNavigator } from "react-navigation";
import { Constants } from "expo";

import DeckList from "./components/DeckList";
import DeckDetail from "./components/DeckDetail";
import Quiz from "./components/Quiz";
import NewDeck from "./components/NewDeck";
import NewCard from "./components/NewCard";

const store = createStore(reducer, applyMiddleware(thunk));

function CustomStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: DeckList,
      navigationOptions: ({ navigation }) => ({
        headerRight: (
          <TouchableOpacity onPress={() => navigation.navigate("NewDeck")}>
            <Text>Add</Text>
          </TouchableOpacity>
        )
      })
    },
    DeckDetail: {
      screen: DeckDetail,
      navigationOptions: {
        title: "Details"
      }
    },
    Quiz: { screen: Quiz },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        title: "New Deck"
      }
    },
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
      <Provider store={store}>
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
