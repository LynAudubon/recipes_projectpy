import { createSlice } from '@reduxjs/toolkit';

const recipes = createSlice({
    name: 'recipes',
    initialState: [{
        id: 'abc',
        name: "Tacos",
        imageUrl: 'https://media.istockphoto.com/photos/the-cheesy-gordita-beef-taco-picture-id1303687532?b=1&k=20&m=1303687532&s=170667a&w=0&h=HbmiNR2rfTKsukjhBpN2vjlWfCt_uYgPGwunuCVICqs=',
        ingredients: "lettuce, tomato, green onions, 6 inch corn torillas, ground beef, taco seasoning, cotija cheese",
        instructions: "1. Mix taco seasoning with ground beef in a hot skillet until well cooked 2. Chop lettuce and dice tomato and green onions 3. Warm the tortillas in foil wrap in an oven for a few minutes 4. Prepare to eat by adding 1-2 table spoon(s) of taco mix to tortilla, then top with fresh sides",
        serving_size: 4,
        category: "Lunch/Dinner",
        notes: "Serve with side of mexican rice and/ or pinto beans",
        date_added: "6/11/2022",			
        date_modified: "n/a"

    }],
    reducers: {
        allRecipesSlice: (state, action) => {
            state = action.payload
            return state
        },

        addRecipeSlice: (state, action) => {
            // console.log('action',action.payload)
            // console.log('state',state)
            state.push(action.payload)
            return state
        },

        updateRecipeSlice: (state, action) => {
            // console.log('state',state)
            state = state.map(item => item.id === action.payload.id ? action.payload : item)
            return state
        },

        deleteRecipeSlice: (state, action) => {
            state = state.filter(item => item.id !== action.payload)
            return state
        }
    }
});

export const { allRecipesSlice, addRecipeSlice, updateRecipeSlice,  deleteRecipeSlice } = recipes.actions;
export default recipes.reducer;