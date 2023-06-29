import HomeScreen from "./Home";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "./OnBoarding";
import MonthlyBudget from "./MonthlyBudget";
import { getValueFor } from "../utils/secureStorage";
import { StatusBar, Platform, View } from "react-native";
import MovementDatePicker from "../components/AddBudgetMovement/MovementDatePicker";
import NetWorth from "./NetWorth";
import AddBudgetMovement from "./AddBudgetMovement";
import AddNetWorthMovement from "./AddNetWorthMovement";
import Settings from "./Settings";
import SelectCategory from "./SelectCategory";
import NewCategory from "./NewCategory";
import AppLoading from "../components/AppLoading";
import CategoryList from "./CategoryList";
import { setCategories } from "../providers/state/reducers/categories";
import { useDispatch, useSelector } from "react-redux";
import {
  initialCategories,
  currencies,
  initalNetWorth,
  initialMovements,
} from "../utils/data/data";
import EditCategory from "./EditCategory";
import { setCurrencies } from "../providers/state/reducers/settings";
import { setMovements } from "../providers/state/reducers/movement";
import { setInitialWorths } from "../providers/state/reducers/worth";
const Stack = createNativeStackNavigator();

const Root = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  const { categories } = useSelector((state) => state.categories);
  const { movements } = useSelector((state) => state.movement);
  const { worths } = useSelector((state) => state.worth);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setCurrencies(currencies));
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

  React.useEffect(() => {
    if (
      isFirstLaunch === true ||
      categories.length === 0 ||
      movements.length === 0 ||
      worths.length === 0
    ) {
      dispatch(setCategories(initialCategories));
      dispatch(setMovements(initialMovements));
      dispatch(setInitialWorths(initalNetWorth));
    }

    if (categories.length < 5) {
      dispatch(setCategories(initialCategories));
    }
  }, [categories, movements, worths, isFirstLaunch]);

  if (isFirstLaunch === null) {
    return <AppLoading />;
  }

  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MonthlyBudget" component={MonthlyBudget} />
        <Stack.Screen name="AddMovement" component={AddBudgetMovement} />

        <Stack.Screen name="NetWorth" component={NetWorth} />
        <Stack.Screen
          name="AddNetWorthMovement"
          component={AddNetWorthMovement}
        />
        <Stack.Screen
          name="MovementDatePicker"
          component={MovementDatePicker}
        />
        <Stack.Screen name="SelectCategory" component={SelectCategory} />
        <Stack.Screen name="NewCategory" component={NewCategory} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="CategoryList" component={CategoryList} />
        <Stack.Screen name="EditCategory" component={EditCategory} />
      </Stack.Navigator>
    </View>
  );
};

export default Root;
