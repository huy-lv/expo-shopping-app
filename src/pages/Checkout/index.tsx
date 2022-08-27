import { AppConstants, AppTheme } from "../../config/DefaultConfig";
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

import { AppLanguage } from "../../config/languages";
import BagOption from "../../components/Base/BagOption";
import Header from "../../components/Base/Header";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { RootStackType } from "../../navigation";
import ThemedText from "../../components/UI/ThemedText";
import useConstants from "../../hooks/useConstants";
import useLanguage from "../../hooks/useLanguage";
import useTheme from "../../hooks/useTheme";

interface Props {
  navigation: NativeStackNavigationProp<RootStackType>;
}

// @ts-ignore
const ImagePath = require("../../images/shopping.jpg");

const Checkout: React.FunctionComponent<Props> = ({ navigation }: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();
  const language: AppLanguage = useLanguage();

  const goBack = () => {
    navigation.goBack();
  };

  const goToPayment = () => {
    navigation.navigate("Payment");
  };

  return (
    <View style={style.mainContainer}>
      <Header navigation={navigation} title={language.labelCheckout} />
      <ScrollView style={{ flex: 1 }}>
        <View
          style={[
            style.contentContainer,
            { borderColor: theme.lightTextColor },
          ]}
        >
          <View style={[style.container]}>
            <View
              style={[
                style.childContainer,
                style.leftContainer,
                { flex: 2, paddingLeft: 5, alignSelf: "flex-start" },
              ]}
            >
              <ThemedText styleKey="textColor" style={style.content}>
                Shipping
              </ThemedText>
            </View>
            <View
              style={[style.childContainer, style.centerContainer, { flex: 4 }]}
            >
              <ThemedText
                styleKey="textColor"
                style={[style.content, { alignSelf: "flex-start" }]}
              >
                4582 Monroa Avenue, Tampa, Florida, 33607,
              </ThemedText>
            </View>
            <View
              style={[style.childContainer, style.rightContainer, { flex: 1 }]}
            >
              <TouchableOpacity>
                <MaterialIcon
                  name="chevron-right"
                  size={30}
                  color={theme.textColor}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={[
            style.contentContainer,
            { borderColor: theme.lightTextColor },
          ]}
        >
          <View style={[style.container, { paddingTop: 20, paddingBottom: 5 }]}>
            <View
              style={[
                style.childContainer,
                style.leftContainer,
                { flex: 2, paddingLeft: 5 },
              ]}
            >
              <ThemedText styleKey="textColor" style={style.content}>
                Card
              </ThemedText>
            </View>
            <View
              style={[style.childContainer, style.centerContainer, { flex: 4 }]}
            >
              <ThemedText
                styleKey="textColor"
                style={[style.content, { alignSelf: "flex-start" }]}
              >
                **************8564
              </ThemedText>
            </View>
            <View
              style={[style.childContainer, style.rightContainer, { flex: 1 }]}
            >
              <TouchableOpacity onPress={goToPayment}>
                <MaterialIcon
                  name="chevron-right"
                  size={30}
                  color={theme.textColor}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={[
            style.contentContainer,
            { borderColor: theme.lightTextColor },
          ]}
        >
          <View style={[style.container, { paddingTop: 20 }]}>
            <View
              style={[
                style.childContainer,
                style.leftContainer,
                {
                  flex: 2,
                  paddingLeft: 5,
                  paddingTop: 60,
                  justifyContent: "flex-start",
                },
              ]}
            >
              <ThemedText styleKey="textColor" style={style.content}>
                Items
              </ThemedText>
            </View>
            <View
              style={[style.childContainer, style.centerContainer, { flex: 5 }]}
            >
              <View
                style={[
                  style.container,
                  {
                    paddingTop: 0,
                    paddingBottom: 10,
                    paddingLeft: 0,
                    paddingRight: 0,
                    borderBottomWidth: 1,
                    borderColor: "#b3b3b3",
                  },
                ]}
              >
                <View
                  style={[
                    style.childContainer,
                    style.leftContainer,
                    { flex: 2 },
                  ]}
                >
                  <Image source={ImagePath} style={style.imageStyle} />
                </View>
                <View
                  style={[
                    style.childContainer,
                    style.centerContainer,
                    { flex: 2, justifyContent: "flex-start" },
                  ]}
                >
                  <ThemedText styleKey="textColor" style={style.smallContent}>
                    Top Heavy Bag
                  </ThemedText>
                  <ThemedText
                    styleKey="textColor"
                    style={[style.content, { alignSelf: "flex-start" }]}
                  >
                    $12.99
                  </ThemedText>
                </View>
                <View
                  style={[
                    style.childContainer,
                    style.rightContainer,
                    { flex: 1 },
                  ]}
                >
                  <TouchableOpacity>
                    <MaterialIcon
                      name="chevron-right"
                      size={30}
                      color={theme.textColor}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={[
                  style.container,
                  {
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 0,
                    paddingRight: 0,
                  },
                ]}
              >
                <View
                  style={[
                    style.childContainer,
                    style.leftContainer,
                    { flex: 2 },
                  ]}
                >
                  <Image source={ImagePath} style={style.imageStyle} />
                </View>
                <View
                  style={[
                    style.childContainer,
                    style.centerContainer,
                    { flex: 2, justifyContent: "flex-start" },
                  ]}
                >
                  <ThemedText styleKey="textColor" style={style.smallContent}>
                    Top Heavy Bag
                  </ThemedText>
                  <ThemedText
                    styleKey="textColor"
                    style={[style.content, { alignSelf: "flex-start" }]}
                  >
                    $12.99
                  </ThemedText>
                </View>
                <View
                  style={[
                    style.childContainer,
                    style.rightContainer,
                    { flex: 1 },
                  ]}
                >
                  <TouchableOpacity>
                    <MaterialIcon
                      name="chevron-right"
                      size={30}
                      color={theme.textColor}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <BagOption label={language.labelDelivery} total="$0.0" />
        <BagOption label={language.labelSubTotal} total="$25.98" />
      </ScrollView>
      <View style={[style.childContainer]}>
        <View
          style={[
            style.checkoutButton,
            { backgroundColor: theme.highlightColor },
          ]}
        >
          <TouchableOpacity>
            <ThemedText
              styleKey="highlightTextColor"
              style={style.checkoutStyle}
            >
              {language.labelPlace}
            </ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Checkout;

interface Style {
  mainContainer: ViewStyle;
  contentContainer: ViewStyle;
  container: ViewStyle;
  childContainer: ViewStyle;
  leftContainer: ViewStyle;
  centerContainer: ViewStyle;
  rightContainer: ViewStyle;
  backIcon: ViewStyle;
  footerContainer: ViewStyle;
  checkoutButton: ViewStyle;
  title: TextStyle;
  content: TextStyle;
  smallContent: TextStyle;
  checkoutStyle: TextStyle;
  imageStyle: ImageStyle;
}

const style = StyleSheet.create({
  mainContainer: {
    padding: 0,
    margin: 0,
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 5,
    borderBottomWidth: 1,
  },
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  childContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
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
  footerContainer: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
  },
  title: {
    fontSize: 25,
    paddingTop: 15,
  },
  content: {
    fontSize: 14,
  },
  smallContent: {
    fontSize: 12,
    alignSelf: "flex-start",
    paddingBottom: 20,
  },
  checkoutButton: {
    borderRadius: 50,
    width: "80%",
    alignItems: "center",
  },
  checkoutStyle: {
    fontSize: 16,
    padding: 10,
  },
  imageStyle: {
    width: 90,
    height: 90,
  },
});
