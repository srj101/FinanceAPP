import { useFonts } from "expo-font";
import React from "react";

import {
  DancingScript_400Regular,
  DancingScript_500Medium,
  DancingScript_600SemiBold,
} from "@expo-google-fonts/dancing-script";

import AppLoading from "../components/AppLoading";

const FontsProvider = ({ children }) => {
  const [fontsLoaded] = useFonts({
    "OpenSans-Regular": require("../assets/fonts/Calibri_Regular.ttf"),
    "OpenSans-Bold": require("../assets/fonts/Calibri_Bold.ttf"),
    "OpenSans-SemiBold": require("../assets/fonts/Calibri_Bold.ttf"),
    "OpenSans-Light": require("../assets/fonts/Calibri_Light.ttf"),
    "DancingScript-Regular": DancingScript_400Regular,
    "DancingScript-Medium": DancingScript_500Medium,
    "DancingScript-SemiBold": DancingScript_600SemiBold,
    "Calibri-Bold": require("../assets/fonts/Calibri_Bold.ttf"),
    "Calibri-Light": require("../assets/fonts/Calibri_Light.ttf"),
    "Calibri-Regular": require("../assets/fonts/Calibri_Regular.ttf"),
    "TheHand-Bold": require("../assets/fonts/The_Hand_Bold.otf"),
    "TheHand-Light": require("../assets/fonts/The_Hand_Light.otf"),
    "TheHand-Regular": require("../assets/fonts/The_Hand_Regular.otf"),
  });

  if (!fontsLoaded) {
    // Render a fallback or loading screen while the fonts are being loaded
    return <AppLoading />;
  }
  return children;
};

export default FontsProvider;
