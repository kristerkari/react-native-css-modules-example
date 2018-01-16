import React from "react";
import Fa, { Icons } from "react-native-fontawesome";
import { Text } from "react-native";
import { camelCase } from "lodash";

export const FontAwesome = props => {
  return (
    <Text>
      <Fa>{Icons[camelCase(props.name)]}</Fa>
    </Text>
  );
};
