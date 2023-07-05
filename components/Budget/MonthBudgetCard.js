import { View, Text, ImageBackground } from "react-native";
import React from "react";
import DashedBorder from "../DashedBorder";
import { useSelector } from "react-redux";
import { NumberFormat } from "../../utils/funtions";
const dashedLineImage2 = require("../../assets/dashed-line.png");
const MonthBudgetCard = ({ title = "Budget", revenue = 0, expense = 0 }) => {
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
              className="text-lg uppercase text-center"
              style={{
                fontFamily: "OpenSans-Regular",
              }}
            >
              Revenus
            </Text>

            <Text
              className={
                // if amount is too big, make font smaller
                revenue > 999999
                  ? "text-xs"
                  : revenue > 99999
                  ? "text-sm"
                  : revenue > 9999
                  ? "text-md"
                  : "text-lg"
              }
              style={{
                fontFamily: "OpenSans-Regular",
              }}
            >
              {NumberFormat(revenue, currency, exchangeRate, decimalEnabled)}
            </Text>
          </View>
          <ImageBackground
            source={dashedLineImage2}
            style={{
              width: 1,
              height: 60,
              alignSelf: "flex-end",
            }}
          />
        </View>

        <View className="flex flex-row justify-between flex-1">
          <View className="flex flex-col relative  justify-between  flex-1 items-center">
            <Text
              className="text-lg uppercase text-center"
              style={{
                fontFamily: "OpenSans-Regular",
                justifyContent: "center",
              }}
            >
              Dépenses
            </Text>
            <Text
              className={
                // if amount is too big, make font smaller
                expense > 999999
                  ? "text-xs"
                  : expense > 99999
                  ? "text-sm"
                  : expense > 9999
                  ? "text-md"
                  : "text-lg"
              }
              style={{
                fontFamily: "OpenSans-Regular",
                textAlign: "center",
              }}
            >
              {NumberFormat(expense, currency, exchangeRate, decimalEnabled)}
            </Text>
          </View>
          <ImageBackground
            source={dashedLineImage2}
            style={{
              width: 1,
              height: 60,
              alignSelf: "flex-end",
            }}
          />
        </View>

        <View className="flex flex-col justify-between flex-1 items-center">
          <Text
            className="text-lg uppercase text-center"
            style={{
              fontFamily: "OpenSans-Regular",
              justifyContent: "center",
            }}
          >
            Solde
          </Text>
          <Text
            className={
              // if amount is too big, make font smaller
              expense > 999999
                ? "text-xs"
                : expense > 99999
                ? "text-sm"
                : expense > 9999
                ? "text-md"
                : "text-lg"
            }
            style={{
              fontFamily: "OpenSans-Regular",
              textAlign: "center",
            }}
          >
            {NumberFormat(expense, currency, exchangeRate, decimalEnabled)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MonthBudgetCard;
