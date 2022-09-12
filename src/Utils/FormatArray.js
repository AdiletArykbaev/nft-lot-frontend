export function formatArray(arr) {
  const formatedNumber = arr.map((item) => parseInt(item._hex, 16));
  return formatedNumber;
}
