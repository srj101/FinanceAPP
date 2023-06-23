import { View, Text } from "react-native";
import React from "react";
import DashedBorder from "../DashedBorder";
import { useSelector } from "react-redux";

const MonthAnalysisCard = ({
  title = "Salaire",
  forseen = 0,
  accomplished = 0,
  gap = 0,
  color = "#000",
}) => {
  const { currency } = useSelector((state) => state.settings);

  return (
    <View className="py-4">
      <Text
        className="capitalize text-xl font-extrabold py-4"
        style={{
          fontFamily: "OpenSans-Bold",
        }}
      >
        {title}
      </Text>

      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-col items-center justify-center gap-4">
          <Text
            className="text-sm font-semibold"
            style={{
              fontFamily: "OpenSans-SemiBold",
            }}
          >
            Prévu
          </Text>

          <Text>
            {forseen.toFixed(2)} {currency}
          </Text>
        </View>
        <DashedBorder />
        <View className="flex flex-col items-center justify-center gap-4">
          <Text
            className="text-sm font-semibold"
            style={{
              fontFamily: "OpenSans-SemiBold",
              color: color,
            }}
          >
            Réalisé
          </Text>
          <Text>
            {accomplished.toFixed(2)} {currency}
          </Text>
        </View>
        <DashedBorder />
        <View className="flex flex-col items-center justify-center gap-4">
          <Text
            className="text-sm font-semibold"
            style={{
              fontFamily: "OpenSans-SemiBold",
            }}
          >
            Ecart
          </Text>
          <Text>
            {gap.toFixed(2)} {currency}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MonthAnalysisCard;
