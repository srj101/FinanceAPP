import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const Welcome = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      className="relative px-2"
    >
      <Text
        className="text-4xl py-5 text-center"
        style={{
          fontFamily: "TheHand-Bold",
        }}
      >
        Bienvenue sur
      </Text>
      <Text
        className="text-4xl text-center py-2 uppercase"
        style={{
          fontFamily: "TheHand-Bold",
        }}
      >
        The Moneyvisor Budget
      </Text>
      <Text
        className="absolute bottom-4 text-center text-lg px-7"
        style={{
          fontFamily: "Calibri-Regular",
        }}
      >
        Votre allié pour la planification et le suivi de vos dépenses
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 50,
  },
});

export default Welcome;
