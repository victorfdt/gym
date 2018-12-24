//Creating action
export const loadExercises = () => {
    //When you return a function inside an action, redux thunk will take this action.
    
    return function (dispatch) {
        dispatch(exercisesLoaded())
    }
}

export const selectExercise = (exerciseId) => {
    return function (dispatch){
        dispatch(selectedExercise(exerciseId))
    }
}

const selectedExercise = (data) => {
    return {
        type: 'SELECTED_EXERCISE',
        data: data
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




