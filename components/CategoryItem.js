import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import colors from "../utils/colors";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../providers/state/reducers/movement";
import { setCategory } from "../providers/state/reducers/worth";

const CategoryItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, color, icon } = item;

  const selectCategory = () => {
    dispatch(setSelectedCategory(item));
    dispatch(setCategory(item));
  };

  return (
    <TouchableOpacity
      onPress={selectCategory}
      className="py-5 items-center gap-3 flex-1"
    >
      <AntDesign name={icon?.icon} size={40} color={color?.color} />
      <Text
        className="text-lg font-bold text-center"
        style={{
          fontFamily: "OpenSans-Bold",
          color: colors.black,
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
