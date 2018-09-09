import React from "react";
import { Linking, Text, View } from "react-native";
import styles from "./Link.css";

export const Link = ({ description, url }) => {
  return (
    <View className={styles.description}>
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
