import { router } from "expo-router";

export function HandleGoBack() {
  router.canGoBack() && router.back();
}
