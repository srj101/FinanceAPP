import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import colors from "../utils/colors";

const CategoryItem = ({ item }) => {
  const { id, name, color, icon } = item;
  return (
    <View className="flex flex-col justify-between items-center gap-5 py-5">
      {icon}
      <Text
        className="text-sm"
        style={{
          fontFamily: "OpenSans-Regular",
          color: colors.black,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default CategoryItem;
