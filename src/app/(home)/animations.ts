import { DrinkTypes } from "@/@types";

import {
  SharedValue,
  useAnimatedScrollHandler,
  withTiming,
} from "react-native-reanimated";

export const onContentScroll = useAnimatedScrollHandler({
  onScroll: (event) => {
    const verticalCoords = event.contentOffset.y;

    console.log("Vertical Scroll Coords: ", verticalCoords);
  },
});

export function onDrinkFilterPress(
  setSelectedFilter: React.Dispatch<React.SetStateAction<"" | DrinkTypes>>,
  filter: "" | DrinkTypes,
  scrollY: SharedValue<number>
) {
  if (filter === "TRADICIONAIS") {
    scrollY.value = withTiming(610.5, { duration: 550 });
  }
  if (filter === "DOCES") {
    scrollY.value = withTiming(1448, { duration: 550 });
  }
  if (filter === "ESPECIAIS") {
    scrollY.value = withTiming(1983, { duration: 550 });
  }

  setSelectedFilter(filter);
}
