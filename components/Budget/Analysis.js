import { View, Text } from "react-native";
import React, { useMemo } from "react";
import MonthAnalysisCard from "./MonthAnalysisCard";
import colors from "../../utils/colors";
import { useSelector } from "react-redux";

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
    <View className="px-4">
      <Text
        className="capitalize text-2xl font-extrabold pt-4"
        style={{
          fontFamily: "OpenSans-Bold",
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
        <Text
          className="text-sm text-center py-10"
          style={{
            fontFamily: "OpenSans-Regular",
          }}
        >
          Pas d'analyse pour ce mois
        </Text>
      )}
    </View>
  );
};

export default Analysis;
