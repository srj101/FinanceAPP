import { View, Text } from "react-native";
import React from "react";
import colors from "../../utils/colors";

const CustomInput = ({ name, children }) => {
  return (
    <View className="flex flex-row justify-between items-center py-4">
      <Text
        className="font-bold text-xl"
        style={{
          fontFamily: "OpenSans-Bold",
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
