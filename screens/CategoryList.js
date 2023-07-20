import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../providers/state/reducers/categories";
import colors from "../utils/colors";
import { deleteAllWorthsHavingCategory } from "../providers/state/reducers/worth";
import { deleteAllMovementsHavingCategory } from "../providers/state/reducers/movement";

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
      "Supprimer la catégorie",
      "En supprimant la catégorie, tous les mouvements ajoutés seront également supprimés. Confirmez-vous la suppression?",
      [
        {
          text: "Annuler",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },

        {
          text: "OK",
          onPress: () => {
            dispatch(
              deleteAllWorthsHavingCategory({
                categoryId: item.id,
              })
            );
            dispatch(
              deleteAllMovementsHavingCategory({
                categoryId: item.id,
              })
            );

            dispatch(deleteCategory(item.id));
          },
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
        <View className="flex flex-row gap-6 items-center">
          <FontAwesome name={icon} size={25} color={color} />

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
