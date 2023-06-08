import { View, Text } from "react-native";
import React from "react";
import MonthAnalysisCard from "./MonthAnalysisCard";
import colors from "../../utils/colors";

const Analysis = () => {
  return (
    <View className="px-4">
      <Text
        className="capitalize text-2xl font-extrabold pt-4"
        style={{
          fontFamily: "OpenSans-Bold",
        }}
      >
        My end of month analysis
      </Text>

      <MonthAnalysisCard title="Salary" forseen={0} accomplished={0} gap={0} />
      <MonthAnalysisCard
        title="Others"
        forseen={0}
        accomplished={0}
        gap={0}
        color={colors.red}
      />
      <MonthAnalysisCard
        title="Accommodation"
        forseen={0}
        accomplished={0}
        gap={0}
      />
    </View>
  );
};

export default Analysis;
