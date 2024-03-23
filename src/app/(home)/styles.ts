import styled, { css } from "styled-components/native";

export const Container = styled.ScrollView.attrs(({ theme }) => ({
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const SearchBar = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

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

export const FilterBar = styled.View`
  width: 100%;

  gap: 12px;

  padding: 32px;
`;

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
