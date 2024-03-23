import styled, { css } from "styled-components/native";

export type ITagVariant = "selectable" | "ghost";

interface ITagStyleProps {
  variant?: ITagVariant;
  isChecked?: boolean;
  disabled?: boolean;
}

export const Tag = styled.Pressable<ITagStyleProps>`
  align-items: center;
  justify-content: center;

  border-radius: 100px;

  padding: 6px;

  ${({ theme, variant, isChecked, disabled }) => {
    if (variant === "ghost") {
      return `
        background-color: ${theme.COLORS.PURPLE_LIGHT};
      `;
    }

    if (disabled) {
      return `
        background-color: ${theme.COLORS.GRAY_200};
      `;
    }

    if (variant === "selectable" && isChecked) {
      return `
        background-color: ${theme.COLORS.PURPLE_DARK};
      `;
    }

    if (variant === "selectable") {
      return `
        background-color: transparent;
        border: 1px solid ${theme.COLORS.PURPLE};
      `;
    }
  }}
`;

export const Title = styled.Text<ITagStyleProps>`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TAG}px;
    font-family: ${theme.FONT_FAMILY.TAG};
  `}

  ${({ theme, variant, isChecked, disabled }) => {
    if (variant === "ghost") {
      return `
        color: ${theme.COLORS.PURPLE};
      `;
    }

    if (disabled) {
      return `
        color: ${theme.COLORS.WHITE};
      `;
    }

    if (variant === "selectable" && isChecked) {
      return `
        color: ${theme.COLORS.WHITE};
      `;
    }

    if (variant === "selectable") {
      return `
        color: ${theme.COLORS.PURPLE_DARK};
      `;
    }
  }}
`;
