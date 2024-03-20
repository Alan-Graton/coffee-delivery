import styled, { css } from "styled-components/native";

interface IStyleProps {
  isChecked?: boolean;
}

export const CardButton = styled.TouchableOpacity<IStyleProps>`
  flex: 1;

  height: 50px;

  align-items: center;
  justify-content: center;

  border-radius: 6px;

  ${({ theme, isChecked }) => {
    if (isChecked) {
      return `
      background-color: ${theme.COLORS.WHITE};
      border: 1px solid ${theme.COLORS.PURPLE};
    `;
    }

    return `
    background-color: ${theme.COLORS.GRAY_700};
    border: none;
  `;
  }}
`;

export const Title = styled.Text<IStyleProps>`
  ${({ theme, isChecked }) => {
    if (isChecked) {
      return `
      color: ${theme.COLORS.PURPLE};
      font-weight: bold;
    `;
    }

    return `
    color: ${theme.COLORS.GRAY_100};
    font-weight: normal;
  `;
  }}
`;
