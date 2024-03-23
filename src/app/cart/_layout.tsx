import React from "react";

import { Stack } from "expo-router";

import { AppIconButton } from "@/components/AppIconButton";

import { HandleGoBack } from "../utils/HandleGoBack";

import { ArrowLeft } from "phosphor-react-native";

import { useTheme } from "styled-components/native";

export default function CartLayout() {
  const { COLORS, FONT_SIZE, FONT_FAMILY } = useTheme();
  return (
    <Stack
      screenOptions={{
        title: "Carrinho",
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerTitleStyle: {
          color: COLORS.GRAY_200,
          fontSize: FONT_SIZE.TITLE_SM,
          fontFamily: FONT_FAMILY.HEADING,
        },
        // Altera o estilo do conteúdo abaixo do header
        contentStyle: {
          borderTopWidth: 1,
          borderTopColor: COLORS.GRAY_900,
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
