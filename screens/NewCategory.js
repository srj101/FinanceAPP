import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Octicons } from "@expo/vector-icons";
import colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { colorOptions, icons } from "../utils/data/data";
import Color from "../components/Color";
import IconItem from "../components/IconItem";
import { useDispatch } from "react-redux";
import {
  addCategory,
  resetState,
} from "../providers/state/reducers/categories";

const NewCategory = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState("");
  const [categoryColor, setCategoryColor] = useState(undefined);
  const [categoryIcon, setCategoryIcon] = useState("");

  const handleCreateCategory = () => {
    if (!categoryName) {
      alert("Please enter a name");

      return;
    }

    if (!categoryColor) {
      alert("Please select a color");

      return;
    }

    if (!categoryIcon) {
      alert("Please select an icon");

      return;
    }

    const category = {
      id: Math.floor(Math.random() * 100000000),
      name: categoryName,
      color: categoryColor,
      icon: categoryIcon,
    };

    setCategoryName("");
    setCategoryColor("");
    setCategoryIcon("");

    dispatch(addCategory(category));

    alert("Category created");

    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }} className="mx-4">
      <View className="flex relative flex-row justify-between items-center ">
        <TouchableOpacity onPress={navigation.goBack}>
          <Text style={{ fontSize: 30, fontFamily: "OpenSans-Regular" }}>
            <AntDesign name="close" size={30} color={colors.black} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCreateCategory}>
          <Octicons name="check" size={30} color={colors.black} />
        </TouchableOpacity>
      </View>

      <View className="py-5">
        <TextInput
          placeholder="Entrez un nom"
          value={categoryName}
          onChangeText={setCategoryName}
          style={{
            fontFamily: "OpenSans-Regular",
            color: categoryColor?.color ? colors.white : colors.black,
            backgroundColor: categoryColor?.color || colors.lightGray2,

            paddingTop: -3,
          }}
          className="py-4 px-4 text-xl rounded-md text-center"
          multiline={false}
        />

        <Text
          style={{
            fontFamily: "OpenSans-Regular",
            color: colors.black,
          }}
          className="text-xl py-5 capitalize"
        >
          COULEUR
        </Text>

        <FlatList
          className="pb-5"
          data={colorOptions}
          renderItem={({ item }) => (
            <Color
              item={item}
              methods={{
                setCategoryColor,
                categoryColor,
              }}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

        <Text
          style={{
            fontFamily: "OpenSans-Regular",
            color: colors.black,
          }}
          className="text-xl py-5 capitalize"
        >
          ICÔNE
        </Text>

        <FlatList
          className="pb-5"
          data={icons}
          numColumns={4}
          style={{
            maxHeight: 400,
          }}
          renderItem={({ item }) => (
            <IconItem
              item={item}
              methods={{
                setCategoryIcon,
                categoryIcon,
                categoryColor,
              }}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewCategory;
