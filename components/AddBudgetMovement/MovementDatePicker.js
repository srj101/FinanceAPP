import {
  View,
  Platform,
  StatusBar,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign, Octicons } from "@expo/vector-icons";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";

const MovementDatePicker = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="mx-4"
    >
      <View className="flex relative flex-row justify-between items-center ">
        <TouchableOpacity onPress={navigation.goBack}>
          <Text style={{ fontSize: 30, fontFamily: "OpenSans-Regular" }}>
            <AntDesign name="close" size={30} color={colors.black} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigation.goBack}>
          <Octicons name="check" size={30} color={colors.black} />
        </TouchableOpacity>
      </View>
      <RNDateTimePicker display="spinner" value={new Date()} />
    </SafeAreaView>
  );
};

export default MovementDatePicker;
