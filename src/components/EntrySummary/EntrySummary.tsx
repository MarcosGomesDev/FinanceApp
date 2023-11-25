import React from 'react';
import { EntrySummaryContainer } from './styles';
import { EntrySummaryList } from './EntrySummaryList';
import { EntrySummaryChart } from './EntrySummaryChart';
import { Entry } from '@interfaces/index';

type EntrySummaryProps = {
  entriesGrouped: Entry[];
};

export function EntrySummary({ entriesGrouped }: EntrySummaryProps) {
  return (
    <EntrySummaryContainer>
      <EntrySummaryChart />
      <EntrySummaryList entriesGrouped={entriesGrouped} />
    </EntrySummaryContainer>
  );
}
