import { View, Text } from "react-native";
import React from "react";
import colors from "../../utils/colors";

const CustomInput = ({ name, children }) => {
  return (
    <View className="flex flex-row justify-between items-center mb-4">
      <Text
        className="text-lg"
        style={{
          fontFamily: "OpenSans-Regular",
          color: colors.black,
        }}
      >
        {name}
      </Text>

      {children && <View>{children}</View>}
    </View>
  );
};

export default CustomInput;
