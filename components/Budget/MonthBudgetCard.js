import { View, Text } from "react-native";
import React from "react";
import DashedBorder from "../DashedBorder";
import { useSelector } from "react-redux";
import { NumberFormat } from "../../utils/funtions";

const MonthBudgetCard = ({
  title = "Budget",
  revenue = 0,
  expense = 0,
  balance = 0,
}) => {
  const { currency, decimalEnabled, exchangeRate } = useSelector(
    (state) => state.settings
  );
  return (
    <View className="pb-4">
      <Text
        className="capitalize text-4xl pt-4 pb-6"
        style={{
          fontFamily: "DancingScript-SemiBold",
        }}
      >
        {title}
      </Text>

      <View className="flex flex-row justify-between items-center mt-4 px-5">
        <View className="flex flex-col items-center justify-center gap-4">
          <Text
            className="text-sm uppercase"
            style={{
              fontFamily: "OpenSans-SemiBold",
            }}
          >
            Revenus
          </Text>

          <Text
            className="text-lg font-semibold"
            style={{
              fontFamily: "OpenSans-SemiBold",
            }}
          >
            {NumberFormat(revenue, currency, exchangeRate, decimalEnabled)}
          </Text>
        </View>
        <DashedBorder />
        <View className="flex flex-col items-center justify-center gap-4">
          <Text
            className="text-sm font-semibold uppercase"
            style={{
              fontFamily: "OpenSans-SemiBold",
            }}
          >
            Dépenses
          </Text>
          <Text
            className="text-lg font-semibold"
            style={{
              fontFamily: "OpenSans-SemiBold",
            }}
          >
            {NumberFormat(expense, currency, exchangeRate, decimalEnabled)}
          </Text>
        </View>
        <DashedBorder />
        <View className="flex flex-col items-center justify-center gap-4">
          <Text
            className="text-sm font-semibold uppercase"
            style={{
              fontFamily: "OpenSans-SemiBold",
            }}
          >
            Solde
          </Text>
          <Text
            className="text-lg font-semibold"
            style={{
              fontFamily: "OpenSans-SemiBold",
            }}
          >
            {NumberFormat(balance, currency, exchangeRate, decimalEnabled)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MonthBudgetCard;
