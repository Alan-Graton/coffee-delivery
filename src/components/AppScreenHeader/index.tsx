import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import * as S from "./styles";

import { THEME } from "@/theme";
import { useTheme } from "styled-components/native";

interface IProps {
  children: React.ReactNode;
  color?: keyof typeof THEME.COLORS;
}

export function AppScreenHeader({ children, color = "WHITE" }: IProps) {
  const { COLORS } = useTheme();

  return (
    <SafeAreaView style={{ backgroundColor: COLORS[color] }}>
      <S.Header color={color}>{children}</S.Header>
    </SafeAreaView>
  );
}
