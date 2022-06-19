import { all } from 'redux-saga/effects';
import { watchRecipesAsync } from './recipe'

export function* rootSaga(){
    yield all([watchRecipesAsync])
}
