const initState = {
  modals: {
    isSettingsOpen: false,
    isAddOpen: false,
    isLockedOpen: false,
    edit: {
      isOpen: false,
      item: {},
    },
    debt: {
      isOpen: false,
      item: {},
    },
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
    case 'TOGGLE_ADD_MODAL':
      return {
        ...state,
        modals: {
          ...state.modals,
          isAddOpen: !state.modals.isAddOpen,
        },
      };
    case 'TOGGLE_EDIT_MODAL':
      return {
        ...state,
        modals: {
          ...state.modals,
          edit: {
            ...state.modals.edit,
            isOpen: !state.modals.edit.isOpen,
            item: action.payload,
          },
        },
      };
    case 'TOGGLE_DEBT_EDIT_MODAL':
      return {
        ...state,
        modals: {
          ...state.modals,
          debt: {
            ...state.modals.debt,
            isOpen: !state.modals.debt.isOpen,
            item: action.payload,
          },
        },
      };
    case 'TOGGLE_APP_LOCK_MODAL':
      return {
        ...state,
        modals: {
          ...state.modals,
          isLockedOpen: !state.modals.isLockedOpen,
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
