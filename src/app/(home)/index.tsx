import React, { useState } from "react";

import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  SectionList,
  View,
} from "react-native";

import { AppInput } from "@/components/AppInput";
import { AppTag } from "@/components/AppTag";

import { RecommendationCard } from "./components/RecommendationCard";
import { DrinkCard } from "./components/DrinkCard";

import Animated, {
  SlideInRight,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const AnimatedSectionList = Animated.createAnimatedComponent(
  SectionList<
    Array<{
      title: "";
      data: Array<{ drink: string; description: string; price: number }>;
    }>
  >
);

import * as S from "./styles";

export default function Home() {
  const scale = useSharedValue(1);
  const scrollY = useSharedValue(0);

  const [recommended, setRecommended] = useState<Array<any>>(
    Array.from({ length: 5 })
  );

  const [selectedFilter, setSelectedFilter] = useState<
    "TRADICIONAIS" | "DOCES" | "ESPECIAIS" | ""
  >("");

  const [drinks, setDrinks] = useState<Array<{ title: ""; data: Array<any> }>>(
    require("@/mock/drinks.json")
  );

  const onRecommendationsScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      const verticalScrollCoords = event.contentOffset.y;

      console.log("Vertical Scroll Coords: ", verticalScrollCoords);
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {};
  });

  return (
    <>
      <S.Container>
        <S.Content>
          <S.AnimatedSearchBar>
            <S.Title>
              Encontre o café perfeito para {"\n"} qualquer hora do dia
            </S.Title>
            <AppInput placeholder="Pesquisar" />
            <S.CoffeeBeans
              source={require("@/assets/illustrations/coffee-beans.png")}
            />
          </S.AnimatedSearchBar>

          {/* TODO: Continuar lendo: https://medium.com/@islamrustamov/building-animations-with-rn-reanimated-v3-flatlist-with-animated-items-and-auto-centering-cb72cadf53ae */}
          <Animated.FlatList
            entering={SlideInRight.duration(1000)}
            onScroll={onRecommendationsScroll}
            scrollEventThrottle={16}
            data={recommended}
            keyExtractor={(item, index) => String(index)}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <>
                <RecommendationCard
                  index={index}
                  // style={recommendationCardStyle}
                />
              </>
            )}
            contentContainerStyle={{ gap: 32 }}
            style={{
              paddingHorizontal: 32,
              paddingVertical: 16,
              position: "relative",
              top: -60,
            }}
          />

          <S.AnimatedFilterBar>
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
          </S.AnimatedFilterBar>

          <AnimatedSectionList
            sections={drinks}
            keyExtractor={(item) => item.drink}
            renderSectionHeader={({ section: { title } }) => (
              <S.DrinkSectionTitle>{title}</S.DrinkSectionTitle>
            )}
            renderItem={({ item, index }) => <DrinkCard item={item} />}
            contentContainerStyle={{
              gap: 32,
              padding: 32,
            }}
          />
        </S.Content>
      </S.Container>
    </>
  );
}
