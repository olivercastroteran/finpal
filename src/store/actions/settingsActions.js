export const toggleSidebar = () => {
  return {
    type: 'TOGGLE_SIDEBAR',
  };
};

export const toggleSettingsModal = () => {
  return {
    type: 'TOGGLE_SETTINGS_MODAL',
  };
};

export const toggleAddTransactionModal = () => {
  return {
    type: 'TOGGLE_ADD_TRANSACTION_MODAL',
  };
};

export const toggleDarkMode = () => {
  return { type: 'TOGGLE_DARK_MODE' };
};

export const changeLanguage = (language) => {
  return {
    type: 'CHANGE_LANGUAGE',
    payload: language,
  };
};
