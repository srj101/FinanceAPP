import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../utils/colors";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import IconComponent from "./Budget/movement/IconComponent";

const IconItem = ({ item, methods }) => {
  const { setCategoryIcon, categoryIcon, categoryColor } = methods;

  const { icon, id, name } = item;

  return (
    <TouchableOpacity
      style={{
        transform: [{ scale: categoryIcon?.id === id ? 1.2 : 1 }],
      }}
      className="p-3"
      onPress={() => setCategoryIcon(item)}
    >
      <IconComponent
        type={name}
        icon={icon}
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
