import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {formatDateDashed} from "../../const";
import CurrencyTypeField from "../currency-type-field/currency-type-field";
import CalendarField from "../calendar-field/calendar-field";
import ConvertNumberInput from "../convert-number-input/convert-number-input";
import {connect} from "react-redux";
import {changeCalendarDate, changeConvertedType, changeMyType, saveResult} from "../../store/actions";
import {loadCurrency} from "../../store/api-actions";
import {getCalendarValue, getConvertedType, getCurrencies, getMyType} from "../../store/selectors";

const FIELD_NAMES = {
  MY_CURRENCY: {
    NUMBER: `my-currency`,
    SELECT: `my-currency-type`,
  },
  CONVERTED_CURRENCY: {
    NUMBER: `converted-currency`,
    SELECT: `converted-currency-type`,
  },
};

const doesCurrencyExist = (currencies, field, date) => {
  return currencies[field] && currencies[field][date];
};

const CurrencyConvert = (props) => {
  const {
    currencies,
    myCurrencyType,
    convertedCurrencyType,
    chosenDate,
    saveResultAction,
    changeCurrencyType,
    changeCalendarDateAction,
    changeMyTypeAction,
    changeConvertedTypeAction,
  } = props;


  const [myCurrency, setMyCurrency] = useState(0);

  const convertationField = `${myCurrencyType}_${convertedCurrencyType}`;
  let convertedCurrency = 0;
  if (doesCurrencyExist(currencies, convertationField, chosenDate)) {
    convertedCurrency = myCurrency * currencies[convertationField][chosenDate];
  }

  useEffect(() => {
    if (!doesCurrencyExist(currencies, convertationField, chosenDate)) {
      changeCurrencyType(formatDateDashed(chosenDate), myCurrencyType, convertedCurrencyType);
    }
  }, [convertedCurrencyType, myCurrencyType, chosenDate, convertationField, currencies, changeCurrencyType]);


  const onMyCurrencyChange = (evt) => {
    const currentValue = Number(evt.target.value);

    setMyCurrency(currentValue);
  };

  const onMyCurrencyTypeChange = (evt) => {
    changeMyTypeAction(evt.target.value);
  };

  const onConvertedCurrencyTypeChange = (evt) => {
    changeConvertedTypeAction(evt.target.value);
  };

  const onCalendarChange = (date) => {
    const currentValue = formatDateDashed(date);

    changeCalendarDateAction(currentValue);
  };

  const onSaveResultButtonClick = (evt) => {
    evt.preventDefault();

    const convertationResult = {
      date: chosenDate,
      from: {
        value: myCurrency,
        type: myCurrencyType,
      },
      to: {
        value: convertedCurrency,
        type: convertedCurrencyType,
      },
    };

    saveResultAction(convertationResult);
  };

  return (
    <section className="page-content__currency-convert currency-convert">
      <h3 className="currency-convert visually-hidden">Форма конвертации</h3>

      <form action="#" className="currency-convert__convert-form convert-form">
        <div className="convert-form__rows-wrapper">
          <div className="convert-form__currency-wrapper">
            <label className="convert-form__label" htmlFor={FIELD_NAMES.MY_CURRENCY.NUMBER}>У меня есть</label>

            <div className="convert-form__currency-and-type-wrapper">
              <ConvertNumberInput
                changeHandler={onMyCurrencyChange}
                value={myCurrency}
                fieldId={FIELD_NAMES.MY_CURRENCY.NUMBER}
              />
              <CurrencyTypeField
                changeHandler={onMyCurrencyTypeChange}
                defaultValue={myCurrencyType}
                fieldId={FIELD_NAMES.MY_CURRENCY.SELECT}
              />
            </div>
          </div>

          <svg className="convert-form__change-currency">
            <use xlinkHref="#arrows-left-right"></use>
          </svg>

          <div className="convert-form__currency-wrapper">
            <label className="convert-form__label" htmlFor={FIELD_NAMES.CONVERTED_CURRENCY.NUMBER}>Хочу приобрести</label>

            <div className="convert-form__currency-and-type-wrapper">
              <ConvertNumberInput
                value={convertedCurrency}
                fieldId={FIELD_NAMES.CONVERTED_CURRENCY.NUMBER}
                readOnly
              />
              <CurrencyTypeField
                changeHandler={onConvertedCurrencyTypeChange}
                defaultValue={convertedCurrencyType}
                fieldId={FIELD_NAMES.CONVERTED_CURRENCY.SELECT}
              />
            </div>
          </div>
        </div>

        <div className="convert-form__rows-wrapper">
          <CalendarField
            changeHandler={onCalendarChange}
            value={chosenDate}
          />

          <button
            onClick={onSaveResultButtonClick}
            className="convert-form__save button"
            type="submit"
          >
            Сохранить результат
          </button>
        </div>
      </form>
    </section>
  );
};

CurrencyConvert.propTypes = {
  currencies: PropTypes.object.isRequired,
  saveResultAction: PropTypes.func.isRequired,
  changeCurrencyType: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: getCurrencies(state),
  myCurrencyType: getMyType(state),
  convertedCurrencyType: getConvertedType(state),
  chosenDate: getCalendarValue(state),
});

const mapDispatchToProps = (dispatch) => ({
  saveResultAction(date, from, to) {
    dispatch(saveResult(date, from, to));
  },
  changeCurrencyType(date, typeFrom, typeTo, action) {
    dispatch(loadCurrency(date, typeFrom, typeTo, action));
  },
  changeCalendarDateAction(date) {
    dispatch(changeCalendarDate(date));
  },
  changeMyTypeAction(type) {
    dispatch(changeMyType(type));
  },
  changeConvertedTypeAction(type) {
    dispatch(changeConvertedType(type));
  },
});

export {CurrencyConvert};
export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConvert);
