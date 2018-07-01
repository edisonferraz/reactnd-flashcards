import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

import * as colors from "../utils/colors";
import { getDecks } from "../actions";

import DeckItem from "./DeckItem";
import Button from "./Button";

class DeckList extends Component {
  componentDidMount = () => {
    this.props.getDecks();
  };

  renderDeckItem = ({ item }) => (
    <DeckItem
      key={item.title}
      {...item}
      onPress={() => this.props.navigation.navigate("DeckDetail", item.title)}
    />
  );

  render() {
    const { deckList } = this.props;

    if (deckList.length === 0) {
      return (
        <View>
          <Text style={styles.titleNoDecks}>You do not have any decks!</Text>
          <Button onPress={() => this.props.navigation.navigate("NewDeck")}>
            Add New Deck
          </Button>
        </View>
      );
    }

    return (
      <View>
        <Text style={styles.listTitle}>Choose your Deck</Text>
        <FlatList
          data={deckList}
          renderItem={this.renderDeckItem}
          keyExtractor={item => item.title}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  deckList: Object.values(state)
});

const mapDispatchToProps = dispatch => ({
  getDecks: () => dispatch(getDecks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList);

const styles = StyleSheet.create({
  titleNoDecks: {
    color: colors.red,
    textAlign: "center",
    marginTop: 40,
    marginBottom: 20,
    fontSize: 24
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.orange,
    backgroundColor: colors.white,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    paddingTop: 12,
    paddingBottom: 12
  }
});
