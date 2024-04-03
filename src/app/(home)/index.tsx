import React, { useState } from "react";

import { SectionList } from "react-native";

import { AppInput } from "@/components/AppInput";

import { RecommendationCard } from "./components/RecommendationCard";
import { DrinkCard } from "./components/DrinkCard";

import { DrinkTypes } from "@/@types";

import Animated, {
  Easing,
  Extrapolate,
  SlideInDown,
  SlideInRight,
  interpolate,
  interpolateColor,
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
import { useTheme } from "styled-components/native";

const AnimatedSectionList = Animated.createAnimatedComponent(
  SectionList<
    Array<{
      title: "";
      data: Array<{ drink: string; description: string; price: number }>;
    }>
  >
);

export default function Home() {
  const { COLORS } = useTheme();
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

      scrollY.value = verticalScrollCoords;

      console.log(scrollY.value);
    },
  });

  const filterBarAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 650], [0, 1], Extrapolate.CLAMP),
    };
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

    scrollTo(animatedScrollViewRef, 0, scrollY.value, true);
    setSelectedFilter(filter);
  }

  return (
    <>
      <DrinksFilters
        filter={selectedFilter}
        handleOnPress={(tagFilter) => onDrinkFilterPress(tagFilter)}
        style={[{ backgroundColor: COLORS.WHITE }, filterBarAnimatedStyles]}
      />

      <S.AnimatedContainer
        ref={animatedScrollViewRef}
        onScroll={onContentScroll}
      >
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

          <DrinksFilters
            filter={selectedFilter}
            handleOnPress={(tagFilter) => onDrinkFilterPress(tagFilter)}
            entering={SlideInDown.delay(400).duration(800)}
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
