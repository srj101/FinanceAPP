import { TouchableOpacity, Text } from "react-native";
import React from "react";
import colors from "../utils/colors";

const NextButton = ({ data, scrollTo }) => {
  return (
    <TouchableOpacity
      onPress={scrollTo}
      className="px-20 py-4 rounded-full my-10"
      style={{
        backgroundColor: colors.primary,
      }}
    >
      <Text
        className="text-lg font-extrabold"
        style={{
          color: colors.white,
          fontFamily: "OpenSans-Regular",
        }}
      >
        {data.NextButtonText}
      </Text>
    </TouchableOpacity>
  );
};

export default NextButton;
