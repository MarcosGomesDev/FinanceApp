import React from 'react';
import { BalancePanelLabelContainer } from './styles';
import { Paragraph } from '@components/Text';

type BalancePanelLabelProps = {
  currentBalance: number;
};

export function BalancePanelLabel({ currentBalance }: BalancePanelLabelProps) {
  return (
    <BalancePanelLabelContainer>
      <Paragraph size="small">Saldo Atual</Paragraph>
      <Paragraph size="default">{currentBalance}</Paragraph>
    </BalancePanelLabelContainer>
  );
}
