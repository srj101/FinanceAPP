import { AntDesign, Ionicons, Octicons } from "@expo/vector-icons";
import moment from "moment";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Options from "../components/AddBudgetMovement/Options";
import CustomInput from "../components/shared/CustomInput";
import {
  setCategory,
  setDate,
  setWorths,
} from "../providers/state/reducers/worth";
import colors from "../utils/colors";
import { netWorthOptions } from "../utils/data/data";
import { NumberFormat } from "../utils/funtions";
import {
  setSelectedCategory,
  setSelectedDate,
} from "../providers/state/reducers/movement";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const AddNetWorthMovement = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { currency, decimalEnabled } = useSelector((state) => state.settings);
  const inputRef = React.useRef(null);
  const [selectedOption, setSelectedOption] = useState("Actif");
  const [amount, setAmount] = useState(0);
  const [notes, setNotes] = useState("");
  const [selectedCurrentDate, setSelectedCurrentDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const { selectedCategory, selectedDate, worths, worthType } = useSelector(
    (state) => state.worth
  );

  const handleAmountChange = (value) => {
    // check if the value is too long
    if (value.length > 10) {
      return;
    } else {
      if (decimalEnabled) {
        const numericValue = parseInt(value);

        setAmount(numericValue);
      } else {
        const numericValue = parseFloat(value);
        setAmount(numericValue);
      }
    }
  };

  const handleDatePickerShow = () => {
    const platform = Platform.OS;
    if (platform === "ios") {
      navigation.navigate("MovementDatePicker");
    } else {
      setShowDatePicker(true);
    }
  };

  const lastDateOfCurrentYear = useMemo(() => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const lastDateOfCurrentYear = new Date(currentYear, 11, 31);

    return lastDateOfCurrentYear;
  }, []);

  const FirstDateOfCurrentYear = useMemo(() => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const FirstDateOfCurrentYear = new Date(currentYear, 0, 1);

    return FirstDateOfCurrentYear;
  }, []);

  const handleDateChange = useCallback(
    (event, selectedDate) => {
      if (event.type === "dismissed" || event.type === "set") {
        setShowDatePicker(false);
      }

      // Check if the date is within the current year

      const date = new Date();
      const currentYear = date.getFullYear();
      const lastDateOfCurrentYear = new Date(currentYear, 11, 31);

      if (selectedDate > lastDateOfCurrentYear) {
        alert("The date must be within the current year");
        return;
      }

      let currentDate = selectedDate || date;

      setSelectedCurrentDate(currentDate);

      currentDate = currentDate.toISOString();
      dispatch(setSelectedDate(currentDate));
      dispatch(setDate(currentDate));
    },
    [selectedDate]
  );

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

    if (selectedOption === "Actif") {
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
    } else if (selectedOption === "Passif") {
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

    // Update the selected month
    const newNetWorth = worths.map((month, index) => {
      if (index === selectedMonthIndex) {
        return selectedMonth;
      }
      return month;
    });

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

  useEffect(() => {
    dispatch(setSelectedCategory(null));
    dispatch(setCategory(null));
    dispatch(setDate(new Date().toISOString().split("T")[0]));
  }, []);

  const handleClose = () => {
    dispatch(setSelectedCategory(null));
    dispatch(setSelectedDate(new Date().toISOString().split("T")[0]));
    dispatch(setCategory(null));
    dispatch(setDate(new Date().toISOString().split("T")[0]));
    navigation.goBack();
  };

  const handleTextInputFocus = () => {
    // Set the selection to the beginning of the text input
    inputRef.current?.setSelection({ start: 0, end: 0 });
  };

  return (
    <KeyboardAvoidingView
      style={{ flexGrow: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
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
            options={netWorthOptions}
            selected={selectedOption}
            setSelected={setSelectedOption}
          />

          <View className="flex flex-row items-center justify-center">
            <TextInput
              ref={inputRef}
              onFocus={handleTextInputFocus}
              keyboardType={decimalEnabled ? "numeric" : "number-pad"}
              placeholder={`0.00`}
              maxLength={10}
              value={amount}
              onChangeText={handleAmountChange}
              style={{
                fontFamily: "OpenSans-Bold",
              }}
              onKeyPress={({ nativeEvent }) => {
                if (
                  nativeEvent.key === "Backspace" ||
                  nativeEvent.key === "del"
                ) {
                  setAmount(0);
                }
              }}
              className="text-center text-4xl my-5"
            />

            <Text
              style={{
                fontFamily: "OpenSans-Bold",
                fontSize: 30,
                color: colors.black,
                marginLeft: 10,
              }}
            >
              {currency}
            </Text>
          </View>
          <CustomInput name="Catégories">
            <TouchableOpacity
              className="flex flex-row justify-end items-center gap-2"
              onPress={() => navigation.navigate("SelectCategory")}
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
              onPress={handleDatePickerShow}
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

            {showDatePicker && (
              <RNDateTimePicker
                display="spinner"
                value={selectedCurrentDate}
                minimumDate={FirstDateOfCurrentYear}
                maximumDate={lastDateOfCurrentYear}
                mode="date"
                onChange={handleDateChange}
              />
            )}
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddNetWorthMovement;
