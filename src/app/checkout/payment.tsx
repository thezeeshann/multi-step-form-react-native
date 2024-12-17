import { router } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/custom-button";
import KeyboardAvoidingScrollView from "../../components/keyboard-avoiding-scrollview";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import CustomTextInput from "../../components/custom-text-input";
import { PaymentInfo, PaymentInfoSchema } from "../../lib/types";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Payment() {
  const form = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentInfoSchema),
  });

  const onNext: SubmitHandler<PaymentInfo> = (data) => {
    console.log(data);
    router.push("/checkout/confirm");
  };

  return (
    <KeyboardAvoidingScrollView>
      <FormProvider {...form}>
        <CustomTextInput
          name="cardNumber"
          placeholder="1317181111921"
          label="Card Number"
        />
        <View style={{ flexDirection: "row", gap: 5 }}>
          <CustomTextInput
            placeholder="01/33"
            label="Expires"
            name="expireDate"
            containerStyle={{ flex: 1 }}
          />
          <CustomTextInput
            placeholder="876"
            label="Cvv"
            inputMode="numeric"
            name="cvv"
            containerStyle={{ flex: 1 }}
          />
        </View>
        <CustomButton
          title="Next"
          style={style.button}
          onPress={form.handleSubmit(onNext)}
        />
      </FormProvider>
    </KeyboardAvoidingScrollView>
  );
}

const style = StyleSheet.create({
  button: {
    marginTop: "auto",
  },
});
