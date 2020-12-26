const english = {
  settings: {
    title: 'Settings',
    language: 'Language',
    darkMode: 'Dark Mode',
    btn: 'SAVE',
  },
  addTransaction: {
    title: 'Add Transaction',
    type: 'Type',
    types: ['Income', 'Expense'],
    name: 'Name',
    description: 'Description',
    amount: 'Amount',
    date: 'Date',
    btn: 'ADD',
  },
  edit: {
    title: 'Edit Transaction',
    name: 'Name',
    description: 'Description',
    amount: 'Amount',
    date: 'Date',
    btn: 'Edit',
  },
  editDebt: {
    title: 'Edit Debt',
    name: 'Name',
    description: 'Description',
    amount: 'Amount',
    date: 'Date',
    btn: 'Edit',
  },
  login: {
    title: 'Login',
    btn: 'Login',
  },
  signup: {
    title: 'Sigup',
    firstName: 'First Name',
    lastName: 'Last Name',
    password2: 'Confirm Password',
    pin: 'Pin (numeric)',
    btn: 'Signup',
    errMsg: {
      firstName: 'First Name must have at least 3 characters',
      lastName: 'Last Name must have at least 3 characters',
      email: 'Please use a valid Email',
      password: 'Password must be at least 6 characters',
      password2: 'Please check passwords fields are the same',
      pin: 'Please set a 4 digits numeric pin',
    },
  },
  sidebar: ['Dashboard', 'Balance', 'Debts', 'Stock'],
  header: 'Search',
  dashboard: {
    banner: {
      welcomeTitle: 'Welcome',
      welcomeTxt:
        'FinPal the best app to manage your buisness finances, control your incomes, expenses, debts and stock in one place. And Block your account whenever you need',
    },
    globalBalance: {
      title: 'Global Balance',
      incomesTxt: 'Total Incomes',
      expensesTxt: 'Total Expenses',
      debtsTxt: 'Total Debts',
    },
    recentMovementsTitle: 'Recent Movements',
  },
  balance: {
    incomes: 'Incomes',
    expenses: 'Expenses',
    btnText: 'Add Transaction',
  },
  user: {
    hello: 'Hello',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    password: 'Password',
    pin: 'Pin',
    btn: 'Logout',
  },
};

export default english;
