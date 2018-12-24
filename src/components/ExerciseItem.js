import React from 'react';

//It was a class component, now it is a function component
const ExerciseItem = (props) => {
  return(
    <li><span key={props.key}>{props.name}</span></li>
  );
}

export default ExerciseItem;

//TODO Do I need to use key twice?