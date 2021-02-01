export const ActionType = {
  CLEAR_HISTORY: `CLEAR_HISTORY`,
  SAVE_RESULT: `SAVE_RESULT`,
};

export const clearHistory = () => ({
  type: ActionType.CLEAR_HISTORY,
});

export const saveResult = (date, from, to) => ({
  type: ActionType.SAVE_RESULT,
  payload: {
    date,
    from,
    to,
  },
});
