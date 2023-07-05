import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import DashedBorder from "../../DashedBorder";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../../utils/colors";
import { NumberFormat } from "../../../utils/funtions";

const MovementItem = ({ item }) => {
  const { icon, id, amount, color, date, category, notes } = item;

  const { currency, decimalEnabled, exchangeRate } = useSelector(
    (state) => state.settings
  );
  return (
    <View>
      <View className="flex flex-row justify-between items-center py-4">
        <View style={{}} className="flex flex-row items-center gap-3">
          <AntDesign
            name={category?.icon?.icon || "questioncircleo"}
            size={25}
            color={category?.color?.color || colors.black}
          />
          <Text
            className="text-lg"
            style={{
              fontFamily: "OpenSans-Regular",
            }}
          >
            {category?.name || "Uncategorized"}
          </Text>
        </View>

        <Text
          className="text-md"
          style={{
            fontFamily: "OpenSans-Regular",
          }}
        >
          {NumberFormat(amount, currency, exchangeRate, decimalEnabled)}
        </Text>
      </View>

      <DashedBorder vertical={false} />
    </View>
  );
};

export default MovementItem;
