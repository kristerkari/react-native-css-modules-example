import React from "react";
import { View, Text, Linking } from "react-native";
import styles from "./Links.scss";

export const Link = ({ description, url }) => {
  return (
    <View className={styles.description} style={{}}>
      <Text className={styles.descriptionText}>
        {description + ":\n"}
        <Text
          className={styles.descriptionLink}
          onPress={() => Linking.openURL(url)}
        >
          {url}
        </Text>
      </Text>
    </View>
  );
};
