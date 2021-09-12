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
