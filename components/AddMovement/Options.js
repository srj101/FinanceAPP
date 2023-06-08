import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../utils/colors";

const Options = (props) => {
  const { selected, setSelected } = props;

  return (
    <View className="flex flex-row justify-center gap-2 items-center py-5 px-12">
      <TouchableOpacity
        className="px-4 py-5 w-1/2"
        style={{
          backgroundColor: colors.red,
          borderRadius: 100,
          borderWidth: 5,
          borderColor: selected === 0 ? colors.primary : colors.red,
        }}
        onPress={() => setSelected(0)}
      >
        <Text
          className="text-center text-xl"
          style={{
            fontFamily: "OpenSans-Regular",
            color: colors.white,
          }}
        >
          Spent
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="px-4 py-5 w-1/2"
        style={{
          backgroundColor: colors.green,
          borderRadius: 100,
          borderWidth: 5,
          borderColor: selected === 1 ? colors.primary : colors.green,
        }}
        onPress={() => setSelected(1)}
      >
        <Text
          className="text-center text-xl"
          style={{
            fontFamily: "OpenSans-Regular",
            color: colors.white,
          }}
        >
          Income
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Options;
