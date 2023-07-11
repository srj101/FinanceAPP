import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../utils/colors";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../providers/state/reducers/movement";
import { setCategory } from "../providers/state/reducers/worth";
import { useNavigation } from "@react-navigation/native";

const CategoryItem = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { name, color, icon } = item;

  const selectCategory = () => {
    dispatch(setSelectedCategory(item));
    dispatch(setCategory(item));
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      onPress={selectCategory}
      className="py-5 items-center gap-3 flex-1"
    >
      <FontAwesome name={icon?.icon} size={40} color={color?.color} />
      <Text
        className="text-lg text-center"
        style={{
          fontFamily: "OpenSans-Regular",
          color: colors.black,
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
