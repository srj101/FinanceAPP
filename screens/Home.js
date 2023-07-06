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

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container} className="relative mx-4">
      {/** Logo Image */}
      <View
        style={{
          marginBottom: 25,
        }}
        className="absolute top-20"
      >
        <Image
          source={require("../assets/logo.png")}
          style={{
            height: 50,
          }}
        />
      </View>

      {/** Navigation Buttons */}

      <View className=" flex flex-col w-full gap-6 my-10">
        <View
          className="flex flex-col justify-center py-4 px-6 items-center"
          style={{
            borderColor: colors.black,
            borderWidth: 1,
            borderRadius: SIZES.radius,
            minHeight: 220,
          }}
        >
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: colors.yellow,
                borderRadius: SIZES.radius,
                justifyContent: "center",
              }}
              className="py-2 mb-4 mx-5"
              onPress={() => navigation.navigate("MonthlyBudget")}
            >
              <Text
                className="text-4xl capitalize text-center"
                style={{
                  color: colors.black,
                  fontFamily: "TheHand-Bold",
                }}
              >
                Mon budget
              </Text>
            </TouchableOpacity>
            <Text
              className=" text-lg px-5 text-center "
              style={{
                fontFamily: "OpenSans-Regular",
              }}
            >
              Un budget est une planification écrite de vos dépenses avant même
              qu’elles ne surviennent
            </Text>
          </View>
        </View>

        <View
          className="flex flex-col justify-center py-4 px-6 items-center"
          style={{
            borderColor: colors.black,
            borderWidth: 1,
            borderRadius: SIZES.radius,
            minHeight: 220,
          }}
        >
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: colors.yellow,
                borderRadius: SIZES.radius,
                justifyContent: "center",
              }}
              className="py-2 mx-5 mb-4"
              onPress={() => navigation.navigate("NetWorth")}
            >
              <Text
                className="text-4xl capitalize text-center"
                style={{
                  color: colors.black,
                  fontFamily: "TheHand-Bold",
                }}
              >
                Ma valeur nette{" "}
              </Text>
            </TouchableOpacity>
            <Text
              className=" text-lg px-5 text-center "
              style={{
                fontFamily: "OpenSans-Regular",
              }}
            >
              La valeur nette est votre valeur en argent à une période donnée
            </Text>
          </View>
        </View>
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
