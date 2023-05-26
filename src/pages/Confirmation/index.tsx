import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, View } from 'react-native';

import { Button } from "../../components";

import { styles } from './style';

type Confirmation = {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
};

const EMOJIS = {
  hug: '🤗',
  smile: '😁'
};

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const { title, subtitle, buttonTitle, icon, nextScreen } = routes.params as Confirmation;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          {EMOJIS[icon]}
        </Text>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
        <View style={styles.footer}>
          <Button title={buttonTitle} onPress={() => navigation.navigate(nextScreen as never)} />
        </View>
      </View>
    </View>
  );
}