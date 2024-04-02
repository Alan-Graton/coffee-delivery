import styled, { css } from "styled-components/native";

import Animated, { SlideInUp, SlideInDown } from "react-native-reanimated";

export const HeaderUserLocation = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.TEXT_SM}px;
    font-family: ${theme.FONT_FAMILY.BODY};
  `}
`;

export const AnimatedContainer = styled(Animated.ScrollView).attrs(({}) => ({
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const AnimatedSearchBar = styled(Animated.View).attrs(({}) => ({
  entering: SlideInUp.duration(500),
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

export const DrinkSectionTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};

    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${theme.FONT_FAMILY.HEADING};
  `}
`;
