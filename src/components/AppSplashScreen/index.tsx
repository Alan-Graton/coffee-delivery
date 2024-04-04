import React from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function AppSplashScreen() {
  return (
    <>
      <SafeAreaView>
        <Image source={require("@/assets/logo.png")} />
      </SafeAreaView>
    </>
  );
}
