export const addIncome = (income) => {
  return {
    type: 'ADD_INCOME',
    payload: income,
  };
};

export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    payload: expense,
  };
};

export const removeIncome = (income) => {
  return {
    type: 'REMOVE_INCOME',
    payload: income,
  };
};

export const removeExpense = (expense) => {
  return {
    type: 'REMOVE_EXPENSE',
    payload: expense,
  };
};

export const editIncome = (editedIncome) => {
  return {
    type: 'EDIT_INCOME',
    payload: editedIncome,
  };
};

export const editExpense = (editedExpense) => {
  return {
    type: 'EDIT_EXPENSE',
    payload: editedExpense,
  };
};
