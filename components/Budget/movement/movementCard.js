import { View, Text, FlatList } from "react-native";
import React from "react";
import MovementItem from "./movementItem";
import NoMovement from "./NoMovement";

const Movement = ({ movements, title, type }) => {
  return (
    <View className="pt-5">
      <Text
        className="text-3xl pb-4"
        style={{
          fontFamily: "TheHand-Regular",
          letterSpacing: 0.1,
        }}
      >
        {title}
      </Text>

      <View className="px-4">
        {movements.length > 0 ? (
          <FlatList
            data={movements}
            renderItem={({ item }) => <MovementItem item={item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <NoMovement type={type} />
        )}
      </View>
    </View>
  );
};

export default Movement;
