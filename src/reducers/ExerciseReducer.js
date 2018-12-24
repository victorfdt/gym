let initialState = [{name: 'Pushup', description: 'TODO', link: 'https://www.google.com'}];

const ExerciseReducer = (state = initialState, action) => {
    
    switch (action.type){
        case 'EXERCISES_LOADED':
            return state
        default:
            return state;
    }
}

export default ExerciseReducer;