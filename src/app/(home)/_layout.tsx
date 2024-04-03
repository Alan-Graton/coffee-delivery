import React from "react";
import { Stack, router } from "expo-router";

import { View } from "react-native";

import { AppIconButton } from "@/components/AppIconButton";
import { AppScreenHeader } from "@/components/AppScreenHeader";

import Animated, { SlideInUp } from "react-native-reanimated";

import { MapPin, ShoppingCart } from "phosphor-react-native";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

const AppScreenHeaderFowardRef = React.forwardRef((props, ref) => (
  <AppScreenHeader ref={ref} {...props} />
));

const AnimatedScreenHeader = Animated.createAnimatedComponent(
  AppScreenHeaderFowardRef
);

export default function HomeLayout() {
  const { COLORS } = useTheme();

  // COLOCAR ISSO DENTRO DA VIEW , COMO VISTO NAS AULAS DA ROCKET E NA DOC DO EXPO PARA AUMENTAR A FLEXIBILDIADE DE ESTILIZAÇÃO
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
        title: "",
        header: () => (
          <AnimatedScreenHeader
            color={"GRAY_100"}
            entering={SlideInUp.duration(300)}
          >
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
          </AnimatedScreenHeader>
        ),
      }}
    />
  );
}
