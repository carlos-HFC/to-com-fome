import Constants from "expo-constants";
import { StyleSheet } from 'react-native';

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 10 + Constants.statusBarHeight
  },
  title: {
    fontSize: 20,
    marginTop: 24,
  },
  description: {
    color: '#222',
    fontSize: 16,
    marginTop: 4,
  },
  mapContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 16,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  mapMarker: {
    width: 90,
    height: 90,
  },
  mapMarkerContainer: {
    width: 90,
    height: 90,
    backgroundColor: COLORS.green,
    flexDirection: 'column',
    borderRadius: 8,
    gap: 4,
    alignItems: 'center',
    justifyContent: "center"
  },
  mapMarkerTitle: {
    color: COLORS.white,
    fontSize: 13,
    textAlign: "center"
  },
});