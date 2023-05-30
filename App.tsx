import { Montserrat_700Bold, useFonts } from "@expo-google-fonts/montserrat";
import { StatusBar } from 'react-native';

import { Routes } from "./src/routes";

export default function App() {
  const [loaded] = useFonts({
    Montserrat: Montserrat_700Bold,
  });

  if (!loaded) return null;

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}