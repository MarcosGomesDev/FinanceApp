import uuid from 'react-native-uuid';

// Função para obter UUID
export const getUUID = (): string => {
  return uuid.v4().toString();
};
