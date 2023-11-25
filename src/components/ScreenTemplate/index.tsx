import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

type ScreenTemplateProps = {
  children: React.ReactNode;
};

export function ScreenTemplate({ children }: ScreenTemplateProps) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={'#000'} />
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </>
  );
}
