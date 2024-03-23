import styled, { css } from "styled-components/native";

interface IStyleProps {
  isChecked?: boolean;
  disabled?: boolean;
}

export const Tag = styled.Pressable<IStyleProps>`
  /* width: 75px; */

  align-items: center;
  justify-content: center;

  /* padding: 10px; */

  height: 25px;

  /* border-radius: 6px; */
  border-radius: 100px;

  padding: 6px;

  background-color: ${({ theme, disabled }) =>
    !disabled && theme.COLORS.GRAY_200};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};

    font-size: ${theme.FONT_SIZE.TAG}px;
    font-family: ${theme.FONT_FAMILY.TAG};
  `}
`;
