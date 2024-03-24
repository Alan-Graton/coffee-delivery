import styled, { css } from "styled-components/native";

import Animated from "react-native-reanimated";
import { Pressable } from "react-native";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Card = styled(AnimatedPressable)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};

  width: 208px;
  height: 262px;
  /* TODO: Remover isso, já que é só para testes */
  max-height: 1500px;

  gap: 14px;

  align-items: center;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  padding-right: 16px;
  padding-left: 16px;
`;

export const DrinkImg = styled.Image`
  margin-top: 4px;

  width: 90px;
  height: 90px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.TITLE_MD}px;
    font-family: ${theme.FONT_FAMILY.HEADING};
  `}
`;

export const Subtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.TEXT_XS}px;
    font-family: ${theme.FONT_FAMILY.BODY};
  `}
`;

export const DollarSign = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.YELLOW_DARK};
    font-size: ${theme.FONT_SIZE.TEXT_SM}px;
    font-family: ${theme.FONT_FAMILY.BODY};
  `}
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.YELLOW_DARK};
    font-size: ${theme.FONT_SIZE.TITLE_LG}px;
    font-family: ${theme.FONT_FAMILY.HEADING};
  `}
`;
