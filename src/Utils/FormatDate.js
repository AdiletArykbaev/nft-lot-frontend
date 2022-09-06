export function formatDate(unixTime) {
  const milliseconds = unixTime * 1000;
  const date = new Date(milliseconds);
  const humanDateFormat = date.toLocaleString(); //2019-12-9 10:30:15
  return date;
}
