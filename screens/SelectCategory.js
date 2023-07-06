import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import colors from "../utils/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import CategoryItem from "../components/CategoryItem";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../providers/state/reducers/movement";
import AppLoading from "../components/AppLoading";

const SelectCategory = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const { categories: allCats } = useSelector((state) => state.categories);

  const { selectedCategory } = useSelector((state) => state.movement);

  const categories = React.useMemo(() => {
    return allCats.filter((cat) => cat.type === route.params?.type);
  }, [allCats]);

  if (!categories.length) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} className="mx-4 relative">
      <View className="flex relative flex-row justify-between items-center ">
        <TouchableOpacity onPress={navigation.goBack}>
          <Text style={{ fontSize: 30, fontFamily: "OpenSans-Regular" }}>
            <AntDesign name="close" size={30} color={colors.black} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("NewCategory", {
              type: route.params?.type,
            })
          }
        >
          <AntDesign name="plus" size={30} color={colors.black} />
        </TouchableOpacity>
      </View>

      <View className="py-5">
        <TextInput
          placeholder="Recherche"
          value={selectedCategory ? selectedCategory.name : ""}
          disableFullscreenUI={true}
          aria-disabled={true}
          style={{
            fontFamily: "OpenSans-Regular",
            color: colors.black,
            backgroundColor: colors.lightGray,
          }}
          className="py-4 px-4 text-xl rounded-md text-center leading-5"
          multiline={false}
        />
      </View>

      <View
        className="px-5"
        style={{
          maxHeight: 420,
        }}
      >
        <FlatList
          data={categories}
          renderItem={({ item }) => <CategoryItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View className="absolute bottom-5 left-0 w-full">
        <TouchableOpacity
          className="rounded-md mx-12 py-3 my-2"
          style={{
            backgroundColor: colors.primary,
          }}
          onPress={() =>
            navigation.navigate("NewCategory", {
              type: route.params?.type,
            })
          }
        >
          <View className="flex flex-row items-center justify-center gap-2">
            <AntDesign name="lock1" size={18} color={colors.white} />
            <Text
              style={{
                fontFamily: "OpenSans-Regular",
                color: colors.white,
              }}
              className="text-lg uppercase"
            >
              NOUVELLE CATÉGORIE
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectCategory;
