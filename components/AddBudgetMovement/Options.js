import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../utils/colors";

const Options = (props) => {
  const { selected, setSelected, options } = props;

  return (
    <View className="flex flex-row justify-center gap-2 items-center py-5 px-12">
      {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          className="px-4 py-5 w-1/2"
          style={{
            backgroundColor: option.color,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: selected === option.id ? colors.primary : option.color,
          }}
          onPress={() => setSelected(option.id)}
        >
          <Text
            className="text-center text-xl"
            style={{
              fontFamily: "OpenSans-Regular",
              color: colors.white,
            }}
          >
            {option.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Options;
