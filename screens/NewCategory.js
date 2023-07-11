import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Octicons } from "@expo/vector-icons";
import colors from "../utils/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
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
  const route = useRoute();
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState("");
  const [categoryColor, setCategoryColor] = useState(undefined);
  const [categoryIcon, setCategoryIcon] = useState("");

  const handleCreateCategory = () => {
    if (!categoryName) {
      Alert.alert("ATTENTION", "Entrez un nom");

      return;
    }

    if (!categoryColor) {
      Alert.alert("ATTENTION", "Sélectionnez une couleur");

      return;
    }

    if (!categoryIcon) {
      Alert.alert("ATTENTION", "Sélectionnez une icône");

      return;
    }

    if (!route.params?.type) {
      Alert.alert(
        "ATTENTION",
        "Quelque chose a mal tourné, réessayer plus tard."
      );

      navigation.goBack();
      return;
    }

    const category = {
      id: Math.floor(Math.random() * 100000000),
      name: categoryName,
      type: route.params?.type,
      color: categoryColor,
      icon: categoryIcon,
    };

    setCategoryName("");
    setCategoryColor("");
    setCategoryIcon("");

    dispatch(addCategory(category));

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
            backgroundColor: colors.lightGray2,
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

export default NewCategory;
