import { useEffect, useState } from 'react';
import { Solve } from '../App';
import { Cubes } from '../components/Cubes';
import { convert } from '../hooks/convertTime';
import { DisplaySolve } from '../components/DisplaySolve';

interface Props {
  allSolve: Solve[];
}

export const User: React.FC<Props> = ({ allSolve }) => {
  const [currentCube, setCurrentCube] = useState<string>('3x3');
  const [displayData, setDisplayData] = useState<Solve[]>([]);
  const [pagination, setPagination] = useState<number>(10);
  const [showDisplaySolve, setShowDisplaySolve] = useState<boolean>(true);
  const [displaySolve, setDisplaySolve] = useState<Solve>();

  useEffect(() => {
    const data = allSolve.filter((item) => item.cube === currentCube);
    setDisplayData(data);
  }, [allSolve, currentCube]);

  return (
    <div className="User container">
      {showDisplaySolve && displaySolve && (
        <DisplaySolve
          solve={displaySolve}
          setShowDisplaySolve={setShowDisplaySolve}
        />
      )}
      <div className="user-header">
        <div className="user-header-item">
          <h3>Best AO5</h3>
          <h2>4.12</h2>
        </div>
        <div className="user-header-item">
          <h3>Best Solve</h3>
          <h2>3.12</h2>
        </div>
        <div className="user-header-item">
          <h3>Best AO12</h3>
          <h2>6.12</h2>
        </div>
      </div>

      <Cubes currentCube={currentCube} setCurrentCube={setCurrentCube} />

      <div className="user-all-solves">
        <div className="user-all-solves-header">
          <h3 className="user-all-solves-header-time">Time</h3>
          <h3 className="user-all-solves-header-scramble">Scramble</h3>
          <h3 className="user-all-solves-header-date">Date</h3>
        </div>
        {displayData.length ? (
          displayData.slice(0, pagination).map((item, index) => {
            return (
              <div
                key={item.id}
                className={`user-all-solves-item ${index % 2 !== 0 && 'dark'}`}
                onClick={() => {
                  setDisplaySolve(item);
                  setShowDisplaySolve(true);
                }}
              >
                <h3 className="user-all-solves-item-time">
                  {convert(item.time)}
                </h3>
                <h3 className="user-all-solves-item-scramble">
                  {item.scramble.length > 20
                    ? item.scramble.slice(0, 15) + '...'
                    : item.scramble}
                </h3>
                <h3 className="user-all-solves-item-date">{item.date}</h3>
              </div>
            );
          })
        ) : (
          <div className="user-all-solves-no-solve">
            <h2>No Data</h2>
          </div>
        )}

        {displayData.length > 10 && (
          <div className="user-all-solves-pagination">
            <button
              className="user-all-solves-pagination-button"
              onClick={() => {
                setPagination((prev) => prev + 5);
              }}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
