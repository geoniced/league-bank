import dayjs from "dayjs";

const CalendarField = (props) => {
  const {calendarRef} = props;
  const currentDate = dayjs().format(`YYYY-MM-DD`);

  return (
    <div className="convert-form__calendar-input-wrapper">
      <input
        ref={calendarRef}
        defaultValue={currentDate}
        className="convert-form__currency-by-date"
        type="date"
        name="currency-by-date"
        id="currency-by-date"
      />

      <svg
        onClick={(evt) => {
          // this code is temporary
          calendarRef.current.focus();
        }}
        className="convert-form__calendar-icon"
      >
        <use xlinkHref="#icon-calendar"></use>
      </svg>
    </div>
  )
};

export default CalendarField;
