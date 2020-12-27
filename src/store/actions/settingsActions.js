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

export const toggleAddModal = () => {
  return {
    type: 'TOGGLE_ADD_MODAL',
  };
};

export const toggleAppLockModal = () => {
  return {
    type: 'TOGGLE_APP_LOCK_MODAL',
  };
};

export const toggleEditModal = (item) => {
  return {
    type: 'TOGGLE_EDIT_MODAL',
    payload: item,
  };
};

export const toggleDebtEditModal = (item) => {
  return {
    type: 'TOGGLE_DEBT_EDIT_MODAL',
    payload: item,
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
