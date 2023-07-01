import { View, Text } from "react-native";
import React, { useMemo } from "react";
import moment from "moment";
import DashedBorder from "../DashedBorder";
import { useSelector } from "react-redux";
import { NumberFormat } from "../../utils/funtions";

const NetWorth = () => {
  const { currentMonth, worths } = useSelector((state) => state.worth);
  const { currency, decimalEnabled, exchangeRate } = useSelector(
    (state) => state.settings
  );

  const currentMonthAssets = useMemo(() => {
    return worths[currentMonth].assets;
  }, [currentMonth]);

  const currentMonthLiabilities = useMemo(() => {
    return worths[currentMonth].liabilities;
  }, [currentMonth]);

  const totalAssets = useMemo(() => {
    return currentMonthAssets.reduce((acc, cur) => acc + cur.amount, 0);
  }, [currentMonthAssets]);

  const totalPassives = useMemo(() => {
    return currentMonthLiabilities.reduce((acc, cur) => acc + cur.amount, 0);
  }, [currentMonthLiabilities]);

  // Last date of the month from month index value (0-11)

  const lastDate = useMemo(() => {
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
            className="text-xl font-semibold"
            style={{
              fontFamily: "OpenSans-SemiBold",
            }}
          >
            Actifs
          </Text>

          <Text>
            {NumberFormat(totalAssets, currency, exchangeRate, decimalEnabled)}
          </Text>
        </View>

        <DashedBorder />

        <View className="flex flex-col items-center px-10 justify-center gap-4">
          <Text
            className="text-xl font-semibold"
            style={{
              fontFamily: "OpenSans-SemiBold",
            }}
          >
            Passifs
          </Text>

          <Text>
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
        className="text-center text-2xl pt-10"
        style={{
          fontFamily: "OpenSans-SemiBold",
        }}
      >
        Ma valeur nette est de
      </Text>

      <Text
        className="text-center text-2xl py-3"
        style={{
          fontFamily: "OpenSans-Bold",
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
