import React from "react";

import { Stack } from "expo-router";

import { AppIconButton } from "@/components/AppIconButton";

import { HandleGoBack } from "../utils/HandleGoBack";

import { ArrowLeft } from "phosphor-react-native";

import { useTheme } from "styled-components/native";

export default function CartLayout() {
  const { COLORS } = useTheme();
  return (
    <Stack
      screenOptions={{
        title: "Carrinho",
        headerTitleAlign: "center",
        headerShadowVisible: false,
        // Altera o estilo do conteúdo abaixo do header
        contentStyle: {
          borderTopWidth: 1,
          borderTopColor: COLORS.GRAY_600,
        },
        headerLeft: () => (
          <AppIconButton onPress={HandleGoBack}>
            <ArrowLeft size={24} />
          </AppIconButton>
        ),
      }}
    />
  );
}
