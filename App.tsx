import * as SplashScreen from "expo-splash-screen";

import { Provider } from "react-redux";
import RootNavigation from "./src/navigation";
import store from "./src/store";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
