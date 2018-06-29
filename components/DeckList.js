import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

import { white, orange } from "../utils/colors";
import { getDecks } from "../actions";

import DeckItem from "./DeckItem";

class DeckList extends Component {
  renderDeckItem = ({ item }) => <DeckItem key={item.title} {...item} />;

  componentDidMount = () => {
    this.props.getDecks();
  };

  render() {
    const { deckList } = this.props;

    if (deckList.length === 0) {
      return (
        <View>
          <Text>You do not have any decks!</Text>

          <TouchableOpacity
            style={{
              backgroundColor: "#666",
              marginTop: 20,
              padding: 10
            }}
            onPress={() => this.props.navigation.navigate("NewDeck")}
          >
            <Text>Add New Deck</Text>
          </TouchableOpacity>
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
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: orange,
    backgroundColor: white,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    paddingTop: 12,
    paddingBottom: 12
  }
});
