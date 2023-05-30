import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View } from 'react-native';
import { MapMarkerProps, Marker } from "react-native-maps";

import { COLORS } from "../../constants";

import { styles } from './style';

type Props = MapMarkerProps & {
  title: string;
  color: 'greenDark' | 'red';
};

const colors = {
  greenDark: COLORS.greenDark,
  red: COLORS.red,
};

export function MapMarker(props: Props) {
  return (
    <Marker {...props}>
      <View style={styles.mapMarkerContainer}>
        <FontAwesome5 name="map-marker-alt" size={45} color={colors[props.color]} />
        <Text style={[styles.mapMarkerTitle, { backgroundColor: colors[props.color] }]}>
          {props.title}
        </Text>
      </View>
    </Marker>
  );
}