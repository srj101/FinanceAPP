import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import colors from "../utils/colors";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { deleteCategory } from "../providers/state/reducers/categories";
import { useNavigation } from "@react-navigation/native";

const CategoryITem = (props) => {
  const { item, navigation } = props;

  const dispatch = useDispatch();

  const translateX = useSharedValue(0);

  const penGesture = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: (event) => {
      translateX.value = withTiming(0);
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const deleteCategoryItem = useCallback(() => {
    dispatch(deleteCategory(item.id));
  }, []);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("EditCategory", {
          item,
        })
      }
    >
      <PanGestureHandler onGestureEvent={penGesture}>
        <Animated.View style={[styles.categoryItem, rStyle]}>
          <Text>{props.item.name}</Text>

          <TouchableOpacity
            styles={styles.iconContainer}
            onPress={deleteCategoryItem}
          >
            <AntDesign name="delete" size={24} color="black" />
          </TouchableOpacity>
        </Animated.View>
      </PanGestureHandler>
    </TouchableOpacity>
  );
};

const CategoryList = () => {
  const { categories } = useSelector((state) => state.categories);

  const navigation = useNavigation();

  return (
    <SafeAreaView className="mx-4">
      <View className="flex flex-row gap-3 py-5">
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons
            name="ios-arrow-back-outline"
            size={30}
            color={colors.black}
          />
        </TouchableOpacity>

        <Text
          className="text-2xl text-center"
          style={{
            fontFamily: "OpenSans-Bold",
            color: colors.black,
          }}
        >
          Categories
        </Text>
      </View>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryITem item={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    width: "100%",
    height: 50,
    marginVertical: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10,
    elevation: 10,
  },

  iconContainer: {
    position: "absolute",
    top: 0,
    right: 50,
    height: "100%",
  },
});

export default CategoryList;
