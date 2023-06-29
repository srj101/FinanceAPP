import { Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import colors from "../utils/colors";

const UpgradePlan = ({ textColor }) => {
  return (
    <ScrollView className="px-5 py-4">
      <Text
        className="text-2xl text-center mb-5"
        style={[
          styles.upgradeText,
          {
            color: textColor ? textColor : colors.black,
          },
        ]}
      >
        Payez{" "}
        <Text
          style={{
            color: colors.primary,
            fontFamily: "OpenSans-Bold",
          }}
        >
          15,99 €
        </Text>{" "}
        pour passer à la version premium{" "}
      </Text>

      <Text
        className="text-center py-5 text-xl px-4 "
        style={{
          fontFamily: "OpenSans-Bold",
          color: textColor ? textColor : colors.black,
        }}
      >
        Je suis salariée et entrepreneure. Lorsque je ne travaille pas pour mon
        employeur, je promeus l’accès à l’éducation financière via la plateforme
        The Moneyvisor. Soutenez cette vision et profitez de toutes les
        fonctionnalités de l’application.
      </Text>

      <Text
        style={{
          fontFamily: "OpenSans-Light",
          color: textColor ? textColor : colors.black,
        }}
        className="text-center text-2xl py-5"
      >
        Débloquez toutes les fonctionnalités de l’application en une fois et à
        vie
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  upgradeText: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 25,
    fontFamily: "OpenSans-Light",
    opacity: 0.8,
  },
});

export default UpgradePlan;
