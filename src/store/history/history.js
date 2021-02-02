import {HISTORY} from "../../const";
import {ActionType} from "../actions";

const initialState = HISTORY;

const history = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CLEAR_HISTORY:
      return [];

    case ActionType.SAVE_RESULT:
      const newHistory = state.slice(0, 9);
      const {date, from, to} = action.payload;

      newHistory.unshift({date, from, to});

      return newHistory;
  }

  return state;
};

export {history};
