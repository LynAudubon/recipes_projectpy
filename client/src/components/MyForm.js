import { Container, Input, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { recipeSlice } from '../redux/slice/recipe';
import { nanoid } from '@reduxjs/toolkit';
import { CREATE_RECIPE, UPDATE_RECIPE_BY_ID } from '../redux/types/index';

const RecipesForm = () => {
    const recipe = useSelector(state => state.recipe);
    const dispatch = useDispatch();
    // console.log('recipeID',recipe.id === 0)
    // console.log('recipe',recipe)

    const handleChange = (prop) => (event) => {
        dispatch(recipeSlice({...recipe, [prop]: event.target.value}));
    }

    const handleSubmit = () => {
        // console.log('handlesubmit')
        // recipe.id === 0 ? dispatch(addRecipeSlice({...recipe, id: nanoid(8)})) : dispatch(updateRecipeSlice(recipe))
        recipe.id === 0 ? dispatch({type: CREATE_RECIPE, recipe: {...recipe, id: nanoid(8)}}) : dispatch(UPDATE_RECIPE_BY_ID, recipe)

        dispatch(recipeSlice({
            id: 0,
            name: '',
            imageUrl: 'https://media.istockphoto.com/photos/the-cheesy-gordita-beef-taco-picture-id1303687532?b=1&k=20&m=1303687532&s=170667a&w=0&h=HbmiNR2rfTKsukjhBpN2vjlWfCt_uYgPGwunuCVICqs=',
            ingredients: '',
            instructions: '',
            serving_size: undefined,
            category: '',
            notes: '',
            date_added: '',			
            date_modified: ''
        }))

    }
    return <>
        <Container>
            <label>Name:</label>
            <Input onChange={handleChange('name')} placeholder='Enter name' value={recipe.name} fullWidth></Input>
             <label>Serving Size:</label>
            <Input onChange={handleChange('serving size')} placeholder='Enter serving size'value={recipe.serving_size} fullWidth></Input>
             <label>Ingredients:</label>
            <Input onChange={handleChange('ingredients')} placeholder='Enter ingredients'value={recipe.ingredients} fullWidth></Input>
             <label>Instructions:</label>
            <Input onChange={handleChange('instructions')} placeholder='Enter instructions'value={recipe.instructions} fullWidth></Input>
             <label>Category:</label>
            <Input onChange={handleChange('category')} placeholder='Enter category (ie lunch, dinner)'value= {recipe.category} fullWidth></Input>
            <label>Notes:</label>
            <Input onChange={handleChange('notes')} placeholder='Enter details'value={recipe.notes} fullWidth></Input>
            <Button onClick={() => handleSubmit()} variant='contained' fullWidth>Submit</Button>
        </Container>
   </>
}

export default RecipesForm;