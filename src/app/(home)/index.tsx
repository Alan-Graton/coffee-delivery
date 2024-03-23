import React, { useState } from "react";

import { FlatList, SectionList } from "react-native";

import { AppInput } from "@/components/AppInput";
import { AppTag } from "@/components/AppTag";

import { RecommendationCard } from "./components/RecommendationCard";
import { DrinkCard } from "./components/DrinkCard";

import * as S from "./styles";

export default function Home() {
  const [recommended, setRecommended] = useState<Array<any>>(
    Array.from({ length: 5 })
  );

  const [drinks, setDrinks] = useState<Array<{ title: ""; data: Array<any> }>>(
    // TODO: Add path das imagens das bebidas
    require("@/mock/drinks.json")
  );

  return (
    <>
      <S.Container>
        <S.SearchBar>
          <S.Title>
            Encontre o café perfeito para {"\n"} qualquer hora do dia
          </S.Title>
          <AppInput placeholder="Pesquisar" />
        </S.SearchBar>

        <FlatList
          data={recommended}
          keyExtractor={(item, index) => String(index)}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={() => <RecommendationCard />}
          contentContainerStyle={{ gap: 32 }}
          style={{ marginTop: 16, marginBottom: 32 }}
        />

        <S.FilterBar>
          <S.FilterTitle>Nossos cafés</S.FilterTitle>
          <S.Filters>
            <AppTag
              title="TRADICIONAIS"
              style={{ flex: 1, maxWidth: 90, height: 25 }}
            />
            <AppTag
              title="DOCES"
              style={{ flex: 1, maxWidth: 90, height: 25 }}
            />
            <AppTag
              title="ESPECIAIS"
              style={{ flex: 1, maxWidth: 90, height: 25 }}
            />
          </S.Filters>
        </S.FilterBar>

        <SectionList
          sections={drinks}
          keyExtractor={(item, index) => item.drink}
          renderSectionHeader={({ section: { title } }) => (
            <S.DrinkSectionTitle>{title}</S.DrinkSectionTitle>
          )}
          renderItem={({ item, index }) => <DrinkCard item={item} />}
          contentContainerStyle={{
            gap: 32,
          }}
        />
      </S.Container>
    </>
  );
}
