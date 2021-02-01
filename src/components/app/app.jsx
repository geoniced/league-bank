import CurrencyConvert from "../currency-convert/currency-convert";
import ConvertHistory from "../convert-history/convert-history";

const App = () => {
  return (
    <div className="page-content__wrapper">
      <h2 className="page-content__title">Конвертер валют</h2>

      <CurrencyConvert />
      <ConvertHistory />
    </div>
  );
}

export default App;
