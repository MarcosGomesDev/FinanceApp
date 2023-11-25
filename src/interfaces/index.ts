import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@routes/ReactNavigationTypes';

export type Entry = {
  id: string;
  amount: string;
  description?: string;
  entryAt: string;
  latitude?: number;
  longitude?: number;
  address?: string;
  photo?: string;
  isInit: boolean;
};

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
