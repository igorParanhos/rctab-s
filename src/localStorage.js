export const saveToLocalStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem('RCTAB_STATE', serializedState)
    return true;
  }
  catch(e) {
    return false;
  }
}

export const getStateFromLocalStorage = _ => {
  try {
    const serializedState = localStorage.getItem('RCTAB_STATE')
    const state = JSON.parse(serializedState)
    return state || {}
  }
  catch(e) {
    return {};
  }
}
