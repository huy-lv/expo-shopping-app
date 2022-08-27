import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";

import { AppTheme } from "../../../config/DefaultConfig";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import useTheme from "../../../hooks/useTheme";

interface Props {
  onPress: () => void;
  iconStyle?: any;
}

const BackButton: React.FunctionComponent<Props> = ({ onPress, iconStyle }) => {
  const theme: AppTheme = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialIcon
        name="arrow-left"
        size={30}
        color="#900"
        style={[iconStyle, style.backIcon, { color: theme.textColor }]}
      />
    </TouchableOpacity>
  );
};

export default BackButton;

interface Style {
  backIcon: ViewStyle;
}

const style = StyleSheet.create({
  backIcon: {
    fontSize: 25,
    position: "absolute",
    top: 20,
    left: 10,
    zIndex: 9,
  },
});
