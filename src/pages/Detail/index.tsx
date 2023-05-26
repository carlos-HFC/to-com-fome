import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from "../../constants";

import { styles } from './style';

export function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const params = route.params as any;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={20} color={COLORS.green} />
        </TouchableOpacity>

        <Text style={styles.pointName}>
          {params.title}
        </Text>

        <View style={styles.address}>
          <Text style={styles.addressTitle}>Endereço</Text>
          <Text style={styles.addressContent}>São Paulo, SP</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="whatsapp" color={COLORS.white} size={20} />
          <Text style={styles.buttonText}>Whatsapp</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Feather name="mail" color={COLORS.white} size={20} />
          <Text style={styles.buttonText}>E-mail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}