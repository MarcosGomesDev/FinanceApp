import React, { useState } from 'react';
import { BalanceLabel } from '@components/BalanceLabel';
import { ScreenTemplate } from '@components/ScreenTemplate';
import { Content } from '@screens/HomeScreen/styles';
import { Button, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenProps } from '@interfaces/index';
import { deleteEntry, saveEntry } from '@services/Entries';

export function NewEntry({ route }: ScreenProps<'NewEntry'>) {
  const currentBalance = 2064.35;

  const { entry } = route.params;

  const navigation = useNavigation();

  const [amount, setAmount] = useState(`${entry.amount}`);

  const onSave = () => {
    const data = {
      amount: parseFloat(amount),
    };
    console.log('NewEntry :: onSave ', data);

    const entryToSave = {
      ...entry,
      entryAt: new Date(entry.entryAt),
      amount: parseFloat(amount),
    };

    saveEntry(data, entryToSave);
    onClose();
  };

  const onDelete = () => {
    const entryToDelete = {
      ...entry,
      entryAt: new Date(entry.entryAt),
      amount: parseFloat(amount),
    };

    deleteEntry(entryToDelete);
    onClose();
  };

  const onClose = () => {
    navigation.goBack();
  };

  return (
    <ScreenTemplate>
      <Content>
        <BalanceLabel currentBalance={currentBalance} />

        <View>
          <TextInput value={amount} onChangeText={text => setAmount(text)} />
          <TextInput />
          <Button title="GPS" />
          <Button title="Câmera" />
        </View>

        <View>
          <Button title="Adicionar" onPress={onSave} />
          <Button title="Excluir" onPress={onDelete} />
          <Button title="Cancelar" onPress={onClose} />
        </View>
      </Content>
    </ScreenTemplate>
  );
}
