import React from "react";

import { Text } from "react-native";

import { AppTag } from "@/components/AppTag";

import { AppCounter } from "@/components/AppCounter";
import { AppButton } from "@/components/AppButton";

import drink from "@/assets/illustrations/coffee-details.png";
import steam from "@/assets/steams/steam8.png";

import * as S from "./styles";

import { MillilitersCards } from "./components/MillilitersCards";

export default function DrinkDetails() {
  const [selectedMilliliters, setSelectedMilliliters] =
    React.useState<string>("");

  return (
    <>
      <S.Container>
        <S.Content>
          <S.Header>
            <AppTag title="ESPECIAL" disabled style={{ maxWidth: 70 }} />

            <S.TitleContainer>
              <S.DrinkName>Irlandês</S.DrinkName>
              <S.DrinkPrice>
                <S.DollarSign>R$</S.DollarSign> 9,90
              </S.DrinkPrice>
            </S.TitleContainer>

            <S.DrinkDescription>
              Bebida a base de café, uísque irlandês, {"\n"}açúcar e chantilly
            </S.DrinkDescription>
          </S.Header>
          <S.Body>
            <S.SteamImg source={steam} />
            <S.DrinkImg source={drink} />
          </S.Body>
        </S.Content>
      </S.Container>
      <S.Footer>
        <S.QuantityLabel>Selecione o tamanho:</S.QuantityLabel>

        <S.MlCardsContainer>
          <MillilitersCards
            title="114ml"
            onPress={() => setSelectedMilliliters("114ml")}
            isChecked={selectedMilliliters === "114ml"}
          />
          <MillilitersCards
            title="140ml"
            onPress={() => setSelectedMilliliters("140ml")}
            isChecked={selectedMilliliters === "140ml"}
          />
          <MillilitersCards
            title="227ml"
            onPress={() => setSelectedMilliliters("227ml")}
            isChecked={selectedMilliliters === "227ml"}
          />
        </S.MlCardsContainer>
        <S.ActionsButtons>
          <AppCounter />
          <AppButton title="ADICIONAR" />
        </S.ActionsButtons>
      </S.Footer>
    </>
  );
}
