import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import colors from "../utils/colors";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { deleteCategory } from "../providers/state/reducers/categories";
import { useNavigation } from "@react-navigation/native";

const CategoryITem = (props) => {
  const { item, navigation } = props;
  const {
    name,
    icon: { icon },
    color: { color },
  } = item;

  const dispatch = useDispatch();

  const deleteCategoryItem = useCallback(() => {
    Alert.alert(
      "Delete Category",
      "Are you sure you want to delete this category?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },

        {
          text: "OK",
          onPress: () => dispatch(deleteCategory(item.id)),
        },
      ],
      { cancelable: true }
    );
  }, []);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("EditCategory", {
          item,
        })
      }
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: colors.lightGray,
        }}
        className="flex flex-row justify-between items-center py-4"
      >
        <View className="flex flex-row gap-5 items-center">
          <AntDesign name={icon} size={25} color={color} />

          <Text
            className="text-3xl"
            style={{
              fontFamily: "TheHand-Regular",
              color: colors.black,
            }}
          >
            {name}
          </Text>
        </View>

        <TouchableOpacity styles={{}} onPress={deleteCategoryItem}>
          <AntDesign name="delete" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const CategoryList = () => {
  const { categories } = useSelector((state) => state.categories);

  const navigation = useNavigation();

  return (
    <SafeAreaView className="mx-4 relative flex-1">
      <TouchableOpacity onPress={navigation.goBack} className="pt-5">
        <Ionicons
          name="ios-arrow-back-outline"
          size={25}
          color={colors.black}
        />
      </TouchableOpacity>

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

export default CategoryList;
