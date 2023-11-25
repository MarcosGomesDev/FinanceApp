import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/HomeScreen';
import { NewEntry } from '@screens/NewEntryScreen';
import { RootStackParamList } from './ReactNavigationTypes';
import { Report } from '@screens/Report';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'simple_push',
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewEntry" component={NewEntry} />
        <Stack.Screen name="Report" component={Report} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
