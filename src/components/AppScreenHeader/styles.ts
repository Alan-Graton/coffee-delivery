import styled, { css } from "styled-components/native";

import { THEME } from "@/theme";

export type IHeaderBackgroundColor = keyof typeof THEME.COLORS;

export interface IHeaderStyleProps {
  color?: IHeaderBackgroundColor;
}

export const Header = styled.View<IHeaderStyleProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme, color }) => theme.COLORS[color || "WHITE"]};

  height: 76px;
  padding: 32px;
`;
