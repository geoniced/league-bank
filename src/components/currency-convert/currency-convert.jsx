import {createRef, useState} from "react";
import PropTypes from "prop-types";
import {Currency, CurrencyRate, formatDateDashed} from "../../const";
import CurrencyTypeField from "../currency-type-field/currency-type-field";
import CalendarField from "../calendar-field/calendar-field";
import ConvertNumberInput from "../convert-number-input/convert-number-input";
import {connect} from "react-redux";
import {saveResult} from "../../store/actions";

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

const CurrencyConvert = (props) => {
  const {currencies, saveResultAction} = props;

  const calendarRef = createRef();

  const [myCurrency, setMyCurrency] = useState(0);
  const [convertedCurrency, setConvertedCurrency] = useState(0);

  const [myCurrencyType, setMyCurrencyType] = useState(Currency.RUB);
  const [convertedCurrencyType, setConvertedCurrencyType] = useState(Currency.USD);

  const onMyCurrencyChange = (evt) => {
    const currentValue = Number(evt.target.value);
    const chosenDate = formatDateDashed(calendarRef.current.value);

    setMyCurrency(currentValue);

    setConvertedCurrency(currentValue * currencies[chosenDate][myCurrencyType][convertedCurrencyType]);
  };

  const onMyCurrencyTypeChange = (evt) => {
    const currentValue = evt.target.value;

    setMyCurrencyType(currentValue);
  };

  const onConvertedCurrencyTypeChange = (evt) => {
    const currentValue = evt.target.value;

    setConvertedCurrencyType(currentValue);
  };

  const onSaveResultButtonClick = (evt) => {
    evt.preventDefault();

    const convertationResult = {
      date: calendarRef.current.value,
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
            calendarRef={calendarRef}
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
  saveResultAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveResultAction(date, from, to) {
    dispatch(saveResult(date, from, to));
  },
});

export {CurrencyConvert};
export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConvert);
