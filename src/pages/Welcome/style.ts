import { Dimensions, StyleSheet } from 'react-native';

import { colors } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20
  },
  title: {
    // color: colors.heading,
    // fontFamily: fonts.heading,
    fontSize: 32,
    lineHeight: 34,
    marginTop: 38,
    textAlign: "center"
  },
  subtitle: {
    // color: colors.heading,
    // fontFamily: fonts.text,
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: colors.green,
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
    color: colors.white,
    fontSize: 24
  }
});