import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../utils/colors";

const Color = ({ item, methods }) => {
  const { color } = item;

  const { setCategoryColor, categoryColor } = methods;

  return (
    <TouchableOpacity
      className="rounded-full mr-2"
      style={{
        backgroundColor: color,
        width: 50,
        height: 50,
        borderWidth: categoryColor === color ? 2 : 0,
        borderColor: colors.white,
      }}
      onPress={() => setCategoryColor(item)}
    ></TouchableOpacity>
  );
};

export default Color;
