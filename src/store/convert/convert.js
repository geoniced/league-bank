import {ActionType} from "../actions";
import {Currency} from "../../const";
import {extend, formatDateDashed} from "../../utils";

const initialState = {
  myType: Currency.RUB,
  convertedType: Currency.USD,
  date: formatDateDashed(),
};

const convert = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_MY_TYPE:
      return extend(state, {
        myType: action.payload,
      });

    case ActionType.CHANGE_CONVERTED_TYPE:
      return extend(state, {
        convertedType: action.payload,
      });

    case ActionType.CHANGE_CALENDAR_DATE:
      return extend(state, {
        date: action.payload,
      });
  }

  return state;
};

export {convert};
