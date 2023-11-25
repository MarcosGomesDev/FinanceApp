import { EntrySummary } from '@components/EntrySummary';
import { ScreenTemplate } from '@components/ScreenTemplate';
import { BalanceLabel, EntryList } from '@components/index';
import { Entry } from '@interfaces/index';
import { Picker } from '@react-native-picker/picker';
import { Content } from '@screens/HomeScreen/styles';
import React from 'react';
import { Button, View } from 'react-native';

export function Report() {
  const currentBalance: number = 2064.35;

  const entriesGrouped: Entry[] = [
    { key: '1', description: 'Alimentação', amount: 200 },
    { key: '2', description: 'Combustível', amount: 12 },
    { key: '3', description: 'Aluguel', amount: 120 },
    { key: '4', description: 'Lazer', amount: 250 },
    { key: '5', description: 'Outros', amount: 1200 },
  ];

  return (
    <ScreenTemplate>
      <Content>
        <BalanceLabel currentBalance={currentBalance} />
        <View>
          <Picker>
            <Picker.Item label="Todas Categorias" />
          </Picker>
          <Picker>
            <Picker.Item label="Últimos 7 dias" />
          </Picker>
        </View>
        <EntrySummary entriesGrouped={entriesGrouped} />
        <EntryList />
        <View>
          <Button title="Salvar" />
          <Button title="Fechar" />
        </View>
      </Content>
    </ScreenTemplate>
  );
}
