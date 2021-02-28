// timeConverter — конвертирует датувремя в строку нужного для нашего API формата

function toZeroLeadFormat(time: number): string {
  if (time < 10) return `0${time}`;
  return `${time}`;
}

export function dayToMilliseconds(days: number): number {
  return days * 86400000;
}

export function timeConverter(unix: number): string {
  const a = new Date(unix);
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();

  const datetime =
    toZeroLeadFormat(date) +
    "." +
    month +
    "." +
    toZeroLeadFormat(year) +
    " " +
    toZeroLeadFormat(hour) +
    ":" +
    toZeroLeadFormat(min) +
    ":" +
    toZeroLeadFormat(sec);
  return datetime;
}
