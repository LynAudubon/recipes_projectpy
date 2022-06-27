import './App.css';
import '../src/css/global.css';
import { Route, Routes } from 'react-router-dom';
import Form from './components/RecipesForm';
// import MyTable from './components/MyTable';
import Table from './components/Table';
import RecipeCard from './components/RecipeCard';
import UpdateRecipe from './components/UpdateRecipe';
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';
import store from './store';
const App = () => {
  
  return <>
  <NavBar />
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Table/>} />
        <Route path='/add-recipe' element={<Form/>} />
        <Route path='/update-recipe/:id' element={<UpdateRecipe/>} />
        <Route path='/recipe/:id' element={<RecipeCard/>} />
      </Routes>
    </Provider>
  </>
}
export default App;

