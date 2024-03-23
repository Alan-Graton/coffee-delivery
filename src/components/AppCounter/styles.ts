import styled, { css } from "styled-components/native";
import { AppIconButton } from "../AppIconButton";

export const Container = styled.View`
  flex: 1;

  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};

    font-size: ${theme.FONT_SIZE.TEXT_MD}px;
    font-family: ${theme.FONT_FAMILY.BODY};
  `}
`;

export const IconButton = styled(AppIconButton)`
  padding: 10px;
`;
