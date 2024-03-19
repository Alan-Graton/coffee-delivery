import React from "react";

import { Minus, Plus } from "phosphor-react-native";

import { Text } from "react-native";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

export function AppCounter() {
  const { COLORS } = useTheme();

  const [counter, setCounter] = React.useState<number>(0);

  function add() {}

  function sub() {}

  return (
    <>
      <S.Container>
        <S.IconButton>
          <Minus size={20} color={COLORS.PURPLE} />
        </S.IconButton>
        <Text>{counter}</Text>
        <S.IconButton>
          <Plus size={20} color={COLORS.PURPLE} />
        </S.IconButton>
      </S.Container>
    </>
  );
}
