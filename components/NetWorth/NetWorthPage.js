import React from "react";
import { ScrollView, StyleSheet, useWindowDimensions } from "react-native";
import AppLoading from "../AppLoading";
import Assets from "./Assets";
import Liabilities from "./Liabilities";
import NetWorth from "./NetWorth";

const NetWorthPage = ({ item, currentIndex }) => {
  const { width, height } = useWindowDimensions();

  const currentIdx = React.useMemo(() => {
    return currentIndex;
  }, [currentIndex]);

  let renderedComponent;

  switch (currentIdx) {
    case 0:
      renderedComponent = <NetWorth />;
      break;
    case 1:
      renderedComponent = <Assets />;
      break;
    case 2:
      renderedComponent = <Liabilities />;
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

export default NetWorthPage;
