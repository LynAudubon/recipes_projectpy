import * as recipesAPI from "../../api/index";
import { allRecipesSlice, addRecipeSlice, updateRecipeSlice, deleteRecipeSlice} from '../slice/recipes';
import  { GET_RECIPES, GET_RECIPE_BY_ID, CREATE_RECIPE, UPDATE_RECIPE_BY_ID, DELETE_RECIPE_BY_ID } from '../types/index';
import { recipeSlice } from '../slice/recipe';
import { put, takeEvery } from 'redux-saga/effects'

export function* getRecipesSaga() {
    const recipes = yield recipesAPI.getRecipesAPI()
    yield put(allRecipesSlice(recipes.data))
}

export function* getRecipeByIdsSaga(action) {
    yield recipesAPI.getRecipeByIdAPI(action.id)
    yield put(recipeSlice(action.id))
}

export function* createRecipeSaga(action){
    console.log('called')
    yield recipesAPI.createRecipeAPI(action.recipe)
    yield put(addRecipeSlice(action.recipe))
}

export function* updateRecipeSaga(action) {
    yield recipesAPI.updateRecipeAPI(action.recipe)
    yield put(updateRecipeSlice(action.recipe))
}
export function* deleteRecipeSaga (action) {
    yield recipesAPI.deleteRecipeAPI(action.id)
    yield put(deleteRecipeSlice(action.id))
}

export function* watchRecipesAsync() {
    yield takeEvery(GET_RECIPES, getRecipesSaga)
    yield takeEvery(GET_RECIPE_BY_ID, getRecipeByIdsSaga)
    yield takeEvery(CREATE_RECIPE, createRecipeSaga)
    yield takeEvery( UPDATE_RECIPE_BY_ID, updateRecipeSaga)
    yield takeEvery(DELETE_RECIPE_BY_ID, deleteRecipeSaga)
}