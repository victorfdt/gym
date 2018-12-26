//Creating action
export const loadExercises = () => {
    //When you return a function inside an action, redux thunk will take this action.
    
    return function (dispatch) {
        dispatch(exercisesLoaded())
    }
}

export const selectExercise = (exercise) => {
    return function (dispatch){
        dispatch(selectedExercise(exercise))
    }
}

const selectedExercise = (exercise) => {
    return {
        type: 'SELECTED_EXERCISE',
        data: exercise
    };
}

const exercisesLoaded = () => {
    return {
        type: 'EXERCISES_LOADED'
    };
}

const exercisesLoadFail = (data) => {
    return {
        type: 'EXERCISES_LOAD_FAIL',
    };
}




