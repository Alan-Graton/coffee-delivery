import React from "react";
import { router } from "expo-router";

import { FlatList, View } from "react-native";

import { CartCard } from "./components/CartCard";
import { AppButton } from "@/components/AppButton";

import { ShoppingCart } from "phosphor-react-native";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

export default function Cart() {
  const { COLORS } = useTheme();

  const [content, setContent] = React.useState<Array<any>>(
    Array.from({ length: 5 })
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
          ListEmptyComponent={() => (
            <S.EmptyListContainer>
              <View style={{ alignItems: "center", gap: 16 }}>
                <ShoppingCart size={24} weight="fill" color={COLORS.GRAY_400} />
                <S.EmptyListTitle>Seu carrinho está vazio</S.EmptyListTitle>
              </View>
              <View style={{ flexDirection: "row", maxWidth: 220 }}>
                <AppButton title="VER CATÁLOGO" />
              </View>
            </S.EmptyListContainer>
          )}
        />
        {content.length > 0 && (
          <S.StickyFooter style={{ elevation: 50 }}>
            <S.StickyFooterDetails>
              <S.StickyFooterLabel>Valor total</S.StickyFooterLabel>
              <S.TotalPrice>R$ 9,90</S.TotalPrice>
            </S.StickyFooterDetails>
            <AppButton
              title="CONFIRMAR PEDIDO"
              type="SECONDARY"
              style={{ maxHeight: 55 }}
              onPress={() => router.push("/orderfeedback/")}
            />
          </S.StickyFooter>
        )}
      </S.Container>
    </>
  );
}
