import { View, Text } from "react-native";
import React from "react";
import { incomeMovements } from "../../utils/data/data";
import MonthBudgetCard from "./MonthBudgetCard";
import Movement from "./movement/movementCard";

const RealBudget = () => {
  return (
    <View className="px-4 py-3">
      <MonthBudgetCard
        title="My Real budget"
        expense={0.0}
        revenue={0.0}
        balance={0.0}
      />

      <Movement title="My Income" movements={incomeMovements} />

      <Movement title="My Spend" movements={incomeMovements} />
    </View>
  );
};

export default RealBudget;
