import { StyleSheet, ViewStyle } from "react-native";

import { ApplicationConfig } from "../config/DefaultConfig";
import Checkout from "../pages/Checkout";
import ConfigContext from "../config/AppConfigProvider";
import CreateAccount from "../pages/CreateAccount/Index";
import HomeTab from "./HomeTab";
import Login from "../pages/Login/Index";
import { LoginReducerState } from "../store/reducers/login";
import { NavigationContainer } from "@react-navigation/native";
import Payment from "../pages/Payment";
import ProductDetail from "../pages/Shopping/ProductDetail";
import React from "react";
import ThemedView from "../components/UI/ThemedView";
import { connect } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

interface Props {
  configReducer: ApplicationConfig;
  loginReducer: LoginReducerState;
}
const Stack = createNativeStackNavigator();

const Router: React.FunctionComponent<Props> = ({
  configReducer,
  loginReducer,
}: Props) => {
  return (
    <ConfigContext.Provider value={configReducer}>
      <ThemedView style={style.container}>
        <NavigationContainer>
          <Stack.Navigator>
            {loginReducer.isLoggedIn ? (
              <>
                <Stack.Screen
                  name="HomeTab"
                  component={HomeTab}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="ProductDetail"
                  component={ProductDetail}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Payment"
                  component={Payment}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Checkout"
                  component={Checkout}
                  options={{ headerShown: false }}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Register"
                  component={CreateAccount}
                  options={{ headerShown: false }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </ThemedView>
    </ConfigContext.Provider>
  );
};

export type RootStackType = {
  HomeTab: undefined;
  Checkout: undefined;
  ProductDetail: undefined;
  Payment: undefined;
};

export default connect(({ configReducer, loginReducer }) => ({
  configReducer,
  loginReducer,
}))(Router);

interface Style {
  container: ViewStyle;
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
