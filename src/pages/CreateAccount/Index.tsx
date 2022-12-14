import { AppConstants, AppTheme } from "../../config/DefaultConfig";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import { AppLanguage } from "../../config/languages";
import { Dispatch } from "redux";
import Icon from "@expo/vector-icons/FontAwesome";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { RootStackType } from "../../navigation";
import RoundButton from "../../components/Base/RoundButton";
import ThemedText from "../../components/UI/ThemedText";
import useConstants from "../../hooks/useConstants";
import useLanguage from "../../hooks/useLanguage";
import useTheme from "../../hooks/useTheme";

interface Props {
  dispatch: Dispatch;
  navigation: NativeStackNavigationProp<RootStackType>;
}

// @ts-ignore
const ImagePath = require("../../images/Recraftsoppify_aap_bg_effect.png");

const CreateAccount: React.FunctionComponent<Props> = ({
  navigation,
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();
  const language: AppLanguage = useLanguage();

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const backButton = () => {
    navigation.goBack();
  };

  const gotoHome = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={ImagePath}
      style={{ width: "100%", height: "100%" }}
    >
      <TouchableOpacity onPress={backButton}>
        <MaterialIcon
          name="arrow-left"
          size={30}
          color={theme.textColor}
          style={style.backIcon}
        />
      </TouchableOpacity>
      <ScrollView style={style.mainContainer}>
        <View style={style.container}>
          <View style={style.topContainer}>
            <ThemedText styleKey="appColor" style={style.title}>
              {language.createAccountLabel}
            </ThemedText>
          </View>
          <View style={style.childContainer}>
            <ThemedText style={style.inputLabel} styleKey="inputColor">
              {language.labelName}
            </ThemedText>
          </View>
          <View style={style.childContainer}>
            <TextInput
              style={[
                style.inputContainer,
                {
                  borderBottomColor: theme.inputBorderColor,
                  color: theme.textColor,
                },
              ]}
              placeholderTextColor={theme.lightTextColor}
              placeholder={language.namePlaceholder}
            />
          </View>
          <View style={style.childContainer}>
            <ThemedText style={style.inputLabel} styleKey="inputColor">
              {language.labelUser}
            </ThemedText>
          </View>
          <View style={style.childContainer}>
            <TextInput
              style={[
                style.inputContainer,
                {
                  borderBottomColor: theme.inputBorderColor,
                  color: theme.textColor,
                },
              ]}
              placeholderTextColor={theme.lightTextColor}
              placeholder={language.emailPlaceholder}
            />
          </View>
          <View style={style.childContainer}>
            <ThemedText style={style.inputLabel} styleKey="inputColor">
              {language.labelPass}
            </ThemedText>
          </View>
          <View style={style.childContainer}>
            <TextInput
              style={[
                style.inputContainer,
                {
                  borderBottomColor: theme.inputBorderColor,
                  color: theme.textColor,
                },
              ]}
              placeholderTextColor={theme.lightTextColor}
              placeholder={language.passPlaceholder}
              secureTextEntry
            />
          </View>
          <View style={style.childContainer}>
            <ThemedText
              style={style.forgotPassword}
              styleKey="textColor"
              onPress={goToLogin}
            >
              {language.labelCheckAcc}
            </ThemedText>
          </View>
          <RoundButton
            label={language.labelSubmit}
            buttonStyle={{ minWidth: 230 }}
            onPress={gotoHome}
          />
          <View style={style.childContainer}>
            <ThemedText style={style.forgotPassword} styleKey="textColor">
              {language.labelChoice}
            </ThemedText>
          </View>
          <View style={style.childContainer}>
            <View
              style={[
                style.iconContainer,
                {
                  shadowColor: theme.labelBgColor,
                  backgroundColor: theme.googleColor,
                },
              ]}
            >
              <Icon
                name="google"
                size={30}
                color={theme.highlightTextColor}
                style={style.Icon}
                onPress={() => {
                  alert("google");
                }}
              />
            </View>
            <View
              style={[
                style.iconContainer,
                {
                  shadowColor: theme.labelBgColor,
                  backgroundColor: theme.facebookColor,
                },
              ]}
            >
              <Icon
                name="facebook"
                size={30}
                color={theme.highlightTextColor}
                style={[style.Icon]}
                onPress={() => {
                  alert("facebook");
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default CreateAccount;

interface Style {
  mainContainer: ViewStyle;
  container: ViewStyle;
  topContainer: ViewStyle;
  childContainer: ViewStyle;
  bottomContainer: ViewStyle;
  inputContainer: TextStyle;
  inputLabel: TextStyle;
  forgotPassword: TextStyle;
  title: TextStyle;
  Icon: TextStyle;
  iconContainer: ViewStyle;
  containerBg: ViewStyle;
  containerImage: ViewStyle;
  backIcon: ViewStyle;
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "transparent",
  },
  container: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 16,
    backgroundColor: "transparent",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 50,
    marginBottom: 40,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 30,
  },
  inputLabel: {
    width: "100%",
    fontSize: 13,
  },
  childContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  forgotPassword: {
    marginTop: 30,
    marginBottom: 15,
    fontSize: 16,
  },
  inputContainer: {
    height: 40,
    marginTop: 10,
    width: "100%",
    marginBottom: 10,
    borderBottomWidth: 2,
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
  },
  iconContainer: {
    borderRadius: 6,
    margin: 12,
    minWidth: 50,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
  },
  Icon: {
    fontSize: 25,
    padding: 15,
    justifyContent: "center",
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 25,
  },
});
