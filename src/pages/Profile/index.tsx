import { AppConstants, AppTheme } from "../../config/DefaultConfig";
import { AppLanguage, LanguageKey } from "../../config/languages";
import {
  Image,
  ImageStyle,
  ScrollView,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { setLanguageAction, setThemeAction } from "../../store/reducers/config";

import { Dispatch } from "redux";
import FooterNavigation from "../Footer/Index";
import LanguageSelector from "../../components/Base/LanguageSelector";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ProfileItem from "../../components/Base/ProfileItem";
import React from "react";
import { RootStackType } from "../../navigation";
import { ThemeKey } from "../../config/themes";
import ThemeToggle from "../../components/Base/ThemeToggle";
import ThemedText from "../../components/UI/ThemedText";
import { connect } from "react-redux";
import useConstants from "../../hooks/useConstants";
import useLanguage from "../../hooks/useLanguage";
import useTheme from "../../hooks/useTheme";

interface Props {
  dispatch: Dispatch;
  navigation: NativeStackNavigationProp<RootStackType>;
}

// @ts-ignore
const ImagePath = require("../../images/shopping.jpg");

const Profile: React.FunctionComponent<Props> = ({
  dispatch,
  navigation,
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();
  const language: AppLanguage = useLanguage();

  const goToHome = () => {
    navigation.navigate("home");
  };

  const updateTheme = (theme: ThemeKey) => {
    dispatch(setThemeAction(theme));
  };

  const updateLanguage = (language: LanguageKey) => {
    dispatch(setLanguageAction(language));
  };

  return (
    <View style={style.mainContainer}>
      <ScrollView>
        {/* <View style={style.contentContainer}>
          <View
            style={[style.container, { paddingBottom: 10, paddingLeft: 10 }]}
          >
            <View style={[style.childContainer, style.leftContainer]}>
              <TouchableOpacity onPress={goToHome}>
                <MaterialIcon
                  name="arrow-left"
                  size={30}
                  color={theme.textColor}
                  style={style.backIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={[style.childContainer, style.centerContainer]}>
              <ThemedText styleKey="textColor" style={style.title}>
                {language.labelProfile}
              </ThemedText>
            </View>
          </View>
        </View> */}
        <View style={[style.contentContainer, { paddingVertical: 10 }]}>
          <View
            style={[style.container, { paddingBottom: 10, paddingLeft: 10 }]}
          >
            <View style={[style.childContainer, style.leftContainer]}>
              <Image
                source={ImagePath}
                style={[style.imageStyle, { borderRadius: 10 }]}
              />
            </View>
            <View
              style={[
                style.childContainer,
                style.centerContainer,
                style.extraContainer,
              ]}
            >
              <ThemedText
                styleKey="textColor"
                style={{ fontSize: 24, paddingTop: 10 }}
              >
                Yogesh Kapoor
              </ThemedText>
              <View
                style={[
                  style.buttonStyle,
                  { backgroundColor: theme.highlightColor },
                ]}
              >
                <TouchableOpacity>
                  <ThemedText
                    styleKey="highlightTextColor"
                    style={{ fontSize: 18 }}
                  >
                    Edit Account
                  </ThemedText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <ProfileItem
          label="My Orders"
          iconName="chevron-right"
          color={theme.textColor}
        />
        <ProfileItem
          label="Shipping Addresses"
          iconName="chevron-right"
          color={theme.textColor}
        />
        <ProfileItem
          label="My Review"
          iconName="chevron-right"
          color={theme.textColor}
        />
        <View
          style={[
            style.contentContainer,
            {
              borderColor: theme.lightTextColor,
              borderBottomWidth: 1,
              paddingTop: 20,
              paddingBottom: 20,
            },
          ]}
        >
          <View style={style.container}>
            <View style={[style.childContainer, style.leftContainer]}>
              <ThemedText styleKey="textColor" style={{ fontSize: 18 }}>
                Default Language
              </ThemedText>
            </View>
            <View style={[style.childContainer, style.rightContainer]}>
              <LanguageSelector updateLanguage={updateLanguage} />
            </View>
          </View>
        </View>
        <View
          style={[
            style.contentContainer,
            {
              borderColor: theme.lightTextColor,
              borderBottomWidth: 1,
              paddingTop: 20,
              paddingBottom: 20,
            },
          ]}
        >
          <View style={style.container}>
            <View style={[style.childContainer, style.leftContainer]}>
              <ThemedText styleKey="textColor" style={{ fontSize: 18 }}>
                Dark Theme
              </ThemedText>
            </View>
            <View style={[style.childContainer, style.rightContainer]}>
              <ThemeToggle updateTheme={updateTheme} />
            </View>
          </View>
        </View>
        <View
          style={[
            style.contentContainer,
            { paddingTop: 10, paddingBottom: 10 },
          ]}
        >
          <View style={style.container}>
            <View style={[style.childContainer, style.leftContainer]}>
              <ThemedText styleKey="textColor" style={{ fontSize: 18 }}>
                Sign Out
              </ThemedText>
            </View>
            <View style={[style.childContainer, style.rightContainer]}>
              <TouchableOpacity>
                <MaterialIcon
                  name="exit-to-app"
                  size={30}
                  color={theme.dangerColor}
                  style={{ paddingTop: 5 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default connect(({ dispatch }) => ({ dispatch }))(Profile);

interface Style {
  mainContainer: ViewStyle;
  contentContainer: ViewStyle;
  container: ViewStyle;
  childContainer: ViewStyle;
  leftContainer: ViewStyle;
  centerContainer: ViewStyle;
  rightContainer: ViewStyle;
  extraContainer: ViewStyle;
  backIcon: ViewStyle;
  buttonStyle: ViewStyle;
  imageStyle: ImageStyle;
  title: TextStyle;
}

const style = StyleSheet.create({
  mainContainer: {
    padding: 0,
    margin: 0,
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 30,
  },
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  childContainer: {
    flex: 1,
    justifyContent: "center",
  },
  leftContainer: {
    alignItems: "flex-start",
    flex: 0,
  },
  centerContainer: {
    alignItems: "center",
    flex: 8,
  },
  rightContainer: {
    alignItems: "flex-end",
    flex: 0,
  },
  extraContainer: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 20,
  },
  buttonStyle: {
    borderRadius: 30,
    marginTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    padding: 7,
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
  },
  title: {
    fontSize: 25,
    paddingTop: 15,
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
});
