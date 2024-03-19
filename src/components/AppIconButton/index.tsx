import React from "react";

import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface IProps extends TouchableOpacityProps {
  children: React.JSX.Element;
}

export function AppIconButton({ children, ...rest }: IProps) {
  return (
    <TouchableOpacity style={{ padding: 10 }} {...rest}>
      {children}
    </TouchableOpacity>
  );
}
