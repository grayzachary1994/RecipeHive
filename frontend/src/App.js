import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import LoginPage from './pages/login/LoginPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' Component={LoginPage}></Route>
          <Route path='/login' Component={LoginPage}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
