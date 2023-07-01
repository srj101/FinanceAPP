import { View, Text } from "react-native";
import React, { useMemo } from "react";
import MonthAnalysisCard from "./MonthAnalysisCard";
import colors from "../../utils/colors";
import { useSelector } from "react-redux";
import NoMovement from "./movement/NoMovement";

const Analysis = () => {
  const { currentMonth, movements } = useSelector((state) => state.movement);

  const currentMonthEstBudgets = useMemo(() => {
    return movements[currentMonth].estimatedBudgets;
  }, [currentMonth]);

  const currentMonthActBudgets = useMemo(() => {
    return movements[currentMonth].actualBudgets;
  }, [currentMonth]);

  const categories = useMemo(() => {
    let categories = [];

    currentMonthEstBudgets.forEach((b) => {
      const isActCatExists = currentMonthActBudgets.find(
        (a) => a.category.id === b.category.id
      );

      if (!isActCatExists) {
        categories.push({
          category: b.category,
          forseen: b.amount,
          accomplished: 0,
          gap: b.amount,
        });
      } else {
        categories.push({
          category: b.category,
          forseen: b.amount,
          accomplished: isActCatExists.amount,
          gap: b.amount - isActCatExists.amount,
        });
      }
    });

    currentMonthActBudgets.forEach((b) => {
      const isEstCatExists = currentMonthEstBudgets.find(
        (a) => a.category.id === b.category.id
      );

      if (categories.find((c) => c.category.id === b.category.id)) {
        return;
      }

      if (!isEstCatExists) {
        categories.push({
          category: b.category,
          forseen: 0,
          accomplished: b.amount,
          gap: -b.amount,
        });
      } else {
        categories.push({
          category: b.category,
          forseen: isEstCatExists.amount,
          accomplished: b.amount,
          gap: isEstCatExists.amount - b.amount,
        });
      }
    });

    return categories;
  }, [currentMonthEstBudgets, currentMonthActBudgets]);

  return (
    <View className="px-4 py-3">
      <Text
        className="capitalize text-4xl pt-4 pb-6"
        style={{
          fontFamily: "DancingScript-SemiBold",
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
