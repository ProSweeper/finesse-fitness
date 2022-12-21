import WorkoutExercise from '../WorkoutExercise/WorkoutExercise';
import './ViewWorkoutPopup.css';

export default function ViewWorkoutPopup({ allExercises, workout, setViewWorkoutPopupOn, setWorkoutBeingViewed }) {
  function handleClose() {
    setWorkoutBeingViewed(null);
    setViewWorkoutPopupOn(false);
  }

  let thisWorkoutExercises;
  if (workout) { thisWorkoutExercises = workout.workoutExercises.map((e, idx) => (
      <WorkoutExercise allExercises={allExercises} weight={e.weight} sets={e.sets} reps={e.reps} name={e.id} key={idx}/>
  ));}
  
  return (
    <div className="innerWorkout">
      <button className="closeBtn" onClick={handleClose}>X</button>
      <h3>{workout ? workout.name : ''}</h3>
      {workout.workoutExercises.length ? 
        <table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Weight</th>
            <th>Sets</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>
          { thisWorkoutExercises }
        </tbody>
      </table>
      :
      <div>
        <h3>No exercises yet</h3>
        <p>add some to edit them</p>
      </div>
      }
    </div>
  )
}