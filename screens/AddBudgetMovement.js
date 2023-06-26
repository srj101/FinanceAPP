import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, Octicons, Ionicons } from "@expo/vector-icons";
import moment from "moment";

import colors from "../utils/colors";
import Options from "../components/AddBudgetMovement/Options";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../components/shared/CustomInput";
import RNPickerSelect from "react-native-picker-select";
import { initalOptions } from "../utils/data/data";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentMonth,
  setMovementType,
  setMovements,
  setSelectedCategory,
  setSelectedDate,
} from "../providers/state/reducers/movement";
import { NumberFormat } from "../utils/funtions";

const AddBudgetMovement = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { selectedCategory, selectedDate, movementType, movements } =
    useSelector((state) => state.movement);
  const { currency, decimalEnabled } = useSelector((state) => state.settings);

  const [selectedOption, setSelectedOption] = useState(0);
  const [repeatation, setRepeatation] = useState("NON");
  const [amount, setAmount] = useState(0);
  const [notes, setNotes] = useState("");

  const handleAmountChange = (value) => {
    // Remove the "€" symbol from the value before storing it in the state
    const numericValue = parseFloat(value.replace("€", ""));
    setAmount(numericValue);
  };

  const onSubmit = () => {
    if (amount === 0) {
      Alert.alert("Please enter an amount");
      return;
    }

    if (!selectedCategory) {
      Alert.alert("Please choose a category");
      return;
    }

    if (!selectedDate) {
      Alert.alert("Please choose a date");
      return;
    }

    if (!movementType) {
      Alert.alert("Something went wrong, please try again");
      navigation.goBack();
      return;
    }

    // list of all 12 months
    const months = moment.months();

    // get the index of the selected month
    const selectedMonthIndex = months.indexOf(
      moment(selectedDate).format("MMMM")
    );

    // get the selected month
    let selectedMonth = movements[selectedMonthIndex];

    // months till last month from selected month
    const monthsTillLastMonth = months.slice(selectedMonthIndex, undefined);

    if (repeatation === "NON") {
      // add the movement to the selected month
      if (movementType === "ESTIMATED_BUDGET") {
        const { estimatedBudgets } = selectedMonth;
        selectedMonth["estimatedBudgets"] = [
          ...estimatedBudgets,
          {
            id: Math.random().toString(),
            amount,
            category: selectedCategory,
            date: selectedDate,
            type: selectedOption,
            notes,
          },
        ];
      } else if (movementType === "REAL_BUDGET") {
        const { actualBudgets } = selectedMonth;
        selectedMonth["actualBudgets"] = [
          ...actualBudgets,
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
    } else if (repeatation === "OUI") {
      monthsTillLastMonth.forEach((month) => {
        const monthIndex = months.indexOf(month);
        let selectedMonth = movements[monthIndex];

        if (movementType === "ESTIMATED_BUDGET") {
          const { estimatedBudgets } = selectedMonth;
          selectedMonth["estimatedBudgets"] = [
            ...estimatedBudgets,
            {
              id: Math.random().toString(),
              amount,
              category: selectedCategory,
              date: selectedDate,
              type: selectedOption,
              notes,
            },
          ];
        } else if (movementType === "REAL_BUDGET") {
          const { actualBudgets } = selectedMonth;
          selectedMonth["actualBudgets"] = [
            ...actualBudgets,
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
      });
    }

    const newMovements = movements.map((month, index) => {
      if (index === selectedMonthIndex) {
        return selectedMonth;
      }
      return month;
    });

    dispatch(setMovements(newMovements));

    Alert.alert("Success", "Movement added successfully");

    dispatch(setSelectedCategory(null));
    dispatch(setSelectedDate(new Date().toISOString().split("T")[0]));
    dispatch(setMovementType(null));
    dispatch(setCurrentMonth(selectedMonthIndex));
    navigation.goBack();
  };

  const handleClose = () => {
    dispatch(setSelectedCategory(null));
    dispatch(setSelectedDate(new Date().toISOString().split("T")[0]));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }} className="mx-4">
      <View className="flex relative flex-row justify-between items-center ">
        <TouchableOpacity onPress={handleClose}>
          <Text style={{ fontSize: 30, fontFamily: "OpenSans-Regular" }}>
            <AntDesign name="close" size={30} color={colors.black} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onSubmit}>
          <Octicons name="check" size={30} color={colors.black} />
        </TouchableOpacity>
      </View>

      <Options
        options={initalOptions}
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

      <CustomInput name="Catégorie">
        <TouchableOpacity
          onPress={() => navigation.navigate("CategoryStack")}
          className="flex flex-row justify-end items-center gap-2"
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

      <CustomInput name="Répétition">
        <RNPickerSelect
          onValueChange={(value) => setRepeatation(value)}
          value={repeatation}
          Icon={() => (
            <AntDesign name="downcircle" size={25} color={colors.primary} />
          )}
          style={{
            inputIOS: {
              fontSize: 20, // Assuming 'text-xl' in Tailwind CSS is equivalent to 20px font size
              color: colors.primary,
              paddingRight: 50, // Add right padding to make space for the icon
            },
            inputAndroid: {
              fontSize: 20,
              color: colors.primary,
              paddingRight: 30,
            },
            iconContainer: {
              top: 0,
              right: 2,
              position: "absolute",
            },
          }}
          fixAndroidTouchableBug={true}
          useNativeAndroidPickerStyle={false}
          items={[
            { label: "NON", value: "NON" },
            { label: "OUI", value: "OUI" },
          ]}
          placeholder={{
            label: "Choose",
          }}
        />
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
        value={notes}
        onChangeText={setNotes}
        multiline
        numberOfLines={4}
        className=" text-xl my-5"
      />
    </SafeAreaView>
  );
};

export default AddBudgetMovement;
