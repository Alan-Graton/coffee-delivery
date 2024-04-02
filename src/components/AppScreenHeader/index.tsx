import React from "react";

import {
  SafeAreaProviderProps,
  SafeAreaView,
} from "react-native-safe-area-context";

import * as S from "./styles";

import { THEME } from "@/theme";
import { useTheme } from "styled-components/native";

interface IProps extends SafeAreaProviderProps {
  children?: React.ReactNode;
  color?: keyof typeof THEME.COLORS;
  ref?: React.ForwardedRef<any>;
}

export const AppScreenHeader = React.forwardRef<any, IProps>(
  ({ children, color = "WHITE", ...rest }, ref) => {
    const { COLORS } = useTheme();

    return (
      <SafeAreaView
        style={{ backgroundColor: COLORS[color] }}
        ref={ref}
        {...rest}
      >
        <S.Header color={color}>{children}</S.Header>
      </SafeAreaView>
    );
  }
);
