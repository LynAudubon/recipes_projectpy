import { createSlice } from '@reduxjs/toolkit';

 const dateAdded = () => {
        let count = 0;
        let date;

        if(count > 0) return date;
        date = new Date().toDateString()
        return date;
    };

const dateModified = () => new Date().toDateString();

const recipe = createSlice({
    name: 'recipe',
    initialState: {
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
    },
    reducers: {
        recipeSlice: (state, action) => {
            state = action.payload
            return {...state, date_added: dateAdded(), date_modified: dateModified()}
        }
    }
});

export const { recipeSlice } = recipe.actions;
export default recipe.reducer;