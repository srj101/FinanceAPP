import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Welcome = () => {
  return (
    <View style={styles.container} className="relative px-2">
      <Text
        className="text-2xl py-5 capitalize text-center"
        style={{
          fontFamily: "OpenSans-Regular",
        }}
      >
        Bienvenue sur
      </Text>
      <Text
        className="text-3xl text-center py-2 uppercase"
        style={{
          fontFamily: "OpenSans-Bold",
        }}
      >
        The MoneyVisor Budget
      </Text>
      <Text
        className="absolute bottom-0 text-center text-xl px-2"
        style={{
          fontFamily: "OpenSans-Regular",
        }}
      >
        Votre allié pour le suivi et la planification de vos dépenses
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Welcome;
