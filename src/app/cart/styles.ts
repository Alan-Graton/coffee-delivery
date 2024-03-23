import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const StickyFooterDetails = styled.View`
  flex: 1;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StickyFooter = styled.View`
  flex-grow: 1;

  width: 100%;

  max-height: 160px;

  padding: 10px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const StickyFooterLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.TEXT_MD}px;
    font-family: ${theme.FONT_FAMILY.BODY};
  `}
`;

export const TotalPrice = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.TITLE_MD}px;
    font-family: ${theme.FONT_FAMILY.HEADING};
  `}
`;

export const EmptyListContainer = styled.View`
  align-items: center;
  justify-content: center;

  gap: 32px;
  padding: 16px;

  margin-top: 64px;
`;

export const EmptyListTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.TEXT_SM}px;
    font-family: ${theme.FONT_FAMILY.BODY};
  `}
`;
