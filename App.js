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
import {
  ImageBackground,
  LogBox,
  Platform,
  SafeAreaView,
  View,
} from "react-native";
import { rgbToHex } from "./utils/funtions";
LogBox.ignoreAllLogs();
console.disableYellowBox = true;

export default function App() {
  return (
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
                width: null,
                height: null,
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
  );
}

registerRootComponent(App);
