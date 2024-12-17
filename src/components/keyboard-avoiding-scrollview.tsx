import { PropsWithChildren } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function KeyboardAvoidingScrollView({
  children,
}: PropsWithChildren) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
       keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <ScrollView
        style={{ backgroundColor: '#fff' }}
        contentContainerStyle={{
          flexGrow: 1,
          padding: 10,
          gap: 5,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
          {children}
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
