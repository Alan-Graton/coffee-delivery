import { AppTag } from "@/components/AppTag";
import React from "react";

import { View } from "react-native";

import * as S from "./styles";

export function RecommendationCard() {
  return (
    <>
      <S.Card>
        <View style={{ gap: 8 }}>
          <S.DrinkImg source={require("@/assets/drinks/Latte.png")} />
          <AppTag title="TRADICIONAL" />
        </View>

        <View style={{ alignItems: "center", gap: 4 }}>
          <S.Title>Latte</S.Title>
          <S.Subtitle numberOfLines={2}>
            Café expresso com o dobro de leite e espuma cremosa
          </S.Subtitle>
        </View>

        <S.Price>
          <S.DollarSign>R$</S.DollarSign>
          9,90
        </S.Price>
      </S.Card>
    </>
  );
}
