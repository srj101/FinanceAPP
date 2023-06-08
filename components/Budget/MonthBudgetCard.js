import { View, Text } from "react-native";
import React from "react";
import DashedBorder from "../DashedBorder";

const MonthBudgetCard = ({
  title = "Budget",
  revenue = 0,
  expense = 0,
  balance = 0,
}) => {
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
            Revenue
          </Text>

          <Text>{revenue.toFixed(2)} €</Text>
        </View>
        <DashedBorder />
        <View className="flex flex-col items-center justify-center gap-4">
          <Text
            className="text-sm font-semibold"
            style={{
              fontFamily: "OpenSans-SemiBold",
            }}
          >
            Expenses
          </Text>
          <Text>{expense.toFixed(2)} €</Text>
        </View>
        <DashedBorder />
        <View className="flex flex-col items-center justify-center gap-4">
          <Text
            className="text-sm font-semibold"
            style={{
              fontFamily: "OpenSans-SemiBold",
            }}
          >
            Balance
          </Text>
          <Text>{balance.toFixed(2)} €</Text>
        </View>
      </View>
    </View>
  );
};

export default MonthBudgetCard;
