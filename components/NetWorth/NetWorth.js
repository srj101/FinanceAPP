import { View, Text } from "react-native";
import React, { useMemo } from "react";
import moment from "moment";
import DashedBorder from "../DashedBorder";
import { useSelector } from "react-redux";
import { NumberFormat } from "../../utils/funtions";

const NetWorth = () => {
  const { currentMonth, liabilityWorths, assetWorths } = useSelector(
    (state) => state.worth
  );
  const { currency, decimalEnabled, exchangeRate } = useSelector(
    (state) => state.settings
  );

  const { updated } = useSelector((state) => state.movement);

  const currentMonthAssets = useMemo(() => {
    return assetWorths[currentMonth].data;
  }, [currentMonth, assetWorths, updated]);

  const currentMonthLiabilities = useMemo(() => {
    return liabilityWorths[currentMonth].data;
  }, [currentMonth, liabilityWorths, updated]);

  const totalAssets = useMemo(() => {
    return currentMonthAssets.reduce((acc, cur) => acc + cur.amount, 0);
  }, [currentMonthAssets]);

  const totalPassives = useMemo(() => {
    return currentMonthLiabilities.reduce((acc, cur) => acc + cur.amount, 0);
  }, [currentMonthLiabilities]);

  // Last date of the month from month index value (0-11)

  const lastDate = useMemo(() => {
    // check if the current month is greater than or equal to the current month
    if (currentMonth >= new Date().getMonth()) {
      return moment().format("DD.MM.YYYY");
    }

    return moment(currentMonth + 1, "M")
      .endOf("month")
      .format("DD.MM.YYYY");
  }, [currentMonth]);

  const netWorth = useMemo(() => {
    return totalAssets - totalPassives;
  }, [totalAssets, totalPassives]);

  return (
    <View>
      <Text
        style={{
          fontFamily: "OpenSans-Regular",
        }}
        className="text-2xl text-center my-10"
      >
        Au {lastDate}
      </Text>

      <View className="flex flex-row justify-center items-center pb-10">
        <View className="flex flex-col items-center justify-center px-10 gap-4">
          <Text
            className="text-xl"
            style={{
              fontFamily: "OpenSans-Regular",
            }}
          >
            Actifs
          </Text>

          <Text
            className="text-md"
            style={{
              fontFamily: "OpenSans-Regular",
            }}
          >
            {NumberFormat(totalAssets, currency, exchangeRate, decimalEnabled)}
          </Text>
        </View>

        <DashedBorder />

        <View className="flex flex-col items-center px-10 justify-center gap-4">
          <Text
            className="text-xl "
            style={{
              fontFamily: "OpenSans-Regular",
            }}
          >
            Passifs
          </Text>

          <Text
            className="text-md"
            style={{
              fontFamily: "OpenSans-Regular",
            }}
          >
            {NumberFormat(
              totalPassives,
              currency,
              exchangeRate,
              decimalEnabled
            )}
          </Text>
        </View>
      </View>

      <Text
        className="text-center text-4xl pt-10"
        style={{
          fontFamily: "TheHand-Regular",
        }}
      >
        Ma valeur nette est de
      </Text>

      <Text
        className="text-center text-lg py-3"
        style={{
          fontFamily: "OpenSans-Regular",
        }}
      >
        {NumberFormat(netWorth, currency, exchangeRate, decimalEnabled)}
      </Text>

      <Text
        className="text-center text-sm py-10 px-10"
        style={{
          fontFamily: "OpenSans-Regular",
        }}
      >
        {netWorth === 0
          ? "Votre patrimoine couvre vos dettes. Cette situation n’est pas l’idéal. Augmentez vos actifs et réduisez vos dettes pour améliorer votre valeur nette"
          : netWorth > 0
          ? "Bravo! Vous êtes en bonne santé financièrement. Continuez à accroitre vos actifs et à réduire vos dettes."
          : "Oups. Vous devez plus que vous ne possédez. C’est peut-être le moment de se concentrer sur la réduction de dettes et ou d’augmenter les éléments de votre patrimoine."}
      </Text>
    </View>
  );
};

export default NetWorth;
