import produce from "immer"

let initialState = 
    [
        {id: 1, name: 'Pushup', description: 'Chest', link: 'https://www.bodybuilding.com/exercises/pushups'},
        {id: 2, name: 'Bench Dips', description: 'Triceps', link: 'https://www.bodybuilding.com/exercises/bench-dips'}
    ];

const ExerciseReducer = (state = { exercisesList: initialState, selectedExercise: {} }, action) => {
    let nextState = {};
    
    switch (action.type){
        case 'EXERCISES_LOADED':
            return state
        case 'EXERCISES_LOAD_FAIL':
            return {...state, error: 'It was not possible to load the exercises.'}
        case 'SELECTED_EXERCISE':
            return {...state, selectedExercise: action.data}
        case 'EXERCISE_CREATED':
            nextState = produce(state, draftState => {
                draftState.exercisesList.push(action.data)
            });
            return nextState;
        case 'DELETED_EXERCISE':
            nextState = produce(state, draftState => {
                
                //Removing the selected exercise from the array
                let index = draftState.exercisesList.indexOf(action.data);
                draftState.exercisesList.splice(index, 1);
                
                //Cleaning the selected exercise
                draftState.selectedExercise = {};
            });
            return nextState;
        default:
            return state;
    }
}

export default ExerciseReducer;