import { SafeAreaProvider } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaProvider)`
  flex: 1;

  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  align-items: center;
  justify-content: space-evenly;
`;

export const FeedbackImg = styled.Image``;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;

  color: ${({ theme }) => theme.COLORS.YELLOW_DARK};
`;

export const Subtitle = styled.Text`
  text-align: center;

  font-size: 14px;
  font-weight: bold;

  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Footer = styled.View`
  flex-direction: row;
`;
