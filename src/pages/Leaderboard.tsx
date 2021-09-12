import { useState } from 'react';
import { FaMedal } from 'react-icons/fa';
import { Cubes } from '../components/Cubes';

interface Props {}

const leaderboard = [
  {
    id: 1,
    name: 'Yusheng Du',
    time: 3.47,
    country: 'China',
    date: '10 April 2018',
  },
  {
    id: 2,
    name: 'Ruihang Xu',
    time: 4.06,
    country: 'China',
    date: '10 April 2018',
  },
  {
    id: 3,
    name: 'Feliks Zemdegs',
    time: 4.16,
    country: 'United States',
    date: '10 April 2018',
  },
  {
    id: 4,
    name: 'Patrick Ponce',
    time: 4.06,
    country: 'United States',
    date: '10 April 2018',
  },
  {
    id: 5,
    name: 'Max Park',
    time: 4.16,
    country: 'United States',
    date: '10 April 2018',
  },
  {
    id: 6,
    name: 'Yusheng Du',
    time: 3.47,
    country: 'China',
    date: '10 April 2018',
  },
  {
    id: 7,
    name: 'Yusheng Du',
    time: 3.47,
    country: 'China',
    date: '10 April 2018',
  },
  {
    id: 8,
    name: 'Yusheng Du',
    time: 3.47,
    country: 'China',
    date: '10 April 2018',
  },
  {
    id: 9,
    name: 'Yusheng Du',
    time: 3.47,
    country: 'China',
    date: '10 April 2018',
  },
  {
    id: 10,
    name: 'Yusheng Du',
    time: 3.47,
    country: 'China',
    date: '10 April 2018',
  },
];

export const Leaderboard: React.FC<Props> = () => {
  const [currentCube, setCurrentCube] = useState<string>('3x3');
  return (
    <div className="Leaderboard container">
      <div className="leaderboard">
        <div className="leaderboard-table">
          <div className="leaderboard-table-header">
            <h3 className="leaderboard-table-header-pos">#</h3>
            <h3 className="leaderboard-table-header-name">name</h3>
            <h3 className="leaderboard-table-header-time">time</h3>
            <h3 className="leaderboard-table-header-country">country</h3>
            <h3 className="leaderboard-table-header-date">date</h3>
          </div>
          {leaderboard.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`leaderboard-table-item ${
                  index % 2 !== 0 && 'light'
                }`}
              >
                {item.id <= 3 ? (
                  <h3 className="leaderboard-table-item-pos">
                    <FaMedal
                      className={`leaderboard-table-item-pos-${item.id}`}
                    />
                  </h3>
                ) : (
                  <h3 className="leaderboard-table-item-pos">{item.id}</h3>
                )}
                <h3 className="leaderboard-table-item-name">{item.name}</h3>
                <h3 className="leaderboard-table-item-time">{item.time}</h3>
                <h3 className="leaderboard-table-item-country">
                  {item.country}
                </h3>
                <h3 className="leaderboard-table-item-date">{item.date}</h3>
              </div>
            );
          })}
        </div>
        <div className="leaderboard-cubes">
          <Cubes currentCube={currentCube} setCurrentCube={setCurrentCube} />
        </div>
      </div>
    </div>
  );
};
