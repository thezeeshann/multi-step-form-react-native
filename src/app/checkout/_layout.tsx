import { Stack } from "expo-router";

export default function CheckoutLayout() {
  return (
    <Stack>
      <Stack.Screen name="personal" options={{ title: "Personal" }} />
      <Stack.Screen name="confirm" options={{ title: "Confirm" }} />
      <Stack.Screen name="payment" options={{ title: "payment" }} />
    </Stack>
  );
}
