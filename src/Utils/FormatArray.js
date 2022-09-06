export function formatArray(arr) {
  const formatedNumber = arr.map((item) => parseInt(item._hex, 16));
  console.log("res in format array", formatedNumber);
  return formatedNumber;
}
