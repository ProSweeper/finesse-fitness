import { useEffect } from 'react';
import WorkoutExercise from '../WorkoutExercise/WorkoutExercise';
import './ViewWorkoutPopup.css';

export default function ViewWorkoutPopup({ 
  allExercises, 
  workoutBeingViewed, 
  setViewWorkoutPopupOn, 
  setWorkoutBeingViewed 
}) {
  function handleClose() {
    setWorkoutBeingViewed(null);
    setViewWorkoutPopupOn(false);
  }
  console.log(workoutBeingViewed.name)
  console.log(workoutBeingViewed.workoutExercises)
  // useEffect(() => )
  const thisWorkoutExercises = workoutBeingViewed.workoutExercises.map((ex, idx) => (
    <WorkoutExercise allExercises={allExercises} weight={ex.weight} sets={ex.sets} reps={ex.reps} name={ex.id} key={idx} />
  ));
  
  return (
    <>
      { workoutBeingViewed && <div className="innerWorkout">
        <button className="closeBtn" onClick={handleClose}>X</button>
        <h3>{ workoutBeingViewed.name}</h3>
        {workoutBeingViewed.workoutExercises.length ? 
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
          <h3>No exercises Yet</h3>
          <p>Add Some to Edit Them</p>
        </div>
        }
      </div>}
    </>
  )
}