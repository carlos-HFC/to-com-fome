import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, Image, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableWithoutFeedback, View } from 'react-native';

import { LinearButton } from "../../components";
import { COLORS, USER } from "../../constants";

import { styles } from './style';

export function UserIdentification() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    const item = await AsyncStorage.getItem(USER);

    if (item) return navigation.navigate("Points" as never);
  }

  async function handleSubmit() {
    if (!Boolean(name)) return Alert.alert("Me diga como te chamar 😥");

    try {
      await AsyncStorage.setItem(USER, name);

      navigation.navigate("Points" as never);
    } catch (error) {
      Alert.alert("Não foi possível salvar o seu nome 😥");
    }
  }

  function handleChange(value: string) {
    setIsFilled(Boolean(value));
    setName(value);
  }

  function handleBlur() {
    setIsFocused(false);
    setIsFilled(Boolean(name));
  }

  function handleFocus() {
    setIsFocused(true);
  }

  return (
    <ImageBackground style={styles.container} source={require("../../assets/background.png")}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Image source={require("../../assets/logo.png")} />
              </View>

              <TextInput placeholder="Digite o seu nome" style={[styles.input, (isFocused || isFilled) && { borderColor: COLORS.greenLight }]}
                value={name} onChangeText={handleChange}
                onBlur={handleBlur} onFocus={handleFocus}
              />

              <View style={styles.footer}>
                <LinearButton colors={[COLORS.greenDark, COLORS.green]}
                  start={{ x: 0, y: 0.9 }}
                  end={{ x: 0.9, y: 1 }}
                  locations={[.185, .8905]}
                  title="Confirmar" disabled={!name} onPress={handleSubmit} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}