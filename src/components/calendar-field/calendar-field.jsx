import PropTypes from "prop-types";
import flatpickr from "flatpickr";
import "flatpickr/dist/themes/light.css";
import {createRef, useEffect} from "react";
import {formatDateDotted, getSevenDaysBack} from "../../utils";

const CalendarField = (props) => {
  const {changeHandler} = props;

  const calendarRef = createRef();

  useEffect(() => {
    flatpickr(calendarRef.current, {
      defaultDate: formatDateDotted(),
      dateFormat: `j.n.Y`,
      minDate: getSevenDaysBack(),
      maxDate: formatDateDotted(),
      onChange: changeHandler,
    });
  }, []);

  return (
    <div className="convert-form__calendar-input-wrapper">
      <input
        ref={calendarRef}
        className="convert-form__currency-by-date"
        type="date"
        name="currency-by-date"
        id="currency-by-date"
      />

      <svg
        className="convert-form__calendar-icon"
      >
        <use xlinkHref="#icon-calendar"></use>
      </svg>
    </div>
  );
};

CalendarField.propTypes = {
  changeHandler: PropTypes.func.isRequired,
};

export default CalendarField;
