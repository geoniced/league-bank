import dayjs from "dayjs";
import {useState} from "react";
import {connect} from "react-redux";
import {HISTORY} from "../../const";
import {clearHistory} from "../../store/actions";

const ConvertHistory = (props) => {
  const [history, setHistory] = useState(HISTORY);

  const onClearHistoryClick = () => {
    setHistory([]);
  };

  return (
    <section className="page-content__convert-history convert-history">
      <h3 className="convert-history__title">История конвертации</h3>

      <ul className="convert-history__list">
        {history.map((item, i) => {
          const formattedDate = dayjs(item.date).format(`DD.MM.YYYY`);
          const currencyFromText = `${item.from.value} ${item.from.type}`;
          const currencyToText = `${item.to.value} ${item.to.type}`;

          return (
            <li key={`convert-item-${i}`} className="convert-history__item">
              <time className="convert-history__datetime" dateTime={item.date}>{formattedDate}</time>

              <div className="convert-history__operation">
                <p className="convert-history__from">{currencyFromText}</p>

                <p className="convert-history__arrow-icon">
                  <span className="visually-hidden">конвертировано в</span>
                </p>

                <p className="convert-history__to">{currencyToText}</p>
              </div>
            </li>
          )
        })}
      </ul>

      <button
        onClick={onClearHistoryClick}
        className="convert-history__clear
        button"
        type="button"
      >
        Очистить историю
      </button>
    </section>
  );
};

const mapStateToProps = (state) => ({
  history: state.history,
});

const mapDispatchToProps = (dispatch) => ({
  clearHistoryAction() {
    dispatch(clearHistory());
  }
})

export {ConvertHistory};
export default connect(mapStateToProps, mapDispatchToProps)(ConvertHistory);
