import React from "react";

import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

interface IProps extends TouchableOpacityProps {
  children: React.JSX.Element;
}

export function AppIconButton({ children, ...rest }: IProps) {
  return <S.Button {...rest}>{children}</S.Button>;
}
