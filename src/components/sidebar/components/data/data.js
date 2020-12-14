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
    icon: <DashboardIcon />,
  },
  {
    id: 2,
    url: '/balance',
    icon: <BalanceIcon />,
  },
  {
    id: 3,
    url: '/debts',
    icon: <DebtIcon />,
  },
  {
    id: 4,
    url: '/stock',
    icon: <StockIcon />,
  },
];
