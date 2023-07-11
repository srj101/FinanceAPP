import { AntDesign, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import Color from "../components/Color";
import IconItem from "../components/IconItem";
import { editCategory } from "../providers/state/reducers/categories";
import colors from "../utils/colors";
import { colorOptions, icons } from "../utils/data/data";

const EditCategory = (props) => {
  const { item } = props.route.params;

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState(item.name);
  const [categoryColor, setCategoryColor] = useState(item.color);
  const [categoryIcon, setCategoryIcon] = useState(item.icon);
  const [categoryType, setCategoryType] = useState(item.type);

  const handleEditCategory = () => {
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
      id: item.id,
      name: categoryName,
      color: categoryColor,
      icon: categoryIcon,
      type: categoryType,
    };

    setCategoryName("");
    setCategoryColor("");
    setCategoryIcon("");
    setCategoryType("");

    dispatch(editCategory(category));
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

        <TouchableOpacity onPress={handleEditCategory}>
          <Octicons name="check" size={30} color={colors.black} />
        </TouchableOpacity>
      </View>

      <View className="py-5">
        <TextInput
          placeholder="Enter A Name"
          value={categoryName}
          onChangeText={setCategoryName}
          style={{
            fontFamily: "OpenSans-Regular",
            color: colors.black,
            backgroundColor: colors.lightGray,
            paddingTop: 0,
          }}
          className="py-4 px-4 text-xl rounded-md text-center leading-8"
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

export default EditCategory;
