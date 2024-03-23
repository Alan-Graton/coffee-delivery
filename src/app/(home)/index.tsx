import React, { useState } from "react";

import {
  FlatList,
  Image,
  ScrollView,
  SectionList,
  Text,
  View,
} from "react-native";

import { AppInput } from "@/components/AppInput";
import { AppTag } from "@/components/AppTag";

import { RecommendationCard } from "./components/RecommendationCard";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

export default function Home() {
  const { COLORS, FONT_SIZE, FONT_FAMILY } = useTheme();

  const [recommended, setRecommended] = useState<Array<any>>(
    Array.from({ length: 5 })
  );

  const [drinks, setDrinks] = useState<Array<{ title: ""; data: Array<any> }>>(
    require("@/mock/drinks.json")
  );

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          padding: 16,
        }}
        style={{ flex: 1, backgroundColor: COLORS.WHITE }}
      >
        <View className="search-bar">
          <Text
            style={{
              textAlign: "left",
              fontSize: FONT_SIZE.TITLE_MD,
              fontFamily: FONT_FAMILY.HEADING,
            }}
          >
            Encontre o café perfeito para {"\n"} qualquer hora do dia
          </Text>
          <AppInput placeholder="Pesquisar" />
        </View>

        <FlatList
          data={recommended}
          keyExtractor={(item, index) => String(index)}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={() => <RecommendationCard />}
          contentContainerStyle={{ gap: 32 }}
          style={{ padding: 16 }}
        />

        <View
          style={{
            width: "100%",
            paddingHorizontal: 32,
            paddingVertical: 16,
            gap: 12,
          }}
        >
          <Text
            style={{
              fontSize: FONT_SIZE.TITLE_SM,
              fontFamily: FONT_FAMILY.HEADING,
              color: COLORS.GRAY_300,
            }}
          >
            Nossos cafés
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 8,
              alignItems: "flex-end",
            }}
          >
            <AppTag title="TRADICIONAIS" />
            <AppTag title="DOCES" />
            <AppTag title="ESPECIAIS" />
          </View>
        </View>

        <SectionList
          sections={drinks}
          keyExtractor={(item, index) => item.drink}
          renderSectionHeader={({ section: { title } }) => (
            <View
              style={
                {
                  // paddingHorizontal: 32,
                  // paddingVertical: 16,
                }
              }
            >
              <Text
                style={{
                  color: COLORS.GRAY_400,
                  fontSize: FONT_SIZE.TITLE_XS,
                  fontFamily: FONT_FAMILY.HEADING,
                }}
              >
                {title}
              </Text>
            </View>
          )}
          renderItem={({ item, index }) => (
            <View
              style={{
                width: 311,
                height: 120,
                backgroundColor: COLORS.GRAY_800,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 36,
                borderBottomLeftRadius: 36,
                borderBottomRightRadius: 6,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Image
                source={require("@/assets/drinks/Capuccino.png")}
                style={{ width: 76, height: 76, marginLeft: 14 }}
              />

              <View
                style={{
                  // backgroundColor: "red",
                  flex: 1,
                  paddingHorizontal: 32,
                }}
              >
                <Text
                  style={{
                    color: COLORS.GRAY_200,
                    fontSize: FONT_SIZE.TITLE_SM,
                    fontFamily: FONT_FAMILY.HEADING,
                  }}
                >
                  {item.drink}
                </Text>
                <Text
                  style={{
                    color: COLORS.GRAY_400,
                    fontSize: FONT_SIZE.TEXT_XS,
                    fontFamily: FONT_FAMILY.BODY,
                  }}
                >
                  {item.description}
                </Text>
                <Text
                  style={{
                    color: COLORS.YELLOW_DARK,
                    fontSize: FONT_SIZE.TITLE_MD,
                    fontFamily: FONT_FAMILY.HEADING,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.YELLOW_DARK,
                      fontSize: FONT_SIZE.TEXT_SM,
                      fontFamily: FONT_FAMILY.BODY,
                    }}
                  >
                    R$
                  </Text>
                  {item.price}
                </Text>
              </View>
            </View>
          )}
          contentContainerStyle={{
            gap: 32,
            padding: 16,
          }}
        />
      </ScrollView>
    </>
  );
}
