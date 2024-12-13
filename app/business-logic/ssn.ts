// this function will assume is nineDigitsSSN string length is 9
export const validateSSN = (nineDigitsSSN: string) => {
  let sum = 0;
  String(nineDigitsSSN).split("").map(Number).forEach((item, index) => {
    if (index % 2 === 1) {
      const x = 2 * item;
      if (x > 9) {
        sum += 1;
        sum += x % 10;
      } else {
        sum += x;
      }
    } else {
      sum += item;
    }
  });
  return sum % 10 === 0;
}
