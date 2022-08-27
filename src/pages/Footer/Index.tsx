import { AppConstants, AppTheme } from "../../config/DefaultConfig";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import Icon from "@expo/vector-icons/FontAwesome";
import React from "react";
import useConstants from "../../hooks/useConstants";
import useTheme from "../../hooks/useTheme";

interface Props {
  history?: any;
}

// @ts-ignore
const ImagePath = require("../../images/Recraftsoppify_aap_bg_effect.png");

const FooterNavigation: React.FunctionComponent<Props> = ({
  navigation,
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const goToLogin = () => {
    navigation.navigate("login");
  };

  const backButton = () => {
    navigation.navigate("");
  };

  const goToShopping = () => {
    navigation.navigate("Shopping");
  };

  const goToBag = () => {
    navigation.navigate("Bag");
  };

  const goToDetails = () => {
    navigation.navigate("ProductDetail");
  };

  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View
      style={[
        style.container,
        {
          borderColor: theme.lightBottomColor,
          backgroundColor: theme.backgroundColor,
        },
      ]}
    >
      <TouchableOpacity onPress={backButton}>
        <View style={style.iconContainer}>
          <Icon
            name="home"
            size={30}
            color={theme.appColor}
            style={[style.Icon]}
          />
          <Text style={[style.IconTitle, { color: theme.appColor }]}>
            {"Home"}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToShopping}>
        <View style={style.iconContainer}>
          <Icon
            name="shopping-cart"
            size={30}
            color={theme.lightTextColor}
            style={[style.Icon]}
          />
          <Text style={[style.IconTitle, { color: theme.lightTextColor }]}>
            {"Shop"}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToBag}>
        <View style={style.iconContainer}>
          <Icon
            name="shopping-bag"
            size={30}
            color={theme.lightTextColor}
            style={style.Icon}
          />
          <Text style={[style.IconTitle, { color: theme.lightTextColor }]}>
            {"Bag"}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert("favorites");
        }}
      >
        <View style={style.iconContainer}>
          <Icon
            name="heart"
            size={30}
            color={theme.lightTextColor}
            style={[style.Icon]}
          />
          <Text style={[style.IconTitle, { color: theme.lightTextColor }]}>
            {"Favorites"}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToProfile}>
        <View style={[style.iconContainer, { backgroundColor: "transparent" }]}>
          <Icon
            name="user"
            size={30}
            color={theme.lightTextColor}
            style={style.Icon}
          />
          <Text style={[style.IconTitle, { color: theme.lightTextColor }]}>
            {"Profile"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FooterNavigation;

interface Style {
  IconTitle: TextStyle;
  container: ViewStyle;
  title: TextStyle;
  Icon: TextStyle;
  iconContainer: ViewStyle;
  containerBg: ViewStyle;
  containerImage: ViewStyle;
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    paddingTop: 8,
    paddingBottom: 8,
    bottom: 0,
    flex: 1,
    width: "100%",
    alignItems: "center",
    borderTopWidth: 2,
  },
  iconContainer: {
    alignItems: "center",
  },
  Icon: {
    fontSize: 30,
  },
  IconTitle: {
    fontSize: 12,
  },
});
