import ExerciseListItem from '../ExerciseListItem/ExerciseListItem';

export default function ExerciseList({exercises ,capitalize}) {  
  const exerciseList = exercises.map((exercise, idx) => (<ExerciseListItem capitalize={capitalize} key={idx} exercise={exercise}/>));
  
  return (
    <div className='exerciseList'>
      <h1>exercises</h1>
      {exerciseList}
    </div>
  )
}