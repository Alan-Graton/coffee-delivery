import React from "react";

import * as S from "./styles";
import { DrinkTypes } from "@/@types";

interface IProps {
  filter: DrinkTypes | "";
  handleOnPress: (filter: DrinkTypes) => void;
}

export function DrinksFilters({ filter, handleOnPress }: IProps) {
  return (
    <S.FilterBarContainer>
      <S.Title>Nossos cafés</S.Title>
      <S.FilterTags>
        <S.Tag
          title="TRADICIONAIS"
          isChecked={filter === "TRADICIONAIS"}
          onPress={() => handleOnPress("TRADICIONAIS")}
        />
        <S.Tag
          title="DOCES"
          isChecked={filter === "DOCES"}
          onPress={() => handleOnPress("DOCES")}
        />
        <S.Tag
          title="ESPECIAIS"
          isChecked={filter === "ESPECIAIS"}
          onPress={() => handleOnPress("ESPECIAIS")}
        />
      </S.FilterTags>
    </S.FilterBarContainer>
  );
}
