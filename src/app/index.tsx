import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import { Link } from "expo-router";
import CustomButton from "../components/custom-button";
import { useStoredData } from "../lib/store";

export default function App() {
  const { data } = useStoredData("personal");
  console.log("store data", data);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Home" }} />
      <Link href="/checkout" asChild>
        <CustomButton title="Checkout" />
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
