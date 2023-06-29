import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const Welcome = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      className="relative px-2"
    >
      <Text
        className="text-6xl py-5 text-center"
        style={{
          fontFamily: "TheHand-Bold",
        }}
      >
        Bienvenue sur
      </Text>
      <Text
        className="text-6xl text-center py-2 uppercase"
        style={{
          fontFamily: "TheHand-Bold",
        }}
      >
        The Moneyvisor Budget
      </Text>
      <Text
        className="absolute bottom-0 text-center text-2xl px-7"
        style={{
          fontFamily: "Calibri-Regular",
        }}
      >
        Votre allié pour le suivi et la planification de vos dépenses
      </Text>
    </ScrollView>
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
