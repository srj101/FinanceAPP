import { View, Text } from "react-native";
import React from "react";

const IconItem = ({ item }) => {
  return (
    <View style={{}} className="p-3">
      {item.icon && item.icon}
    </View>
  );
};

export default IconItem;
