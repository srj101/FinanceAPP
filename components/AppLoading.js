import { View, Text, Image } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native";
import colors from "../utils/colors";

const AppLoading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/loading.png")}
        resizeMode="contain"
        style={{
          width: 200,
        }}
      />
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default AppLoading;