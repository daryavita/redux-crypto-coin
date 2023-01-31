export const getDate = () => {
    const date = new Date()
    let dd =
    String(date.getDate()).length === 1
      ? "0" + String(date.getDate())
      : String(date.getDate());

  let mm =
    String(date.getMonth() + 1).length === 1
      ? "0" + String(date.getMonth() + 1)
      : String(date.getMonth() + 1);

  let yy = date.getFullYear();

  if (date.getMonth() > 11) {
    yy++;
    mm = "01";
    return `${dd}-${mm}-${String(yy)}`;
  }
  return `${dd}-${mm}-${String(yy)}`;
}

