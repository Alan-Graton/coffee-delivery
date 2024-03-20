import React from "react";

import { Image, Text, View } from "react-native";

import { AppCounter } from "@/components/AppCounter";
import { AppIconButton } from "@/components/AppIconButton";

import { Trash } from "phosphor-react-native";

import { useTheme } from "styled-components/native";

interface IProps {}

export function CartCard() {
  const { COLORS } = useTheme();

  return (
    <>
      <View
        style={{
          backgroundColor: COLORS.WHITE,
          flex: 1,
          width: "100%",
          borderBottomWidth: 1,
          borderBottomColor: COLORS.GRAY_600,
          padding: 32,
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
        }}
      >
        <Image
          source={require("@/assets/drinks/Irlandes.png")}
          style={{ width: 64, height: 64 }}
        />
        <View style={{ flex: 1, gap: 8 }}>
          <View style={{ gap: 2 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text>Irlandês</Text>
              <Text>R$ 9,90</Text>
            </View>
            <View>
              <Text>227ml</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <AppCounter
              style={{
                maxWidth: 100,
                borderWidth: 1,
                borderColor: COLORS.GRAY_600,
                borderRadius: 6,
              }}
            />
            <AppIconButton
              style={{ backgroundColor: COLORS.GRAY_700, borderRadius: 6 }}
            >
              <Trash size={20} color={COLORS.PURPLE} />
            </AppIconButton>
          </View>
        </View>
      </View>
    </>
  );
}
