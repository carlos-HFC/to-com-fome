import { FontAwesome } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ImageBackground, Linking, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { TitleImage } from "../../components";
import { COLORS } from "../../constants";

import { styles } from './style';

export function Detail() {
  const route = useRoute();

  const params = route.params as Point;

  const [canOpenWhatsapp, setCanOpenWhatsapp] = useState(false);

  const url = `whatsapp://send?phone=+55${params.phone}&text=Olá, qual o horário de funcionamento?`;

  useEffect(() => {
    async function canOpen() {
      const isPossible = await Linking.canOpenURL(url);
      setCanOpenWhatsapp(isPossible);
    }

    canOpen();
  }, [params.phone]);

  async function handleWhats() {
    return Linking.openURL(url);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground style={{ flex: 1 }} source={require("../../assets/background.png")}>
        <View style={styles.container}>
          <TitleImage />

          <View style={styles.point}>
            <View style={styles.pointContainer}>
              <Text style={styles.pointTitle}>Nome</Text>
              <Text style={styles.pointContent}>
                {params.name}
              </Text>
            </View>

            <View style={styles.pointContainer}>
              <Text style={styles.pointTitle}>Endereço</Text>
              <Text style={styles.pointContent}>
                {params.address}
              </Text>
            </View>

            <View style={styles.pointContainer}>
              <Text style={styles.pointTitle}>Bairro</Text>
              <Text style={styles.pointContent}>
                {params.district}
              </Text>
            </View>

            <View style={styles.pointContainer}>
              <Text style={styles.pointTitle}>Cidade - Estado</Text>
              <Text style={styles.pointContent}>
                {params.city} - {params.uf}
              </Text>
            </View>
          </View>
        </View>

        {canOpenWhatsapp && (
          <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={handleWhats}>
              <FontAwesome name="whatsapp" color={COLORS.white} size={20} />
              <Text style={styles.buttonText}>Whatsapp</Text>
            </TouchableOpacity>
          </View>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}