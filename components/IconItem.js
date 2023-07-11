import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../utils/colors";
import { FontAwesome } from "@expo/vector-icons";

const IconItem = ({ item, methods }) => {
  const { setCategoryIcon, categoryIcon, categoryColor } = methods;

  const { icon, id } = item;

  return (
    <TouchableOpacity
      style={{
        transform: [{ scale: categoryIcon?.id === id ? 1.2 : 1 }],
      }}
      className="p-3"
      onPress={() => setCategoryIcon(item)}
    >
      <FontAwesome
        name={icon}
        size={40}
        color={
          categoryIcon?.id == id && categoryColor
            ? categoryColor?.color
            : colors.black
        }
      />
    </TouchableOpacity>
  );
};

export default IconItem;
