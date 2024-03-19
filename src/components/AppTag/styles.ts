import styled, { css } from "styled-components/native";

export const Tag = styled.Pressable`
  width: 75px;

  align-items: center;
  justify-content: center;

  border-radius: 6px;

  padding: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-size: 10px;
`;
