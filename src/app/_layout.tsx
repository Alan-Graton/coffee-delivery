import React from "react";
import { StatusBar } from "expo-status-bar";

import { Slot } from "expo-router";

import { AppLoader } from "@/components/AppLoader";

import { THEME } from "@/theme";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useFontsBaloo,
  Baloo2_700Bold,
} from "@expo-google-fonts/baloo-2";
import {
  useFonts as useFontsRoboto,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function RootLayout() {
  const [isLoadedBaloo] = useFontsBaloo({ Baloo2_700Bold });
  const [isLoadedRoboto] = useFontsRoboto({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  function AppContent() {
    const handleLoadingState = isLoadedBaloo && isLoadedRoboto ? true : false;

    return (
      <>
        <AppLoader loading={!handleLoadingState} size="large" color="red" />
        {handleLoadingState && <Slot initialRouteName="home" />}
      </>
    );
  }

  return (
    <ThemeProvider theme={THEME}>
      <AppContent />
      <StatusBar style="light" animated />
    </ThemeProvider>
  );
}
