import React from "react";

import { Text, TouchableOpacity } from "react-native";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

interface IProps {
  title: string;
  isChecked?: boolean;
}

export function MillilitersCards({ title, isChecked = false }: IProps) {
  const { COLORS } = useTheme();

  return (
    <S.CardButton>
      <Text>{title}</Text>
    </S.CardButton>
  );
}
