import React from "react";

import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

interface IProps extends TouchableOpacityProps {
  title: string;
  isChecked?: boolean;
}

export function MillilitersCards({
  title,
  isChecked = false,
  ...rest
}: IProps) {
  return (
    <S.CardButton isChecked={isChecked} {...rest}>
      <S.Title isChecked={isChecked}>{title}</S.Title>
    </S.CardButton>
  );
}
