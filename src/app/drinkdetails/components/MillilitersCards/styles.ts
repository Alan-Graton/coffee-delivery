import styled, { css } from "styled-components/native";

export const CardButton = styled.TouchableOpacity`
  flex: 1;

  height: 50px;

  align-items: center;
  justify-content: center;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text``;
