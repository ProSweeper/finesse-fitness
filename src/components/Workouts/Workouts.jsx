import { useEffect } from 'react';
import { useState, useRef } from 'react';
import './Workouts.css';
import * as workoutAPI from '../../utilities/workout-api'
import Popup from '../Popup/Popup';
export default function Workouts ({ allExercises, workouts, setWorkouts, workoutBeingEdited, setWorkoutBeingEdited }) {
  const [workoutBeingViewed, setWorkoutBeingViewed] = useState(null);
  const [viewWorkoutPopupOn, setViewWorkoutPopupOn] = useState(false);

  async function editWorkout(name) {
    const workout = await workouts.find(wO => wO.name === name);
    setWorkoutBeingViewed(workout);
    setViewWorkoutPopupOn(true);
  }

  async function handleDelete(name) {
    const workout = await workouts.find(wO => wO.name === name);
    const updatedWorkouts = await workoutAPI.deleteWorkout(workout);
    setWorkouts(updatedWorkouts);
  }

  const allWorkouts = workouts.map(w => (
    <tr>
      <td>{w.name}</td>
      <td>
        <div 
          onClick={() => editWorkout(w.name)}
          className='viewWorkout'>
            View
        </div>
      </td>
      <td>
        <div 
          onClick={() => setWorkoutBeingEdited(w.name)} 
          className='editWorkout'>
            Add to
        </div>
      </td>
      <td>
        <div 
          onClick={() => handleDelete(w.name)} 
          className='deleteWorkout'>
            Delete
        </div>
      </td>
    </tr>
  ));
  return (
    <section>
      <h1>Workouts</h1>
      <h3> {workoutBeingEdited ? `You are Adding to ${workoutBeingEdited}` : 'Select an Exercise to Add to'}  </h3>
      <table>
        <thead>
          <tr>
            <th>Workout</th>
          </tr>
        </thead>
        <tbody>
          {allWorkouts}
        </tbody>
      </table>
      <div>
        {viewWorkoutPopupOn ? <Popup 
          window={'viewWorkout'}
          workout={workoutBeingViewed}
          setViewWorkoutPopupOn={setViewWorkoutPopupOn}
          setWorkoutBeingViewed={setWorkoutBeingViewed}
          allExercises={allExercises}
        /> 
        : 
        '' 
      }
      </div>
    </section>
  );
}