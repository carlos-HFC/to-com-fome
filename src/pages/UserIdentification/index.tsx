import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

import { Button } from "../../components";
import { COLORS, USER } from "../../constants";

import { styles } from './style';

export function UserIdentification() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  async function handleSubmit() {
    if (!Boolean(name)) return Alert.alert("Me diga como te chamar 😥");

    try {
      await AsyncStorage.setItem(USER, name);

      navigation.navigate("Confirmation" as never, {
        title: `Prontinho, ${name}`,
        subtitle: "Lorem ipsum dolor \n sit amet consectetur",
        buttonTitle: "Começar",
        icon: "smile",
        nextScreen: "Points"
      } as never);
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
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>
                  😀
                </Text>
                <Text style={styles.title}>
                  Como podemos {'\n'} chamar você?
                </Text>
              </View>

              <TextInput placeholder="Digite o seu nome" style={[styles.input, (isFocused || isFilled) && { borderColor: COLORS.green }]}
                value={name} onChangeText={handleChange}
                onBlur={handleBlur} onFocus={handleFocus}
              />

              <View style={styles.footer}>
                <Button title="Confirmar" disabled={!name} onPress={handleSubmit} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}