import React from "react";

import { Stack, router } from "expo-router";
import { Text, View } from "react-native";
import { MapPin, ShoppingCart } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { AppIconButton } from "@/components/AppIconButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeLayout() {
  const { COLORS } = useTheme();

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
                <Text style={{ color: COLORS.GRAY_900, fontSize: 14 }}>
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
