import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import colors from "../utils/colors";

const SettingItem = (props) => {
  const { item } = props;

  const { title, icon } = item;
  return (
    <TouchableOpacity className="py-4 flex flex-row justify-start items-center gap-4">
      <AntDesign name={icon} size={40} color={colors.black} />
      <Text
        className="text-2xl"
        style={{
          fontFamily: "OpenSans-Regular",
          color: colors.black,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SettingItem;
