import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Content = styled.View`
  padding: 16px;
`;

export const Header = styled.View``;

export const TitleContainer = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin-top: 12px;
  margin-bottom: 20px;
`;

export const DrinkName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};

    font-size: ${theme.FONT_SIZE.TITLE_LG}px;
    font-family: ${theme.FONT_FAMILY.HEADING};
  `}
`;

export const DrinkPrice = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.YELLOW};

    font-size: ${theme.FONT_SIZE.TITLE_XL}px;
    font-family: ${theme.FONT_FAMILY.HEADING};
  `}
`;

export const DollarSign = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.YELLOW};
  font-weight: normal;
`;

export const DrinkDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.TEXT_MD}px;
    font-family: ${theme.FONT_FAMILY.BODY};
  `}
`;

export const Body = styled.View`
  align-items: center;
`;

export const SteamImg = styled.Image`
  width: 55px;
  height: 135px;
`;

export const DrinkImg = styled.Image`
  width: 195px;
  height: 140px;
`;

export const Footer = styled.View`
  width: 100%;

  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const QuantityLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.TEXT_SM}px;
    font-family: ${theme.FONT_FAMILY.BODY};
  `}
`;

export const MlCardsContainer = styled.View`
  flex-direction: row;

  justify-content: space-around;

  margin-top: 8px;
  margin-bottom: 20px;

  gap: 8px;
`;

export const ActionsButtons = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  flex-direction: row;
  padding: 10px;

  border-radius: 6px;
`;
