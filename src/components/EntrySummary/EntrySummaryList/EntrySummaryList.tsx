import React from 'react';
import { EntrySummaryListContainer } from './styles';
import { FlatList } from 'react-native';
import { Paragraph } from '@components/Text';
import { Entry } from '@interfaces/index';

type EntrySummaryListProps = {
  entriesGrouped: Entry[];
};

export function EntrySummaryList({ entriesGrouped }: EntrySummaryListProps) {
  return (
    <EntrySummaryListContainer>
      <Paragraph size="large" mt={10} mb={10}>
        Categorias
      </Paragraph>
      <FlatList
        data={entriesGrouped}
        renderItem={({ item }) => (
          <Paragraph>
            {item.description} - ${item.amount}
          </Paragraph>
        )}
      />
    </EntrySummaryListContainer>
  );
}
