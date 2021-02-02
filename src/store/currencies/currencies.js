import {extend} from "../../utils";
import {ActionType} from "../actions";

const initialState = {};

const currencies = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CREATE_RATE_AT_TIME:
      const currencyData = action.payload;
      const currencyField = `${currencyData.from.type}_${currencyData.to.type}`;
      const currentCurrencies = Object.assign({}, state);

      if (currentCurrencies[currencyField]) {
        currentCurrencies[currencyField][currencyData.date] = currencyData.to.value;
      } else {
        currentCurrencies[currencyField] = {
          [currencyData.date]: currencyData.to.value,
        };
      }

      return extend(state, currentCurrencies);
  }

  return state;
};

export {currencies};
