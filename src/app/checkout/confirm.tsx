import { router } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/custom-button";

export default function Confirm() {
  const onNext = () => {
    router.dismissAll();
    router.back();
  };

  return (
    <View style={style.container}>
      <Text>oayment details</Text>
      <CustomButton onPress={onNext} title="Submit" style={style.button} />
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
