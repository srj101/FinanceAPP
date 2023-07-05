import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../utils/colors";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NoMovement = ({ type, analysis = false }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        if (analysis) {
          return;
        }
        navigation.navigate("AddMovement", { type });
      }}
      style={{
        flex: 1,
        borderWidth: 1,
        borderRadius: 8,
        borderStyle: "dashed",
        borderColor: colors.black,
        marginVertical: 15,
      }}
    >
      <View className=" flex-1 flex-row pr-24 items-center gap-4 pl-4 py-5">
        {analysis === false && (
          <MaterialCommunityIcons
            name="plus-circle"
            size={25}
            color={type === "expense" ? colors.red : colors.green}
          />
        )}
        <Text
          className="text-md"
          style={{
            fontFamily: "OpenSans-Regular",
          }}
        >
          Aucune transaction ajoutée. Cliquez pour en ajouter une.
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NoMovement;
