import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, LogBox, Platform, View } from "react-native";
import "react-native-gesture-handler";
import "react-native-reanimated";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import FontsProvider from "./providers/FontsProvider";
import { persistor, store } from "./providers/state/store";
import Root from "./screens/Root";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

LogBox.ignoreAllLogs();
console.disableYellowBox = true;
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ActionSheetProvider>
            <FontsProvider>
              <StatusBar style="auto" />

              <NavigationContainer
                theme={{
                  colors: {
                    background: "#fff",
                    card: "#fff",
                    text: "#242426",
                    border: "#fff",
                    notification: "#fff",
                  },
                  dark: false,
                }}
              >
                <Root />
              </NavigationContainer>
            </FontsProvider>
          </ActionSheetProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

registerRootComponent(App);
