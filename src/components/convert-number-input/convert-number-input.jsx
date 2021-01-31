import PropTypes from 'prop-types';

const ConvertNumberInput = (props) => {
  const {
    changeHandler,
    value,
    fieldId,
  } = props;

  return (
    <input
      onChange={changeHandler}
      value={value}
      className="convert-form__number-input"
      type="number"
      id={fieldId}
      name={fieldId}
    />
  )
};

ConvertNumberInput.propTypes = {
  changeHandler: PropTypes.func,
  value: PropTypes.number.isRequired,
  fieldId: PropTypes.string.isRequired,
};

export default ConvertNumberInput;
