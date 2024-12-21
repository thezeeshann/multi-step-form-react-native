import { StyleSheet, View } from "react-native";
import CustomButton from "../../components/custom-button";
import CustomTextInput from "../../components/custom-text-input";
import KeyboardAvoidingScrollView from "../../components/keyboard-avoiding-scrollview";
import { router } from "expo-router";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonalInfo, PersonalInfoSchema } from "../../lib/types";
import { useCheckoutForm } from "../../contexts/CheckoutFormProvider";
import countries from "../../../assets/countries.json";
import CustomPicker from "../../components/custom-picker";
import CustomDateTimePicker from "../../components/customdate-time-picker";

export default function PersonalDetails() {
  const { personalInfo, setPersonalInfo } = useCheckoutForm();

  const form = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
    defaultValues: personalInfo,
  });

  const onNext: SubmitHandler<PersonalInfo> = (data) => {
    setPersonalInfo(data);
    router.push("/checkout/payment");
  };

  return (
    <KeyboardAvoidingScrollView>
      <FormProvider {...form}>
        <CustomTextInput
          name="fullName"
          label="Full Name"
          placeholder="Jhon Doe"
        />
        <CustomTextInput
          name="address"
          label="Address"
          placeholder="New Delhi"
        />
        <View style={{ flexDirection: "row", gap: 5 }}>
          <CustomTextInput
            name="city"
            label="City"
            placeholder="City"
            containerStyle={{ flex: 1 }}
          />
          <CustomTextInput
            name="postcode"
            label="Post Code"
            placeholder="212312"
            containerStyle={{ flex: 1 }}
          />
        </View>

        <CustomPicker
          name="country"
          placeholder={{ label: "Select Country" }}
          items={countries.map((country) => ({
            label: country.name,
            value: country.code,
          }))}
        />

        <CustomDateTimePicker name="birthDate" />

        <CustomTextInput
          name="phone"
          label="Phone Number"
          placeholder="+91 98362 78363"
          inputMode="tel"
        />

        <CustomButton
          onPress={form.handleSubmit(onNext)}
          title="Next"
          style={style.button}
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
