import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import styles from "./Buttons.scss";
import { FontAwesome } from "./FontAwesome";
import { titleCase } from "./utils/titleCase";
import btnColors from "./_ButtonColors.scss";

const colors = ["green", "pink", "dark", "orange", "red", "black"];

const Button = (color, index) => {
  return (
    <View className={styles.buttonWrapper} key={index}>
      <TouchableHighlight className={styles["button" + titleCase(color)]}>
        <View className={styles.innerWrapper}>
          <View className={styles["icon" + titleCase(color)]}>
            <Text className={styles.iconText}>
              <FontAwesome name="pencil" />
            </Text>
          </View>
          <Text className={styles.buttonText}>淘宝购买</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const Color = (color, index) => {
  return (
    <View
      className={styles.color}
      style={{ backgroundColor: btnColors[color] }}
      key={index}
    />
  );
};

export const Buttons = () => {
  return (
    <React.Fragment>
      <View className={styles.wrapper}>{colors.map(Button)}</View>
      <View className={styles.wrapper}>{colors.map(Color)}</View>
    </React.Fragment>
  );
};
