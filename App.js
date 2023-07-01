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
LogBox.ignoreAllLogs();
console.disableYellowBox = true;
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
              <View
                style={{
                  flex: 1,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 2,
                  opacity: 0.9,
                }}
              >
                <Root />
              </View>
              <ImageBackground
                source={require("./assets/pattern.jpg")}
                style={{
                  flex: 1,
                  zIndex: 1,
                  resizeMode: "cover",
                  position: "absolute",
                  top: Platform.OS === "android" ? 25 : 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: 0.3,
                }}
              />
            </NavigationContainer>
          </FontsProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

registerRootComponent(App);
