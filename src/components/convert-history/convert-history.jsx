const ConvertHistory = () => {
  return (
    <section className="page-content__convert-history convert-history">
      <h3 className="convert-history__title">История конвертации</h3>

      <ul className="convert-history__list">
        <li className="convert-history__item">
          <time className="convert-history__datetime" dateTime="2020-11-25">25.11.2020</time>

          <div className="convert-history__operation">
            <p className="convert-history__from">1000 RUB</p>

            <p className="convert-history__arrow-icon">
              <span className="visually-hidden">конвертировано в</span>
            </p>

            <p className="convert-history__to">13,1234 USD</p>
          </div>
        </li>

        <li className="convert-history__item">
          <time className="convert-history__datetime" dateTime="2020-11-25">25.11.2020</time>

          <div className="convert-history__operation">
            <p className="convert-history__from">1000 RUB</p>

            <p className="convert-history__arrow-icon">
              <span className="visually-hidden">конвертировано в</span>
            </p>

            <p className="convert-history__to">13,1234 USD</p>
          </div>
        </li>

        <li className="convert-history__item">
          <time className="convert-history__datetime" dateTime="2020-11-25">25.11.2020</time>

          <div className="convert-history__operation">
            <p className="convert-history__from">1000 RUB</p>

            <p className="convert-history__arrow-icon">
              <span className="visually-hidden">конвертировано в</span>
            </p>

            <p className="convert-history__to">13,1234 USD</p>
          </div>
        </li>

        <li className="convert-history__item">
          <time className="convert-history__datetime" dateTime="2020-11-25">25.11.2020</time>

          <div className="convert-history__operation">
            <p className="convert-history__from">1000 RUB</p>

            <p className="convert-history__arrow-icon">
              <span className="visually-hidden">конвертировано в</span>
            </p>

            <p className="convert-history__to">13,1234 USD</p>
          </div>
        </li>

        <li className="convert-history__item">
          <time className="convert-history__datetime" dateTime="2020-11-25">25.11.2020</time>

          <div className="convert-history__operation">
            <p className="convert-history__from">1000 RUB</p>

            <p className="convert-history__arrow-icon">
              <span className="visually-hidden">конвертировано в</span>
            </p>

            <p className="convert-history__to">13,1234 USD</p>
          </div>
        </li>
      </ul>

      <button className="convert-history__clear button" type="button">Очистить историю</button>
    </section>
  );
}

export default ConvertHistory;
