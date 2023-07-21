import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Platform, StatusBar, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MovementDatePicker from "../components/AddBudgetMovement/MovementDatePicker";
import AppLoading from "../components/AppLoading";
import { setCategories } from "../providers/state/reducers/categories";
import {
  setActualMovements,
  setEstimaedMovements,
} from "../providers/state/reducers/movement";
import {
  setAssetWorths,
  setLiabilityWorths,
} from "../providers/state/reducers/worth";
import {
  initalLiabilitiesWorth,
  initialActualMovements,
  initialAssetWorths,
  initialCategories,
  initialEstimatedBudgets,
} from "../utils/data/data";
import { getValueFor } from "../utils/secureStorage";
import AddBudgetMovement from "./AddBudgetMovement";
import AddNetWorthMovement from "./AddNetWorthMovement";
import CategoryList from "./CategoryList";
import CurrencyList from "./CurrencyList";
import EditCategory from "./EditCategory";
import EditMovement from "./EditMovement";
import EditWorth from "./EditWorth";
import HomeScreen from "./Home";
import MonthlyBudget from "./MonthlyBudget";
import NetWorth from "./NetWorth";
import NewCategory from "./NewCategory";
import NewPin from "./NewPin";
import OnBoarding from "./OnBoarding";
import PinCodeAuth from "./PinCodeAuth";
import SelectCategory from "./SelectCategory";
import Settings from "./Settings";
import TermsPDF from "./TermsPDF";
const Stack = createNativeStackNavigator();

const Root = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  const { categories } = useSelector((state) => state.categories);
  const { actualMovements, estimatedMovements } = useSelector(
    (state) => state.movement
  );
  const { liabilityWorths, assetWorths } = useSelector((state) => state.worth);
  const { pinCode } = useSelector((state) => state.settings);

  const dispatch = useDispatch();
  React.useEffect(() => {
    getValueFor("firstTimeLaunch")
      .then((res) => {
        if (res === null) {
          if (categories.length < 17) {
            dispatch(setCategories(initialCategories));
          }
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
      })
      .catch((err) => {});
  }, []);

  React.useEffect(() => {
    if (
      isFirstLaunch === true &&
      (estimatedMovements.length < 12 ||
        assetWorths.length < 12 ||
        liabilityWorths.length < 12 ||
        actualMovements.length < 12 ||
        categories.length < 5)
    ) {
      dispatch(setCategories(initialCategories));
      dispatch(setEstimaedMovements(initialEstimatedBudgets));
      dispatch(setActualMovements(initialActualMovements));
      dispatch(setAssetWorths(initialAssetWorths));
      dispatch(setLiabilityWorths(initalLiabilitiesWorth));
    }
  }, [
    categories,
    estimatedMovements,
    actualMovements,
    assetWorths,
    liabilityWorths,
    isFirstLaunch,
  ]);

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
        initialRouteName={"OnBoarding"}
      >
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PinCodeAuth" component={PinCodeAuth} />
        <Stack.Screen name="NewPin" component={NewPin} />
        <Stack.Screen name="MonthlyBudget" component={MonthlyBudget} />
        <Stack.Screen name="AddMovement" component={AddBudgetMovement} />
        <Stack.Screen name="EditMovement" component={EditMovement} />

        <Stack.Screen name="NetWorth" component={NetWorth} />
        <Stack.Screen
          name="AddNetWorthMovement"
          component={AddNetWorthMovement}
        />
        <Stack.Screen name="EditWorth" component={EditWorth} />
        <Stack.Screen
          name="MovementDatePicker"
          component={MovementDatePicker}
        />
        <Stack.Screen name="SelectCategory" component={SelectCategory} />
        <Stack.Screen name="NewCategory" component={NewCategory} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="CategoryList" component={CategoryList} />
        <Stack.Screen name="EditCategory" component={EditCategory} />

        <Stack.Screen name="CurrencyList" component={CurrencyList} />

        <Stack.Screen name="TermsPDF" component={TermsPDF} />
      </Stack.Navigator>
    </View>
  );
};

export default Root;
