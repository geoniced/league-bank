import dayjs from "dayjs";
import {createRef} from "react";

const CalendarField = () => {
  const currentDate = dayjs().format(`YYYY-MM-DD`);
  const inputTestRef = createRef();

  return (
    <div className="convert-form__calendar-input-wrapper">
      <input
        ref={inputTestRef}
        defaultValue={currentDate}
        className="convert-form__currency-by-date"
        type="date"
        name="currency-by-date"
        id="currency-by-date"
      />

      <svg
        onClick={(evt) => {
          // this code is temporary
          inputTestRef.current.focus();
        }}
        className="convert-form__calendar-icon"
      >
        <use xlinkHref="#icon-calendar"></use>
      </svg>
    </div>
  )
};

export default CalendarField;
