import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
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
  updateMovement,
} from "../providers/state/reducers/movement";
import { setDate } from "../providers/state/reducers/worth";
import colors from "../utils/colors";
import { initalOptions } from "../utils/data/data";

const AddBudgetMovement = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { selectedCategory, selectedDate, movementType } = useSelector(
    (state) => state.movement
  );
  const { currency, decimalEnabled } = useSelector((state) => state.settings);

  const [repeatation, setRepeatation] = useState("NON");
  const [amount, setAmount] = useState(0);
  const [notes, setNotes] = useState("");
  const [selectedCurrentDate, setSelectedCurrentDate] = useState(new Date());

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

  const currentYear = new Date().getFullYear();
  const lastDateOfCurrentYear = useMemo(
    () => new Date(currentYear, 11, 31),
    []
  );
  const firstDateOfCurrentYear = useMemo(() => new Date(currentYear, 0, 1), []);
  const type = props?.route?.params?.type;
  const typeValue = useMemo(
    () => (type === "expense" ? "Dépense" : "Revenu"),
    [type]
  );
  const [selectedOption, setSelectedOption] = useState(typeValue || "Dépense");

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

  const handleDatePickerShow = () => {
    Platform.OS === "ios"
      ? navigation.navigate("MovementDatePicker")
      : setShowDatePicker(true);
  };

  useEffect(() => {
    dispatch(setSelectedCategory(null));
    dispatch(setSelectedDate(new Date().toISOString().split("T")[0]));
  }, []);

  const onSubmit = () => {
    if (
      !repeatation ||
      !amount ||
      !selectedCategory ||
      !selectedDate ||
      !movementType ||
      !selectedOption
    ) {
      Alert.alert("Please fill all the fields");
      return;
    }

    const ammmount = decimalEnabled ? parseFloat(amount) : parseInt(amount);
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
    };

    dispatch(
      updateMovement({ item, selectedMonthIndex, movementType, repeatation })
    );

    // dispatch(setMovements(newMovements));
    Alert.alert("Success", "Movement added successfully");

    dispatch(setSelectedCategory(null));
    dispatch(setSelectedDate(new Date().toISOString().split("T")[0]));
    dispatch(setCurrentMonth(selectedMonthIndex));
    navigation.goBack();
  };

  const handleClose = () => {
    dispatch(setSelectedCategory(null));
    dispatch(setSelectedDate(new Date().toISOString().split("T")[0]));
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{ flexGrow: 1 }}
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

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              <TextInput
                keyboardType={decimalEnabled ? "numeric" : "number-pad"}
                placeholder={`0.00`}
                maxLength={10}
                value={amount.toString()}
                onChangeText={handleAmountChange}
                style={{
                  fontFamily: "OpenSans-Bold",
                }}
                className="text-4xl"
              />

              <Text
                className="text-4xl mt-2"
                style={{
                  fontFamily: "OpenSans-Bold",
                  color: colors.black,
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
                className="flex flex-row justify-end items-center gap-2 "
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

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                  gap: 10,
                }}
                onPress={() => {
                  if (repeatation === "NON") {
                    setRepeatation("OUI");
                  } else {
                    setRepeatation("NON");
                  }
                }}
              >
                <Text>{repeatation}</Text>
                <MaterialIcons
                  name="swap-horizontal-circle"
                  size={30}
                  color={colors.black}
                />
              </TouchableOpacity>
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
