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
import { setCategory, setDate } from "../providers/state/reducers/worth";
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

  const inputRef = React.useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
  const FirstDateOfCurrentYear = useMemo(() => new Date(currentYear, 0, 1), []);
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
        alert("La date doit être dans l'année en cours");
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

  const onSubmit = () => {
    if (
      !repeatation ||
      !amount ||
      !selectedCategory ||
      !selectedDate ||
      !movementType ||
      !selectedOption
    ) {
      Alert.alert("Remplissez tous les champs");
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

    dispatch(setSelectedCategory(null));
    dispatch(setSelectedDate(new Date().toISOString().split("T")[0]));
    dispatch(setCurrentMonth(selectedMonthIndex));
    navigation.goBack();
  };

  const handleClose = () => {
    dispatch(setSelectedCategory(null));
    dispatch(setCategory(null));
    dispatch(setSelectedDate(new Date().toISOString().split("T")[0]));
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
                gap: 5,
                flex: 1,
                marginVertical: 20,
              }}
            >
              <TextInput
                keyboardType={decimalEnabled ? "numeric" : "number-pad"}
                placeholder={`0.00`}
                caretHidden
                ref={inputRef}
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
                onPress={() =>
                  navigation.navigate("SelectCategory", {
                    type: "budget",
                  })
                }
                className="flex flex-row justify-end items-center gap-2"
              >
                <Text
                  className="text-lg"
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
                  className="text-lg"
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

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
              }}
              className="mb-4"
            >
              <Text
                className=" text-lg"
                style={{
                  fontFamily: "OpenSans-Regular",
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

            <Text
              className="text-lg"
              style={{
                fontFamily: "OpenSans-Regular",
                color: colors.black,
              }}
            >
              Note
            </Text>

            <TextInput
              placeholder="Note"
              style={{
                fontFamily: "OpenSans-Regular",
                backgroundColor: colors.lightGray,
                borderRadius: 10,
                paddingHorizontal: 20,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                minHeight: 150,
                paddingVertical: 10,
                textAlignVertical: "top",
              }}
              value={notes}
              onChangeText={setNotes}
              multiline
              numberOfLines={4}
              className=" text-lg my-5"
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
