import { View, Text } from "react-native";
import React from "react";
import colors from "../../../utils/colors";
import DashedBorder from "../../DashedBorder";
import { FontAwesome5 } from "@expo/vector-icons";

const MovementItem = ({ item }) => {
  const { icon, title, amount } = item;
  return (
    <View>
      <View className="flex flex-row justify-between items-center py-4">
        <View
          style={{
            flex: 0.3,
          }}
          className="flex flex-row items-center gap-3"
        >
          <FontAwesome5 name={icon} size={35} color={colors.gray} />
          <Text
            className="text-lg font-regular"
            style={{
              fontFamily: "OpenSans-Regular",
            }}
          >
            {title}
          </Text>
        </View>

        <Text>{amount.toFixed(2)} €</Text>
      </View>

      <DashedBorder vertical={false} />
    </View>
  );
};

export default MovementItem;
