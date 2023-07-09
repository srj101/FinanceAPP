import { View, Text } from "react-native";
import React, { useMemo } from "react";
import MonthAnalysisCard from "./MonthAnalysisCard";
import colors from "../../utils/colors";
import { useSelector } from "react-redux";
import NoMovement from "./movement/NoMovement";

const Analysis = () => {
  const { currentMonth, actualMovements, estimatedMovements, updated } =
    useSelector((state) => state.movement);

  const currentMonthEstBudgets = useMemo(() => {
    return estimatedMovements[currentMonth].data;
  }, [currentMonth, estimatedMovements, updated]);

  const currentMonthActBudgets = useMemo(() => {
    return actualMovements[currentMonth].data;
  }, [currentMonth, actualMovements, updated]);

  const currentMonthEstBudgetRevenues = useMemo(() => {
    return currentMonthEstBudgets.filter((b) => b.type === "Revenu");
  }, [currentMonthEstBudgets]);

  const currentMonthEstBudgetExpenses = useMemo(() => {
    return currentMonthEstBudgets.filter((b) => b.type === "Dépense");
  }, [currentMonthEstBudgets]);

  const currentMonthActBudgetRevenues = useMemo(() => {
    return currentMonthActBudgets.filter((b) => b.type === "Revenu");
  }, [currentMonthActBudgets]);

  const currentMonthActBudgetExpenses = useMemo(() => {
    return currentMonthActBudgets.filter((b) => b.type === "Dépense");
  }, [currentMonthActBudgets]);

  const currentMonthEstAndActBudgetRevenuesAnalysis = useMemo(() => {
    const revenuesComparision = [];

    currentMonthEstBudgetRevenues.forEach((b) => {
      const isActCatExists = currentMonthActBudgetRevenues.find(
        (a) => a.category.id === b.category.id
      );

      if (!isActCatExists) {
        revenuesComparision.push({
          category: b.category,
          forseen: b.amount,
          accomplished: 0,
          gap: b.amount,
          type: b.type,
        });
      } else {
        revenuesComparision.push({
          category: b.category,
          forseen: b.amount,
          accomplished: isActCatExists.amount,
          gap: b.amount - isActCatExists.amount,
          type: b.type,
        });
      }
    });

    currentMonthActBudgetRevenues.forEach((b) => {
      const isEstCatExists = currentMonthEstBudgetRevenues.find(
        (a) => a.category.id === b.category.id
      );

      if (revenuesComparision.find((c) => c.category.id === b.category.id)) {
        return;
      }

      if (!isEstCatExists) {
        revenuesComparision.push({
          category: b.category,
          forseen: 0,
          accomplished: b.amount,
          gap: -b.amount,
          type: b.type,
        });
      } else {
        revenuesComparision.push({
          category: b.category,
          forseen: isEstCatExists.amount,
          accomplished: b.amount,
          gap: isEstCatExists.amount - b.amount,
          type: b.type,
        });
      }
    });

    return revenuesComparision;
  }, [currentMonthEstBudgetRevenues, currentMonthActBudgetRevenues]);

  const currentMonthEstAndActBudgetExpensesAnalysis = useMemo(() => {
    const expensesComparision = [];

    currentMonthEstBudgetExpenses.forEach((b) => {
      const isActCatExists = currentMonthActBudgetExpenses.find(
        (a) => a.category.id === b.category.id
      );

      if (!isActCatExists) {
        expensesComparision.push({
          category: b.category,
          forseen: b.amount,
          accomplished: 0,
          gap: b.amount,
          type: b.type,
        });
      } else {
        expensesComparision.push({
          category: b.category,
          forseen: b.amount,
          accomplished: isActCatExists.amount,
          gap: b.amount - isActCatExists.amount,
          type: b.type,
        });
      }
    });

    currentMonthActBudgetExpenses.forEach((b) => {
      const isEstCatExists = currentMonthEstBudgetExpenses.find(
        (a) => a.category.id === b.category.id
      );

      if (expensesComparision.find((c) => c.category.id === b.category.id)) {
        return;
      }

      if (!isEstCatExists) {
        expensesComparision.push({
          category: b.category,
          forseen: 0,
          accomplished: b.amount,
          gap: -b.amount,
          type: b.type,
        });
      } else {
        expensesComparision.push({
          category: b.category,
          forseen: isEstCatExists.amount,
          accomplished: b.amount,
          gap: isEstCatExists.amount - b.amount,
          type: b.type,
        });
      }
    });

    return expensesComparision;
  }, [currentMonthEstBudgetExpenses, currentMonthActBudgetExpenses]);

  const categories = useMemo(() => {
    const revenues = currentMonthEstAndActBudgetRevenuesAnalysis.map((r) => ({
      category: r.category,
      forseen: r.forseen,
      accomplished: r.accomplished,
      gap: -r.gap,
      type: r.type,
    }));

    const expenses = currentMonthEstAndActBudgetExpensesAnalysis.map((e) => ({
      category: e.category,
      forseen: e.forseen,
      accomplished: e.accomplished,
      gap: e.gap,
      type: e.type,
    }));

    return [...revenues, ...expenses];
  }, []);

  return (
    <View className="px-4 py-3">
      <Text
        className="capitalize text-4xl pt-4 pb-6"
        style={{
          fontFamily: "TheHand-Bold",
        }}
      >
        Mon analyse de fin de mois
      </Text>

      {categories.length > 0 ? (
        categories.map((c) => (
          <MonthAnalysisCard
            key={c.category.id}
            title={c.category.name}
            forseen={c.forseen}
            accomplished={c.accomplished}
            gap={c.gap}
            color={c.gap > 0 ? colors.green : colors.red}
          />
        ))
      ) : (
        <NoMovement type="revenue" analysis={true} />
      )}
    </View>
  );
};

export default Analysis;
