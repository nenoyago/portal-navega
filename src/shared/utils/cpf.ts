const cpfMagicNumbersFirst = [10, 9, 8, 7, 6, 5, 4, 3, 2];
const cpfMagicNumbersSecond = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

const getCPFDigit = (sum: number): number => {
  const rawOutput = (sum * 10) % 11;
  if (rawOutput === 10 || rawOutput === 11) {
    return 0;
  }
  return rawOutput;
};

const reducerOfMagicNumbers =
  (list: number[]) =>
  (acc: number, v: number, k: number): number => {
    return acc + v * list[k];
  };

const findCPFTenth = (firstNine: number[]): number => {
  const sum = firstNine.reduce(reducerOfMagicNumbers(cpfMagicNumbersFirst), 0);
  return getCPFDigit(sum);
};

const findCPFEleventh = (firstTen: number[]): number => {
  const sum = firstTen.reduce(reducerOfMagicNumbers(cpfMagicNumbersSecond), 0);
  return getCPFDigit(sum);
};

export { findCPFTenth, findCPFEleventh };
