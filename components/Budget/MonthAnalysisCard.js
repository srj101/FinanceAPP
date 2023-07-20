import { View, Text, ImageBackground } from "react-native";
import React from "react";
const dashedLineImage2 = require("../../assets/dashed-line.png");
import { useSelector } from "react-redux";
import { NumberFormat } from "../../utils/funtions";

const MonthAnalysisCard = ({
  title = "Salaire",
  forseen = 0,
  accomplished = 0,
  gap = 0,
  color = "#000",
}) => {
  const { currency, decimalEnabled, exchangeRate } = useSelector(
    (state) => state.settings
  );

  return (
    <View className="pb-4">
      <Text
        className="capitalize text-4xl pt-4 pb-6"
        style={{
          fontFamily: "TheHand-Regular",
        }}
      >
        {title}
      </Text>

      {/*  flex wrap but keep three columns */}
      <View className="flex flex-row justify-between">
        <View className="flex flex-row justify-between flex-1">
          <View className="flex flex-col relative gap-2 justify-between flex-1 items-center">
            <Text
              className="text-md uppercase text-center"
              style={{
                fontFamily: "OpenSans-Regular",
              }}
            >
              Prévu
            </Text>

            <Text
              className={
                // if amount is too big, make font smaller
                forseen > 999999 || forseen < -999999
                  ? "text-xs"
                  : forseen > 99999 || forseen < -99999
                  ? "text-sm"
                  : forseen > 9999 || forseen < -9999
                  ? "text-md"
                  : "text-lg"
              }
              style={{
                fontFamily: "OpenSans-Regular",
              }}
            >
              {NumberFormat(forseen, currency, exchangeRate, decimalEnabled)}
            </Text>
          </View>
          <ImageBackground
            source={dashedLineImage2}
            style={{
              width: 1,
              height: 60,
              alignSelf: "flex-end",
            }}
            resizeMode="repeat"
          />
        </View>

        <View className="flex flex-row justify-between flex-1">
          <View className="flex flex-col relative  justify-between  flex-1 items-center">
            <Text
              className="text-md uppercase text-center"
              style={{
                fontFamily: "OpenSans-Regular",
                justifyContent: "center",
              }}
            >
              Réalisé
            </Text>
            <Text
              className={
                // if amount is too big, make font smaller
                accomplished > 999999 || accomplished < -999999
                  ? "text-xs"
                  : accomplished > 99999 || accomplished < -99999
                  ? "text-sm"
                  : accomplished > 9999 || accomplished < -9999
                  ? "text-md"
                  : "text-lg"
              }
              style={{
                fontFamily: "OpenSans-Regular",
                textAlign: "center",
              }}
            >
              {NumberFormat(
                accomplished,
                currency,
                exchangeRate,
                decimalEnabled
              )}
            </Text>
          </View>
          <ImageBackground
            source={dashedLineImage2}
            style={{
              width: 1,
              height: 60,
              alignSelf: "flex-end",
            }}
            resizeMode="repeat"
          />
        </View>

        <View className="flex flex-col justify-between flex-1 items-center">
          <Text
            className="text-md uppercase text-center"
            style={{
              fontFamily: "OpenSans-Regular",
              justifyContent: "center",
              color: color,
            }}
          >
            Écart
          </Text>
          <Text
            className={
              // if amount is too big, make font smaller
              gap > 999999 || gap < -999999
                ? "text-xs"
                : gap > 99999 || gap < -99999
                ? "text-sm"
                : gap > 9999 || gap < -9999
                ? "text-md"
                : "text-lg"
            }
            style={{
              fontFamily: "OpenSans-Regular",
              textAlign: "center",
            }}
          >
            {NumberFormat(gap, currency, exchangeRate, decimalEnabled)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MonthAnalysisCard;
