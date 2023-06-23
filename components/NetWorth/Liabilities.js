import { View, Text, FlatList } from "react-native";
import React, { useMemo } from "react";
import MovementItem from "../Budget/movement/movementItem";
import { useSelector } from "react-redux";

const Liabilities = () => {
  const { currentMonth, worths } = useSelector((state) => state.worth);

  const currentMonthLiabilities = useMemo(() => {
    return worths[currentMonth].liabilities;
  }, [currentMonth]);

  return (
    <View className="mx-6">
      <Text
        style={{
          fontFamily: "OpenSans-Bold",
        }}
        className="text-2xl text-center my-10"
      >
        Mes passifs
      </Text>

      <View>
        {currentMonthLiabilities.length > 0 ? (
          <FlatList
            data={currentMonthLiabilities}
            renderItem={({ item }) => <MovementItem item={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text
            className="text-md text-center my-10"
            style={{
              fontFamily: "OpenSans-Regular",
            }}
          >
            aucun actif ajouté pour le moment
          </Text>
        )}
      </View>
    </View>
  );
};

export default Liabilities;
