import { StyleSheet } from 'react-native';

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: COLORS.green,
    borderRadius: 16,
    height: 56,
    justifyContent: "center"
  },
  buttonText: {
    color: COLORS.white,
    // fontFamily: fonts.heading,
    fontSize: 16
  }
});