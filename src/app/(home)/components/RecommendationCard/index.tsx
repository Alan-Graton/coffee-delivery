import { AppTag } from "@/components/AppTag";
import React from "react";

import { Image, Pressable, Text, View } from "react-native";

import { useTheme } from "styled-components/native";

export function RecommendationCard() {
  const { COLORS, FONT_SIZE, FONT_FAMILY } = useTheme();

  return (
    <>
      <Pressable
        style={{
          backgroundColor: COLORS.GRAY_800,
          width: 208,
          height: 262,
          gap: 14,
          alignItems: "center",
          borderTopLeftRadius: 6,
          borderTopRightRadius: 36,
          borderBottomLeftRadius: 36,
          borderBottomRightRadius: 6,
          paddingHorizontal: 16,
        }}
      >
        <View style={{ gap: 8 }}>
          <Image
            source={require("@/assets/drinks/Latte.png")}
            style={{
              marginTop: 4,
              width: 90,
              height: 90,
            }}
          />
          <AppTag title="TRADICIONAL" />
        </View>

        <View style={{ alignItems: "center", gap: 4 }}>
          <Text
            style={{
              color: COLORS.GRAY_200,
              fontFamily: FONT_FAMILY.HEADING,
              fontSize: FONT_SIZE.TITLE_MD,
            }}
          >
            Latte
          </Text>
          <Text
            numberOfLines={2}
            style={{
              textAlign: "center",
              color: COLORS.GRAY_400,
              fontSize: FONT_SIZE.TEXT_XS,
              fontFamily: FONT_FAMILY.BODY,
            }}
          >
            Café expresso com o dobro de leite e espuma cremosa
          </Text>
        </View>

        <Text
          style={{
            color: COLORS.YELLOW_DARK,
            fontSize: FONT_SIZE.TITLE_LG,
            fontFamily: FONT_FAMILY.HEADING,
          }}
        >
          <Text
            style={{
              fontSize: FONT_SIZE.TEXT_SM,
              fontFamily: FONT_FAMILY.BODY,
            }}
          >
            R$
          </Text>
          9,90
        </Text>
      </Pressable>
    </>
  );
}
