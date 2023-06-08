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
      console.log("Purhcase");
    }
  };

  return (
    <SafeAreaView style={styles.container} className="relative">
      {/** Logo Image */}
      <View>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 200, height: 100 }}
        />
      </View>

      {
        /** Skip Button */
        currentIndex === slides.length - 1 && (
          <TouchableOpacity
            className="absolute top-[50] right-[30]"
            onPress={async () => {
              await save("onboarding", "true");
              navigation.replace("HomeStack", {});
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-Regular",
              }}
            >
              Ignore
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