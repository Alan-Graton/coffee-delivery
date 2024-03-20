import React from "react";

import { Minus, Plus } from "phosphor-react-native";

import { Text } from "react-native";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

export function AppCounter() {
  const { COLORS } = useTheme();

  const [counter, setCounter] = React.useState<number>(0);

  function add() {
    setCounter((prevState) => (prevState += 1));
  }

  function sub() {
    if (counter === 0) return;

    setCounter((prevState) => (prevState -= 1));
  }

  return (
    <>
      <S.Container>
        <S.IconButton onPress={sub}>
          <Minus size={20} color={COLORS.PURPLE} />
        </S.IconButton>
        <Text>{counter}</Text>
        <S.IconButton onPress={add}>
          <Plus size={20} color={COLORS.PURPLE} />
        </S.IconButton>
      </S.Container>
    </>
  );
}
