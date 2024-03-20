import React from "react";

import { Text, View } from "react-native";

import { Trash } from "phosphor-react-native";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

interface IProps {}

export function CartCard() {
  const { COLORS } = useTheme();

  return (
    <>
      <S.Card>
        <S.DrinkImg source={require("@/assets/drinks/Irlandes.png")} />
        <View style={{ flex: 1, gap: 8 }}>
          <View style={{ gap: 2 }}>
            <S.DrinkDetails>
              <Text>Irlandês</Text>
              <Text>R$ 9,90</Text>
            </S.DrinkDetails>
            <View>
              <Text>227ml</Text>
            </View>
          </View>
          <S.Actions>
            <S.Counter />
            <S.IconButton>
              <Trash size={20} color={COLORS.PURPLE} />
            </S.IconButton>
          </S.Actions>
        </View>
      </S.Card>
    </>
  );
}
