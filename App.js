import "react-native-reanimated";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./screens/Root";
import FontsProvider from "./providers/FontsProvider";
import { Provider } from "react-redux";
import { store, persistor } from "./providers/state/store";
import { PersistGate } from "redux-persist/integration/react";
import { registerRootComponent } from "expo";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();
console.disableYellowBox = true;

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FontsProvider>
          <StatusBar style="auto" />
          <NavigationContainer>
            <Root />
          </NavigationContainer>
        </FontsProvider>
      </PersistGate>
    </Provider>
  );
}

registerRootComponent(App);
