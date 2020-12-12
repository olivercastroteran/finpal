import React from 'react';
import {
  BalanceIcon,
  DashboardIcon,
  DebtIcon,
  StockIcon,
} from '../../../../assets/icons';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    id: 2,
    url: '/balance',
    text: 'Balance',
    icon: <BalanceIcon />,
  },
  {
    id: 3,
    url: '/debts',
    text: 'Debts',
    icon: <DebtIcon />,
  },
  {
    id: 4,
    url: '/stock',
    text: 'Stock',
    icon: <StockIcon />,
  },
];
