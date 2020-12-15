const initState = {
  modals: {
    isSettingsOpen: false,
    isAddTransactionOpen: false,
  },
  isSidebarOpen: false,
  isDarkMode: false,
  language: 'english',
};

export const settingsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case 'TOGGLE_SETTINGS_MODAL':
      return {
        ...state,
        modals: {
          ...state.modals,
          isSettingsOpen: !state.modals.isSettingsOpen,
        },
      };
    case 'TOGGLE_ADD_TRANSACTION_MODAL':
      return {
        ...state,
        modals: {
          ...state.modals,
          isAddTransactionOpen: !state.modals.isAddTransactionOpen,
        },
      };
    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    case 'CHANGE_LANGUAGE':
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};
