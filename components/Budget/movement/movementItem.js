import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import DashedBorder from "../../DashedBorder";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../../utils/colors";

const MovementItem = ({ item }) => {
  const { icon, id, amount, color, date, category, notes } = item;

  const { currency } = useSelector((state) => state.settings);
  return (
    <View>
      <View className="flex flex-row justify-between items-center py-4">
        <View style={{}} className="flex flex-row items-center gap-3">
          <AntDesign
            name={category?.icon?.icon || "questioncircleo"}
            size={35}
            color={category?.color?.color || colors.black}
          />
          <Text
            className="text-lg font-regular"
            style={{
              fontFamily: "OpenSans-Regular",
            }}
          >
            {category?.name || "Uncategorized"}
          </Text>
        </View>

        <Text>
          {amount.toFixed(2)} {currency}
        </Text>
      </View>

      <DashedBorder vertical={false} />
    </View>
  );
};

export default MovementItem;
