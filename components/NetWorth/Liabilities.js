import { View, Text, FlatList } from "react-native";
import React from "react";
import MovementItem from "../Budget/movement/movementItem";
import { liabilities } from "../../utils/data/data";

const Liabilities = () => {
  return (
    <View className="mx-6">
      <Text
        style={{
          fontFamily: "OpenSans-Bold",
        }}
        className="text-2xl text-center my-10"
      >
        My Liabilities
      </Text>

      <View>
        <FlatList
          data={liabilities}
          renderItem={({ item }) => <MovementItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Liabilities;
