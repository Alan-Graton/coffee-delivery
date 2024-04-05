import styled, { css } from "styled-components/native";

import Animated from "react-native-reanimated";

export const LocationContainer = styled.View`
  flex-direction: row;

  gap: 4px;
`;

export const UserLocation = styled(Animated.Text)`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.TEXT_SM}px;
    font-family: ${theme.FONT_FAMILY.BODY};
  `}
`;
