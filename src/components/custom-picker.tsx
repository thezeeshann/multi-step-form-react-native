import RNPickerSelect from "react-native-picker-select";
import { ComponentProps } from "react";
import { useController } from "react-hook-form";
import { View, Text } from "react-native";

type CustomPickerProps = {
  name: string;
} & Omit<ComponentProps<typeof RNPickerSelect>, "onValueChange">;

export default function CustomPicker({
  name,
  ...pickerProps
}: CustomPickerProps) {
  const {
    field: { value, onBlur, onChange },
    fieldState: { error },
  } = useController({ name });

  return (
    <View>
      <RNPickerSelect
        value={value}
        onClose={onBlur}
        {...pickerProps}
        onValueChange={onChange}
        style={{
          viewContainer: {
            marginTop: 4,
            marginBottom: 2,
          },
          inputIOS: {
            borderColor: "gainsboro",
            borderWidth: 1,
            width: "100%",
            padding: 10,
            borderRadius: 5,
          },
        }}
      />
      <Text
        style={{
          color: "crimson",
          height: 17,
        }}
        numberOfLines={1}
      >
        {error?.message}
      </Text>
    </View>
  );
}
