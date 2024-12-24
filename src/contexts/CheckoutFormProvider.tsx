import { createContext, PropsWithChildren, useContext, useState } from "react";
import { PaymentInfo, PersonalInfo } from "../lib/types";
import { router } from "expo-router";
import { storeData } from "../lib/store";

type CheckoutFormContext = {
  personalInfo: PersonalInfo | undefined;
  setPersonalInfo: (data: PersonalInfo) => void;
  paymentInfo: PaymentInfo | undefined;
  setPaymentInfo: (data: PaymentInfo) => void;
  onSubmit: () => void;
};

const CheckoutFormContext = createContext<CheckoutFormContext>({
  personalInfo: undefined,
  setPersonalInfo: () => {},
  paymentInfo: undefined,
  setPaymentInfo: () => {},
  onSubmit: () => {},
});

export default function CheckoutFormProvider({ children }: PropsWithChildren) {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | undefined>(
    undefined
  );
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | undefined>(
    undefined
  );

  const onSubmit = async () => {
    if (personalInfo) {
      await storeData("personal", personalInfo);
    }
    setPaymentInfo(undefined);
    setPaymentInfo(undefined);
    router.dismissAll();
    router.back();
  };

  return (
    <CheckoutFormContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        paymentInfo,
        setPaymentInfo,
        onSubmit,
      }}
    >
      {children}
    </CheckoutFormContext.Provider>
  );
}

export const useCheckoutForm = () => useContext(CheckoutFormContext);
