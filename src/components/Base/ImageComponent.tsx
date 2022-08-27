import { Image, StyleSheet, View, ViewStyle } from "react-native";

import React from "react";

interface Props {
  src: string;
  height?: number;
  width?: number;
}

const ImageComponent: React.FunctionComponent<Props> = ({
  src,
  height,
  width,
}) => {
  return (
    <View style={style.container}>
      <Image
        style={{
          width: width ? width : 50,
          height: height ? height : 50,
          flex: 0,
        }}
        source={{ uri: src }}
      />
    </View>
  );
};

export default ImageComponent;

interface Style {
  container: ViewStyle;
}

const style = StyleSheet.create({
  container: {
    flex: 0,
  },
});
