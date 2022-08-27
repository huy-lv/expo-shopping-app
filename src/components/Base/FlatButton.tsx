import {
  GestureResponderEvent,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import { AppTheme } from "../../config/DefaultConfig";
import React from "react";
import RoundButton from "./RoundButton";
import useTheme from "../../hooks/useTheme";

interface Props {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  buttonStyle?: any;
  labelStyle?: any;
}

const FlatButton: React.FunctionComponent<Props> = ({
  onPress,
  label,
  buttonStyle,
  labelStyle,
}: Props) => {
  const theme: AppTheme = useTheme();

  return (
    <RoundButton
      label={label}
      onPress={onPress}
      buttonStyle={[style.container, buttonStyle]}
      labelStyle={labelStyle}
    />
  );
};

export default FlatButton;

interface Style {
  container: ViewStyle;
  userNameStyle: TextStyle;
}

const style = StyleSheet.create({
  container: {
    borderRadius: 5,
    minWidth: 230,
  },
});
