import { AppConstants, AppTheme } from "../../config/DefaultConfig";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";

import CategoryList from "./CategoryList";
import { Dispatch } from "redux";
import FooterNavigation from "../Footer/Index";
import ListedItem from "./ListedItem";
import ProductAdvertisement from "./ProductAdvertisement";
import React from "react";
import useConstants from "../../hooks/useConstants";
import useTheme from "../../hooks/useTheme";

interface Props {
  dispatch: Dispatch;
  navigation;
}

// @ts-ignore
const advertisementImage = require("../../images/shoppingFlipkart.jpg");

const Shopping: React.FunctionComponent<Props> = ({ navigation }: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  return (
    <View style={style.mainContainer}>
      <View style={style.firstView}>
        <CategoryList />
      </View>
      <View style={style.secondView}>
        <ScrollView style={style.listingItem}>
          <View style={style.items}>
            <ListedItem navigation={navigation} />
          </View>
          <View style={style.items}>
            <ListedItem navigation={navigation} />
          </View>
          <View style={style.items}>
            <ProductAdvertisement
              imageUrl={advertisementImage}
              label1={constants.advertisement.label1}
              label2={constants.advertisement.label2}
              labelBuy={constants.advertisement.labelBuy}
              onPress={() => {
                alert("buy");
              }}
            />
          </View>
          <View style={style.items}>
            <ListedItem navigation={navigation} />
          </View>
          <View style={style.items}>
            <ListedItem navigation={navigation} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Shopping;

interface Style {
  mainContainer: ViewStyle;
  firstView: ViewStyle;
  secondView: ViewStyle;
  items: ViewStyle;
  listingItem: ViewStyle;
}

const style = StyleSheet.create({
  mainContainer: {
    padding: 0,
    margin: 0,
    flex: 1,
  },
  firstView: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 15,
    paddingRight: 15,
  },
  secondView: {
    flex: 8,
    flexDirection: "row",
  },
  listingItem: {
    flexDirection: "column",
  },
  items: {
    flexDirection: "row",
  },
});
