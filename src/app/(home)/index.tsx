import React, { useState } from "react";

import { SectionList } from "react-native";

import { AppInput } from "@/components/AppInput";

import { RecommendationCard } from "./components/RecommendationCard";
import { DrinkCard } from "./components/DrinkCard";

import { DrinkTypes } from "@/@types";

import Animated, {
  SlideInRight,
  interpolate,
  scrollTo,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import * as S from "./styles";
import { DrinksFilters } from "./components/DrinksFilters";

const AnimatedSectionList = Animated.createAnimatedComponent(
  SectionList<
    Array<{
      title: "";
      data: Array<{ drink: string; description: string; price: number }>;
    }>
  >
);

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
    },
  });

  const onContentScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      const verticalScrollCoords = event.contentOffset.y;

      // Na posição 500 em Y o Filter Bar já deve ficar grudado junto com o Header

      console.log("Vertical Scroll Coords: ", verticalScrollCoords);

      interpolate(scrollY.value, [], []);
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
      <DrinksFilters
        filter={selectedFilter}
        handleOnPress={(tagFilter) => onDrinkFilterPress(tagFilter)}
      />

      <S.AnimatedContainer
        ref={animatedScrollViewRef}
        onScroll={onContentScroll}
      >
        <S.Content>
          <S.AnimatedSearchBar style={[animatedStyles]}>
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

          <DrinksFilters
            filter={selectedFilter}
            handleOnPress={(tagFilter) => onDrinkFilterPress(tagFilter)}
          />

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
