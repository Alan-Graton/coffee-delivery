import React from "react";
import { router } from "expo-router";

import { AppButton } from "@/components/AppButton";

import * as S from "./styles";

export default function OrderFeedback() {
  return (
    <>
      <S.Container>
        <S.AnimatedFeedbackImg
          source={require("@/assets/illustrations/Illustration.png")}
        />
        <S.AnimatedTextGroup>
          <S.Title>Uhu! Pedido confirmado</S.Title>
          <S.Subtitle>
            Agora é só aguardar que logo o café {"\n"}chegará até você!
          </S.Subtitle>
        </S.AnimatedTextGroup>
        <S.AnimatedFooter>
          <AppButton
            title="IR PARA HOME"
            onPress={() => router.push("/(home)")}
          />
        </S.AnimatedFooter>
      </S.Container>
    </>
  );
}
