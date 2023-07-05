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
          <Text
            className="text-xl"
            style={{
              fontFamily: "OpenSans-Regular",
              color: colors.black,
            }}
          >
            {props.item.name}
          </Text>

          <TouchableOpacity
            styles={styles.iconContainer}
            onPress={deleteCategoryItem}
          >
            <AntDesign name="delete" size={20} color="black" />
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
    <SafeAreaView className="px-4">
      <View className="flex flex-row gap-3 py-5 px-4">
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons
            name="ios-arrow-back-outline"
            size={25}
            color={colors.black}
          />
        </TouchableOpacity>

        <Text
          className="text-2xl text-center"
          style={{
            fontFamily: "OpenSans-Regular",
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
    paddingVertical: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
  },

  iconContainer: {
    position: "absolute",
    top: 0,
    right: 50,
    height: "100%",
  },
});

export default CategoryList;
