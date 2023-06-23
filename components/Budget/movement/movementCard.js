import { View, Text, FlatList } from "react-native";
import React from "react";
import MovementItem from "./movementItem";

const Movement = ({ movements, title }) => {
  return (
    <View className="py-5">
      <Text
        className="text-2xl font-bold py-4"
        style={{
          fontFamily: "OpenSans-Bold",
          letterSpacing: 0.1,
        }}
      >
        {title}
      </Text>

      {movements.length > 0 ? (
        <FlatList
          data={movements}
          renderItem={({ item }) => <MovementItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text
          className="text-sm"
          style={{
            fontFamily: "OpenSans-Regular",
            letterSpacing: 0.1,
          }}
        >
          No movements added
        </Text>
      )}
    </View>
  );
};

export default Movement;
