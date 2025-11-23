export const shortenText = (text: string, length: number) =>
  text.length > length ? `${text.substring(0, length)}...` : text;
