import React from "react";

import {
  SafeAreaProviderProps,
  SafeAreaView,
} from "react-native-safe-area-context";

import * as S from "./styles";

import { useTheme } from "styled-components/native";

interface IProps extends SafeAreaProviderProps {
  children?: React.ReactNode;
  ref?: React.ForwardedRef<any>;
}

export const AppScreenHeader = React.forwardRef<any, IProps>(
  ({ children, ...rest }, ref) => {
    return (
      <SafeAreaView ref={ref} {...rest}>
        <S.Header>{children}</S.Header>
      </SafeAreaView>
    );
  }
);
