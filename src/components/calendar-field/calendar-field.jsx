import PropTypes from "prop-types";
import flatpickr from "flatpickr";
import "flatpickr/dist/themes/light.css";
import {createRef, useEffect, useRef} from "react";
import {formatDateDotted, getSevenDaysBack} from "../../utils";

const CalendarField = (props) => {
  const {value, changeHandler} = props;

  const calendarRef = createRef();
  const calendarFlatpickrInstance = useRef(null);

  useEffect(() => {
    calendarFlatpickrInstance.current = flatpickr(calendarRef.current, {
      defaultDate: formatDateDotted(value),
      dateFormat: `j.n.Y`,
      minDate: getSevenDaysBack(),
      maxDate: formatDateDotted(),
      onChange: changeHandler,
    });
  }, [calendarRef, changeHandler, value]);

  const onIconClick = () => calendarFlatpickrInstance.current.toggle();

  return (
    <div className="convert-form__calendar-input-wrapper">
      <label className="visually-hidden" htmlFor="currency-by-date">Взять курс за определенный день</label>
      <input
        ref={calendarRef}
        className="convert-form__currency-by-date"
        type="date"
        name="currency-by-date"
        id="currency-by-date"
      />

      <svg
        className="convert-form__calendar-icon"
        onClick={onIconClick}
      >
        <use xlinkHref="#icon-calendar"></use>
      </svg>
    </div>
  );
};

CalendarField.propTypes = {
  value: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default CalendarField;
