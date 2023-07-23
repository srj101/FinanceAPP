import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { getValueFor, save } from "../utils/secureStorage";

const HomeButton = ({ title, screen, text }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    getValueFor("showPopuUp").then((res) => {
      if (res !== null) {
        navigation.navigate(screen);
      } else {
        Alert.alert("En savoir plus", text, [
          {
            text: "OK",
            onPress: () => {
              navigation.navigate(screen);
            },
          },
          {
            text: "Ne plus voir cette description",
            onPress: () => {
              save("showPopUp", "false");
              navigation.navigate(screen);
            },
          },
        ]);
      }
    });
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.black,
        marginBottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 40,
      }}
      onPress={handlePress}
    >
      <Text
        className="text-4xl capitalize text-center"
        style={{
          color: colors.yellow,
          fontFamily: "TheHand-Bold",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default HomeButton;
