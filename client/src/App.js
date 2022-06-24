import './App.css';
import { Grid } from '@material-ui/core';
import { Route, Routes } from 'react-router-dom';
import MyForm from './components/MyForm';
import MyTable from './components/MyTable';
import UpdateRecipe from './components/UpdateRecipe';

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  
  return <>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Grid item xs={12} md={8} lg={6}><MyTable /></Grid> }/>
        <Route path='/add-recipe' element={<Grid item xs={12} md={4} lg={6}><MyForm/></Grid>} />
        <Route path='/update-recipe/:id' element={<Grid item xs={12} md={4} lg={6}><UpdateRecipe/></Grid>} />
      </Routes>
    </Provider>
  </>
}

export default App;
