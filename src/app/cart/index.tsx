import React from "react";

import { FlatList, Text } from "react-native";

import { CartCard } from "./components/CartCard";
import { AppButton } from "@/components/AppButton";

import * as S from "./styles";
import { router } from "expo-router";

export default function Cart() {
  const [content, setContent] = React.useState<Array<any>>(
    Array.from({ length: 10 })
  );

  // SHADOWS
  // iOS
  // shadowColor: "#000",
  // shadowOffset: { width: 0, height: 5 },
  // shadowOpacity: 5,
  // shadowRadius: 2,
  // // Android
  // elevation: 50,

  return (
    <>
      <S.Container>
        <FlatList
          data={content}
          keyExtractor={(item, index) => String(index)}
          showsVerticalScrollIndicator={false}
          renderItem={() => <CartCard />}
          style={{ flex: 1, width: "100%" }}
        />
        <S.StickyFooter>
          <S.StickyFooterDetails>
            <Text>Valor total</Text>
            <Text>R$ 9,90</Text>
          </S.StickyFooterDetails>
          <AppButton
            title="CONFIRMAR PEDIDO"
            type="SECONDARY"
            style={{ maxHeight: 55 }}
            onPress={() => router.push("/orderfeedback/")}
          />
        </S.StickyFooter>
      </S.Container>
    </>
  );
}
