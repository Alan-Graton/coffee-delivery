import React from "react";

import { View } from "react-native";

import { AppButton } from "@/components/AppButton";

import * as S from "./styles";

export default function OrderFeedback() {
  return (
    <>
      <S.Container>
        <S.FeedbackImg
          source={require("@/assets/illustrations/Illustration.png")}
        />
        <View>
          <S.Title>Uhu! Pedido confirmado</S.Title>
          <S.Subtitle>
            Agora é só aguardar que logo o café {"\n"}chegará até você!
          </S.Subtitle>
        </View>
        <S.Footer>
          <AppButton title="IR PARA HOME" />
        </S.Footer>
      </S.Container>
    </>
  );
}
