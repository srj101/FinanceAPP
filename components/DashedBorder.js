import React from "react";
import { View, ImageBackground } from "react-native";

const dashedLineImage2 = require("../assets/dashed-line.png");

const DashedBorder = ({ vertical = true }) => {
  if (vertical) {
    return (
      <ImageBackground
        source={dashedLineImage2}
        resizeMode="repeat"
        style={{
          height: "100%",
          width: 1,
        }}
      >
        {/* Empty view to act as a placeholder */}
        <View />
      </ImageBackground>
    );
  } else {
    return (
      <ImageBackground
        source={dashedLineImage2}
        resizeMode="repeat"
        style={{
          width: "100%",
          height: 1,
        }}
      >
        {/* Empty view to act as a placeholder */}
        <View />
      </ImageBackground>
    );
  }
};

export default DashedBorder;
