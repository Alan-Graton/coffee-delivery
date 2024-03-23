import styled, { css } from "styled-components/native";

import { SafeAreaProvider } from "react-native-safe-area-context";

export const Container = styled(SafeAreaProvider)`
  flex: 1;

  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  align-items: center;
  justify-content: space-evenly;
`;

export const FeedbackImg = styled.Image``;

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

export const Footer = styled.View`
  flex-direction: row;
`;
