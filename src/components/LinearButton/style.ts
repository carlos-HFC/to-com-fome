import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from "../../constants";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 16,
    justifyContent: "center",
    padding: 13
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 32,
    lineHeight: 32,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: FONTS.Montserrat
  }
});