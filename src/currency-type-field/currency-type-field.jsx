import PropTypes from 'prop-types';
import {Currency} from '../const';

const CurrencyTypeField = (props) => {
  const {
    changeHandler,
    defaultValue,
    fieldId,
  } = props;

  const currencies = Object.values(Currency);

  return (
    <select
      onChange={changeHandler}
      className="convert-form__currency-type"
      name={fieldId}
      id={fieldId}
      defaultValue={defaultValue}
    >
      {currencies.map((currencyType, i) => {
        return (
          <option
            value={currencyType}
            key={`currency-type-${i}`}
          >
              {currencyType}
          </option>
        )
      })}
    </select>
  )
};

CurrencyTypeField.propTypes = {
  changeHandler: PropTypes.func,
  defaultValue: PropTypes.string.isRequired,
  fieldId: PropTypes.string.isRequired,
};

export default CurrencyTypeField;
