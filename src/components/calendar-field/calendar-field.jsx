import flatpickr from "flatpickr";
import "flatpickr/dist/themes/light.css";
import {createRef, useEffect} from "react";

const CalendarField = (props) => {
  const {value, changeHandler} = props;

  const calendarRef = createRef();

  useEffect(() => {
    flatpickr(calendarRef.current, {
      defaultDate: value,
      dateFormat: `j.n.Y`,
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

export default CalendarField;
