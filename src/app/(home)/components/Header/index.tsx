import React from "react";

import { Stack, router } from "expo-router";

import { HomeAnimationsContext } from "../../animations.context";

import { AppIconButton } from "@/components/AppIconButton";
import { AppScreenHeader } from "@/components/AppScreenHeader";

import Animated, { SlideInUp } from "react-native-reanimated";

import { MapPin, ShoppingCart } from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

const AppScreenHeaderFowardRef = React.forwardRef((props, ref) => (
  <AppScreenHeader ref={ref} {...props} />
));

const AnimatedScreenHeader = Animated.createAnimatedComponent(
  AppScreenHeaderFowardRef
);

export function Header() {
  const { headerAnimatedStyles, headerTitleAnimatedStyles } = React.useContext(
    HomeAnimationsContext
  );

  const { COLORS } = useTheme();

  return (
    <Stack.Screen
      options={{
        header: () => (
          <AnimatedScreenHeader
            style={[headerAnimatedStyles]}
            entering={SlideInUp.duration(350)}
          >
            <S.LocationContainer>
              <MapPin size={20} color={COLORS.PURPLE} weight="fill" />
              <S.UserLocation style={[headerTitleAnimatedStyles]}>
                São Paulo, SP
              </S.UserLocation>
            </S.LocationContainer>
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
