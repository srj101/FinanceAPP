import { View, Text } from "react-native";
import React from "react";
import moment from "moment";
import DashedBorder from "../DashedBorder";

const NetWorth = () => {
  return (
    <View>
      <Text
        style={{
          fontFamily: "OpenSans-Regular",
        }}
        className="text-2xl text-center my-10"
      >
        As of {moment().format("DD.MM.YYYY")}
      </Text>

      <View className="flex flex-row justify-center items-center pb-10">
        <View className="flex flex-col items-center justify-center px-10 gap-4">
          <Text
            className="text-xl font-semibold"
            style={{
              fontFamily: "OpenSans-SemiBold",
            }}
          >
            Assets
          </Text>

          <Text>0.00 €</Text>
        </View>

        <DashedBorder />

        <View className="flex flex-col items-center px-10 justify-center gap-4">
          <Text
            className="text-xl font-semibold"
            style={{
              fontFamily: "OpenSans-SemiBold",
            }}
          >
            Passives
          </Text>

          <Text>0.00 €</Text>
        </View>
      </View>

      <Text
        className="text-center text-2xl py-10"
        style={{
          fontFamily: "OpenSans-SemiBold",
        }}
      >
        Net Worth: 0.00 €
      </Text>

      <Text
        className="text-center text-sm py-10 px-10"
        style={{
          fontFamily: "OpenSans-Regular",
        }}
      >
        Your assets cover your debts. This situation is not ideal. Increase your
        assets and reduce your debts to improve your net worth.
      </Text>
    </View>
  );
};

export default NetWorth;
