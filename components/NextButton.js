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
        shadowOffset: {
          width: 0,
          height: 14,
        },
        shadowColor: colors.primary,
        shadowRadius: 14,
        shadowOpacity: 0.5,
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
