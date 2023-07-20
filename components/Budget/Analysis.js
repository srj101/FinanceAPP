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

  const currentMonthEstRevenues = useMemo(() => {
    const categories = [];

    currentMonthEstBudgetRevenues.forEach((b) => {
      const category = categories.find((c) => c.category.id === b.category.id);

      if (category) {
        category.amount += b.amount;
      } else {
        categories.push({
          category: b.category,
          amount: b.amount,
        });
      }
    });

    return categories;
  }, [currentMonthEstBudgetRevenues]);

  const currentMonthEstExpenses = useMemo(() => {
    const categories = [];

    currentMonthEstBudgetExpenses.forEach((b) => {
      const category = categories.find((c) => c.category.id === b.category.id);

      if (category) {
        category.amount += b.amount;
      } else {
        categories.push({
          category: b.category,
          amount: b.amount,
        });
      }
    });

    return categories;
  }, [currentMonthEstBudgetExpenses]);

  const currentMonthActRevenues = useMemo(() => {
    const categories = [];

    currentMonthActBudgetRevenues.forEach((b) => {
      const category = categories.find((c) => c.category.id === b.category.id);

      if (category) {
        category.amount += b.amount;
      } else {
        categories.push({
          category: b.category,
          amount: b.amount,
        });
      }
    });

    return categories;
  }, [currentMonthActBudgetRevenues]);

  const currentMonthActExpenses = useMemo(() => {
    const categories = [];

    currentMonthActBudgetExpenses.forEach((b) => {
      const category = categories.find((c) => c.category.id === b.category.id);

      if (category) {
        category.amount += b.amount;
      } else {
        categories.push({
          category: b.category,
          amount: b.amount,
        });
      }
    });

    return categories;
  }, [currentMonthActBudgetExpenses]);

  const categoriesRevenues = useMemo(() => {
    const categories = [];

    currentMonthEstRevenues.forEach((b) => {
      const category = categories.find((c) => c.category.id === b.category.id);

      if (category) {
        category.forseen += b.amount;
      } else {
        categories.push({
          category: b.category,
          forseen: b.amount,
          accomplished: 0,
          gap: 0,
        });
      }
    });

    currentMonthActRevenues.forEach((b) => {
      const category = categories.find((c) => c.category.id === b.category.id);

      if (category) {
        category.accomplished += b.amount;
      } else {
        categories.push({
          category: b.category,
          forseen: 0,
          accomplished: b.amount,
          gap: 0,
        });
      }
    });

    categories.forEach((c) => {
      c.gap = c.accomplished - c.forseen;
    });

    return categories;
  }, [currentMonthEstRevenues, currentMonthActRevenues]);

  const categoriesExpenses = useMemo(() => {
    const categories = [];

    currentMonthEstExpenses.forEach((b) => {
      const category = categories.find((c) => c.category.id === b.category.id);

      if (category) {
        category.forseen += b.amount;
      } else {
        categories.push({
          category: b.category,
          forseen: b.amount,
          accomplished: 0,
          gap: 0,
        });
      }
    });

    currentMonthActExpenses.forEach((b) => {
      const category = categories.find((c) => c.category.id === b.category.id);

      if (category) {
        category.accomplished += b.amount;
      } else {
        categories.push({
          category: b.category,
          forseen: 0,
          accomplished: b.amount,
          gap: 0,
        });
      }
    });

    categories.forEach((c) => {
      c.gap = c.forseen - c.accomplished;
    });

    return categories;
  }, [currentMonthEstExpenses, currentMonthActExpenses]);

  const categories = useMemo(() => {
    return [...categoriesRevenues, ...categoriesExpenses];
  }, [categoriesRevenues, categoriesExpenses]);

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
