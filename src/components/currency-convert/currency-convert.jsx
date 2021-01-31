import {useState} from "react";
import {CurrencyRate} from "../../const";

const CurrencyConvert = () => {
  const [myCurrency, setMyCurrency] = useState(0);
  const [convertedCurrency, setConvertedCurrency] = useState(0);

  const [myCurrencyType, setMyCurrencyType] = useState(`RUB`);
  const [convertedCurrencyType, setConvertedCurrencyType] = useState(`USD`);

  const onMyCurrencyChange = (evt) => {
    const currentValue = evt.target.value;
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
            <label className="convert-form__label" htmlFor="my-currency">У меня есть</label>

            <div className="convert-form__currency-and-type-wrapper">
              <input
                onChange={onMyCurrencyChange}
                value={myCurrency}
                className="convert-form__number-input"
                type="number"
                id="my-currency"
                name="my-currency"
              />
              <select
                onChange={onMyCurrencyTypeChange}
                className="convert-form__currency-type"
                name="my-currency-type"
                id="my-currency-type"
                defaultValue={myCurrencyType}
              >
                <option value="RUB">RUB</option>
                <option value="USD">USD</option>
              </select>
            </div>
          </div>

          <svg className="convert-form__change-currency">
            <use xlinkHref="#arrows-left-right"></use>
          </svg>

          <div className="convert-form__currency-wrapper">
            <label className="convert-form__label" htmlFor="converted-currency">Хочу приобрести</label>

            <div className="convert-form__currency-and-type-wrapper">
              <input
                value={convertedCurrency}
                className="convert-form__number-input"
                type="number"
                id="converted-currency"
                name="converted-currency"
              />
              <select
                onChange={onConvertedCurrencyTypeChange}
                className="convert-form__currency-type"
                name="converted-currency-type"
                id="converted-currency-type"
                defaultValue={convertedCurrencyType}
              >
                <option value="RUB">RUB</option>
                <option value="USD">USD</option>
              </select>
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
