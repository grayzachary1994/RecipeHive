import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import RecipeListPage from './pages/recipe-list/RecipeListPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' Component={RecipeListPage}></Route>
          <Route path='/login' Component={LoginPage}></Route>
          <Route path='/register' Component={RegisterPage}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
