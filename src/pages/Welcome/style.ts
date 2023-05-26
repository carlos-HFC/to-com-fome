import { Dimensions, StyleSheet } from 'react-native';

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20
  },
  title: {
    // color: COLORS.heading,
    // fontFamily: fonts.heading,
    fontSize: 32,
    lineHeight: 34,
    marginTop: 38,
    textAlign: "center"
  },
  subtitle: {
    // color: COLORS.heading,
    // fontFamily: fonts.text,
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: COLORS.green,
    borderRadius: 16,
    height: 56,
    justifyContent: "center",
    marginBottom: 10,
    width: 56
  },
  image: {
    height: Dimensions.get("window").width * 0.7
  },
  buttonIcon: {
    color: COLORS.white,
    fontSize: 24
  }
});