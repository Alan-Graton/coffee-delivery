import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;

  padding: 10px;
`;

export const IconWrapper = styled.View`
  position: absolute;

  bottom: 13px;
  left: 12px;

  padding: 10px;

  z-index: 1;
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_400,
}))`
  width: 100%;
  height: 42px;

  border-radius: 4px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_200};
    color: ${theme.COLORS.GRAY_400};
  `}

  padding: 10px;
  padding-left: 35px;
`;
