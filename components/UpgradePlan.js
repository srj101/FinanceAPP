import { Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import colors from "../utils/colors";
import { NumberFormat } from "../utils/funtions";
import { useSelector } from "react-redux";

const UpgradePlan = ({ textColor }) => {
  const { currency, decimalEnabled, exchangeRate } = useSelector(
    (state) => state.settings
  );
  return (
    <ScrollView className="px-5 pt-4">
      <Text
        className="text-lg text-center mb-5"
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
          {NumberFormat(15.99, currency, exchangeRate, decimalEnabled)}
        </Text>{" "}
        pour passer à la version premium{" "}
      </Text>

      <Text
        className="text-center py-3 text-lg px-4 pt-8"
        style={{
          fontFamily: "OpenSans-Regular",
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
        className="text-center text-lg py-5"
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
    paddingVertical: 20,
    fontFamily: "OpenSans-Light",
    opacity: 0.8,
    marginHorizontal: 10,
  },
});

export default UpgradePlan;
