//Creating action
export const loadExercises = () => {
    //When you return a function inside an action, redux thunk will take this action.
    //Only for side effects
    
    return function (dispatch) {
        dispatch(exercisesLoaded())
    }
}

export const createExercise = (exercise) => {
    
    //Simulating the calling of an API that would store the exercise in the database
    return function (dispatch) {
        setTimeout(() =>{
            dispatch(createdExercise(exercise))
        }, 2000)
    }
}

export const selectedExercise = (exercise) => {
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

const createdExercise = (exercise) => {
    return {
        type: 'EXERCISE_CREATED',
        data: exercise
    };
}