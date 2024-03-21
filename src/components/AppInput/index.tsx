import React from "react";

import { TextInputProps } from "react-native";

import { MagnifyingGlass } from "phosphor-react-native";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

interface IProps extends TextInputProps {}

export function AppInput({ ...rest }: IProps) {
  const { COLORS } = useTheme();
  return (
    <S.Container>
      <S.IconWrapper>
        <MagnifyingGlass size={16} color={COLORS.GRAY_400} />
      </S.IconWrapper>
      <S.Input {...rest} />
    </S.Container>
  );
}
