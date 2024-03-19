import React from "react";

import { Stack } from "expo-router";

import { AppIconButton } from "@/components/AppIconButton";

import { ArrowLeft, ShoppingCart } from "phosphor-react-native";

import { useTheme } from "styled-components/native";

export default function DrinkDetailsLayout() {
  const { COLORS } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        title: "",
        headerLeft: () => (
          <AppIconButton>
            <ArrowLeft size={24} color={COLORS.WHITE} />
          </AppIconButton>
        ),
        headerRight: () => (
          <AppIconButton>
            <ShoppingCart size={24} color={COLORS.PURPLE} weight="fill" />
          </AppIconButton>
        ),
        headerStyle: {
          backgroundColor: COLORS.GRAY_100,
        },
      }}
    />
  );
}
