import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import colors from "../utils/colors";
import { Ionicons } from "@expo/vector-icons";
import UpgradePlan from "../components/UpgradePlan";

const Subscribe = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.gray }}>
      <SafeAreaView className="m-5 space-y-2 relative">
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-[-10] right-[-5]"
        >
          <Ionicons
            name="md-close-circle-sharp"
            size={30}
            color={colors.primary}
          />
        </TouchableOpacity>

        {/** Logo */}
        <View className="items-center">
          <Image
            source={require("../assets/logo-t.png")}
            style={{
              width: 200,
              height: 100,
            }}
          />
        </View>

        {/* Content */}
        <View className="">
          <UpgradePlan textColor={colors.white} />
        </View>

        {/* Subscribe */}

        <TouchableOpacity
          className="px-10 py-5 rounded-full my-10"
          style={{
            backgroundColor: colors.primary,
          }}
        >
          <Text
            className="text-lg text-center font-extrabold uppercase"
            style={{
              color: colors.white,
              fontFamily: "OpenSans-Regular",
            }}
          >
            Passer au Premium
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Subscribe;
