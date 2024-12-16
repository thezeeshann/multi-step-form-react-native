import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/custom-button";
import { router } from "expo-router";

export default function PersonalDetails() {
  const onNext = () => {
    router.push("/checkout/payment");
  };

  return (
    <View style={style.container}>
      <Text>Personal details</Text>
      <CustomButton onPress={onNext} title="Next" style={style.button} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  button: {
    marginTop: "auto",
    marginBottom: 20,
  },
});
