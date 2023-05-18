import './App.css';
import RequireAuth from './pages/components/RequireAuth';
import { Route, Routes } from 'react-router-dom';

import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import RecipeListPage from './pages/recipe-list/RecipeListPage';
import AddRecipePage from './pages/add-recipe/AddRecipePage';
import UpdateRecipePage from './pages/update-recipe/UpdateRecipePage';
import Layout from './Layout.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Layout}>
          {/* public routes */}
          <Route path='login' Component={LoginPage}></Route>
          <Route path='register' Component={RegisterPage}></Route>

          {/* private routes */}
          <Route element={<RequireAuth />}>
            <Route path='/' Component={RecipeListPage}></Route>
            <Route path='add' Component={AddRecipePage}></Route>
            <Route path='update/:id' Component={UpdateRecipePage}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
