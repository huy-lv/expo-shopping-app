import { AppConstants, AppTheme } from "../../config/DefaultConfig";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

import { AppLanguage } from "../../config/languages";
import { Dispatch } from "redux";
import HomePageProducts from "./HomePageProducts";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { RootStackType } from "../../navigation";
import RoundButton from "../../components/Base/RoundButton";
import useConstants from "../../hooks/useConstants";
import useLanguage from "../../hooks/useLanguage";
import useTheme from "../../hooks/useTheme";

interface Props {
  dispatch: Dispatch;
  navigation: NativeStackNavigationProp<RootStackType>;
}

// @ts-ignore
const ImagePath = require("../../images/shopping.jpg");

const Home: React.FunctionComponent<Props> = ({ navigation }: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();
  const language: AppLanguage = useLanguage();

  const gotoProducts = () => {
    navigation.navigate("Shopping");
  };

  return (
    <View style={style.mainContainer}>
      <View style={style.firstView}>
        <ImageBackground
          source={ImagePath}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={style.fistViewContent}>
            <Text style={[style.fistViewText, { color: theme.labelBgColor }]}>
              {constants.homePage.labelFashion}
            </Text>
            <Text style={[style.fistViewText, { color: theme.labelBgColor }]}>
              {constants.homePage.labelSave}
            </Text>
            <RoundButton
              buttonStyle={[
                style.fistViewButton,
                {
                  backgroundColor: theme.dangerColor,
                  borderColor: theme.dangerColor,
                },
              ]}
              labelStyle={{ fontSize: 17, color: theme.labelBgColor }}
              label={language.labelCheck}
              onPress={gotoProducts}
            />
          </View>
        </ImageBackground>
      </View>
      <HomePageProducts navigation={navigation} />
    </View>
  );
};

export default Home;

interface Style {
  mainContainer: ViewStyle;
  firstView: ViewStyle;
  fistViewButton: ViewStyle;
  fistViewText: TextStyle;
  fistViewContent: ViewStyle;
}

const style = StyleSheet.create({
  mainContainer: {
    padding: 0,
    margin: 0,
    flex: 1,
  },
  firstView: {
    flex: 3,
    height: "100%",
  },
  fistViewText: {
    fontSize: 35,
    fontWeight: "900",
  },
  fistViewButton: {
    maxWidth: 180,
    textAlign: "center",
    minWidth: 230,
  },
  fistViewContent: {
    position: "absolute",
    bottom: 30,
    left: 20,
  },
});
