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
import ThemedText from "../UI/ThemedText";
import useTheme from "../../hooks/useTheme";

interface Props {
  label: string;
  onButtonPress?: (event: GestureResponderEvent) => void;
}

const ButtonItem: React.FunctionComponent<Props> = ({
  onButtonPress,
  label,
}: Props) => {
  const theme: AppTheme = useTheme();

  return (
    <TouchableOpacity onPress={onButtonPress}>
      <View style={style.container}>
        <ThemedText
          styleKey="textColor"
          style={[style.userNameStyle, { borderColor: theme.lightBottomColor }]}
        >
          {label}
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonItem;

interface Style {
  container: ViewStyle;
  userNameStyle: TextStyle;
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
  },
  userNameStyle: {
    fontWeight: "bold",
    borderWidth: 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
  },
});
