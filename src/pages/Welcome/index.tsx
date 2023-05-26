import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './style';

export function Welcome() {
  const navigation = useNavigation();

  const handleStart = useCallback(() => {
    navigation.navigate('UserIdentification' as never);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Lorem {'\n'} ipsum dolor sit {'\n'} amet consectetur
      </Text>

      <FontAwesome name="cutlery" />

      <Text style={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, inventore!
      </Text>

      <TouchableOpacity style={styles.button} activeOpacity={.7} onPress={handleStart}>
        <Text>
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </Text>
      </TouchableOpacity>
    </View>
  );
}