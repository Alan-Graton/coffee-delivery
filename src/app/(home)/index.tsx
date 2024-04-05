import React, { useState } from "react";

import { DrinkTypes } from "@/@types";

import { AppInput } from "@/components/AppInput";

import { Header } from "./components/Header";
import { RecommendationCard } from "./components/RecommendationCard";
import { DrinkCard } from "./components/DrinkCard";
import { DrinksFilters } from "./components/DrinksFilters";

import {
  HomeAnimationsContext,
  AnimatedSectionList,
} from "./animations.context";

import Animated, { SlideInDown, SlideInRight } from "react-native-reanimated";

import * as S from "./styles";

export default function Home() {
  const {
    animatedScrollViewRef,
    searchBarAnimatedStyles,
    onContentScroll,
    onRecommendationsScroll,
  } = React.useContext(HomeAnimationsContext);

  const [recommended, setRecommended] = useState<Array<any>>(
    Array.from({ length: 5 })
  );

  const [selectedFilter, setSelectedFilter] = useState<DrinkTypes | "">("");

  const [drinks, setDrinks] = useState<Array<{ title: ""; data: Array<any> }>>(
    require("@/mock/drinks.json")
  );

  // Vou deixar essa animação por último. Vou ter que usar uma ref normal, para que não haja
  // conflito entre as animações da ScrollView

  /**
   * Opções para implementação da animão do Header
   * e do campo de busca:
   *
   * 1. Deletar arquivo _layout, e construir o Header aqui dentro
   *    <S.AnimatedSearchBar /> e <DrinkFilters /> permaneceriam onde estão
   *    e sofreriam suas mudanças de animações com os hooks e estilos do Reanimated (Um pouco mais demorado pra testar) []
   *
   * 2. Fazer um Header do zero, sem usar o _layout (Desabilitando o Header). Implementação das animações iriam
   *    pelo mesmo caminho que o ponto acima. (Mais rápido para testar) []
   *
   * 3. Continuar como está, e deixar o mais simples possível (nem deveria ser uma opção...) (vai ficar um caos)
   */

  /**
   * ANIMAÇÕES DO HEADER
   *
   * Container: SlideUp (Descendo)
   * Pin e ShoppingCard: Opacidade
   * Title, Search Input e Img: SlideDown (Subindo)
   */

  return (
    <>
      <S.AnimatedContainer
        ref={animatedScrollViewRef}
        onScroll={onContentScroll}
      >
        <Header />

        <S.Content>
          <S.AnimatedSearchBar style={[searchBarAnimatedStyles]}>
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
              paddingTop: 16,
              position: "relative",
              top: -60,
            }}
          />

          {/* ANIMAÇÕES PENDENTES: 
              1. Segundo o Phind AI, eu poderia alterar o TranslateY, para que o component
                  fique grudado junto com o Header
              2. Posso utilizar um segundo <DrinksFilter /> fora do ScrollView, e alterar a visibilidade
                  de acordo com a necessidade
           */}
          <DrinksFilters
            filter={selectedFilter}
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
