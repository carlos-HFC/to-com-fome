import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';
import { useEffect, useState } from "react";
import { Alert, ImageBackground, SafeAreaView, Text, View } from 'react-native';
import MapView from 'react-native-maps';

import { MapMarker, TitleImage } from "../../components";
import { COLORS, SHADOW } from "../../constants";
import { api } from "../../services/api";

import { styles } from './style';

export function Points() {
  const navigation = useNavigation();

  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    api.get("/user.php", {
      params: {
        roleId: 1
      }
    }).then(response => setPoints(response.data));
  }, []);

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
      <ImageBackground style={styles.container} source={require("../../assets/background.png")}>
        <TitleImage />

        <View style={styles.title}>
          <FontAwesome5 name="map-marker-alt" color={COLORS.red} size={25} />
          <Text style={styles.description}>PONTOS DE ALIMENTO</Text>
        </View>

        <View style={[styles.mapContainer, isMapLoaded && { ...SHADOW }]}>
          {initialPosition[0] !== 0 && (
            <MapView onMapLoaded={() => setIsMapLoaded(true)} loadingEnabled style={styles.map} initialRegion={{ latitude: initialPosition[0], longitude: initialPosition[1], latitudeDelta: 0.014, longitudeDelta: 0.014 }}>
              <MapMarker
                coordinate={{ latitude: initialPosition[0], longitude: initialPosition[1] }}
                title="Você está aqui"
                color="greenDark"
              />
              {points.map((point, i) => (
                <MapMarker key={String(i)} onPress={() => goToDetail(point)}
                  coordinate={{ latitude: Number(point.latitude), longitude: Number(point.longitude) }}
                  title={point.name}
                  color="red"
                />
              ))}
            </MapView>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}