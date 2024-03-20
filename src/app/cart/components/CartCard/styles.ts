import styled, { css } from "styled-components/native";

import { AppCounter } from "@/components/AppCounter";
import { AppIconButton } from "@/components/AppIconButton";

export const Card = styled.View`
  flex: 1;

  width: 100%;

  flex-direction: row;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    border-bottom-color: ${theme.COLORS.GRAY_600};
  `}

  border-bottom-width: 1px;

  padding: 32px;
  gap: 20px;
`;

export const DrinkImg = styled.Image`
  width: 64px;
  height: 64px;
`;

export const DrinkDetails = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Actions = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const Counter = styled(AppCounter)`
  max-width: 100px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};

  border-radius: 6px;
`;

export const IconButton = styled(AppIconButton)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;
`;
