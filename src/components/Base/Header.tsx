import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { AppLanguage } from "../../config/languages";
import { AppTheme } from "../../config/DefaultConfig";
import { HeaderHeight } from "../../utils/constants";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import ThemedText from "../UI/ThemedText";
import useLanguage from "../../hooks/useLanguage";
import useTheme from "../../hooks/useTheme";

export default function Header({ navigation, title }) {
  const theme: AppTheme = useTheme();
  const language: AppLanguage = useLanguage();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flexDirection: "row", height: HeaderHeight }}>
      <TouchableOpacity
        onPress={goBack}
        style={{
          width: HeaderHeight,
          height: HeaderHeight,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialIcon name="arrow-left" size={30} color={theme.textColor} />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          left: HeaderHeight,
          right: HeaderHeight,
          height: HeaderHeight,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThemedText styleKey="textColor" style={style.title}>
          {title}
        </ThemedText>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
  },
  centerContainer: {
    alignItems: "center",
    flex: 8,
  },
  childContainer: {
    flex: 1,
    justifyContent: "center",
  },
  leftContainer: {
    alignItems: "flex-start",
    flex: 0,
  },
});
