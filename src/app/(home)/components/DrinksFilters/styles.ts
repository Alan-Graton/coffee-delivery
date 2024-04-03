import styled, { css } from "styled-components/native";

import { AppTag } from "@/components/AppTag";

import Animated, { SlideInDown } from "react-native-reanimated";

export const FilterBarContainer = styled(Animated.View).attrs(({}) => ({}))`
  width: 100%;

  gap: 12px;

  /* background-color: red; */

  padding-right: 32px;
  padding-left: 32px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};

    font-size: ${theme.FONT_SIZE.TITLE_SM}px;
    font-family: ${theme.FONT_FAMILY.HEADING};
  `}
`;

export const FilterTags = styled.View`
  flex-direction: row;
  align-items: flex-end;

  gap: 8px;
`;

export const Tag = styled(AppTag).attrs(({ theme }) => ({
  variant: "selectable",
}))`
  flex: 1;

  max-width: 90px;
`;
