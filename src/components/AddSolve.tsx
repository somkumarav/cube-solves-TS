import React, { useState } from 'react';
import { Solve } from '../App';
import { convertToNumber } from '../hooks/convertTime';

interface Props {
  addSolve: (newSolve: Solve) => void;
  currentCube: string;
  scramble: string[];
}

export const AddSolve: React.FC<Props> = ({
  addSolve,
  currentCube,
  scramble,
}) => {
  const [timer, setTimer] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);

  const handleAdd = () => {
    const date = new Date();
    const time = convertToNumber(timer);
    console.log(time);

    if (time === 0) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    } else {
      const newSolve: Solve = {
        id: date.getTime(),
        cube: currentCube,
        time: time,
        scramble: scramble,
        date: `${date.getUTCDate()}-${date.getMonth()}-${date.getFullYear()}`,
        comment: '',
      };
      addSolve(newSolve);
    }
  };

  return (
    <div className="AddSolve">
      <div className="addSolve-content">
        <div className="addsolve-content-header">
          <h3>AddSolve</h3>
        </div>
        <div className="addsolve-content-body">
          <input
            type="text"
            placeholder="mm.ss.msms"
            value={timer}
            onChange={(e) => setTimer(e.target.value)}
          />
        </div>
        <button onClick={handleAdd}>add</button>

        {showError && (
          <div className="modal">
            cannot pars that string make sure you typed in the correct format
          </div>
        )}
      </div>
    </div>
  );
};
