import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%"
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
    borderBottomWidth: 1,
    // borderColor: colors.gray,
    // color: colors.heading,
    // fontFamily: fonts.text,
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
    width: '100%',
  },
  title: {
    // color: colors.heading,
    // fontFamily: fonts.heading,
    fontSize: 24,
    lineHeight: 32,
    marginTop: 24,
    textAlign: 'center',
  },
  footer: {
    marginTop: 40,
    paddingHorizontal: 20,
    width: "100%",
  },
  header: {
    alignItems: 'center',
  }
});