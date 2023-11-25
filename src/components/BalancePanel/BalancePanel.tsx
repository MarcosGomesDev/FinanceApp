import React from 'react';
import { BalancePanelContainer } from './styles';
import { BalancePanelLabel } from './BalancePanelLabel';
import { BalancePanelChart } from './BalancePanelChart';

type BalancePanelProps = {
  currentBalance: number;
};

export function BalacePanel({ currentBalance }: BalancePanelProps) {
  return (
    <BalancePanelContainer>
      <BalancePanelLabel currentBalance={currentBalance} />
      <BalancePanelChart />
    </BalancePanelContainer>
  );
}
