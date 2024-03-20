import React from "react";

import * as S from "./styles";

interface IProps {
  title: string;
  isChecked?: boolean;
  disabled?: boolean;
}

export function AppTag({ title, isChecked = false, disabled = false }: IProps) {
  return (
    <S.Tag isChecked={isChecked} disabled={disabled}>
      <S.Title>{title}</S.Title>
    </S.Tag>
  );
}
