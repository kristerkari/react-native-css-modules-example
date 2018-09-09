import React from "react";
import { Text } from "react-native";
import Fa, { Icons } from "react-native-fontawesome";
import { camelCase } from "./utils/camelCase";

export const FontAwesome = props => {
  return (
    <Text>
      <Fa>{Icons[camelCase(props.name)]}</Fa>
    </Text>
  );
};
