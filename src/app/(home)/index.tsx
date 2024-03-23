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

  const [selectedFilter, setSelectedFilter] = useState<
    "TRADICIONAIS" | "DOCES" | "ESPECIAIS" | ""
  >("");

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
          renderItem={({ item, index }) => <RecommendationCard index={index} />}
          contentContainerStyle={{ gap: 32 }}
          style={{
            paddingHorizontal: 32,
            position: "relative",
            top: -30,
          }}
        />

        <S.FilterBar>
          <S.FilterTitle>Nossos cafés</S.FilterTitle>
          <S.Filters>
            <AppTag
              title="TRADICIONAIS"
              variant="selectable"
              isChecked={selectedFilter === "TRADICIONAIS"}
              onPress={() => setSelectedFilter("TRADICIONAIS")}
              style={{ flex: 1, maxWidth: 90 }}
            />
            <AppTag
              title="DOCES"
              variant="selectable"
              isChecked={selectedFilter === "DOCES"}
              onPress={() => setSelectedFilter("DOCES")}
              style={{ flex: 1, maxWidth: 90 }}
            />
            <AppTag
              title="ESPECIAIS"
              variant="selectable"
              isChecked={selectedFilter === "ESPECIAIS"}
              onPress={() => setSelectedFilter("ESPECIAIS")}
              style={{ flex: 1, maxWidth: 90 }}
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
            padding: 32,
          }}
        />
      </S.Container>
    </>
  );
}
