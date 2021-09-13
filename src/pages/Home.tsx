import { useEffect, useState } from 'react';
import { FaRedoAlt, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Solve } from '../App';
import { useScramble } from '../hooks/useScramble';
import { useTimer } from '../hooks/useTimer';
import { cubes } from '../utils';
import { AddSolve } from '../components/AddSolve';

interface Props {
  deleteSolve: (id: number) => void;
  addSolve: (newSolve: Solve) => void;
  addPenalty: (id: number) => void;
  findAverage: (loop: number, currentCube: string) => string;
}

//==============
// TODO
//==============
// +2 Solves glitch
// delete solve glitch
// scrambles twice glitch

export const Home: React.FC<Props> = ({
  deleteSolve,
  addSolve,
  addPenalty,
  findAverage,
}) => {
  const [currentCube, setCurrentCube] = useState<string>('3x3');
  const [isTabed, setIsTabed] = useState<boolean>(false);
  const [showList, setShowList] = useState<boolean>(false);
  const { scramble, refreshScramble } = useScramble(currentCube);
  const { prevId, format } = useTimer(
    refreshScramble,
    addSolve,
    currentCube,
    scramble
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // console.log(e.code);
      if (e.code === 'Tab') {
        e.preventDefault();
        setIsTabed(true);
      }
      if (e.code === 'Enter' && isTabed) {
        e.preventDefault();
        refreshScramble();
        setIsTabed(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isTabed, refreshScramble]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (showList) {
        setShowList(false);
      }
    };

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  });

  return (
    <div className="Home container">
      <AddSolve
        addSolve={addSolve}
        currentCube={currentCube}
        scramble={scramble}
      />
      <div className="home-header">
        <div className="home-header-change-cube">
          <div
            className="home-header-change-cube-current-cube"
            onClick={() => {
              setShowList((prev) => !prev);
            }}
          >
            <h3>
              {currentCube}
              <FaChevronDown />
            </h3>
          </div>
          <div
            className={`home-header-change-cube-list ${!showList && 'hidden'}`}
          >
            {showList &&
              cubes.map((item) => {
                return (
                  <div
                    key={item.index}
                    className="home-header-change-cube-list-item"
                    onClick={() => {
                      setCurrentCube(item.cube);
                      setShowList(false);
                    }}
                  >
                    {item.cube}
                  </div>
                );
              })}
          </div>
        </div>
        <h2 className="home-header-scramble">{scramble}</h2>
      </div>
      <div className="home-time-and-data">
        <h1 className="home-time-and-data-time">{format()}</h1>
        <h2 className="home-time-and-data-average">
          <span className="home-time-and-data-average-text">ao5:</span>
          <span>{findAverage(5, currentCube)}</span>
        </h2>
        <h2 className="home-time-and-data-average">
          <span className="home-time-and-data-average-text">ao12:</span>
          <span>{findAverage(12, currentCube)}</span>
        </h2>
        <div className="home-time-and-data-buttons">
          <button onClick={() => addPenalty(prevId)}>
            <h2>+2</h2>
          </button>
          <button onClick={refreshScramble}>
            <FaRedoAlt />
          </button>

          <button onClick={() => deleteSolve(prevId)}>
            <FaTimes />
          </button>
        </div>
      </div>
      <div className="home-guide">
        <div className="home-guide-button">
          <div className="button-div">Tab</div>
          <h3>+</h3>
          <div className="button-div">Enter</div>
          <h3>- Next Scramble</h3>
        </div>
      </div>
    </div>
  );
};
