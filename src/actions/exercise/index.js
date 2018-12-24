//Creating action
export const loadExercises = () => {
    //When you return a function inside an action, redux thunk will take this action.
    
    return function (dispatch) {
        dispatch(exercisesLoaded())
        //dispatch(selectedExercise(videos[0]))
    }

}

const exercisesLoaded = (data) => {
    return {
        type: 'EXERCISES_LOADED',
        data: data
    };
}

const exercisesLoadFail = (data) => {
    return {
        type: 'EXERCISES_LOAD_FAIL',
    };
}

export const selectedExercise = (data) => {
    return {
        type: 'SELECTED_EXERCISE',
        data: data
    };
}




