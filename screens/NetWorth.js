import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import MonthSlider from "../components/MonthSlider";
import colors from "../utils/colors";
import Paginator from "../components/Paginator";
import netWorthPages from "../utils/data/netWorthPages";
import { useNavigation } from "@react-navigation/native";
import NetWorthPage from "../components/NetWorth/NetWorthPage";
import { useDispatch } from "react-redux";
import {
  setCurrentMonthIdx,
  setWorthType,
} from "../providers/state/reducers/worth";

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
    let type = "";
    if (currentIndex === 1 || currentIndex === 0) {
      type = "ASSETS";
    }
    if (currentIndex === 2) {
      type = "LIABILITIES";
    }
    dispatch(setWorthType(type));
  }, [currentIndex]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex relative flex-row justify-between items-center mx-4">
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
      </View>

      <View className="absolute bottom-5 flex flex-row justify-center w-full items-center ">
        <Paginator
          data={netWorthPages}
          scrollX={scrollX}
          netWorthRef={netWorthRef}
        />
      </View>

      <TouchableOpacity
        className="absolute bottom-8 right-5  "
        onPress={() => navigation.navigate("AddNetWorthMovementStack")}
      >
        <AntDesign name="pluscircleo" size={45} color={colors.green} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NetWorth;
