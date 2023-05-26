import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';
import { useEffect, useState } from "react";
import { Alert, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { COLORS, POINTS } from "../../constants";

import { styles } from './style';

export function Points() {
  const navigation = useNavigation();

  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        return Alert.alert("Oopss...", "Precisamos de sua localização para prosseguir");
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;
      setInitialPosition([latitude, longitude]);
    }

    loadPosition();
  }, []);

  function goToDetail(point: any) {
    navigation.navigate("Detail" as never, point as never);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={20} color={COLORS.green} />
        </TouchableOpacity>

        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.description}>Encontre no mapa um voluntário</Text>

        <View style={styles.mapContainer}>
          {initialPosition[0] !== 0 && (
            <MapView style={styles.map} initialRegion={{ latitude: initialPosition[0], longitude: initialPosition[1], latitudeDelta: 0.014, longitudeDelta: 0.014 }}>
              {POINTS.map((point, i) => (
                <Marker key={String(i)} onPress={() => goToDetail(point)} style={styles.mapMarker} coordinate={{ latitude: point.latitude, longitude: point.longitude }}>
                  <View style={styles.mapMarkerContainer}>
                    <Feather name="map-pin" size={32} color={COLORS.white} />
                    <Text style={styles.mapMarkerTitle}>
                      {point.title}
                    </Text>
                  </View>
                </Marker>
              ))}
            </MapView>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}