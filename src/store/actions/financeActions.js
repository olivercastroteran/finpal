export const syncData = (finance) => {
  return {
    type: 'SYNC_DATA',
    payload: finance,
  };
};

export const addIncome = (income) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    const newIncomes = [...profile.finance.incomes, income];

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        finance: {
          ...profile.finance,
          incomes: newIncomes,
        },
      })
      .then(() => {
        console.log('income added');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addExpense = (expense) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    const newExpenses = [...profile.finance.expenses, expense];

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        finance: {
          ...profile.finance,
          expenses: newExpenses,
        },
      })
      .then(() => {
        console.log('expense added');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addDebt = (debt) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    const newDebts = [...profile.finance.debts, debt];

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        finance: {
          ...profile.finance,
          debts: newDebts,
        },
      })
      .then(() => {
        console.log('debt added');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const removeIncome = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    const newIncomes = profile.finance.incomes.filter((inc) => inc.id !== id);

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        finance: {
          ...profile.finance,
          incomes: newIncomes,
        },
      })
      .then(() => {
        console.log('income deleted');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const removeExpense = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    const newExpenses = profile.finance.expenses.filter((exp) => exp.id !== id);

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        finance: {
          ...profile.finance,
          expenses: newExpenses,
        },
      })
      .then(() => {
        console.log('expense deleted');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const removeDebt = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    const newDebts = profile.finance.debts.filter((debt) => debt.id !== id);

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        finance: {
          ...profile.finance,
          debts: newDebts,
        },
      })
      .then(() => {
        console.log('debt deleted');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const editIncome = (editedIncome) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    const editedIncIndex = profile.finance.incomes.findIndex(
      (inc) => inc.id === editedIncome.id
    );
    const newIncomes = [...profile.finance.incomes];

    newIncomes[editedIncIndex] = editedIncome;

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        finance: {
          ...profile.finance,
          incomes: newIncomes,
        },
      })
      .then(() => {
        console.log('income edited');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const editExpense = (editedExpense) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    const editedExpIndex = profile.finance.expenses.findIndex(
      (exp) => exp.id === editedExpense.id
    );
    const newExpenses = [...profile.finance.expenses];

    newExpenses[editedExpIndex] = editedExpense;

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        finance: {
          ...profile.finance,
          expenses: newExpenses,
        },
      })
      .then(() => {
        console.log('expense edited');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const editDebt = (editedDebt) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    const editedDebtIndex = profile.finance.debts.findIndex(
      (debt) => debt.id === editedDebt.id
    );
    const newDebts = [...profile.finance.debts];

    newDebts[editedDebtIndex] = editedDebt;

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        finance: {
          ...profile.finance,
          debts: newDebts,
        },
      })
      .then(() => {
        console.log('debt edited');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
