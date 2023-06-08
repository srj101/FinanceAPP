import {
  View,
  useWindowDimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import EstimatedBudget from "./EstimatedBudget";
import RealBudget from "./RealBudget";
import Analysis from "./Analysis";
import AppLoading from "../AppLoading";

const MonthlyBudgetItem = ({ item, currentIndex }) => {
  const { width, height } = useWindowDimensions();

  const currentIdx = React.useMemo(() => {
    return currentIndex;
  }, [currentIndex]);

  let renderedComponent;

  switch (currentIdx) {
    case 0:
      renderedComponent = <EstimatedBudget />;
      break;
    case 1:
      renderedComponent = <RealBudget />;
      break;
    case 2:
      renderedComponent = <Analysis />;
      break;
    default:
      renderedComponent = <AppLoading />;
  }

  return (
    <ScrollView style={[styles.container, { width, height: height - 160 }]}>
      {renderedComponent}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MonthlyBudgetItem;
