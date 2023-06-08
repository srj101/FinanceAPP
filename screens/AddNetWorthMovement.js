import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Octicons, Ionicons } from "@expo/vector-icons";
import moment from "moment";

import colors from "../utils/colors";
import Options from "../components/AddBudgetMovement/Options";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../components/shared/CustomInput";
import RNPickerSelect from "react-native-picker-select";
import { netWorthOptions } from "../utils/data/data";

const AddNetWorthMovement = () => {
  const navigation = useNavigation();

  const [selectedOption, setSelectedOption] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleAmountChange = (value) => {
    // Remove the "€" symbol from the value before storing it in the state
    const numericValue = parseFloat(value.replace("€", ""));
    setAmount(numericValue);
  };

  const onSubmit = (data) => Alert.alert("Form Data", data);

  return (
    <SafeAreaView style={{ flex: 1 }} className="mx-4">
      <View className="flex relative flex-row justify-between items-center ">
        <TouchableOpacity onPress={navigation.goBack}>
          <Text style={{ fontSize: 30, fontFamily: "OpenSans-Regular" }}>
            <AntDesign name="close" size={30} color={colors.black} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Octicons name="check" size={30} color={colors.black} />
        </TouchableOpacity>
      </View>

      <Options
        options={netWorthOptions}
        selected={selectedOption}
        setSelected={setSelectedOption}
      />

      <TextInput
        keyboardType="numeric"
        placeholder="0.00 €"
        value={`${amount.toFixed(2).toString()} €`}
        onChangeText={handleAmountChange}
        style={{
          fontFamily: "OpenSans-Bold",
        }}
        className="text-center text-4xl my-5"
      />

      <CustomInput name="Category">
        <TouchableOpacity className="flex flex-row justify-end items-center gap-2">
          <Text
            className="text-xl"
            style={{
              fontFamily: "OpenSans-Regular",
              color: colors.primary,
            }}
          >
            Choose
          </Text>
          <Ionicons
            name="md-arrow-forward-circle"
            size={30}
            color={colors.primary}
          />
        </TouchableOpacity>
      </CustomInput>

      <CustomInput name="Date">
        <TouchableOpacity
          className="flex flex-row justify-end items-center gap-2"
          onPress={() => navigation.navigate("MovementDatePicker")}
        >
          <Text
            className="text-xl"
            style={{
              fontFamily: "OpenSans-Regular",
              color: colors.primary,
            }}
          >
            {moment().format("DD MMMM YYYY")}
          </Text>
          <Ionicons
            name="md-arrow-forward-circle"
            size={30}
            color={colors.primary}
          />
        </TouchableOpacity>
      </CustomInput>

      <CustomInput name="Notes"></CustomInput>

      <TextInput
        placeholder="Notes"
        style={{
          fontFamily: "OpenSans-Regular",
          backgroundColor: colors.lightGray,
          borderRadius: 10,
          padding: 10,
          alignItems: "flex-start",
          height: 150,
        }}
        multiline
        numberOfLines={4}
        className=" text-xl my-5"
      />
    </SafeAreaView>
  );
};

export default AddNetWorthMovement;
