export const Currency = {
  RUB: `RUB`,
  USD: `USD`,
  EUR: `EUR`,
  GBP: `GBP`,
  CNY: `CNY`,
}

export const CurrencyRate = {
  [Currency.RUB]: {
    [Currency.USD]: 0.013114,
    [Currency.EUR]: 0.010835,
    [Currency.GBP]: 0.009589,
    [Currency.CNY]: 0.084729,
  },
  [Currency.USD]: {
    [Currency.RUB]: 75.955,
    [Currency.EUR]: 0.823893,
    [Currency.GBP]: 0.729661,
    [Currency.CNY]: 6.4276,
  }
};
