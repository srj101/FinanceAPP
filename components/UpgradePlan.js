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
            color: colors.green,
            fontFamily: "OpenSans-Bold",
          }}
        >
          {NumberFormat(14.99, currency, exchangeRate, decimalEnabled)}
        </Text>{" "}
        une fois et à vie pour soutenir l'évolution de l'application{" "}
      </Text>

      <Text
        className="text-center py-3 text-lg px-4 pt-8"
        style={{
          fontFamily: "OpenSans-Regular",
          color: textColor ? textColor : colors.black,
        }}
      >
        <Text
          style={{
            fontFamily: "OpenSans-SemiBold",
            color: textColor ? textColor : colors.black,
          }}
        >
          Créez votre premier budget avec TMVBUDGET.
        </Text>
        La première version de l’application se veut simple et droit au but.
        Juste vous, vos revenus, et ce que vous décidez d’en faire de manière
        périodique.
      </Text>

      <Text
        style={{
          fontFamily: "OpenSans-Light",
          color: textColor ? textColor : colors.black,
        }}
        className="text-center text-lg py-5"
      >
        De nouvelles fonctionnalités sont prévues. Aidez-nous à les développer
        en souscrivant à la version premium.
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
