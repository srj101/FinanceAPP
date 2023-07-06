import { View, Text, FlatList } from "react-native";
import React, { useMemo } from "react";
import MovementItem from "../Budget/movement/movementItem";
import { useSelector } from "react-redux";

const Liabilities = () => {
  const { currentMonth, liabilityWorths } = useSelector((state) => state.worth);

  const currentMonthLiabilities = useMemo(() => {
    return liabilityWorths[currentMonth].data;
  }, [currentMonth, liabilityWorths]);

  return (
    <View className="mx-6">
      <Text
        style={{
          fontFamily: "OpenSans-Regular",
        }}
        className="text-2xl text-center my-10"
      >
        Mes passifs
      </Text>

      <View>
        {currentMonthLiabilities.length > 0 ? (
          <FlatList
            data={currentMonthLiabilities}
            renderItem={({ item }) => (
              <MovementItem item={item} movementType="liabilities" />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text
            className="text-md text-center my-10"
            style={{
              fontFamily: "OpenSans-Regular",
            }}
          >
            Aucun passif ajouté pour le moment
          </Text>
        )}
      </View>
    </View>
  );
};

export default Liabilities;
