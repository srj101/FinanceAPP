import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Linking, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setDecimalEnabled } from "../providers/state/reducers/settings";
import colors from "../utils/colors";
import { downloadJSON } from "../utils/funtions";

const SettingItem = (props) => {
  const navigation = useNavigation();
  const { item } = props;

  const { title, icon } = item;

  const { decimalEnabled } = useSelector((state) => state.settings);

  const { movements } = useSelector((state) => state.movement);
  const { worths } = useSelector((state) => state.worth);

  const dispatch = useDispatch();

  const handlePress = () => {
    if (item.id === "5") {
      dispatch(setDecimalEnabled(!decimalEnabled));
    } else if (item.id === "2") {
      // CurrencyList
      navigation.navigate("CurrencyList");
    } else if (item.id === "3") {
      // mail to
      Linking.openURL("mailto:themoneyvisor@gmail.com");
    } else if (item.id === "4") {
      // mail to
      Linking.openURL("http://www.themoneyvisor.com/");
    } else if (item.id === "1") {
      // CategoryList
      navigation.navigate("CategoryList");
    } else if (item.id === "6") {
      // Set Pincode
      navigation.navigate("NewPin");
    } else if (item.id === "7") {
      // Export all data to Excel
      downloadJSON({
        movements,
        worths,
      })
        .then((res) => {
          alert("Exported successfully");
        })
        .catch((err) => {
          alert("Export failed");
        });
    }
  };

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
