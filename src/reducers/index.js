import { combineReducers } from 'redux'
import ExerciseReducer from './ExerciseReducer'

export default combineReducers({
    exercise: ExerciseReducer
});