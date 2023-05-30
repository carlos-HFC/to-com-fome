import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  content: {
    flex: 1,
    width: "100%"
  },
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 54
  },
  emoji: {
    fontSize: 36
  },
  input: {
    borderBottomWidth: 2,
    fontSize: 32,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
    width: '100%',
    fontFamily: FONTS.Montserrat
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    marginTop: 24,
    textAlign: 'center',
    fontFamily: FONTS.Montserrat
  },
  footer: {
    marginTop: 60,
    paddingHorizontal: 20,
    width: "100%",
  },
  header: {
    alignItems: 'center',
  }
});