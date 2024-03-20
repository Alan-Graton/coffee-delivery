import React from "react";

import { FlatList, Text, View } from "react-native";

import { CartCard } from "./components/CartCard";
import { useTheme } from "styled-components/native";
import { AppButton } from "@/components/AppButton";

export default function Cart() {
  const { COLORS } = useTheme();

  const [content, setContent] = React.useState<Array<any>>(
    Array.from({ length: 20 })
  );

  return (
    <>
      <View
        className="container"
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.WHITE,
        }}
      >
        <FlatList
          data={content}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
          renderItem={() => <CartCard />}
          style={{ flex: 1, width: "100%" }}
        />
        <View
          className="footer"
          style={{
            backgroundColor: "white",
            width: "100%",
            maxHeight: 160,
            padding: 10,
            flexGrow: 1,
            // iOS
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 5,
            shadowRadius: 2,
            // Android
            elevation: 50,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Valor total</Text>
            <Text>R$ 9,90</Text>
          </View>
          <AppButton
            title="CONFIRMAR PEDIDO"
            type="SECONDARY"
            style={{ maxHeight: 55 }}
          />
        </View>
      </View>
    </>
  );
}
