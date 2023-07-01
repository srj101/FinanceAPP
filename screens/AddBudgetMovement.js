import { AntDesign, Ionicons, Octicons } from "@expo/vector-icons";
import moment from "moment";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Alert,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Options from "../components/AddBudgetMovement/Options";
import CustomInput from "../components/shared/CustomInput";
import {
  setCurrentMonth,
  setMovementType,
  setMovements,
  setSelectedCategory,
  setSelectedDate,
} from "../providers/state/reducers/movement";
import { setDate } from "../providers/state/reducers/worth";
import colors from "../utils/colors";
import { initalOptions } from "../utils/data/data";

const AddBudgetMovement = (props) => {
  // route params
  const type = props?.route?.params?.type;

  const typeValue = useMemo(() => {
    if (!type) {
      return "Dépense";
    }
    if (type === "expense") {
      return "Dépense";
    } else {
      return "Revenu";
    }
  }, [type]);

  const inputRef = React.useRef(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { selectedCategory, selectedDate, movementType, movements } =
    useSelector((state) => state.movement);
  const { currency, decimalEnabled } = useSelector((state) => state.settings);

  const [selectedOption, setSelectedOption] = useState(typeValue);
  const [repeatation, setRepeatation] = useState("NON");
  const [amount, setAmount] = useState(0);
  const [notes, setNotes] = useState("");
  const [selectedCurrentDate, setSelectedCurrentDate] = useState(new Date());

  const handleAmountChange = (value) => {
    // check if the value is too long
    if (value.length > 10) {
      return;
    } else {
      if (decimalEnabled) {
        const numericValue = parseFloat(value);
        setAmount(numericValue);
      } else {
        const numericValue = parseInt(value);
        setAmount(numericValue);
      }
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

  const handleDatePickerShow = () => {
    const platform = Platform.OS;
    if (platform === "ios") {
      navigation.navigate("MovementDatePicker");
    } else {
      setShowDatePicker(true);
    }
  };

  useEffect(() => {
    dispatch(setSelectedCategory(null));
    dispatch(setSelectedDate(new Date().toISOString().split("T")[0]));
  }, []);

  const onSubmit = () => {
    if (!repeatation) {
      Alert.alert("Please choose a repeatation");
      return;
    }

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
          <View>
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

            <CustomInput name="Catégorie">
              <TouchableOpacity
                onPress={() => navigation.navigate("SelectCategory")}
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

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Text
                className="font-bold text-xl"
                style={{
                  fontFamily: "OpenSans-Bold",
                  color: colors.black,
                }}
              >
                Répétition
              </Text>
              {Platform.OS === "android" && (
                <Text
                  style={{
                    position: "absolute",
                    right: "15%",
                    fontFamily: "OpenSans-Regular",
                    color: colors.black,
                    top: "25%",
                  }}
                  className="text-lg"
                >
                  {repeatation && repeatation}
                </Text>
              )}
              <View style={{ flex: 0.4 }}>
                <View style={styles.pickerWrapper}>
                  <Picker
                    testID="pickerRepeatation"
                    mode={Platform.OS === "ios" ? "modal" : "dropdown"}
                    style={{
                      fontFamily: "OpenSans-Regular",
                      borderRadius: "100%",
                      flex: 1,
                      marginRight: -30,
                      color: "transparent",
                    }}
                    enabled={true}
                    onValueChange={(value) => setRepeatation(value)}
                    selectedValue={repeatation}
                  >
                    <Picker.Item label="NON" value="NON" />
                    <Picker.Item label="OUI" value="OUI" />
                  </Picker>
                  <Ionicons
                    name="md-arrow-down-circle"
                    size={30}
                    color={colors.primary}
                  />
                </View>
              </View>
            </View>

            <CustomInput name="Notes"></CustomInput>

            <TextInput
              placeholder="Notes"
              style={{
                fontFamily: "OpenSans-Regular",
                backgroundColor: colors.lightGray,
                borderRadius: 10,
                paddingHorizontal: 20,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                minHeight: 150,
              }}
              value={notes}
              onChangeText={setNotes}
              multiline
              numberOfLines={4}
              className=" text-xl my-5"
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  pickerWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AddBudgetMovement;
