import {combineReducers} from "redux";
import {convert} from "./convert/convert";
import {currencies} from "./currencies/currencies";
import {history} from "./history/history";

export const NameSpace = {
  CONVERT: `CONVERT`,
  CURRENCIES: `CURRENCIES`,
  HISTORY: `HISTORY`,
};

export default combineReducers({
  [NameSpace.CONVERT]: convert,
  [NameSpace.CURRENCIES]: currencies,
  [NameSpace.HISTORY]: history,
});
