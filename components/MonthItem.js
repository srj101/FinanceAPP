import { View, Text, StyleSheet } from "react-native";
import React from "react";

const MonthItem = ({ item, currentIndex }) => {
  const { id, month } = item;
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "OpenSans-Bold",
        }}
        className="text-lg font-bold uppercase"
      >
        {month}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MonthItem;
