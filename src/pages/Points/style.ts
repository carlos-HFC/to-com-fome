import Constants from "expo-constants";
import { Dimensions, StyleSheet } from 'react-native';

import { COLORS, FONTS, SHADOW } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 10 + Constants.statusBarHeight
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 16
  },
  description: {
    color: COLORS.red,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: FONTS.Montserrat
  },
  mapContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 24,
    overflow: 'hidden',
    marginTop: 16,
    marginBottom: 32,
    minHeight: Dimensions.get("window").height / 1.5,
    // ...SHADOW
  },
  map: {
    width: '100%',
    height: "100%",
  },
});