/* eslint-disable no-console */
import {APIRoute} from "../const";
import {API_KEY} from "../services/api";
import {createRateAtTime} from "./actions";

export const loadCurrency = (date, typeFrom, typeTo) => (dispatch, _getStore, api) => (
  api.get(`${APIRoute.CONVERT}?q=${typeFrom}_${typeTo}&compact=ultra&date=${date}&apiKey=${API_KEY}`)
    .then((response) => {
      const {data} = response;
      const convertedValue = data[`${typeFrom}_${typeTo}`][date];

      dispatch(createRateAtTime({
        date,
        from: {type: typeFrom},
        to: {type: typeTo, value: convertedValue}
      }));
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
);
