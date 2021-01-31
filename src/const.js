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
  },
  [Currency.EUR]: {
    [Currency.RUB]: 92.19,
    [Currency.USD]: 1.214,
    [Currency.GBP]: 0.886,
    [Currency.CNY]: 7.802,
  },
  [Currency.GBP]: {
    [Currency.RUB]: 104.096,
    [Currency.USD]: 1.371,
    [Currency.EUR]: 1.129,
    [Currency.CNY]: 8.809,
  },
  [Currency.CNY]: {
    [Currency.RUB]: 11.817,
    [Currency.USD]: 0.156,
    [Currency.EUR]: 0.128,
    [Currency.GBP]: 0.114,
  },
};
