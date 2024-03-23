import React from "react";
import { Stack, router } from "expo-router";

import { Text, View } from "react-native";

import { AppIconButton } from "@/components/AppIconButton";
import { SafeAreaView } from "react-native-safe-area-context";

import { MapPin, ShoppingCart } from "phosphor-react-native";

import { useTheme } from "styled-components/native";

export default function HomeLayout() {
  const { COLORS, FONT_SIZE, FONT_FAMILY } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        title: "",
        header: () => (
          <SafeAreaView style={{ backgroundColor: COLORS.GRAY_100 }}>
            <View
              style={{
                backgroundColor: COLORS.GRAY_100,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 76,
                padding: 32,
              }}
            >
              <View style={{ flexDirection: "row", gap: 4 }}>
                <MapPin size={20} color={COLORS.PURPLE} weight="fill" />
                <Text
                  style={{
                    color: COLORS.GRAY_900,
                    fontSize: FONT_SIZE.TEXT_SM,
                    fontFamily: FONT_FAMILY.BODY,
                  }}
                >
                  São Paulo, SP
                </Text>
              </View>
              <AppIconButton onPress={() => router.push("/cart/")}>
                <ShoppingCart
                  size={20}
                  color={COLORS.YELLOW_DARK}
                  weight="fill"
                />
              </AppIconButton>
            </View>
          </SafeAreaView>
        ),
      }}
    />
  );
}
