import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

  const [fontsLoaded, error] = useFonts({
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf")
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();

  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false, statusBarTranslucent: true }} />
      <Stack.Screen name="calendar" options={{ headerShown: false, statusBarTranslucent: true }} />
      <Stack.Screen name="creditsModal" options={{ headerShown: false, statusBarTranslucent: true, presentation: "transparentModal", animation: "fade" }} />
      <Stack.Screen name="addWorkoutModal" options={{ headerShown: false, statusBarTranslucent: true, presentation: "transparentModal", animation: "fade" }} />
    </Stack>
  );
}

export default RootLayout;