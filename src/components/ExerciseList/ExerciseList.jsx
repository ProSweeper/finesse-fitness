import ExerciseListItem from '../ExerciseListItem/ExerciseListItem';

export default function ExerciseList({exercises}) {  
  const exerciseList = exercises.map((exercise, idx) => (<ExerciseListItem key={idx} exercise={exercise}/>));
  
  return (
    <div className='exerciseList'>
      {exerciseList}
    </div>
  )
}