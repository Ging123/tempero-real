export function isNumber(value:string|number) {
  const number = parseFloat(`${value}`);
  if(number) return true;
  return false;
}

export const isInt = (number:number) => number % 1 === 0;