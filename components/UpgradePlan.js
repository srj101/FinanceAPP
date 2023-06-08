import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../utils/colors";

const UpgradePlan = () => {
  return (
    <View className="px-5 py-4">
      <Text className="text-xl text-center mb-5" style={styles.upgradeText}>
        Payez{" "}
        <Text
          style={{
            color: colors.primary,
            fontFamily: "OpenSans-Regular",
          }}
        >
          15,99 €
        </Text>{" "}
        pour passer à la version premium{" "}
      </Text>

      <Text
        className="text-center py-5 text-md px-4"
        style={{
          fontFamily: "OpenSans-Regular",
        }}
      >
        Je suis salariée et entrepreneure. Lorsque je ne travaille pas pour mon
        employeur, je promeus l’accès à l’éducation financière via la plateforme
        The Moneyvisor. Soutenez cette vision et profitez de toutes les
        fonctionnalités de l’application.
      </Text>

      <Text
        style={{
          fontFamily: "OpenSans-Regular",
        }}
        className="text-center font-extrabold text-xl py-5"
      >
        Débloquez toutes les fonctionnalités de l’application en une fois et à
        vie
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  upgradeText: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    paddingVertical: 25,
    fontFamily: "OpenSans-Regular",
  },
});

export default UpgradePlan;
