import styled, { css } from "styled-components/native";

export const Card = styled.Pressable`
  width: 311px;
  height: 120px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_800};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`;

export const DrinkImg = styled.Image`
  width: 76px;
  height: 76px;

  margin-left: 14px;
`;

export const About = styled.View`
  flex: 1;

  padding-right: 32px;
  padding-left: 32px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.TITLE_SM}px;
    font-family: ${theme.FONT_FAMILY.HEADING};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.TEXT_XS}px;
    font-family: ${theme.FONT_FAMILY.BODY};
  `}
`;

export const DollarSign = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.YELLOW_DARK};
    font-size: ${theme.FONT_SIZE.TEXT_SM}px;
    font-family: ${theme.FONT_FAMILY.BODY};
  `}
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.YELLOW_DARK};
    font-size: ${theme.FONT_SIZE.TITLE_MD}px;
    font-family: ${theme.FONT_FAMILY.HEADING};
  `}
`;
