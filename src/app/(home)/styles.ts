import styled, { css } from "styled-components/native";

import Animated, { SlideInUp, SlideInDown } from "react-native-reanimated";

export const HeaderUserLocation = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.TEXT_SM}px;
    font-family: ${theme.FONT_FAMILY.BODY};
  `}
`;

export const Container = styled.ScrollView.attrs(({ theme }) => ({
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const AnimatedSearchBar = styled(Animated.View).attrs(({}) => ({
  entering: SlideInUp.duration(330),
}))`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  gap: 15px;
  margin-bottom: 15px;

  padding: 32px;
`;

export const Title = styled.Text`
  text-align: left;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.TITLE_MD}px;
    font-family: ${theme.FONT_FAMILY.HEADING};
  `}
`;

export const CoffeeBeans = styled.Image`
  position: absolute;

  bottom: -10px;
  right: 0;
`;

export const AnimatedFilterBar = styled(Animated.View).attrs(({}) => ({
  entering: SlideInDown.delay(400).duration(800),
}))`
  width: 100%;

  gap: 12px;

  padding: 32px;
`;

export const AnimatedDrinksList = styled(Animated.View).attrs(({}) => ({
  entering: SlideInDown.delay(400).duration(800),
}))``;

export const FilterTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};

    font-size: ${theme.FONT_SIZE.TITLE_SM}px;
    font-family: ${theme.FONT_FAMILY.HEADING};
  `}
`;

export const Filters = styled.View`
  flex-direction: row;
  align-items: flex-end;

  gap: 8px;
`;

export const DrinkSectionTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};

    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${theme.FONT_FAMILY.HEADING};
  `}
`;
