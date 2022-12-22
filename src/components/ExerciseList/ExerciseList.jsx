import ExerciseListItem from '../ExerciseListItem/ExerciseListItem';

export default function ExerciseList({workouts, setWorkouts, exercisesShown ,capitalize, workoutBeingEdited }) {  
  const exerciseList = exercisesShown.map((exercise, idx) => (<ExerciseListItem setWorkouts={setWorkouts} workouts={workouts} workoutBeingEdited={workoutBeingEdited} capitalize={capitalize} key={idx} exercise={exercise}/>));
  
  return (
    <section className='exerciseListContainer'>
        <div className='listTitle'>Exercises</div>
      <div className='exerciseList'>
        {exerciseList}
      </div>
    </section> 
  )
}