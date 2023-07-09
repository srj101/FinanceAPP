import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Animated,
} from "react-native";
import PinBoxList from "../components/PinCode/PinBoxList";
import { AntDesign } from "@expo/vector-icons";
import colors from "../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { setPinCode } from "../providers/state/reducers/settings";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: "red",
    position: "absolute",
    right: -99,
    // right: 0,
    top: StatusBar.currentHeight + 20,
  },
  pinView: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: StatusBar.currentHeight + 100,
  },
  pinPromptText: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.black,
    borderRadius: 100,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    maxWidth: 50,
    maxHeight: 50,
  },
  buttonText: {
    color: colors.lightGray,
    fontSize: 20,
  },
});

const PinCodeAuth = () => {
  const navigation = useNavigation();
  const { pinCode } = useSelector((state) => state.settings);
  const [maxPinLength, setMaxPinLength] = useState(6);
  const [pinValue, setPinValue] = useState("");
  const [borderRadius, setBorderRadius] = useState(new Animated.Value(50));

  useEffect(() => {
    animateBorder();
  }, [pinValue]);

  const onPinEntry = (pinValue) => {
    if (pinValue.length && isNaN(pinValue)) return;

    setPinValue(pinValue);
    onPinEntered(pinValue);
  };

  const onPinEntered = (pinValue) => {
    if (pinValue.length <= maxPinLength) return;

    // do something with the pin
    dispatch(setPinCode(pinValue));
  };

  const animateBorder = () => {
    Animated.timing(borderRadius, {
      toValue: 50 + pinValue.length * (100 / maxPinLength),
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleNewPin = () => {
    if (pinValue.length < maxPinLength) return;

    if (pinCode && pinCode !== pinValue) {
      alert("Le code pin est incorrect");

      // reset pin
      setPinValue("");

      return;
    }
    console.log("pin entered: ", pinValue);
    navigation.navigate("OnBoarding");
  };

  return (
    <View style={styles.container}>
      <View style={styles.pinView}>
        <Text style={styles.pinPromptText}>Enter a passcode</Text>
        <PinBoxList
          pinLength={maxPinLength}
          pinValueLength={pinValue && pinValue.length}
        />
        <TouchableOpacity
          style={[
            styles.button,
            {
              borderRadius: borderRadius,
              backgroundColor:
                pinValue.length === maxPinLength
                  ? colors.black
                  : colors.lightGray,
            },
          ]}
          disabled={pinValue.length < maxPinLength}
          onPress={handleNewPin}
        >
          <AntDesign name="check" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <TextInput
        autoFocus={true}
        blurOnSubmit={false}
        defaultValue={pinValue}
        enablesReturnKeyAutomatically={false}
        keyboardType="numeric"
        maxLength={maxPinLength}
        onChangeText={onPinEntry}
        style={styles.input}
      />
    </View>
  );
};

export default PinCodeAuth;
