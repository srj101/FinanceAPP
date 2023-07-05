import { AntDesign } from "@expo/vector-icons";
import React, { useCallback } from "react";
import { Animated, FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import colors from "../utils/colors";
import MonthItem from "./MonthItem";
import { setCurrentMonth } from "../providers/state/reducers/movement";
import moment from "moment";
import { setCurrentMonthIdx } from "../providers/state/reducers/worth";

const MonthSlider = () => {
  const dispatch = useDispatch();

  const months = React.useMemo(() => {
    return moment.months().map((m, i) => {
      return {
        id: i.toString(),
        month: m,
      };
    });
  }, []);

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const monthRef = React.useRef(null);

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = React.useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const movePrev = useCallback(() => {
    if (currentIndex > 0) {
      monthRef.current.scrollToIndex({ index: currentIndex - 1 });
    }
  }, [currentIndex]);

  const moveNext = useCallback(() => {
    if (currentIndex < months.length - 1) {
      monthRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  }, [currentIndex]);

  React.useEffect(() => {
    const currentYearMonthIndex = moment().month();
    setCurrentIndex(currentYearMonthIndex);
  }, []);

  React.useEffect(() => {
    dispatch(setCurrentMonth(currentIndex));
    dispatch(setCurrentMonthIdx(currentIndex));
  }, [currentIndex]);

  return (
    <View className="flex flex-row items-center gap-3">
      <AntDesign
        name="left"
        size={20}
        color={colors.primary}
        onPress={movePrev}
      />
      <View
        style={{
          width: 100,
        }}
      >
        <FlatList
          initialScrollIndex={currentIndex}
          getItemLayout={(data, index) => ({
            length: 100,
            offset: 100 * index,
            index,
          })}
          data={months}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          renderItem={({ item }) => (
            <MonthItem item={item} currentIndex={currentIndex} />
          )}
          scrollEventThrottle={32}
          viewabilityConfig={viewabilityConfig}
          ref={monthRef}
        />
      </View>
      <AntDesign
        name="right"
        size={20}
        color={colors.primary}
        onPress={moveNext}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MonthSlider;
