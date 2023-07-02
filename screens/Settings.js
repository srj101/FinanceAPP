import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SettingItem from "../components/SettingItem";
import colors from "../utils/colors";
const settings = [
  {
    id: "1",
    title: "Catégories",
    icon: "carryout",
    screen: "Categories",
  },
  {
    id: "2",
    title: "Devise",
    icon: "bank",
    screen: "Currency",
  },
  {
    id: "3",
    title: "Aids & Support",
    icon: "customerservice",
  },
  {
    id: "4",
    title: "The Moneyvisor",
    icon: "user",
  },
  {
    id: "5",
    title: "Activer décimal",
    icon: "checksquareo",
  },
  {
    id: "6",
    title: "Pin", // Set Pincode
    icon: "lock",
  },
  {
    id: "7",
    title: "Export",
    icon: "download",
  },
];

const Settings = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="mx-4 relative flex-1">
      <TouchableOpacity onPress={navigation.goBack}>
        <Ionicons
          name="ios-arrow-back-outline"
          size={30}
          color={colors.black}
        />
      </TouchableOpacity>

      <View className="py-3">
        <FlatList
          data={settings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <SettingItem item={item} />}
        />
      </View>

      <View className="absolute bottom-14 w-full">
        <Text className="text-center text-gray-500 text-xs">
          themoneyvisor@gmail.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
