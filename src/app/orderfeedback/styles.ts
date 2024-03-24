import styled, { css } from "styled-components/native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import Animated, {
  SlideInLeft,
  FadeIn,
  FadeInDown,
} from "react-native-reanimated";

export const Container = styled(SafeAreaProvider)`
  flex: 1;

  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  align-items: center;
  justify-content: space-evenly;
`;

export const AnimatedFeedbackImg = styled(Animated.Image).attrs(({}) => ({
  entering: SlideInLeft.duration(800).springify(),
}))``;

export const AnimatedTextGroup = styled(Animated.View).attrs(({}) => ({
  entering: FadeInDown.delay(400).duration(500),
}))``;

export const AnimatedFooter = styled(Animated.View).attrs(({}) => ({
  entering: FadeIn.delay(600).duration(200),
}))`
  flex-direction: row;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.YELLOW_DARK};

    font-size: ${theme.FONT_SIZE.TITLE_LG}px;
    font-family: ${theme.FONT_FAMILY.HEADING};
  `}
`;

export const Subtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};

    font-size: ${theme.FONT_SIZE.TEXT_SM}px;
    font-family: ${theme.FONT_FAMILY.BODY};
  `}
`;
