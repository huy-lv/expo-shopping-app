import { AppConstants, AppTheme } from "../../config/DefaultConfig";
import {
  SafeAreaView,
  StatusBar,
  StyleProp,
  ViewProps,
  ViewStyle,
} from "react-native";

import React from "react";
import { ThemeKey } from "../../config/themes";
import useConstants from "../../hooks/useConstants";
import useTheme from "../../hooks/useTheme";

interface Props extends ViewProps {
  children: React.ReactChild;
  style?: any;
}

const ThemedView: React.FunctionComponent<Props> = (props: Props) => {
  const theme: AppTheme = useTheme();

  const { children, style, ...restProps } = props;

  const { selectedTheme }: AppConstants = useConstants();

  const selectedStatusBar =
    selectedTheme == ThemeKey.dark ? "light-content" : "dark-content";

  const themeColorStyle: StyleProp<ViewStyle> = [
    { backgroundColor: theme.backgroundColor },
  ];

  const newStyle: StyleProp<ViewStyle> = themeColorStyle.concat(style);

  return (
    <SafeAreaView style={newStyle} {...restProps}>
      <StatusBar
        barStyle={selectedStatusBar}
        backgroundColor={theme.backgroundColor}
      />
      {props.children}
    </SafeAreaView>
  );
};

export default ThemedView;
