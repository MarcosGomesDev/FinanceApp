import React, { useEffect, useState } from 'react';
import { EntryListContainer } from './styles';
import { Paragraph } from '..';
import { Button, FlatList, View } from 'react-native';
import { getEntries } from '@services/Entries';
import { useNavigation } from '@react-navigation/native';
import { Entry } from '@interfaces/index';

export function EntryList() {
  const [entries, setEntries] = useState<Entry[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries();
      const transformedData: Entry[] = data.map(entry => ({
        id: entry.id as string,
        description: entry.description as string,
        amount: entry.amount as string,
        entryAt: entry.entryAt as string,
        latitude: entry.latitude as number,
        longitude: entry.longitude as number,
        isInit: entry.isInit as boolean,
        address: entry.address as string,
      }));

      setEntries(transformedData);
    }

    loadEntries();
  }, []);

  return (
    <EntryListContainer>
      <Paragraph>Últimos Lançamentos</Paragraph>
      <FlatList
        data={entries}
        renderItem={({ item }) => (
          <View>
            <Paragraph>
              {item.description} - ${item.amount}
            </Paragraph>
            <Button
              title={item.id || '1'}
              onPress={() => {
                navigation.navigate('NewEntry', { entry: item });
              }}
            />
          </View>
        )}
      />
    </EntryListContainer>
  );
}
