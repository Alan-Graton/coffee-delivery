import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

interface IProps {
  type: ButtonTypeStyleProps;
}

export const Button = styled.TouchableOpacity<IProps>`
  flex: 1;

  background-color: ${({ theme, type }) => {
    if (type === "PRIMARY") return theme.COLORS.PURPLE_DARK;
    if (type === "SECONDARY") return theme.COLORS.YELLOW_DARK;
  }};

  padding: 10px;

  height: 46px;

  align-items: center;
  justify-content: center;

  border-radius: 6px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.BUTTON}px;
    font-family: ${theme.FONT_FAMILY.BUTTON};
  `}
`;
