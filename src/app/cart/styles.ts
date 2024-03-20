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
