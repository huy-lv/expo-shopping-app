import { AppConstants, AppTheme } from "../../config/DefaultConfig";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

import CategoryList from "../Shopping/CategoryList";
import { Dispatch } from "redux";
import Product from "../Shopping/Product";
import React from "react";
import RoundButton from "../../components/Base/RoundButton";
import useConstants from "../../hooks/useConstants";
import useTheme from "../../hooks/useTheme";

interface Props {
  history: any;
}

const typeList = ["Woman", "Man", "Kids"];

// @ts-ignore
const ImagePath = require("../../images/shopping.jpg");

const HomePageProducts: React.FunctionComponent<Props> = ({
  navigation,
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const gotoViewAll = () => {
    navigation.navigate("Shopping");
  };

  const gotoProductDetails = () => {
    navigation.navigate("ProductDetail");
  };

  return (
    <View style={style.secondView}>
      <View style={style.typeList}>
        <CategoryList />
      </View>
      <View style={style.newItemList}>
        <View style={style.newItemListLabel}>
          <Text style={[style.leftLabel, { color: theme.labelBgColor }]}>
            {constants.homePage.productLabel}
          </Text>
          <Text
            style={[style.rightLabel, { color: theme.activeColor }]}
            onPress={gotoViewAll}
          >
            {constants.homePage.labelViewAll}
          </Text>
        </View>
        <View style={style.newItemBox}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {typeList.map((res, index) => {
              return (
                <View key={index} style={{ zIndex: 9 }}>
                  <Product
                    imageUrl={ImagePath}
                    goToDetails={gotoProductDetails}
                    productLabel={constants.homePage.productLabel}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default HomePageProducts;

interface Style {
  itemTitleView: ViewStyle;
  itemTitleText: TextStyle;
  newItemBox: ViewStyle;
  secondView: ViewStyle;
  typeList: ViewStyle;
  newItemList: ViewStyle;
  newItemListLabel: ViewStyle;
  newItem: ViewStyle;
  leftLabel: TextStyle;
  rightLabel: TextStyle;
}

const style = StyleSheet.create({
  secondView: {
    flex: 2,
    justifyContent: "flex-start",
  },
  typeList: {
    flex: 1.5,
    paddingLeft: 12,
    paddingRight: 12,
  },
  newItemList: {
    flex: 2,
    paddingLeft: 12,
    paddingRight: 12,
  },
  newItemListLabel: {
    flexDirection: "row",
  },
  leftLabel: {
    flex: 1,
    fontSize: 25,
    fontWeight: "700",
    textAlign: "left",
    textTransform: "capitalize",
    paddingLeft: 5,
  },
  rightLabel: {
    flex: 1,
    textAlign: "right",
    justifyContent: "center",
    paddingTop: 10,
    paddingRight: 5,
  },
  newItemBox: {
    flex: 5,
    flexDirection: "row",
    fontSize: 25,
    fontWeight: "900",
    marginTop: 5,
    borderRadius: 15,
    overflow: "hidden",
  },
  newItem: {
    marginLeft: 6,
    marginRight: 6,
    width: 150,
    height: "100%",
    borderRadius: 15,
  },
  itemTitleView: {
    position: "absolute",
    top: 15,
    left: 15,
    borderRadius: 15,
    padding: 2,
    paddingLeft: 10,
    paddingRight: 10,
  },
  itemTitleText: {
    fontWeight: "700",
  },
});
