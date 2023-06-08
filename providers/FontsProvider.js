import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import {
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_300Light,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";
import AppLoading from "../components/AppLoading";

const FontsProvider = ({ children }) => {
  const [fontsLoaded] = useFonts({
    "OpenSans-Regular": OpenSans_400Regular,
    "OpenSans-Bold": OpenSans_600SemiBold,
    "OpenSans-SemiBold": OpenSans_700Bold,
    "OpenSans-Light": OpenSans_300Light,
  });

  if (!fontsLoaded) {
    // Render a fallback or loading screen while the fonts are being loaded
    return <AppLoading />;
  }
  return children;
};

export default FontsProvider;
