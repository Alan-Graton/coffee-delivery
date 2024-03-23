import React from "react";
import { PressableProps } from "react-native";

import * as S from "./styles";

interface IProps extends PressableProps {
  title: string;
  variant?: S.ITagVariant;
  isChecked?: boolean;
  disabled?: boolean;
}

export function AppTag({
  title,
  variant = "selectable",
  isChecked = false,
  disabled = false,
  ...rest
}: IProps) {
  return (
    <S.Tag
      isChecked={isChecked}
      disabled={disabled}
      variant={variant}
      {...rest}
    >
      <S.Title isChecked={isChecked} disabled={disabled} variant={variant}>
        {title}
      </S.Title>
    </S.Tag>
  );
}
