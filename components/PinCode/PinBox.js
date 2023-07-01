import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  pinBox: {
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: "black",
    height: 30,
    width: 30,
    marginRight: 14,
    justifyContent: "center",
  },
});

class PinBox extends Component {
  render() {
    return <View style={styles.pinBox}>{this.renderText()}</View>;
  }

  renderText() {
    if (!this.props.hasValue) return null;

    return <Text>•</Text>;
  }
}

export default PinBox;
