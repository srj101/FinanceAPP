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
  const { currency, decimalEnabled } = useSelector((state) => state.settings);
  return (
    <View>
      <Text
        className="capitalize text-2xl font-extrabold py-4"
        style={{
          fontFamily: "OpenSans-Bold",
        }}
      >
        {title}
      </Text>

      <View className="flex flex-row justify-between items-center mt-4">
        <View className="flex flex-col items-center justify-center gap-4">
          <Text
            className="text-sm font-semibold"
            style={{
              fontFamily: "OpenSans-SemiBold",
            }}
          >
            Revenus
          </Text>

          <Text>{NumberFormat(revenue, currency, decimalEnabled)}</Text>
        </View>
        <DashedBorder />
        <View className="flex flex-col items-center justify-center gap-4">
          <Text
            className="text-sm font-semibold"
            style={{
              fontFamily: "OpenSans-SemiBold",
            }}
          >
            Dépenses
          </Text>
          <Text>{NumberFormat(expense, currency, decimalEnabled)}</Text>
        </View>
        <DashedBorder />
        <View className="flex flex-col items-center justify-center gap-4">
          <Text
            className="text-sm font-semibold"
            style={{
              fontFamily: "OpenSans-SemiBold",
            }}
          >
            Solde
          </Text>
          <Text>{NumberFormat(balance, currency, decimalEnabled)}</Text>
        </View>
      </View>
    </View>
  );
};

export default MonthBudgetCard;
