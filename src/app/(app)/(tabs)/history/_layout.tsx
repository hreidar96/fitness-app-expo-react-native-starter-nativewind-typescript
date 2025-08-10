import { Stack } from "expo-router";
import React from "react";

function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "History" }} />
      <Stack.Screen
        name="workout-record"
        options={{ title: "Workout Record", headerShown: true }}
      />
    </Stack>
  );
}

export default Layout;