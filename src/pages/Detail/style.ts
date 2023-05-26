import Constants from "expo-constants";
import { StyleSheet } from 'react-native';
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 10 + Constants.statusBarHeight
  },
  pointName: {
    color: "#222",
    fontSize: 28,
    marginTop: 24
  },
  address: {
    marginTop: 32,
  },
  addressTitle: {
    color: '#222',
    fontSize: 16,
  },
  addressContent: {
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80'
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
    width: '48%',
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
  },
});