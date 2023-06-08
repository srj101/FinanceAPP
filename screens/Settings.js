import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { settings } from "../utils/data/data";
import SettingItem from "../components/SettingItem";

const Settings = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="mx-4 relative flex-1"
    >
      <TouchableOpacity onPress={navigation.goBack}>
        <Ionicons
          name="ios-arrow-back-outline"
          size={30}
          color={colors.black}
        />
      </TouchableOpacity>

      <View className="py-6">
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
