import { AppConstants, AppTheme } from "../../config/DefaultConfig";
import {
  ScrollView,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import { AppLanguage } from "../../config/languages";
import BagItem from "../../components/Base/BagItem";
import BagOption from "../../components/Base/BagOption";
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

const Bag: React.FunctionComponent<Props> = ({ navigation }: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();
  const language: AppLanguage = useLanguage();

  const goToCheckout = () => {
    navigation.navigate("Checkout");
  };

  return (
    <View style={style.mainContainer}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={[
            style.contentContainer,
            { borderColor: theme.lightTextColor },
          ]}
        >
          {/* <View
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
                {language.labelBag}
              </ThemedText>
            </View>
          </View> */}
          <BagItem size="M" color={theme.lightTextColor} />
        </View>
        <View
          style={[
            style.contentContainer,
            { borderColor: theme.lightTextColor },
          ]}
        >
          <BagItem size="L" color={theme.dangerColor} />
        </View>
        <BagOption label={language.labelDelivery} total="Standard - Free" />
        <BagOption label={language.labelTotal} total="$25.98" />
      </ScrollView>
      <View style={style.footerContainer}>
        <TouchableOpacity
          style={[
            style.checkoutButton,
            { backgroundColor: theme.highlightColor },
          ]}
          onPress={goToCheckout}
        >
          <ThemedText styleKey="highlightTextColor" style={style.checkoutStyle}>
            {language.shipLabel}
          </ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bag;

const style = StyleSheet.create({
  mainContainer: {
    padding: 0,
    margin: 0,
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20,
    borderBottomWidth: 1,
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
  footerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
  },
  title: {
    fontSize: 25,
    paddingTop: 15,
  },
  checkoutButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    paddingLeft: 50,
    paddingRight: 50,
  },
  checkoutStyle: {
    fontSize: 16,
    padding: 10,
  },
});
