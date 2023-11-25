import { RootStackParamList } from './ReactNavigationTypes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
