import { Image, View } from 'react-native';

import { styles } from './style';

export function TitleImage() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.image} />
    </View>
  );
}