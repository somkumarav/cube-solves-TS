import React from 'react';
import { cubes } from '../utils';

interface Props {
  currentCube: string;
  setCurrentCube: React.Dispatch<React.SetStateAction<string>>;
}

export const Cubes: React.FC<Props> = ({ currentCube, setCurrentCube }) => {
  return (
    <div className="Cubes">
      {cubes.map((item) => {
        return (
          <button
            key={item.index}
            className={`cubes-cube ${item.cube === currentCube && 'active'}`}
            onClick={() => {
              setCurrentCube(item.cube);
            }}
          >
            {item.cube}
          </button>
        );
      })}
    </div>
  );
};
