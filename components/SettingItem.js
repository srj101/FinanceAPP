import { Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../utils/colors";

const SettingItem = (props) => {
  const { item } = props;

  const { title, icon } = item;
  return (
    <TouchableOpacity className="py-4 flex flex-row justify-start items-center gap-4">
      <Text>{icon && icon}</Text>
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
