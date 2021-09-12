import { useState, useEffect } from 'react';
import { scrambles2x2, scrambles3x3, scrambles4x4 } from '../utils';

const createScramble = (limit: number, scrambles: string[]) => {
  // Problems with scrambel
  // L L'

  let newScramble = [];
  let previous;
  for (let i = 0; i < limit; i++) {
    const random = Math.floor(Math.random() * scrambles.length);
    const current = scrambles[random];
    if (previous && previous === current) {
      newScramble.push(scrambles[random + 1]);
      previous = scrambles[random + 1];
    } else {
      previous = current;
      newScramble.push(current);
    }
  }
  return newScramble;
};
const generateNewScramble = (cube: string) => {
  if (cube === '2x2') {
    return createScramble(9, scrambles2x2);
  }
  if (cube === '3x3' || cube === '3x3 blind' || cube === '3x3 onehand') {
    return createScramble(20, scrambles3x3);
  }
  if (cube === '4x4' || cube === '4x4 blind') {
    return createScramble(46, scrambles4x4);
  }
  if (cube === '5x5') {
    return createScramble(60, scrambles4x4);
  }
  if (cube === '6x6') {
    return createScramble(80, scrambles4x4);
  }
  if (cube === '7x7') {
    return createScramble(100, scrambles4x4);
  } else {
    return [''];
  }
};

export const useScramble = (cube: string) => {
  const [scramble, setScramble] = useState<string[]>([]);

  useEffect(() => {
    setScramble(generateNewScramble(cube));
  }, [cube]);

  const refreshScramble = () => {
    setScramble(generateNewScramble(cube));
  };

  return { scramble, refreshScramble };
};
