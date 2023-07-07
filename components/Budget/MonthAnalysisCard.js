import { View, Text } from "react-native";
import React from "react";
import DashedBorder from "../DashedBorder";
import { useSelector } from "react-redux";
import { NumberFormat } from "../../utils/funtions";

const MonthAnalysisCard = ({
  title = "Salaire",
  forseen = 0,
  accomplished = 0,
  gap = 0,
  color = "#000",
}) => {
  const { currency, decimalEnabled, exchangeRate } = useSelector(
    (state) => state.settings
  );

  return (
    <View className="py-4">
      <Text
        className="text-3xl pb-4"
        style={{
          fontFamily: "TheHand-Bold",
          letterSpacing: 0.1,
        }}
      >
        {title}
      </Text>

      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-col items-start justify-center gap-4">
          <Text
            className="text-sm font-semibold"
            style={{
              fontFamily: "OpenSans-SemiBold",
            }}
          >
            Prévu
          </Text>

          <Text
            style={{
              fontFamily: "OpenSans-Regular",
            }}
          >
            {NumberFormat(forseen, currency, exchangeRate, decimalEnabled)}
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
            Réalisé
          </Text>
          <Text
            style={{
              fontFamily: "OpenSans-Regular",
            }}
          >
            {NumberFormat(accomplished, currency, exchangeRate, decimalEnabled)}
          </Text>
        </View>
        <DashedBorder />
        <View className="flex flex-col items-end justify-center gap-4">
          <Text
            className="text-sm font-semibold"
            style={{
              fontFamily: "OpenSans-SemiBold",
              color: color,
            }}
          >
            Ecart
          </Text>
          <Text
            style={{
              fontFamily: "OpenSans-Regular",
            }}
          >
            {NumberFormat(gap, currency, exchangeRate, decimalEnabled)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MonthAnalysisCard;
