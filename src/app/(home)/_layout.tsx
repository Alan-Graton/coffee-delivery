import React from "react";

import { Stack } from "expo-router";

import { HomeAnimationsProvider } from "./animations.context";

export default function HomeLayout() {
  return (
    <>
      <HomeAnimationsProvider>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            title: "",
          }}
        />
      </HomeAnimationsProvider>
    </>
  );
}
