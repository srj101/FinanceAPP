import { Linking, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback } from "react";
import colors from "../utils/colors";
import { AntDesign } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrency,
  setDecimalEnabled,
} from "../providers/state/reducers/settings";

const SettingItem = (props) => {
  const { item, navigation } = props;

  const { title, icon } = item;

  const { decimalEnabled, currency, currencies } = useSelector(
    (state) => state.settings
  );

  const dispatch = useDispatch();

  const handlePress = async () => {
    if (item.id === "5") {
      dispatch(setDecimalEnabled(!decimalEnabled));
    } else if (item.id === "3") {
      // mail to
      await Linking.openURL("mailto:themoneyvisor@gmail.com");
    } else if (item.id === "4") {
      // mail to
      await Linking.openURL("http://www.themoneyvisor.com/");
    } else if (item.id === "1") {
      // CategoryList
      navigation.navigate("CategoryList");
    }
  };

  const updateCurrency = (value) => {
    dispatch(setCurrency(value));
  };

  if (item.id === "2") {
    return (
      <View>
        <RNPickerSelect
          onValueChange={updateCurrency}
          value={currency}
          placeholder={{}}
          Icon={() => (
            <AntDesign name={"bank"} size={40} color={colors.black} />
          )}
          style={{
            inputIOS: {
              fontFamily: "OpenSans-Regular",
              color: colors.black,
              fontSize: 23,
              paddingLeft: 55,
              paddingVertical: 10,
            },
            inputAndroid: {
              fontFamily: "OpenSans-Regular",
              color: colors.black,
              fontSize: 23,
              paddingLeft: 55,
            },
            iconContainer: {
              position: "absolute",
              left: 0,
              top: 0,
            },
          }}
          fixAndroidTouchableBug={true}
          items={currencies}
        />
      </View>
    );
  }

  return (
    <TouchableOpacity
      className="py-4 flex flex-row justify-start items-center gap-4"
      onPress={handlePress}
    >
      <AntDesign
        name={
          item.id === "5"
            ? decimalEnabled
              ? "checksquare"
              : "checksquareo"
            : icon
        }
        size={40}
        color={colors.black}
      />
      <Text
        className="text-2xl"
        style={{
          fontFamily: "OpenSans-Regular",
          color: colors.black,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SettingItem;
