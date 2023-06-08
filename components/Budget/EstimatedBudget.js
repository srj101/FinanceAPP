import { View } from "react-native";
import React from "react";
import MonthBudgetCard from "./MonthBudgetCard";
import Movement from "./movement/movementCard";
import { incomeMovements } from "../../utils/data/data";

const EstimatedBudget = () => {
  return (
    <View className="px-4 py-3">
      <MonthBudgetCard
        title="My Estimated budget"
        expense={0.0}
        revenue={0.0}
        balance={0.0}
      />

      <Movement title="My Income" movements={incomeMovements} />

      <Movement title="My Spend" movements={incomeMovements} />
    </View>
  );
};

export default EstimatedBudget;
