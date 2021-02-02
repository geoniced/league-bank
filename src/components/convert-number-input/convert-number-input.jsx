import PropTypes from 'prop-types';
import {roundToFourDecimals} from '../../utils';

const ConvertNumberInput = (props) => {
  const {
    changeHandler,
    value,
    fieldId,
    readOnly,
  } = props;

  return (
    <input
      onChange={changeHandler}
      value={roundToFourDecimals(value)}
      className="convert-form__number-input"
      type="number"
      id={fieldId}
      name={fieldId}
      readOnly={readOnly}
    />
  );
};

ConvertNumberInput.propTypes = {
  changeHandler: PropTypes.func,
  value: PropTypes.number.isRequired,
  fieldId: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
};

export default ConvertNumberInput;
