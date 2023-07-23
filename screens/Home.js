import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import colors, { SIZES } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import HomeButton from "../components/HomeButton";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container} className="mx-4 py-20">
      {/** Logo Image */}
      <View
        style={{
          marginBottom: 25,
        }}
      >
        <Image
          source={require("../assets/logo.png")}
          style={{
            height: 50,
          }}
        />
      </View>

      <View>
        <Image
          source={require("../assets/illustration.jpeg")}
          resizeMode="contain"
          style={{
            height: 400,
          }}
        />
      </View>

      <View>
        <HomeButton
          title={"Mon budget"}
          screen={"MonthlyBudget"}
          text="Un budget est une planification de vos revenus et dépenses sur une période à venir"
        />
        <HomeButton
          title={"Ma valeur nette"}
          screen={"NetWorth"}
          text="La valeur nette est la différence entre les actifs que vous possédez et les dettes à rembourser"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default Home;
