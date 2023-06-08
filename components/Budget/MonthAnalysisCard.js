import { View, Text } from "react-native";
import React from "react";
import DashedBorder from "../DashedBorder";

const MonthAnalysisCard = ({
  title = "Salary",
  forseen = 0,
  accomplished = 0,
  gap = 0,
  color = "#000",
}) => {
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
            Foreseen
          </Text>

          <Text>{forseen.toFixed(2)} €</Text>
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
            Accomplished
          </Text>
          <Text>{accomplished.toFixed(2)} €</Text>
        </View>
        <DashedBorder />
        <View className="flex flex-col items-center justify-center gap-4">
          <Text
            className="text-sm font-semibold"
            style={{
              fontFamily: "OpenSans-SemiBold",
            }}
          >
            Gap
          </Text>
          <Text>{gap.toFixed(2)} €</Text>
        </View>
      </View>
    </View>
  );
};

export default MonthAnalysisCard;
