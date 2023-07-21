import { View, Text } from "react-native";
import React from "react";
import colors from "../../../utils/colors";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const IconComponent = ({ type, size, icon, color }) => {
  if (type == "FontAwesome") {
    return (
      <FontAwesome
        name={icon || "questioncircleo"}
        size={size}
        color={color || colors.black}
      />
    );
  } else if (type == "MaterialCommunityIcons") {
    return (
      <MaterialCommunityIcons
        name={icon || "questioncircleo"}
        size={size}
        color={color || colors.black}
      />
    );
  } else {
    return null;
  }
};

export default IconComponent;
