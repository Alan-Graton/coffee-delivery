import React from "react";

import * as S from "./styles";

interface IProps {
  title: string;
  type?: S.ButtonTypeStyleProps;
}

export function AppButton({ title, type = "PRIMARY" }: IProps) {
  return (
    <S.Button type={type}>
      <S.Title>{title}</S.Title>
    </S.Button>
  );
}
