import { Text, StyleSheet, ScrollView, View } from "react-native";
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
        Personnalisez à souhait votre budget en activant l’option premium pour{" "}
        <Text
          style={{
            color: colors.green,
            fontFamily: "OpenSans-Bold",
          }}
        >
          {NumberFormat(9.99, currency, exchangeRate, decimalEnabled)}
        </Text>{" "}
      </Text>

      <Text
        className="text-center py-3 text-lg px-4 pt-8"
        style={{
          fontFamily: "OpenSans-Regular",
          color: textColor ? textColor : colors.black,
        }}
      >
        Avec votre paiement une seule fois et à vie, passez à la version premium
        et débloquez les fonctionnalités suivantes : {"\n"}
      </Text>
      <View
        style={{
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "OpenSans-Regular",
            color: textColor ? textColor : colors.black,
          }}
        >
          {"📌   "}
          Catégories de budget illimitées (dépenses & revenus){"\n"}
        </Text>
        <Text
          style={{
            fontFamily: "OpenSans-Regular",
            color: textColor ? textColor : colors.black,
          }}
        >
          {"📌   "}
          Catégories de valeur nette illimitées (actifs et passifs){"\n"}
        </Text>
        <Text
          style={{
            fontFamily: "OpenSans-Regular",
            color: textColor ? textColor : colors.black,
          }}
        >
          {"📌   "}
          Répétition de transactions sur les périodes à venir{"\n"}
        </Text>
      </View>

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
