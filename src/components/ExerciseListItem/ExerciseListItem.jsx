import * as workoutAPI from '../../utilities/workout-api';

import './ExerciseListItem.css';

export default function ExerciseListItem({ setWorkouts, workouts, exercise, capitalize, workoutBeingEdited}) {

  async function handleAdd(evt) {
    const name = evt.target.parentNode.parentNode.firstChild.firstChild.textContent;
    const workout = workoutBeingEdited;
    const updatedWorkout = await workoutAPI.addExercise(name, workout);
    const updatedWorkouts = workouts.map(w => w._id === updatedWorkout._id ? updatedWorkout : w);
    setWorkouts(updatedWorkouts);
  }

  return (
    <div className='exerciseListItem'>
      <div className='infoContainer'>
        <div className='info'>
          <h3>{(exercise.name)}</h3>
          <p><span className='lable'>Equipment:</span> {(exercise.equipment)}</p>
          <p><span className='lable'>Target Muscle:</span> {(exercise.target)}</p>
          <p><span className='lable'>Body Part:</span> {(exercise.bodyPart)}</p>
        </div>
          <div className="button add" onClick={handleAdd} data-alttext="A">Add to {workoutBeingEdited}</div>
      </div>
      <div className='gif'>
        <img src={exercise.gifUrl} alt="demo gif" width={'100%'} />
      </div>
    </div>
  );
}