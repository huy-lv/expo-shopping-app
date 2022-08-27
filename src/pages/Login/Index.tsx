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
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { RootStackType } from "../../navigation";
import RoundButton from "../../components/Base/RoundButton";
import ThemedText from "../../components/UI/ThemedText";
import { connect } from "react-redux";
import { setLoginAction } from "../../store/reducers/login";
import useConstants from "../../hooks/useConstants";
import useLanguage from "../../hooks/useLanguage";
import useTheme from "../../hooks/useTheme";

// @ts-ignore
const ImagePath = require("../../images/Recraftsoppify_aap_bg_effect.png");

interface Props {
  dispatch: Dispatch;
  navigation: NativeStackNavigationProp<RootStackType>;
}

const Login: React.FunctionComponent<Props> = ({
  dispatch,
  navigation,
}: Props) => {
  const theme: AppTheme = useTheme();
  const language: AppLanguage = useLanguage();

  const submitButton = () => {
    dispatch(setLoginAction(true));
  };

  const onPressRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <ImageBackground
      source={ImagePath}
      style={{ width: "100%", height: "100%" }}
    >
      <ScrollView>
        <View style={style.container}>
          <View style={style.topContainer}>
            <ThemedText styleKey="appColor" style={style.title}>
              {language.labelLogin}
            </ThemedText>
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
              placeholder={language.userPlaceholder}
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
              onPress={() => {
                alert("ji");
              }}
            >
              {language.labelForget}
            </ThemedText>
          </View>
          <RoundButton
            label={language.login}
            buttonStyle={{ paddingHorizontal: 64 }}
            onPress={submitButton}
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
                  alert("google");
                }}
              />
            </View>
          </View>
          <View>
            <ThemedText
              style={style.forgotPassword}
              styleKey="textColor"
              onPress={onPressRegister}
            >
              {language.register}
            </ThemedText>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default connect(({ dispatch }) => ({ dispatch }))(Login);

interface Style {
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
  container: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 16,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 80,
    marginBottom: 20,
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
    marginTop: 20,
    marginBottom: 15,
    fontSize: 16,
  },
  inputContainer: {
    height: 40,
    marginTop: 10,
    width: "100%",
    marginBottom: 15,
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
    elevation: 6,
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
