import React from "react";

import { DrinkTypes } from "@/@types";

import * as S from "./styles";
import { AnimateProps } from "react-native-reanimated";

interface IProps extends AnimateProps<any> {
  filter: DrinkTypes | "";
  handleOnPress?: (filter: DrinkTypes) => void;
}

export function DrinksFilters({ filter, handleOnPress, ...rest }: IProps) {
  return (
    <S.FilterBarContainer {...rest}>
      <S.Title>Nossos cafés</S.Title>
      <S.FilterTags>
        <S.Tag
          title="TRADICIONAIS"
          isChecked={filter === "TRADICIONAIS"}
          onPress={() => handleOnPress?.("TRADICIONAIS")}
        />
        <S.Tag
          title="DOCES"
          isChecked={filter === "DOCES"}
          onPress={() => handleOnPress?.("DOCES")}
        />
        <S.Tag
          title="ESPECIAIS"
          isChecked={filter === "ESPECIAIS"}
          onPress={() => handleOnPress?.("ESPECIAIS")}
        />
      </S.FilterTags>
    </S.FilterBarContainer>
  );
}
