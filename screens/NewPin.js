import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Animated,
  SafeAreaView,
} from "react-native";
import PinBoxList from "../components/PinCode/PinBoxList";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import colors from "../utils/colors";
import { useDispatch } from "react-redux";
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

const NewPin = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
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

    dispatch(setPinCode(pinValue));

    console.log("pin entered: ", pinValue);

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        className="flex relative flex-row justify-between items-center mx-4 my-3"
        style={{}}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="ios-arrow-back-outline"
            size={25}
            color={colors.black}
          />
        </TouchableOpacity>
      </View>

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
    </SafeAreaView>
  );
};

export default NewPin;
