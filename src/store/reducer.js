import {HISTORY} from "../const";
import {extend} from "../utils";
import {ActionType} from "./actions";

const initialState = {
  history: HISTORY,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CLEAR_HISTORY:
      return extend(state, {
        history: [],
      });
    case ActionType.SAVE_RESULT:
      const newHistory = state.history.slice(0, 9);
      const {date, from, to} = action.payload;

      newHistory.unshift({date, from, to});

      return extend(state, {
        history: newHistory,
      });
  }

  return state;
};

export {reducer};