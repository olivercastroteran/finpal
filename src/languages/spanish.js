const spanish = {
  settings: {
    title: 'Ajustes',
    language: 'Idioma',
    darkMode: 'Modo Oscuro',
    btn: 'GUARDAR',
  },
  addTransaction: {
    title: 'Añadir Transacción',
    type: 'Tipo',
    types: ['Ingreso', 'Gasto'],
    name: 'Nombre',
    description: 'Descripción',
    amount: 'Monto',
    date: 'Fecha',
    btn: 'Añadir',
  },
  edit: {
    title: 'Editar Transacción',
    name: 'Nombre',
    description: 'Descripción',
    amount: 'Monto',
    date: 'Fecha',
    btn: 'Editar',
  },
  editDebt: {
    title: 'Editar Deuda',
    name: 'Nombre',
    description: 'Descripción',
    amount: 'Monto',
    date: 'Fecha',
    btn: 'Editar',
  },
  login: {
    title: 'Iniciar Sesión',
    btn: 'Iniciar Sesión',
  },
  signup: {
    title: 'Registrarse',
    firstName: 'Nombre',
    lastName: 'Apellido',
    password2: 'Confirmar Password',
    pin: 'Pin (numérico)',
    btn: 'Registrarse',
    errMsg: {
      firstName: 'Nombre debe contener mas de 3 caracteres',
      lastName: 'Apellido debe contener mas de 3 caracteres',
      email: 'Por favor utilice un Email valido',
      password: 'Password debe contener mas de 3 caracteres',
      password2: 'Por favor verifique que los passwords coinciden',
      pin: 'Por favor introduzca un pin numérico de 4 digitos',
    },
  },
  sidebar: ['Menu', 'Balance', 'Deudas', 'Stock'],
  header: 'Buscar',
  dashboard: {
    banner: {
      welcomeTitle: 'Bienvenido',
      welcomeTxt:
        'FinPal la mejor app para administrar las finanzas de su negocio, controlar sus ingresos, gastos, deudas y stock en un solo lugar. Y poder bloquear la cuenta cuando lo necesite',
    },
    globalBalance: {
      title: 'Balance Global',
      incomesTxt: 'Ingresos Totales',
      expensesTxt: 'Gastos Totales',
      debtsTxt: 'Deudas Totales',
    },
    recentMovementsTitle: 'Movimientos Recientes',
  },
  balance: {
    incomes: 'Ingresos',
    expenses: 'Gastos',
    btnText: 'Añadir Transacción',
  },
  user: {
    hello: 'Hola',
    firstName: 'Nommbre',
    lastName: 'Apellido/s',
    email: 'Email',
    password: 'Password',
    pin: 'Pin',
    btn: 'Cerrar Sesión',
  },
};

export default spanish;
