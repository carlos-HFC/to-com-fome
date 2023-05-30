import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';

import { styles } from './style';

type Props = LinearGradientProps & {
  title: string;
  disabled?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

export function LinearButton(props: Props) {
  return (
    <TouchableOpacity disabled={props.disabled} style={[props.disabled && { opacity: .5 }]} activeOpacity={.7} onPress={props.onPress}>
      <LinearGradient style={styles.button} {...props}>
        <Text style={styles.buttonText}>
          {props.title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}