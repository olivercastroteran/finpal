const initState = {
  incomes: [],
  expenses: [],
  debts: [],
  recentMovements: [],
  stock: [],
};

export const financeReducer = (state = initState, action) => {
  let newIncomes, newExpenses;
  switch (action.type) {
    case 'SYNC_DATA':
      return {
        ...state,
        incomes: action.payload.incomes,
        expenses: action.payload.expenses,
        debts: action.payload.debts,
        recentMovements: action.payload.recentMovements,
        stock: action.payload.stock,
      };
    case 'ADD_INCOME':
      return {
        ...state,
        incomes: [...state.incomes, action.payload],
      };
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'REMOVE_INCOME':
      newIncomes = state.incomes.filter(
        (income) => income.id !== action.payload.id
      );
      return {
        ...state,
        incomes: newIncomes,
      };
    case 'REMOVE_EXPENSE':
      newExpenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      );
      return {
        ...state,
        expenses: newExpenses,
      };
    case 'EDIT_INCOME':
      const editedIncIndex = state.incomes.findIndex(
        (inc) => inc.id === action.payload.id
      );
      newIncomes = [...state.incomes];
      newIncomes[editedIncIndex] = action.payload;

      return {
        ...state,
        incomes: newIncomes,
      };
    case 'EDIT_EXPENSE':
      const editedExpIndex = state.expenses.findIndex(
        (exp) => exp.id === action.payload.id
      );
      newExpenses = [...state.expenses];
      newExpenses[editedExpIndex] = action.payload;

      return {
        ...state,
        expenses: newExpenses,
      };
    default:
      return state;
  }
};
