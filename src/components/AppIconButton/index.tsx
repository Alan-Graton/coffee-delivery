import React from "react";

import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

interface IProps extends TouchableOpacityProps {
  children?: React.JSX.Element;
  ref?: React.ForwardedRef<any>;
}

export const AppIconButton = React.forwardRef<any, IProps>(
  ({ children, ...rest }, ref) => {
    return (
      <S.Button ref={ref} {...rest}>
        {children}
      </S.Button>
    );
  }
);
