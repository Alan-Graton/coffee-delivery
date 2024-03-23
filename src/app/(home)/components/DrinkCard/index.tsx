import React from "react";
import { router } from "expo-router";

import * as S from "./styles";

interface IProps {
  item: any;
}

export function DrinkCard({ item }: IProps) {
  return (
    <>
      <S.Card onPress={() => router.push("/drinkdetails/")}>
        <S.DrinkImg source={require("@/assets/drinks/Capuccino.png")} />

        <S.About>
          <S.Title>{item.drink}</S.Title>
          <S.Description>{item.description}</S.Description>
          <S.Price>
            <S.DollarSign>R$</S.DollarSign>
            {item.price}
          </S.Price>
        </S.About>
      </S.Card>
    </>
  );
}
