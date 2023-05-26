import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    width: '100%',
  },
  emoji: {
    fontSize: 96
  },
  title: {
    // color: colors.heading,
    // fontFamily: fonts.heading,
    fontSize: 28,
    marginTop: 64,
    textAlign: 'center',
  },
  subtitle: {
    // color: colors.heading,
    // fontFamily: fonts.text,
    fontSize: 18,
    marginTop: 5,
    paddingVertical: 20,
    textAlign: 'center',
  },
  footer: {
    marginTop: 40,
    paddingHorizontal: 75,
    width: '100%',
  }
});