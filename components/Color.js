import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Color = ({ item }) => {
  const { color } = item;
  return (
    <TouchableOpacity
      className="rounded-full mr-2"
      style={{
        backgroundColor: color,
        width: 50,
        height: 50,
      }}
    ></TouchableOpacity>
  );
};

export default Color;
