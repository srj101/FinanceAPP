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
        Cette première version de l’application TMVBUDGET se veut simple,
        pratique et droit au but. Ce sera vous, vos revenus, et ce que vous
        déciderez d’en faire de manière périodique.
        <Text
          style={{
            fontFamily: "OpenSans-Regular",
            color: textColor ? textColor : colors.black,
          }}
        >
          {
            // new line

            "\n"
          }{" "}
          Passez à la version premium de l’application et créez un budget
          personnalisé, qui reflète exactement votre situation financière avec
          l’option d’ajout de nouvelles catégories de dépenses.
        </Text>
      </Text>

      <Text
        style={{
          fontFamily: "OpenSans-Light",
          color: textColor ? textColor : colors.black,
        }}
        className="text-center text-lg py-5"
      >
        Alors, êtes-vous prêt à créer votre premier budget avec TMVBUDGET?
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
