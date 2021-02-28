// timeConverter — конвертирует датувремя в строку нужного для нашего API формата
export function timeConverter(unix: number): string {
  const a = new Date(unix * 1000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();

  const datetime =
    date + "." + month + "." + year + " " + hour + ":" + min + ":" + sec;
  return datetime;
}
