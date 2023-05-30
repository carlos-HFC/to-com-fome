import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from "../../constants";

export const styles = StyleSheet.create({
  mapMarkerContainer: {
    flexDirection: 'column',
    gap: 4,
    alignItems: 'center',
    justifyContent: "center"
  },
  mapMarkerTitle: {
    color: COLORS.white,
    fontSize: 12,
    textAlign: "center",
    borderRadius: 10,
    padding: 8,
    fontWeight: "bold",
    textTransform: "uppercase",
    width: 100,
    fontFamily: FONTS.Montserrat
  },
});