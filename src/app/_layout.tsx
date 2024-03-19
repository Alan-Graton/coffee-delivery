import React from "react";

import { Slot } from "expo-router";

import { THEME } from "@/theme";
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <ThemeProvider theme={THEME}>
      <Slot initialRouteName="home" />
      <StatusBar style="light" animated />
    </ThemeProvider>
  );
}
