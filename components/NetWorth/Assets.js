import { View, Text, FlatList } from "react-native";
import React, { useMemo } from "react";
import MovementItem from "../Budget/movement/movementItem";
import { useSelector } from "react-redux";

const Assets = () => {
  const { currentMonth, assetWorths } = useSelector((state) => state.worth);

  const currentMonthAssets = useMemo(() => {
    return assetWorths[currentMonth].data;
  }, [currentMonth, assetWorths]);

  return (
    <View className="mx-6">
      <Text
        style={{
          fontFamily: "OpenSans-Regular",
        }}
        className="text-2xl text-center my-10"
      >
        Mes actifs
      </Text>

      <View>
        {currentMonthAssets.length > 0 ? (
          <FlatList
            data={currentMonthAssets}
            renderItem={({ item }) => (
              <MovementItem item={item} movementType="assets" />
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
            aucun actif ajouté pour le moment
          </Text>
        )}
      </View>
    </View>
  );
};

export default Assets;
