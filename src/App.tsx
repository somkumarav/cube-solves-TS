import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { convert } from './hooks/convertTime';
import { useLS } from './hooks/useLS';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Leaderboard } from './pages/Leaderboard';
import { Settings } from './pages/Settings';
import { User } from './pages/User';
import './sass/App.scss';

export interface Solve {
  id: number;
  time: number;
  cube: string;
  scramble: string[];
  date: string;
  comment: string;
}

const getallDataFromLocalStorage = () => {
  let list = localStorage.getItem('Allsolve');
  if (list) {
    return JSON.parse(localStorage.getItem('Allsolve') as string);
  }
  return [];
};

const App = () => {
  const [allSolves, setAllSolves] = useState<Solve[]>(
    getallDataFromLocalStorage()
  );
  const { addSolve, deleteSolve, addPenalty } = useLS(allSolves, setAllSolves);

  const findAverage = (loop: number, currentCube: string) => {
    let sum = 0;
    let count = 0;
    allSolves.forEach((item) => {
      if (item.cube === currentCube && count < loop) {
        count = count + 1;
        sum = sum + item.time;
      }
    });
    if (count === loop) {
      const data = sum / loop;
      return convert(data);
    }
    return '0.00';
  };

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home
              deleteSolve={deleteSolve}
              addSolve={addSolve}
              addPenalty={addPenalty}
              findAverage={findAverage}
            />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/user">
            <User allSolve={allSolves} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
