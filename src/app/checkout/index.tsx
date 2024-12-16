import { Redirect } from "expo-router";

export default function InitialCheckOutFlow() {
  return <Redirect href={"/checkout/personal"} />;
}
