import Constants from "expo-constants";
import { StyleSheet } from 'react-native';

import { COLORS, FONTS, SHADOW } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 10 + Constants.statusBarHeight
  },
  point: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 24,
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 32,
    gap: 24,
    marginTop: 42,
    ...SHADOW
  },
  pointContainer: {
    gap: 4
  },
  pointTitle: {
    color: COLORS.greenDark,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    fontFamily: FONTS.Montserrat
  },
  pointContent: {
    color: COLORS.red,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    fontFamily: FONTS.Montserrat
  },
  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#999',
    paddingVertical: 20,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '100%',
    backgroundColor: COLORS.green,
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    marginLeft: 8,
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.Montserrat
  },
});