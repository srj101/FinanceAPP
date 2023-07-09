import { View } from "react-native";
import React, { useMemo } from "react";
import MonthBudgetCard from "./MonthBudgetCard";
import Movement from "./movement/movementCard";
import { useSelector } from "react-redux";
import { incomeMovements } from "../../utils/data/data";

const RealBudget = () => {
  const { currentMonth, actualMovements, updated } = useSelector(
    (state) => state.movement
  );

  const currentMonthActBudgets = useMemo(() => {
    return actualMovements[currentMonth].data;
  }, [currentMonth, actualMovements, updated]);

  const currentMonthExpense = useMemo(() => {
    return currentMonthActBudgets.filter((b) => b.type === "Dépense");
  }, [currentMonthActBudgets]);

  const currentMonthRevenue = useMemo(() => {
    return currentMonthActBudgets.filter((b) => b.type === "Revenu");
  }, [currentMonthActBudgets]);

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
        title="Mon budget réel"
        expense={totalExpense}
        revenue={totalRevenue}
        balance={currentMonthBalance}
      />

      <Movement
        title="Mes revenus"
        movements={currentMonthRevenue}
        type="revenue"
        movementType="actualBudgets"
      />

      <Movement
        title="Mes dépenses"
        movements={currentMonthExpense}
        type="expense"
        movementType="actualBudgets"
      />
    </View>
  );
};

export default RealBudget;
