import { View, useWindowDimensions, StyleSheet } from "react-native";
import React from "react";
import Welcome from "./Welcome";
import UpgradePlan from "./UpgradePlan";

const OnBoardingItem = ({ item, currentIndex }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      {currentIndex === 0 ? <Welcome /> : <UpgradePlan />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default OnBoardingItem;
