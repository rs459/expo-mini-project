import { Stack } from "expo-router";
import "../global.css";

export default function Layout() {
  return (
    // <SafeAreaProvider>
    //   <SafeAreaView style={{ flex: 1 }}>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    //   </SafeAreaView>
    // </SafeAreaProvider>
  );
}
