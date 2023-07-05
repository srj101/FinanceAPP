import { TouchableOpacity, Text } from "react-native";
import React from "react";
import colors from "../utils/colors";

const NextButton = ({ data, scrollTo }) => {
  return (
    <TouchableOpacity
      onPress={scrollTo}
      className="px-14 py-3 rounded-md my-5"
      style={{
        backgroundColor: colors.primary,
      }}
    >
      <Text
        className="text-xl uppercase "
        style={{
          color: colors.yellow,
          fontFamily: "OpenSans-Bold",
        }}
      >
        {data.NextButtonText}
      </Text>
    </TouchableOpacity>
  );
};

export default NextButton;
