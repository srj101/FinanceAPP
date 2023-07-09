import { View } from "react-native";
import React, { useMemo } from "react";
import MonthBudgetCard from "./MonthBudgetCard";
import Movement from "./movement/movementCard";
import { useSelector } from "react-redux";

const EstimatedBudget = () => {
  const { currentMonth, estimatedMovements, updated } = useSelector(
    (state) => state.movement
  );

  const currentMonthEstBudgets = useMemo(() => {
    return estimatedMovements[currentMonth].data;
  }, [currentMonth, estimatedMovements, updated]);

  const currentMonthExpense = useMemo(() => {
    return currentMonthEstBudgets.filter((b) => b.type === "Dépense");
  }, [currentMonthEstBudgets]);

  const currentMonthRevenue = useMemo(() => {
    return currentMonthEstBudgets.filter((b) => b.type === "Revenu");
  }, [currentMonthEstBudgets]);

  const totalExpense = useMemo(() => {
    return currentMonthExpense.reduce((acc, cur) => acc + cur.amount, 0);
  }, [currentMonthExpense]);

  const totalRevenue = useMemo(() => {
    return currentMonthRevenue.reduce((acc, cur) => acc + cur.amount, 0);
  }, [currentMonthRevenue]);

  const currentMonthBalance = useMemo(() => {
    return totalRevenue - totalExpense;
  }, [totalExpense, totalRevenue]);

  return (
    <View className="px-4 py-3">
      <MonthBudgetCard
        title="Mon budget prévisionnel"
        expense={totalExpense}
        revenue={totalRevenue}
        balance={currentMonthBalance}
      />

      <Movement
        title="Mes revenus"
        movements={currentMonthRevenue}
        type="revenue"
        movementType="estimatedBudgets"
      />

      <Movement
        title="Mes dépenses"
        movements={currentMonthExpense}
        type="expense"
        movementType="estimatedBudgets"
      />
    </View>
  );
};

export default EstimatedBudget;
