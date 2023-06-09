import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { categories } from "../utils/data/data";
import CategoryItem from "../components/CategoryItem";

const SelectCategory = () => {
  const navigation = useNavigation();
  const [categoryName, setCategoryName] = useState("");
  return (
    <SafeAreaView style={{ flex: 1 }} className="mx-4 relative">
      <View className="flex relative flex-row justify-between items-center ">
        <TouchableOpacity onPress={navigation.goBack}>
          <Text style={{ fontSize: 30, fontFamily: "OpenSans-Regular" }}>
            <AntDesign name="close" size={30} color={colors.black} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="plus" size={30} color={colors.black} />
        </TouchableOpacity>
      </View>

      <View className="py-5">
        <TextInput
          placeholder="Research"
          value={categoryName}
          onChangeText={setCategoryName}
          style={{
            fontFamily: "OpenSans-Regular",
            color: colors.black,
            backgroundColor: colors.lightGray,
          }}
          className="py-4 px-4 text-xl rounded-full text-center"
          multiline={false}
        />
      </View>

      <View
        className="px-5"
        style={{
          maxHeight: 450,
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

      <View className="absolute bottom-14 left-0 w-full">
        <TouchableOpacity
          className="rounded-full py-4 my-2"
          style={{
            backgroundColor: colors.primary,
          }}
          onPress={() => navigation.navigate("NewCategory")}
        >
          <View className="flex flex-row items-center justify-center gap-2">
            <AntDesign name="lock1" size={30} color={colors.white} />
            <Text
              style={{
                fontFamily: "OpenSans-Regular",
                color: colors.white,
              }}
              className="text-2xl uppercase"
            >
              New Category
            </Text>
          </View>
        </TouchableOpacity>

        <Text
          style={{
            fontFamily: "OpenSans-Regular",
            color: colors.black,
          }}
          className="text-sm text-center"
        >
          themoneyvisor@gmail.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SelectCategory;
