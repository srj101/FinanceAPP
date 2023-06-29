import { View, Text, StyleSheet } from "react-native";
import React from "react";

const MonthItem = ({ item, currentIndex }) => {
  const { id, month } = item;

  const getFrenchMonth = (month) => {
    const months = {
      January: "Janvier",
      February: "Février",
      March: "Mars",
      April: "Avril",
      May: "Mai",
      June: "Juin",
      July: "Juillet",
      August: "Août",
      September: "Septembre",
      October: "Octobre",
      November: "Novembre",
      December: "Décembre",
    };

    return months[month];
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "OpenSans-Regular",
        }}
        className="text-xl uppercase"
      >
        {getFrenchMonth(month)}
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
