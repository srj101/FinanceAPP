import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import colors from "../utils/colors";
import PDFReader from "rn-pdf-reader-js";

const TermsPDF = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1">
      <View
        style={{
          margin: 20,
        }}
      >
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons
            name="ios-arrow-back-outline"
            size={25}
            color={colors.black}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        {
          <PDFReader
            source={{
              uri: "https://drive.google.com/u/1/uc?id=1DtbSZjkINfehXQg4MeieyfxoC7WfdkZu&export=download",
            }}
          />
        }
      </View>
    </SafeAreaView>
  );
};

export default TermsPDF;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ecf0f1",
  },
});
