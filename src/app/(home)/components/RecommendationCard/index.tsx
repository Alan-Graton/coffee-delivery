import React from "react";
import { router } from "expo-router";

import { View } from "react-native";

import { AppTag } from "@/components/AppTag";

import * as S from "./styles";

interface IProps {
  index: number;
}

export function RecommendationCard({ index }: IProps) {
  return (
    <>
      <S.Card
        onPress={() => router.push("/drinkdetails/")}
        style={index === 4 && { marginRight: 60 }}
      >
        <View style={{ gap: 8 }}>
          <S.DrinkImg source={require("@/assets/drinks/Latte.png")} />
          <AppTag title="TRADICIONAL" variant="ghost" />
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
