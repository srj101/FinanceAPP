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
import MonthSlider from "../components/MonthSlider";
import NetWorthPage from "../components/NetWorth/NetWorthPage";
import Paginator from "../components/Paginator";
import {
  setCurrentMonthIdx,
  setWorthType,
} from "../providers/state/reducers/worth";
import colors from "../utils/colors";
import netWorthPages from "../utils/data/netWorthPages";

const NetWorth = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const netWorthRef = React.useRef(null);

  const viewableItemsChanged = React.useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  useEffect(() => {
    dispatch(setCurrentMonthIdx(0));
  }, []);

  useEffect(() => {
    let types = ["ASSETS", "ASSETS", "LIABILITIES"];

    let type = types[currentIndex];

    dispatch(setWorthType(type));
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
          data={netWorthPages}
          keyExtractor={(item) => item.id.toString()}
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
            <NetWorthPage item={item} currentIndex={currentIndex} />
          )}
          scrollEventThrottle={32}
          viewabilityConfig={viewabilityConfig}
          ref={netWorthRef}
        />
      </ScrollView>

      <View className="absolute bottom-5 flex flex-row justify-center w-full items-center ">
        <Paginator
          data={netWorthPages}
          scrollX={scrollX}
          netWorthRef={netWorthRef}
        />
      </View>

      <TouchableOpacity
        className="absolute bottom-8 right-5  "
        onPress={() => navigation.navigate("AddNetWorthMovement")}
        style={{
          backgroundColor: colors.yellow,
          borderRadius: 100,
          padding: 10,
        }}
      >
        <Entypo name="plus" size={25} color={colors.white} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NetWorth;
