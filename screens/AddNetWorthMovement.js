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
import { netWorthOptions } from "../utils/data/data";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setCurrentMonthIdx,
  setDate,
  setWorths,
} from "../providers/state/reducers/worth";
import { NumberFormat } from "../utils/funtions";

const AddNetWorthMovement = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { currency, decimalEnabled } = useSelector((state) => state.settings);

  const [selectedOption, setSelectedOption] = useState("Actif");
  const [amount, setAmount] = useState(0);
  const [notes, setNotes] = useState("");

  const { selectedCategory, selectedDate, worths, worthType } = useSelector(
    (state) => state.worth
  );

  const handleAmountChange = (value) => {
    // Remove the "€" symbol from the value before storing it in the state
    const numericValue = parseFloat(value.replace("€", ""));
    setAmount(numericValue);
  };

  const onSubmit = () => {
    if (amount === 0) {
      Alert.alert("Amount cannot be 0");
      return;
    }
    if (!selectedCategory) {
      Alert.alert("Please select a category");
      return;
    }
    if (!selectedDate) {
      Alert.alert("Please select a date");
      return;
    }

    // list of all 12 months
    const months = moment.months();

    // get the index of the selected month
    const selectedMonthIndex = months.indexOf(
      moment(selectedDate).format("MMMM")
    );

    // get the selected month
    let selectedMonth = worths[selectedMonthIndex];

    console.log("selectedMonth", selectedMonth);
    console.log("SelectedCategory", selectedCategory);
    console.log("selectedDate", selectedDate);
    console.log("selectedOption", selectedOption);

    if (worthType === "ASSETS") {
      // Asset
      const { assets } = selectedMonth;
      selectedMonth["assets"] = [
        ...assets,
        {
          id: Math.random().toString(),
          amount,
          category: selectedCategory,
          date: selectedDate,
          type: selectedOption,
          notes,
        },
      ];
    } else if (worthType === "LIABILITIES") {
      // Liability
      const { liabilities } = selectedMonth;
      selectedMonth["liabilities"] = [
        ...liabilities,
        {
          id: Math.random().toString(),
          amount,
          category: selectedCategory,
          date: selectedDate,
          notes,
          type: selectedOption,
        },
      ];
    }

    console.log("selectedMonth", selectedMonth);

    const newNetWorth = worths.map((month, index) => {
      if (index === selectedMonthIndex) {
        return selectedMonth;
      }
      return month;
    });

    console.log("newNetWorth", newNetWorth);

    dispatch(setWorths(newNetWorth));
    alert("Net item added successfully");

    // Reset state
    setAmount(0);
    setNotes("");
    setSelectedOption(0);
    dispatch(setCategory(null));
    dispatch(setDate(new Date().toISOString().split("T")[0]));

    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }} className="mx-4">
      <View className="flex relative flex-row justify-between items-center ">
        <TouchableOpacity onPress={navigation.goBack}>
          <Text style={{ fontSize: 30, fontFamily: "OpenSans-Regular" }}>
            <AntDesign name="close" size={30} color={colors.black} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onSubmit}>
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
        placeholder={`0.00 ${currency}`}
        value={`${NumberFormat(amount, currency, decimalEnabled)}`}
        onChangeText={handleAmountChange}
        style={{
          fontFamily: "OpenSans-Bold",
        }}
        className="text-center text-4xl my-5"
      />

      <CustomInput name="Catégories">
        <TouchableOpacity
          className="flex flex-row justify-end items-center gap-2"
          onPress={() => navigation.navigate("CategoryStack")}
        >
          <Text
            className="text-xl"
            style={{
              fontFamily: "OpenSans-Regular",
              color: colors.primary,
            }}
          >
            {selectedCategory ? selectedCategory.name : "Choisir"}
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
            {moment(selectedDate).format("DD MMMM YYYY")}
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
        value={notes}
        onChangeText={setNotes}
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
