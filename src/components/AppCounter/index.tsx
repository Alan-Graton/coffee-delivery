import React from "react";

import { Minus, Plus } from "phosphor-react-native";

import { Text, ViewProps } from "react-native";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

interface IProps extends ViewProps {}

export function AppCounter({ ...rest }: ViewProps) {
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
      <S.Container {...rest}>
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
