import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Animated,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import MonthlyBudgetItem from "../components/Budget/MonthlyBudgetItem";
import MonthSlider from "../components/MonthSlider";
import Paginator from "../components/Paginator";
import {
  setCurrentMonth,
  setMovementType,
} from "../providers/state/reducers/movement";
import colors from "../utils/colors";
import monthlyBudgets from "../utils/data/monthlyBudgets";

const MonthlyBudget = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const budgetsRef = React.useRef(null);

  const viewableItemsChanged = React.useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  useEffect(() => {
    dispatch(setCurrentMonth(0));
  }, []);

  useEffect(() => {
    const movementTypes = ["estimatedBudgets", "actualBudgets"];
    dispatch(setMovementType(movementTypes[currentIndex]));
  }, [currentIndex]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        className="flex relative flex-row justify-between items-center mx-4 my-3"
        style={{}}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons
            name="ios-arrow-back-outline"
            size={25}
            color={colors.black}
          />
        </TouchableOpacity>

        <View>
          <MonthSlider />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Feather name="circle" size={25} color={colors.black} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <FlatList
          data={monthlyBudgets}
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
            <MonthlyBudgetItem item={item} currentIndex={currentIndex} />
          )}
          scrollEventThrottle={32}
          viewabilityConfig={viewabilityConfig}
          ref={budgetsRef}
        />
      </ScrollView>

      <View className="absolute bottom-5 flex flex-row justify-center w-full items-center ">
        <Paginator
          data={monthlyBudgets}
          scrollX={scrollX}
          budgetRef={budgetsRef}
        />
      </View>

      {currentIndex !== 2 && (
        <TouchableOpacity
          className="absolute bottom-8 right-5"
          onPress={() => {
            navigation.navigate("AddMovement");
          }}
          style={{
            backgroundColor: colors.yellow,
            borderRadius: 100,
            padding: 10,
          }}
        >
          <Entypo name="plus" size={25} color={colors.white} />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default MonthlyBudget;
