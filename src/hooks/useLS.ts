import { useEffect } from 'react';
import { Solve } from '../App';

export const useLS = (
  allSolves: Solve[],
  setAllSolves: React.Dispatch<React.SetStateAction<Solve[]>>
) => {
  /////////////
  useEffect(() => {
    if (allSolves.length > 10000) {
      setAllSolves((allSolves) => allSolves.slice(0, 10000));
    }
    localStorage.setItem('Allsolve', JSON.stringify(allSolves));
  }, [allSolves, setAllSolves]);

  const addSolve = (newSolve: Solve) => {
    setAllSolves([newSolve, ...allSolves]);
  };
  const deleteSolve = (id: number) => {
    const newData = allSolves.filter((item) => item.id !== id);
    setAllSolves(newData);
  };
  const addPenalty = (id: number) => {
    setAllSolves(
      allSolves.map((item) => {
        if (item.id === id) {
          return { ...item, time: item.time + 2000 };
        }
        return item;
      })
    );
  };

  return { addSolve, deleteSolve, addPenalty };
};
