export const formatAmountForStripe = (amount: number, currency: string) => {
  const numberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  });
  console.log({ numberFormat });
  const parts = numberFormat.formatToParts(amount);
  console.log(parts);

  let zeroDecimalCurrency = true;
  for (const part of parts) {
    if (part.type === "decimal") {
      zeroDecimalCurrency = false;
      break;
    }
  }
  console.log(zeroDecimalCurrency);
  return zeroDecimalCurrency ? amount : Math.round(amount * 100);
};
