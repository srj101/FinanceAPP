import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Animated,
} from "react-native";
import React, { useEffect } from "react";
import { Feather, AntDesign } from "@expo/vector-icons";
import MonthSlider from "../components/MonthSlider";
import monthlyBudgets from "../utils/data/monthlyBudgets";
import MonthlyBudgetItem from "../components/Budget/MonthlyBudgetItem";
import Paginator from "../components/Paginator";
import colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import {
  setCurrentMonth,
  setMovementType,
} from "../providers/state/reducers/movement";

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        className="flex relative flex-row justify-between items-center mx-4"
        style={{}}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={{ fontSize: 30, fontFamily: "OpenSans-Regular" }}>
            💸
          </Text>
        </TouchableOpacity>

        <View>
          <MonthSlider />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("SettingsStack")}>
          <Feather name="settings" size={30} color={colors.black} />
        </TouchableOpacity>
      </View>

      <View>
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
      </View>

      <View className="absolute bottom-5 flex flex-row justify-center w-full items-center ">
        <Paginator
          data={monthlyBudgets}
          scrollX={scrollX}
          budgetRef={budgetsRef}
        />
      </View>

      <TouchableOpacity
        className="absolute bottom-8 right-5  "
        onPress={() => {
          const movementTypes = ["ESTIMATED_BUDGET", "REAL_BUDGET"];
          dispatch(setMovementType(movementTypes[currentIndex]));
          navigation.navigate("AddMovementStack");
        }}
      >
        <AntDesign name="pluscircleo" size={45} color={colors.primary} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MonthlyBudget;
