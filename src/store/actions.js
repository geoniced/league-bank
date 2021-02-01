export const ActionType = {
  CLEAR_HISTORY: `CLEAR_HISTORY`,
  SAVE_RESULT: `SAVE_RESULT`,
  CREATE_RATE_AT_TIME: `CREATE_RATE_AT_TIME`,
};

export const clearHistory = () => ({
  type: ActionType.CLEAR_HISTORY,
});

export const saveResult = (result) => ({
  type: ActionType.SAVE_RESULT,
  payload: result,
});

export const createRateAtTime = (rateData) => ({
  type: ActionType.CREATE_RATE_AT_TIME,
  payload: rateData,
});
