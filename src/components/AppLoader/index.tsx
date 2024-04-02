import React from "react";

import { ActivityIndicator, ActivityIndicatorProps, View } from "react-native";

import * as S from "./styles";

interface IProps extends ActivityIndicatorProps {
  loading?: boolean;
}

export function AppLoader({ loading = false }: IProps) {
  return (
    <>
      {loading && (
        <View>
          <ActivityIndicator animating={loading} />
        </View>
      )}
    </>
  );
}
