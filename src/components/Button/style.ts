import { StyleSheet } from 'react-native';

import { colors } from "../../styles";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.green,
    borderRadius: 16,
    height: 56,
    justifyContent: "center"
  },
  buttonText: {
    color: colors.white,
    // fontFamily: fonts.heading,
    fontSize: 16
  }
});