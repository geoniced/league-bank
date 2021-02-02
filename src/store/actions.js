export const ActionType = {
  CLEAR_HISTORY: `CLEAR_HISTORY`,
  SAVE_RESULT: `SAVE_RESULT`,
  CREATE_RATE_AT_TIME: `CREATE_RATE_AT_TIME`,
  CHANGE_MY_TYPE: `CHANGE_MY_TYPE`,
  CHANGE_CONVERTED_TYPE: `CHANGE_CONVERTED_TYPE`,
  CHANGE_CALENDAR_DATE: `CHANGE_CALENDAR_DATE`,
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

export const changeMyType = (newType) => ({
  type: ActionType.CHANGE_MY_TYPE,
  payload: newType,
});

export const changeConvertedType = (newType) => ({
  type: ActionType.CHANGE_CONVERTED_TYPE,
  payload: newType,
});

export const changeCalendarDate = (newDate) => ({
  type: ActionType.CHANGE_CALENDAR_DATE,
  payload: newDate,
});
