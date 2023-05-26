import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './style';

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button(props: Props) {
  return (
    <TouchableOpacity style={[styles.button, props.disabled && { opacity: .5 }]} activeOpacity={.7} {...props}>
      <Text style={styles.buttonText}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}