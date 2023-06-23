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
  editCategory,
  resetState,
} from "../providers/state/reducers/categories";

const EditCategory = (props) => {
  const { item } = props.route.params;

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState(item.name);
  const [categoryColor, setCategoryColor] = useState(item.color);
  const [categoryIcon, setCategoryIcon] = useState(item.icon);

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
    };

    setCategoryName("");
    setCategoryColor("");
    setCategoryIcon("");

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
          }}
          className="py-4 px-4 text-xl rounded-full text-center"
          multiline={false}
        />

        <Text
          style={{
            fontFamily: "OpenSans-Bold",
            color: colors.black,
          }}
          className="text-xl py-5"
        >
          Color
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
            fontFamily: "OpenSans-Bold",
            color: colors.black,
          }}
          className="text-xl py-5"
        >
          Icons
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
