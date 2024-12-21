import * as z from "zod";

export const PersonalInfoSchema = z.object({
  fullName: z
    .string({ message: "Full name is required!" })
    .min(1, { message: "Full name must be longer than 1" }),
  address: z.string().min(1, { message: "Please provide your address!" }),
  city: z.string().min(1, { message: "City is required!" }),
  postcode: z.string().min(1, { message: "Postal code is required!" }),
  country: z.string().length(2),
  phone: z.string().min(1, { message: "Phone is required!" }),
  birthDate: z.date(),
});

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;

export const PaymentInfoSchema = z.object({
  cardNumber: z.string().min(1),
  expireDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Please use the MM/YY format"),
  cvv: z.coerce.number().min(1),
});

export type PaymentInfo = z.infer<typeof PaymentInfoSchema>;
