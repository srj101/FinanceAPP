import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container} className="relative mx-4">
      {/** Logo Image */}
      <View
        style={{
          marginBottom: 25,
        }}
        className="absolute top-10"
      >
        <Image
          source={require("../assets/text-logo.png")}
          style={{
            resizeMode: "contain",
            width: 200,
          }}
        />
      </View>

      {/** Navigation Buttons */}

      <View className=" flex flex-col w-full gap-5 mb-10">
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            borderRadius: 50,
          }}
          className="py-2 px-2"
          onPress={() => navigation.navigate("MonthlyBudget")}
        >
          <Text
            className="text-2xl py-5 capitalize text-center"
            style={{
              color: colors.white,
              fontFamily: "OpenSans-Regular",
            }}
          >
            Mon budget
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            borderRadius: 50,
          }}
          className="py-2 px-2"
        >
          <Text
            className="text-2xl py-5 capitalize text-center"
            style={{
              color: colors.white,
              fontFamily: "OpenSans-Regular",
            }}
          >
            Ma valeur nette{" "}
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text
          className=" text-lg text-center "
          style={{
            fontFamily: "OpenSans-Regular",
          }}
        >
          Un budget est une planification écrite de vos dépenses avant même
          qu’elles ne surviennent
        </Text>

        <Text
          className="text-lg text-center"
          style={{
            fontFamily: "OpenSans-Regular",
          }}
        >
          La valeur nette est votre valeur en argent à une période donnée
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
