import React, { forwardRef } from "react";

import { DrinkTypes } from "@/@types";

import { SectionList } from "react-native";

import { AppIconButton } from "@/components/AppIconButton";
import { AppScreenHeader } from "@/components/AppScreenHeader";

import { useTheme } from "styled-components/native";

import Animated, {
  AnimateStyle,
  Extrapolate,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface IHomeAnimationsContext {
  scrollY: SharedValue<number>;
  scrollH: SharedValue<number>;
  animatedScrollViewRef: React.RefObject<React.Component<{}, {}, any>>;
  onRecommendationsScroll: any; // Por falta de importação dos types
  onContentScroll: any; // Por falta de importação dos types
  headerAnimatedStyles: AnimateStyle<any>;
  headerTitleAnimatedStyles: AnimateStyle<any>;
  searchBarAnimatedStyles: AnimateStyle<any>;
  filterBarAnimatedStyles: AnimateStyle<any>;
  onDrinkFilterPress: (
    setSelectedFilter: React.Dispatch<React.SetStateAction<"" | DrinkTypes>>,
    filter: "" | DrinkTypes
  ) => void;
}

export const HomeAnimationsContext =
  React.createContext<IHomeAnimationsContext>({} as IHomeAnimationsContext);

interface IProps {
  children: React.ReactNode;
}

export function HomeAnimationsProvider({ children }: IProps) {
  const { COLORS } = useTheme();

  const scrollY = useSharedValue(0);
  const scrollH = useSharedValue(0);

  const animatedScrollViewRef = useAnimatedRef();

  const onRecommendationsScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      const horizontalScrollCoords = event.contentOffset.x;
    },
  });

  const onContentScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      const verticalScrollCoords = event.contentOffset.y;

      scrollY.value = verticalScrollCoords;
      console.log("Context: ", scrollY.value);
    },
  });

  const headerAnimatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [0, 490],
        [COLORS.GRAY_100, COLORS.WHITE]
      ),
      borderBottomWidth: interpolate(scrollY.value, [0, 490], [0, 1]),
      borderBottomColor: interpolateColor(
        scrollY.value,
        [0, 490],
        ["transparent", COLORS.GRAY_900]
      ),
    };
  });

  const headerTitleAnimatedStyles = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        scrollY.value,
        [0, 490],
        [COLORS.WHITE, COLORS.GRAY_100]
      ),
    };
  });

  const searchBarAnimatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [0, 490],
        [COLORS.GRAY_100, COLORS.WHITE]
      ),
    };
  });

  const filterBarAnimatedStyles = useAnimatedStyle(() => {
    return {};
  });

  function onDrinkFilterPress(
    setSelectedFilter: React.Dispatch<React.SetStateAction<"" | DrinkTypes>>,
    filter: "" | DrinkTypes
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

    setSelectedFilter((prevState) => (prevState = filter));
  }

  return (
    <HomeAnimationsContext.Provider
      value={{
        scrollY,
        scrollH,
        animatedScrollViewRef,
        onRecommendationsScroll,
        onContentScroll,
        headerAnimatedStyles,
        headerTitleAnimatedStyles,
        searchBarAnimatedStyles,
        filterBarAnimatedStyles,
        onDrinkFilterPress,
      }}
    >
      {children}
    </HomeAnimationsContext.Provider>
  );
}

const AppScreenHeaderFowardRef = forwardRef((props, ref) => (
  <AppScreenHeader ref={ref} {...props} />
));

const AppIconButtonFowardRef = forwardRef((props, ref) => (
  <AppIconButton ref={ref} {...props} />
));

const AnimatedSectionList = Animated.createAnimatedComponent(
  SectionList<
    Array<{
      title: "";
      data: Array<{ drink: string; description: string; price: number }>;
    }>
  >
);

const AnimatedScreenHeader = Animated.createAnimatedComponent(
  AppScreenHeaderFowardRef
);

const AnimatedAppIconButton = Animated.createAnimatedComponent(
  AppIconButtonFowardRef
);

export { AnimatedSectionList, AnimatedScreenHeader, AnimatedAppIconButton };
