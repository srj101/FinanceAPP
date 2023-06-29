import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Animated,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import slides from "../utils/data/slides";
import OnBoardingItem from "../components/OnBoardingItem";
import Paginator from "../components/Paginator";
import NextButton from "../components/NextButton";
import { useNavigation } from "@react-navigation/native";
import { save } from "../utils/secureStorage";

const OnBoarding = () => {
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const slideRef = React.useRef(null);

  const viewableItemsChanged = React.useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log("Hello from OnBoarding.js");
    }
  };

  return (
    <SafeAreaView style={styles.container} className="relative">
      {/** Logo Image */}
      <View className={currentIndex === 0 ? `pt-20` : `pt-10`}>
        <Image source={require("../assets/logo.png")} style={{ height: 50 }} />
      </View>

      {
        /** Skip Button */
        currentIndex === slides.length - 1 && (
          <TouchableOpacity
            className="absolute top-[20] right-[20]"
            onPress={async () => {
              await save("onboarding", "true");
              navigation.replace("Home", {});
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-Bold",
              }}
              className="text-md"
            >
              Ignorer
            </Text>
          </TouchableOpacity>
        )
      }

      {/** Onboarding Screens */}
      <View style={{ flex: 2 }}>
        <FlatList
          data={slides}
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
            <OnBoardingItem item={item} currentIndex={currentIndex} />
          )}
          scrollEventThrottle={32}
          viewabilityConfig={viewabilityConfig}
          ref={slideRef}
        />
      </View>

      {/** Next Button */}
      <NextButton data={slides[currentIndex]} scrollTo={scrollTo} />

      {/** Dots */}
      <Paginator data={slides} scrollX={scrollX} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OnBoarding;
