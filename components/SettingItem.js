import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrency,
  setDecimalEnabled,
} from "../providers/state/reducers/settings";
import colors from "../utils/colors";
import { downloadJSON } from "../utils/funtions";

const SettingItem = (props) => {
  const { item, navigation } = props;

  const { title, icon } = item;

  const { decimalEnabled, currency, currencies } = useSelector(
    (state) => state.settings
  );

  const { movements } = useSelector((state) => state.movement);
  const { worths } = useSelector((state) => state.worth);

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
    } else if (item.id === "6") {
      // Export all data to Excel
      await downloadJSON({
        movements,
        worths,
      });
    }
  };

  const updateCurrency = (value) => {
    dispatch(setCurrency(value));
  };

  if (item.id === "2") {
    return (
      <View style={styles.settingItem} className="justify-center">
        <RNPickerSelect
          onValueChange={updateCurrency}
          value={currency}
          placeholder={{}}
          Icon={() => (
            <AntDesign name={"bank"} size={25} color={colors.black} />
          )}
          style={{
            inputIOS: {
              fontFamily: "TheHand-Bold",
              color: colors.black,
              fontSize: 36,
              paddingLeft: 45,
              paddingVertical: 0,
            },
            inputAndroid: {
              fontFamily: "TheHand-Bold",
              color: colors.black,
              fontSize: 25,
              paddingLeft: 45,
              paddingVertical: 0,
            },
            iconContainer: {
              position: "absolute",
              left: 0,
              top: 0,
            },
          }}
          fixAndroidTouchableBug={true}
          useNativeAndroidPickerStyle={false}
          items={currencies}
        />
      </View>
    );
  }

  return (
    <TouchableOpacity
      className="py-4 flex flex-row justify-start items-center gap-5"
      onPress={handlePress}
      style={styles.settingItem}
    >
      <AntDesign
        name={
          item.id === "5"
            ? decimalEnabled
              ? "checksquare"
              : "checksquareo"
            : icon
        }
        size={25}
        color={colors.black}
      />
      <Text
        className="text-4xl"
        style={{
          fontFamily: "TheHand-Bold",
          color: colors.black,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  settingItem: {
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
});

export default SettingItem;
