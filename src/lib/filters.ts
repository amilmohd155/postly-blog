export const nameFilter =
  <T>(property: keyof T, value: string) =>
  (item: T) =>
    item[property]?.toString().toLowerCase().includes(value.toLowerCase());
