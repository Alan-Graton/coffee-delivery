import React from "react";

import { Slot } from "expo-router";

export default function RootLayout() {
  return <Slot initialRouteName="home" />;
}
