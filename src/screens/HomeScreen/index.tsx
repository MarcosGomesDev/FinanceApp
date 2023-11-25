import React from 'react';
import { ScreenTemplate } from '@components/ScreenTemplate';
import { BalacePanel } from '@components/BalancePanel';
import { EntrySummary } from '@components/EntrySummary';
import { EntryList } from '@components/EntryList';
import { Content } from './styles';
import { Button } from 'react-native';
import { Entry } from '@interfaces/index';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const currentBalance = 2064.35;

  const navigation = useNavigation();

  const entriesGrouped: Entry[] = [
    {
      id: '1',
      description: 'Alimentação',
      amount: '200',
      isInit: false,
      address: undefined,
      latitude: undefined,
      longitude: undefined,
      photo: undefined,
      entryAt: new Date().toISOString(),
    },
    {
      id: '2',
      description: 'Combustível',
      amount: '12',
      isInit: false,
      address: undefined,
      latitude: undefined,
      longitude: undefined,
      photo: undefined,
      entryAt: new Date().toISOString(),
    },
    {
      id: '3',
      description: 'Aluguel',
      amount: '120',
      isInit: false,
      address: undefined,
      latitude: undefined,
      longitude: undefined,
      photo: undefined,
      entryAt: new Date().toISOString(),
    },
    {
      id: '4',
      description: 'Lazer',
      amount: '250',
      isInit: false,
      address: undefined,
      latitude: undefined,
      longitude: undefined,
      photo: undefined,
      entryAt: new Date().toISOString(),
    },
    {
      id: '5',
      description: 'Outros',
      amount: '1200',
      isInit: false,
      address: undefined,
      latitude: undefined,
      longitude: undefined,
      photo: undefined,
      entryAt: new Date().toISOString(),
    },
  ];

  return (
    <ScreenTemplate>
      <Content>
        <BalacePanel currentBalance={currentBalance} />
        <Button
          title="Adicionar"
          onPress={() =>
            navigation.navigate('NewEntry', {
              entry: {
                id: '',
                amount: '0.00',
                description: '',
                entryAt: new Date().toISOString(),
                isInit: false,
              },
            })
          }
        />
        <EntrySummary entriesGrouped={entriesGrouped} />
        <EntryList />
      </Content>
    </ScreenTemplate>
  );
}
