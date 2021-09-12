import { Link, useLocation } from 'react-router-dom';
import {
  FaTh,
  FaAward,
  FaInfoCircle,
  FaCog,
  FaUserCircle,
} from 'react-icons/fa';

interface Props {}

export const Nav: React.FC<Props> = () => {
  const location = useLocation();

  return (
    <div className="Nav container">
      <div className="nav-left">
        <h1>cubesolve</h1>
      </div>

      <div className="nav-right">
        <Link to="/">
          <FaTh
            className={`nav-right-icons ${
              location.pathname === '/' && 'active'
            }`}
          />
        </Link>
        <Link to="/leaderboard">
          <FaAward
            className={`nav-right-icons ${
              location.pathname === '/leaderboard' && 'active'
            }`}
          />
        </Link>
        <Link to="/about">
          <FaInfoCircle
            className={`nav-right-icons ${
              location.pathname === '/about' && 'active'
            }`}
          />
        </Link>
        <Link to="/settings">
          <FaCog
            className={`nav-right-icons ${
              location.pathname === '/settings' && 'active'
            }`}
          />
        </Link>
        <Link to="/user">
          <FaUserCircle
            className={`nav-right-icons ${
              location.pathname === '/user' && 'active'
            }`}
          />
        </Link>
      </div>
    </div>
  );
};
