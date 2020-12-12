const initState = {
  isSidebarOpen: false,
  isModalOpen: false,
};

export const settingsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case 'TOGGLE_MODAL':
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    default:
      return state;
  }
};
