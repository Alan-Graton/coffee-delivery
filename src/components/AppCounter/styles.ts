import styled, { css } from "styled-components/native";
import { AppIconButton } from "../AppIconButton";

export const Container = styled.View`
  flex: 1;

  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const IconButton = styled(AppIconButton)`
  padding: 10px;
`;
