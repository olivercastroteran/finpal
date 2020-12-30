export const syncData = (finance) => {
  return {
    type: 'SYNC_DATA',
    payload: finance,
  };
};

export const toggleIsLocked = () => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        isLocked: !profile.isLocked,
      })
      .then(() => {
        console.log('app lock toggled');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addIncome = (income) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    const newIncomes = [...profile.finance.incomes, income];
    const recentMovementItem = {
      type: ['income', 'added'],
      info: income,
    };
    const newRecentMovements = [
      ...profile.finance.recentMovements,
      recentMovementItem,
    ];

    if (newRecentMovements.length > 15) {
      newRecentMovements.shift();
    }

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        finance: {
          ...profile.finance,
          incomes: newIncomes,
          recentMovements: newRecentMovements,
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
    const recentMovementItem = {
      type: ['expense', 'added'],
      info: expense,
    };
    const newRecentMovements = [
      ...profile.finance.recentMovements,
      recentMovementItem,
    ];

    if (newRecentMovements.length > 15) {
      newRecentMovements.shift();
    }

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        finance: {
          ...profile.finance,
          expenses: newExpenses,
          recentMovements: newRecentMovements,
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
    const recentMovementItem = {
      type: ['debt', 'added'],
      info: debt,
    };
    const newRecentMovements = [
      ...profile.finance.recentMovements,
      recentMovementItem,
    ];

    if (newRecentMovements.length > 15) {
      newRecentMovements.shift();
    }

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        finance: {
          ...profile.finance,
          debts: newDebts,
          recentMovements: newRecentMovements,
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

export const addStockItem = (stockItem) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    const newStock = [...profile.finance.stock, stockItem];
    const recentMovementItem = {
      type: ['stock', 'added'],
      info: stockItem,
    };
    const newRecentMovements = [
      ...profile.finance.recentMovements,
      recentMovementItem,
    ];

    if (newRecentMovements.length > 15) {
      newRecentMovements.shift();
    }

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        finance: {
          ...profile.finance,
          stock: newStock,
          recentMovements: newRecentMovements,
        },
      })
      .then(() => {
        console.log('stock item added');
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
    const recentMovementItem = {
      type: ['income', 'removed'],
      info: profile.finance.incomes.find((inc) => inc.id === id),
    };
    const newRecentMovements = [
      ...profile.finance.recentMovements,
      recentMovementItem,
    ];

    if (newRecentMovements.length > 15) {
      newRecentMovements.shift();
    }

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        finance: {
          ...profile.finance,
          incomes: newIncomes,
          recentMovements: newRecentMovements,
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
    const recentMovementItem = {
      type: ['expense', 'removed'],
      info: profile.finance.expenses.find((exp) => exp.id === id),
    };
    const newRecentMovements = [
      ...profile.finance.recentMovements,
      recentMovementItem,
    ];

    if (newRecentMovements.length > 15) {
      newRecentMovements.shift();
    }

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        finance: {
          ...profile.finance,
          expenses: newExpenses,
          recentMovements: newRecentMovements,
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
    const recentMovementItem = {
      type: ['debt', 'removed'],
      info: profile.finance.debts.find((debt) => debt.id === id),
    };
    const newRecentMovements = [
      ...profile.finance.recentMovements,
      recentMovementItem,
    ];

    if (newRecentMovements.length > 15) {
      newRecentMovements.shift();
    }

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        finance: {
          ...profile.finance,
          debts: newDebts,
          recentMovements: newRecentMovements,
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

export const removeStockItem = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    const newStock = profile.finance.stock.filter((item) => item.id !== id);
    const recentMovementItem = {
      type: ['stock', 'removed'],
      info: profile.finance.stock.find((item) => item.id === id),
    };
    const newRecentMovements = [
      ...profile.finance.recentMovements,
      recentMovementItem,
    ];

    if (newRecentMovements.length > 15) {
      newRecentMovements.shift();
    }

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        finance: {
          ...profile.finance,
          stock: newStock,
          recentMovements: newRecentMovements,
        },
      })
      .then(() => {
        console.log('stock item deleted');
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

    const recentMovementItem = {
      type: ['income', 'edited'],
      info: editedIncome,
    };
    const newRecentMovements = [
      ...profile.finance.recentMovements,
      recentMovementItem,
    ];

    if (newRecentMovements.length > 15) {
      newRecentMovements.shift();
    }

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        finance: {
          ...profile.finance,
          incomes: newIncomes,
          recentMovements: newRecentMovements,
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

    const recentMovementItem = {
      type: ['expense', 'edited'],
      info: editedExpense,
    };
    const newRecentMovements = [
      ...profile.finance.recentMovements,
      recentMovementItem,
    ];

    if (newRecentMovements.length > 15) {
      newRecentMovements.shift();
    }

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        finance: {
          ...profile.finance,
          expenses: newExpenses,
          recentMovements: newRecentMovements,
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

    const recentMovementItem = {
      type: ['debt', 'edited'],
      info: editedDebt,
    };
    const newRecentMovements = [
      ...profile.finance.recentMovements,
      recentMovementItem,
    ];

    if (newRecentMovements.length > 15) {
      newRecentMovements.shift();
    }

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        finance: {
          ...profile.finance,
          debts: newDebts,
          recentMovements: newRecentMovements,
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

export const editStockItem = (editedStockItem) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    const editedStockItemIndex = profile.finance.stock.findIndex(
      (item) => item.id === editedStockItem.id
    );
    const newStock = [...profile.finance.stock];

    newStock[editedStockItemIndex] = editedStockItem;

    const recentMovementItem = {
      type: ['stock', 'edited'],
      info: editedStockItem,
    };
    const newRecentMovements = [
      ...profile.finance.recentMovements,
      recentMovementItem,
    ];

    if (newRecentMovements.length > 15) {
      newRecentMovements.shift();
    }

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        finance: {
          ...profile.finance,
          stock: newStock,
          recentMovements: newRecentMovements,
        },
      })
      .then(() => {
        console.log('stock item edited');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
