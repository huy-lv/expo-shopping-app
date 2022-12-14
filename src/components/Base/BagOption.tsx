import { AppConstants, AppTheme } from "../../config/DefaultConfig";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";

import React from "react";
import ThemedText from "../UI/ThemedText";
import useConstants from "../../hooks/useConstants";
import useTheme from "../../hooks/useTheme";

interface Props {
  label: string;
  total: string;
}

const BagOption: React.FunctionComponent<Props> = ({ label, total }: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();
  return (
    <>
      <View
        style={[style.contentContainer, { borderColor: theme.lightTextColor }]}
      >
        <View style={style.container}>
          <View style={[style.childContainer, style.leftContainer]}>
            <ThemedText
              styleKey="textColor"
              style={[style.content, { color: theme.highlightColor }]}
            >
              {label}
            </ThemedText>
          </View>
          <View style={[style.childContainer, style.rightContainer]}>
            <ThemedText styleKey="textColor" style={style.content}>
              {total}
            </ThemedText>
          </View>
        </View>
      </View>
    </>
  );
};

export default BagOption;

interface Style {
  contentContainer: ViewStyle;
  container: ViewStyle;
  childContainer: ViewStyle;
  leftContainer: ViewStyle;
  rightContainer: ViewStyle;
  content: TextStyle;
}

const style = StyleSheet.create({
  contentContainer: {
    paddingBottom: 10,
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
  rightContainer: {
    alignItems: "flex-end",
    flex: 0,
  },
  content: {
    fontSize: 14,
    paddingTop: 10,
  },
});
