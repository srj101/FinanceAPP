import { View, Text, FlatList } from "react-native";
import React from "react";
import MovementItem from "../Budget/movement/movementItem";
import { assets } from "../../utils/data/data";

const Assets = () => {
  return (
    <View className="mx-6">
      <Text
        style={{
          fontFamily: "OpenSans-Bold",
        }}
        className="text-2xl text-center my-10"
      >
        My Assets
      </Text>

      <View>
        <FlatList
          data={assets}
          renderItem={({ item }) => <MovementItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Assets;
