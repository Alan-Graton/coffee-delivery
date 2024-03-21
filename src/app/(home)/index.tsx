import React from "react";

import { AppInput } from "@/components/AppInput";

import { FlatList, ScrollView, Text, View } from "react-native";
import { AppTag } from "@/components/AppTag";

import * as S from "./styles";
import { RecommendationCard } from "./components/RecommendationCard";

export default function Home() {
  const [recommended, setRecommended] = React.useState<Array<any>>(
    Array.from({ length: 5 })
  );

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
          padding: 16,
        }}
      >
        <View className="search-bar">
          <Text style={{ textAlign: "left", fontSize: 20, fontWeight: "bold" }}>
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
        />

        <View
          style={{
            width: "100%",
            paddingHorizontal: 32,
            paddingVertical: 16,
            gap: 12,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Nossos cafés</Text>
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
          {/* TODO: SectionList */}
        </View>
      </ScrollView>
    </>
  );
}
