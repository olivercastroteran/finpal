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
