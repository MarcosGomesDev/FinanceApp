import { Alert } from 'react-native';

import { getRealm } from './Realm';
import { getUUID } from './UUID';

export const getEntries = async () => {
  const realm = await getRealm();

  const entries = realm.objects('Entry');

  return entries;
};

type Entry = {
  id: string;
  amount: number;
  entryAt: Date;
  isInit: boolean;
};

export const saveEntry = async (
  value: Partial<Entry>,
  entry: Entry = {} as Entry,
): Promise<Entry> => {
  const realm = await getRealm();
  let data: Entry = {} as Entry;

  try {
    realm.write(() => {
      data = {
        id: value.id || entry.id || getUUID(),
        amount: value.amount || entry.amount,
        entryAt: value.entryAt || entry.entryAt,
        isInit: false,
      };

      realm.create('Entry', data, true);
    });
  } catch (error) {
    console.error('saveEntry :: error on save objects: ', JSON.stringify(data));
    Alert.alert('Erro ao salvar os dados de lançamento.');
  }

  return data;
};

export const deleteEntry = async (entry: Entry) => {
  const realm = await getRealm();

  try {
    realm.write(() => {
      realm.delete(entry);
    });
  } catch (error) {
    console.error(
      'deleteEntry :: error on delete object: ',
      JSON.stringify(entry),
    );
    Alert.alert('Erro ao excluir este lançamento.');
  }
};
