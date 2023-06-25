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
import Subscribe from "./Subscribe";
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

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MonthlyBudgetStack" component={BudgetStack} />
      <Stack.Screen name="NetWorthStack" component={NetWorthStack} />
      <Stack.Screen name="CategoryStack" component={CategoryStack} />
      <Stack.Screen name="SettingsStack" component={SettingsStack} />
    </Stack.Navigator>
  );
};

const CategoryStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SelectCategory"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SelectCategory" component={SelectCategory} />
      <Stack.Screen name="NewCategory" component={NewCategory} />
    </Stack.Navigator>
  );
};

const SettingsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="CategoryList" component={CategoryList} />
      <Stack.Screen name="EditCategory" component={EditCategory} />
    </Stack.Navigator>
  );
};

const NetWorthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="NetWorth"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="NetWorth" component={NetWorth} />
      <Stack.Screen
        name="AddNetWorthMovementStack"
        component={AddNetWorthMovementStack}
      />
    </Stack.Navigator>
  );
};

const AddNetWorthMovementStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AddNetWorthMovement"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="AddNetWorthMovement"
        component={AddNetWorthMovement}
      />
      <Stack.Screen name="MovementDatePicker" component={MovementDatePicker} />
    </Stack.Navigator>
  );
};

const BudgetStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MonthlyBudget"
      screenOptions={{
        headerShown: false,
      }}
    >
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
      <Stack.Screen name="AddMovement" component={AddBudgetMovement} />
      <Stack.Screen name="MovementDatePicker" component={MovementDatePicker} />
    </Stack.Navigator>
  );
};

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
        initialRouteName={isFirstLaunch ? `OnBoarding` : "HomeStack"}
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

        <Stack.Screen
          name="PayWall"
          component={Subscribe}
          options={{
            headerShown: false,
            presentation: "modal",
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default Root;
