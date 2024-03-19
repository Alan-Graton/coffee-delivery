import React from "react";

import { Pressable, Text } from "react-native";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

interface IProps {
  title: string;
  isChecked?: boolean;
  disabled?: boolean;
}

export function AppTag({ title, isChecked = false, disabled = false }: IProps) {
  const { COLORS } = useTheme();

  return (
    <Pressable
      style={{
        backgroundColor: COLORS.GRAY_200,
        width: 75,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        padding: 6,
      }}
    >
      <Text style={{ color: COLORS.WHITE, fontSize: 10 }}>{title}</Text>
    </Pressable>
  );
}
