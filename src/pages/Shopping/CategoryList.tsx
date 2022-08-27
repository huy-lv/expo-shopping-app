import { AppConstants, AppTheme } from "../../config/DefaultConfig";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";

import React from "react";
import RoundButton from "../../components/Base/RoundButton";
import useConstants from "../../hooks/useConstants";
import useTheme from "../../hooks/useTheme";

interface Props extends RouteComponentProps {}

const typeList = ["Woman", "Man", "Kids"];

const CategoryList: React.FunctionComponent<Props> = ({}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  return (
    <View style={style.container}>
      <ScrollView
        style={style.typeList}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {typeList.map((res, index) => {
          return (
            <RoundButton
              key={index}
              buttonStyle={[
                style.typeListTab,
                {
                  backgroundColor: theme.appColor,
                  borderColor: theme.appColor,
                },
              ]}
              labelStyle={{ fontSize: 17, color: theme.highlightTextColor }}
              label={res}
              onPress={() => {
                alert(res);
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoryList;

interface Style {
  container: ViewStyle;
  typeList: ViewStyle;
  typeListTab: ViewStyle;
}

const style = StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  typeList: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  typeListTab: {
    minWidth: 120,
    marginRight: 20,
  },
});
