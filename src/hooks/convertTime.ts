// This is not a Hook
export const convert = (time: number) => {
  const diff = time;
  const seconds = Number(((diff % 100000) % 60000) / 1000)
    .toFixed(2)
    .padStart(5, '0');
  const minutes = Math.floor(diff / 60000) % 60;
  const hours = Math.floor(diff / 3600000) % 60;
  // // 123410

  if (hours) {
    return `${hours}.${minutes}.${seconds}`;
  } else if (minutes) {
    return `${minutes}.${seconds}`;
  } else {
    return `${seconds}`;
  }
};

export const convertToNumber = (time: string) => {
  // const errorMessage: string =
  //   'cannot pars that string make sure you typed in the correct format';
  // 0.12
  // 1.12
  // 1.00
  // 1.00.12
  // 1.1.00.12

  let result = 0;
  const timer = time.split('.');
  console.log(timer);

  if (timer.length === 2) {
    const sec = parseInt(timer[0]) * 1000;
    const ms = parseInt(timer[1]);
    result = sec + ms;
    console.log(result);
    return result;
  } else if (timer.length === 3) {
    const min = parseInt(timer[0]) * 60 * 1000;
    const sec = parseInt(timer[1]) * 1000;
    const ms = parseInt(timer[2]);
    result = min + sec + ms;
    console.log(result);
    return result;
  } else if (timer.length === 4) {
    const hour = parseInt(timer[0]) * 60 * 1000;
    const min = parseInt(timer[1]) * 60 * 1000;
    const sec = parseInt(timer[2]) * 1000;
    const ms = parseInt(timer[3]);
    result = hour + min + sec + ms;
    console.log(result);
    return result;
  }
  return 0;
};
