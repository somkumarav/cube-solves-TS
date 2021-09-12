import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { convert } from './hooks/convertTime';
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

  useEffect(() => {
    if (allSolves.length > 10000) {
      setAllSolves((allSolves) => allSolves.slice(0, 10000));
    }
    localStorage.setItem('Allsolve', JSON.stringify(allSolves));
  }, [allSolves]);

  // FUNCTIONS
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
