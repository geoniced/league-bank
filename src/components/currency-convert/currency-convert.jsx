import {useState} from "react";
import {CurrencyRate} from "../../const";
import CurrencyTypeField from "../../currency-type-field/currency-type-field";
import ConvertNumberInput from "../convert-number-input/convert-number-input";

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

const CurrencyConvert = () => {
  const [myCurrency, setMyCurrency] = useState(0);
  const [convertedCurrency, setConvertedCurrency] = useState(0);

  const [myCurrencyType, setMyCurrencyType] = useState(`RUB`);
  const [convertedCurrencyType, setConvertedCurrencyType] = useState(`USD`);

  const onMyCurrencyChange = (evt) => {
    const currentValue = Number(evt.target.value);
    setMyCurrency(currentValue);

    setConvertedCurrency(currentValue * CurrencyRate[myCurrencyType][convertedCurrencyType]);
  };

  const onMyCurrencyTypeChange = (evt) => {
    const currentValue = evt.target.value;

    setMyCurrencyType(currentValue);
  }

  const onConvertedCurrencyTypeChange = (evt) => {
    const currentValue = evt.target.value;

    setConvertedCurrencyType(currentValue);
  }

  return (
    <section className="page-content__currency-convert currency-convert">
      <h3 className="currency-convert visually-hidden">Форма конвертации</h3>

      <form className="currency-convert__convert-form convert-form">
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
          <div className="convert-form__calendar-input-wrapper">
            <input className="convert-form__currency-by-date" type="date" name="currency-by-date" id="currency-by-date" />
            <svg className="convert-form__calendar-icon">
              <use xlinkHref="#icon-calendar"></use>
            </svg>
          </div>


          <button className="convert-form__save button" type="submit">Сохранить результат</button>
        </div>
      </form>
    </section>
  );
}

export default CurrencyConvert;
