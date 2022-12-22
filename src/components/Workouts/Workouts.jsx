import { useState, useEffect } from 'react';
import './Workouts.css';
import * as workoutAPI from '../../utilities/workout-api'
import Popup from '../Popup/Popup';

export default function Workouts ({ allExercises, workouts, setWorkouts, workoutBeingEdited, setWorkoutBeingEdited }) {
  const [workoutBeingViewed, setWorkoutBeingViewed] = useState(null);
  const [viewWorkoutPopupOn, setViewWorkoutPopupOn] = useState(false);

  // async function editWorkout(workout) {
  //     // const thisWorkout = await workouts.find(wO => wO === workout);
  //     setWorkoutBeingViewed(workout);
  //     setViewWorkoutPopupOn(true);
  //     console.log(`workout: ${workout}`);
  //     console.log(`workoutBeingViewed: ${workoutBeingViewed}`);
  // }

  async function handleDelete(name) {
    const workout = await workouts.find(wO => wO.name === name);
    const updatedWorkouts = await workoutAPI.deleteWorkout(workout);
    setWorkouts(updatedWorkouts);
  }

  const allWorkouts = workouts.map(workout => (
    <tr>
      <td>{workout.name}</td>
      <td>
        <div 
          onClick={() => {
            setWorkoutBeingViewed(workout);
            setViewWorkoutPopupOn(true);
            console.log(workout);
            console.log(`workoutBeingViewed: ${workoutBeingViewed}`);
          }}
          className='viewWorkout'>
            View
        </div>
      </td>
      <td>
        <div 
          onClick={() => setWorkoutBeingEdited(workout.name)} 
          className='editWorkout'>
            Add to
        </div>
      </td>
      <td>
        <div 
          onClick={() => handleDelete(workout.name)} 
          className='deleteWorkout'>
            Delete
        </div>
      </td>
    </tr>

  ));
  return (
    <section className='workoutsContainer'>
      <div className='workoutsHeader'>
        <h1>Workouts</h1>
        <h3>{workoutBeingEdited ? `You are Adding to ${workoutBeingEdited}` : 'Select an Exercise to Add to'}</h3>
      </div>
      <table className='workoutsTable'>
        <tbody>
          {allWorkouts}
        </tbody>
      </table>
      <div>
        {viewWorkoutPopupOn ? <Popup 
          window={'viewWorkout'}
          workoutBeingViewed={workoutBeingViewed}
          setWorkoutBeingViewed={setWorkoutBeingViewed}
          setViewWorkoutPopupOn={setViewWorkoutPopupOn}
          allExercises={allExercises}
        /> 
        : 
        '' 
      }
      </div>
    </section>
  );
}