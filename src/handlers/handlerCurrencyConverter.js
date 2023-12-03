const IndianexchangeRate = 75;

export const convertToIndianRupees = (priceInUSD) => {
  const priceInINR = priceInUSD * IndianexchangeRate;
  return priceInINR.toFixed(2);
};
