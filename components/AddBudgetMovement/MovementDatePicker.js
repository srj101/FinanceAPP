import {
  View,
  Platform,
  StatusBar,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useMemo } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign, Octicons } from "@expo/vector-icons";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDate } from "../../providers/state/reducers/movement";
import { setDate } from "../../providers/state/reducers/worth";

const MovementDatePicker = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { selectedDate } = useSelector((state) => state.movement);

  const handleDateChange = useCallback(
    (event, selectedDate) => {
      // Check if the date is within the current year

      const date = new Date();
      const currentYear = date.getFullYear();
      const lastDateOfCurrentYear = new Date(currentYear, 11, 31);

      if (selectedDate > lastDateOfCurrentYear) {
        alert("The date must be within the current year");
        return;
      }

      let currentDate = selectedDate || new Date();

      currentDate = currentDate.toISOString();

      dispatch(setSelectedDate(currentDate));
      dispatch(setDate(currentDate));
    },
    [selectedDate]
  );

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
      <RNDateTimePicker
        display="spinner"
        value={new Date(selectedDate)}
        minimumDate={FirstDateOfCurrentYear}
        maximumDate={lastDateOfCurrentYear}
        mode="date"
        onChange={handleDateChange}
      />
    </SafeAreaView>
  );
};

export default MovementDatePicker;
