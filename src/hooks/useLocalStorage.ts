// Currently we are not using this hook insted it implemented in ./useLS.ts
// I really want to useThis hook but it has some problems
import { useEffect, useState } from 'react';

interface Solve {
  id: number;
  time: number;
  scramble: string[];
  cube: string;
}

const fetchAllSolves = () => {
  let list = localStorage.getItem('AllSolve');
  if (list) {
    return JSON.parse(localStorage.getItem('AllSolve') as string);
  }
  return [];
};
export const useLocalStorage = () => {
  const [allSolves, setAllSolves] = useState<Solve[]>(fetchAllSolves());

  useEffect(() => {
    if (allSolves.length >= 10000) {
      setAllSolves((prev) => prev.slice(0, 10000));
    }
    localStorage.setItem('AllSolves', JSON.stringify(allSolves));
  }, [allSolves]);

  const addSolve = (
    id: number,
    time: number,
    cube: string,
    scramble: string[]
  ) => {
    const solve = {
      id: id,
      time: time,
      scramble: scramble,
      cube: cube,
    };
    setAllSolves((prev) => [solve, ...prev]);
  };

  return { allSolves, setAllSolves, addSolve };
};
