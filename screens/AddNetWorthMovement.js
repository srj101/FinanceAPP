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

import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Options from "../components/AddBudgetMovement/Options";
import CustomInput from "../components/shared/CustomInput";
import {
  setSelectedCategory,
  setSelectedDate,
} from "../providers/state/reducers/movement";
import {
  setCategory,
  setDate,
  updateWorths,
} from "../providers/state/reducers/worth";
import colors from "../utils/colors";
import { netWorthOptions } from "../utils/data/data";

const AddNetWorthMovement = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { currency, decimalEnabled } = useSelector((state) => state.settings);
  const [selectedOption, setSelectedOption] = useState("Actif");
  const [amount, setAmount] = useState(0);
  const [notes, setNotes] = useState("");
  const [selectedCurrentDate, setSelectedCurrentDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const { selectedCategory, selectedDate } = useSelector(
    (state) => state.worth
  );

  const handleAmountChange = (value) => {
    // remove trailing zeros
    value = value.replace(/^0+/, "");

    // check if the value is too long
    if (value.length > 10) {
      return;
    } else {
      // check if the value is a number
      if (!isNaN(value)) {
        setAmount(value);
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

  const currentYear = new Date().getFullYear();
  const lastDateOfCurrentYear = useMemo(
    () => new Date(currentYear, 11, 31),
    []
  );
  const FirstDateOfCurrentYear = useMemo(() => new Date(currentYear, 0, 1), []);

  const handleDateChange = useCallback(
    (event, selectedDate) => {
      if (event.type === "dismissed" || event.type === "set") {
        setShowDatePicker(false);
      }

      if (selectedDate > lastDateOfCurrentYear) {
        alert("The date must be within the current year");
        return;
      }

      const currentDate = selectedDate || new Date();
      setSelectedCurrentDate(currentDate);

      const isoDate = currentDate.toISOString();
      dispatch(setSelectedDate(isoDate));
      dispatch(setDate(isoDate));
    },
    [selectedDate]
  );

  const onSubmit = () => {
    const ammmount = decimalEnabled ? parseFloat(amount) : parseInt(amount);

    if (ammmount === 0 || !selectedCategory || !selectedDate) {
      Alert.alert("Please enter an amount, select a category and a date");
      return;
    }

    const selectedMonthIndex = moment
      .months()
      .indexOf(moment(selectedDate).format("MMMM"));

    const id = Math.random().toString();
    const item = {
      id,
      amount: ammmount,
      category: selectedCategory,
      date: selectedDate,
      notes,
      type: selectedOption,
      month: moment(selectedDate).format("MMMM"),
    };

    dispatch(
      updateWorths({
        item,
        selectedMonthIndex,
        worthType: selectedOption,
      })
    );

    setAmount(0);
    setNotes("");
    setSelectedOption("Actif");
    dispatch(setSelectedCategory(null));
    dispatch(setCategory(null));
    dispatch(setDate(new Date().toISOString().split("T")[0]));

    navigation.goBack();
  };

  const handleClose = () => {
    dispatch(setSelectedCategory(null));
    dispatch(setSelectedDate(new Date().toISOString().split("T")[0]));
    dispatch(setCategory(null));
    dispatch(setDate(new Date().toISOString().split("T")[0]));
    navigation.goBack();
  };

  const getFrenchMonth = useCallback((month) => {
    const months = {
      January: "Janvier",
      February: "Février",
      March: "Mars",
      April: "Avril",
      May: "Mai",
      June: "Juin",
      July: "Juillet",
      August: "Août",
      September: "Septembre",
      October: "Octobre",
      November: "Novembre",
      December: "Décembre",
    };

    return months[month];
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flexGrow: 1 }}
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

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              marginVertical: 20,
            }}
          >
            <TextInput
              keyboardType={decimalEnabled ? "numeric" : "number-pad"}
              placeholder={`0.00`}
              maxLength={10}
              value={amount > 0 ? amount.toString() : undefined}
              onChangeText={handleAmountChange}
              style={{
                fontFamily: "OpenSans-Regular",
                color: colors.black,
                fontSize: 30,
              }}
            />

            <Text
              style={{
                fontFamily: "OpenSans-Regular",
                color: colors.black,
                fontSize: 30,
              }}
            >
              {currency}
            </Text>
          </View>

          <CustomInput name="Catégorie">
            <TouchableOpacity
              className="flex flex-row justify-end items-center gap-2"
              onPress={() =>
                navigation.navigate("SelectCategory", {
                  type: "netWorth",
                })
              }
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
                {moment(selectedDate).format("DD") +
                  " " +
                  getFrenchMonth(moment(selectedDate).format("MMMM")) +
                  " " +
                  moment(selectedDate).format("YYYY")}
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
              paddingHorizontal: 20,
              height: 150,
              paddingVertical: 10,
              textAlignVertical: "top",
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
