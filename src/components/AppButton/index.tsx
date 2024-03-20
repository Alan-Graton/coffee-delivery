import React from "react";

import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

interface IProps extends TouchableOpacityProps {
  title: string;
  type?: S.ButtonTypeStyleProps;
}

export function AppButton({ title, type = "PRIMARY", ...rest }: IProps) {
  return (
    <S.Button type={type} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Button>
  );
}
