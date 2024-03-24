import React from "react";
import { Stack, router } from "expo-router";

import { View } from "react-native";

import { AppIconButton } from "@/components/AppIconButton";
import { AppScreenHeader } from "@/components/AppScreenHeader";

import { MapPin, ShoppingCart } from "phosphor-react-native";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

export default function HomeLayout() {
  const { COLORS } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        title: "",
        header: () => (
          <AppScreenHeader color={"GRAY_100"}>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <MapPin size={20} color={COLORS.PURPLE} weight="fill" />
              <S.HeaderUserLocation>São Paulo, SP</S.HeaderUserLocation>
            </View>
            <AppIconButton onPress={() => router.push("/cart/")}>
              <ShoppingCart
                size={20}
                color={COLORS.YELLOW_DARK}
                weight="fill"
              />
            </AppIconButton>
          </AppScreenHeader>
        ),
      }}
    />
  );
}
