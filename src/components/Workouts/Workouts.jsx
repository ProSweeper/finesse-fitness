import { useEffect } from 'react';
import { useState, useRef } from 'react';
import './Workouts.css';
import * as workoutAPI from '../../utilities/workout-api'
export default function Workouts ({ workouts, workoutBeingEdited, setWorkoutBeingEdited }) {
  
  const allWorkouts = workouts.map(w => (
    <tr>
      <td>{w.name}</td>
      <td>
        <div className='viewWorkout'>View</div>
      </td>
      <td>
        <div 
          onClick={() => setWorkoutBeingEdited(w.name)} 
          className='editWorkout'
        >
            Edit
        </div>
      </td>
      <td>
        <div className='deleteWorkout'>Delete</div>
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
    </section>
  );
}