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
  scrollTo,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
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
import { DrinkTypes } from "@/@types";

export default function Home() {
  const scrollY = useSharedValue(0);
  const animatedScrollViewRef = useAnimatedRef();

  const [recommended, setRecommended] = useState<Array<any>>(
    Array.from({ length: 5 })
  );

  const [selectedFilter, setSelectedFilter] = useState<DrinkTypes | "">("");

  const [drinks, setDrinks] = useState<Array<{ title: ""; data: Array<any> }>>(
    require("@/mock/drinks.json")
  );

  const onRecommendationsScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      const horizontalScrollCoords = event.contentOffset.x;

      return horizontalScrollCoords;
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {};
  });

  function onDrinkFilterPress(filter: typeof selectedFilter) {
    if (filter === "TRADICIONAIS") {
      scrollY.value = withTiming(610.5, { duration: 550 });
    }
    if (filter === "DOCES") {
      scrollY.value = withTiming(1448, { duration: 550 });
    }
    if (filter === "ESPECIAIS") {
      scrollY.value = withTiming(1983, { duration: 550 });
    }

    setSelectedFilter(filter);
  }

  // Basicamente um React.useEffect para as animações....
  useDerivedValue(() => {
    scrollTo(animatedScrollViewRef, 0, scrollY.value, true);
  });

  return (
    <>
      <S.AnimatedContainer ref={animatedScrollViewRef}>
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
                <RecommendationCard index={index} />
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
                onPress={() => onDrinkFilterPress("TRADICIONAIS")}
                style={{ flex: 1, maxWidth: 90 }}
              />
              <AppTag
                title="DOCES"
                variant="selectable"
                isChecked={selectedFilter === "DOCES"}
                onPress={() => onDrinkFilterPress("DOCES")}
                style={{ flex: 1, maxWidth: 90 }}
              />
              <AppTag
                title="ESPECIAIS"
                variant="selectable"
                isChecked={selectedFilter === "ESPECIAIS"}
                onPress={() => onDrinkFilterPress("ESPECIAIS")}
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
      </S.AnimatedContainer>
    </>
  );
}
