import React from 'react';

//It was a class component, now it is a function component
const ExerciseItem = (props) => {
  return(
    <li style={{cursor: "pointer"}} onClick={props.onClick}>{props.exerciseName}</li>
  );
}

export default ExerciseItem;