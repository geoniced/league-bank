import {HISTORY} from "../const";
import {extend} from "../utils";
import {ActionType} from "./actions";

const initialState = {
  history: HISTORY,
  currencies: {},
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
    case ActionType.CREATE_RATE_AT_TIME:
      const currencyData = action.payload;

      const newCurrencyData = {
        [currencyData.date]: {
          [currencyData.from.type]: {
            [currencyData.to.type]: currencyData.to.value,
          },
        }
      };

      return extend(state, {
        currencies: extend(state.currencies, newCurrencyData)
      });
  }

  return state;
};

export {reducer};
