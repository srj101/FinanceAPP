import HomeScreen from "./Home";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "./OnBoarding";
import MonthlyBudget from "./MonthlyBudget";
import { getValueFor } from "../utils/secureStorage";
import { StatusBar, Platform, View } from "react-native";
import AddMovement from "./AddMovement";
import MovementDatePicker from "../components/AddMovement/MovementDatePicker";
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MonthlyBudget" component={MonthlyBudget} />
      <Stack.Screen name="AddMovementStack" component={AddMovementStack} />
    </Stack.Navigator>
  );
};

const AddMovementStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AddMovement"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AddMovement" component={AddMovement} />
      <Stack.Screen name="MovementDatePicker" component={MovementDatePicker} />
    </Stack.Navigator>
  );
};

const Root = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  React.useEffect(() => {
    getValueFor("onboarding")
      .then((res) => {
        if (res === null) {
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
      })
      .catch((err) => {});
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Stack.Navigator
        initialRouteName={isFirstLaunch ? `OnBoarding` : `HomeStack`}
      >
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default Root;
