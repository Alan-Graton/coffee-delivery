import styled, { css } from "styled-components/native";

interface IStyleProps {
  isChecked?: boolean;
  disabled?: boolean;
}

export const Tag = styled.Pressable<IStyleProps>`
  width: 75px;

  align-items: center;
  justify-content: center;

  border-radius: 6px;

  padding: 6px;

  background-color: ${({ theme, disabled }) =>
    !disabled && theme.COLORS.GRAY_200};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-size: 10px;
  font-weight: bold;
`;
