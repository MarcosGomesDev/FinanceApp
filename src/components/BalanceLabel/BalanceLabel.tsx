import React from 'react';
import { BalanceLabelContainer } from './styles';
import { Paragraph } from '..';

type BalanceLabelProps = {
  currentBalance: number;
};

export function BalanceLabel({ currentBalance }: BalanceLabelProps) {
  return (
    <BalanceLabelContainer>
      <Paragraph>Saldo Atual</Paragraph>
      <Paragraph>{currentBalance}</Paragraph>
    </BalanceLabelContainer>
  );
}
