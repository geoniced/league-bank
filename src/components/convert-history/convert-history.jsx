import dayjs from "dayjs";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {clearHistory} from "../../store/actions";
import {getHistory} from "../../store/selectors";
import {roundToFourDecimals} from "../../utils";

const makeCurrencyText = (amount, type) => {
  return `${roundToFourDecimals(amount)} ${type}`;
};

const ConvertHistory = (props) => {
  const {history, clearHistoryAction} = props;

  const onClearHistoryClick = () => {
    clearHistoryAction();
  };

  return (
    <section className="page-content__convert-history convert-history">
      <h3 className="convert-history__title">История конвертации</h3>

      <ul className="convert-history__list">
        {history.map((item, i) => {
          const formattedDate = dayjs(item.date).format(`DD.MM.YYYY`);
          const currencyFromText = makeCurrencyText(item.from.value, item.from.type);
          const currencyToText = makeCurrencyText(item.to.value, item.to.type);

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
          );
        })}
      </ul>

      {history.length > 0 && (
        <button
          onClick={onClearHistoryClick}
          className="convert-history__clear
          button"
          type="button"
        >
          Очистить историю
        </button>
      )}
    </section>
  );
};

ConvertHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    from: PropTypes.shape({
      value: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
    }),
    to: PropTypes.shape({
      value: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
    }),
  })),
  clearHistoryAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  history: getHistory(state),
});

const mapDispatchToProps = (dispatch) => ({
  clearHistoryAction() {
    dispatch(clearHistory());
  }
});

export {ConvertHistory};
export default connect(mapStateToProps, mapDispatchToProps)(ConvertHistory);
