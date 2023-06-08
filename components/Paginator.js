import { StyleSheet, Animated, View, useWindowDimensions } from "react-native";
import React from "react";
import COLORS from "../utils/colors";

const Paginator = ({ data, scrollX, budgetRef }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [20, 40, 20],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={i.toString()}
            style={[styles.dot, { width: dotWidth, opacity }]}
            onPress={() => {
              if (!budgetRef) return;

              budgetRef.current.scrollToIndex({
                index: i,
              });
            }}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
    alignItems: "center",
  },
  dot: {
    height: 20,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    marginHorizontal: 8,
    width: 20,
  },
});
