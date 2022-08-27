import React, { FunctionComponent, useCallback } from "react";
import navigation, { RootStackType } from "../../navigation";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import useBackHandler from "../../hooks/useBackHandler";

interface Props {
  navigation: NativeStackNavigationProp<RootStackType>;
  children: FunctionComponent;
}

const BackHandlerHOC: (props: Props) => FunctionComponent = ({
  navigation,
  children,
}: Props) => {
  const handleBackPress: () => void = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      return true;
    }
    return false;
  }, [navigation]);

  useBackHandler(handleBackPress);

  return children;
};

export default BackHandlerHOC;
