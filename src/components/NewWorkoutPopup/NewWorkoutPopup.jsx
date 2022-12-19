import React from 'react';
import './NewWorkoutPopup.css';

export default function NewWorkoutPopup({ setPopupOn }) {
  return (
    <div className='popup'>
      <div className='innerPopup'>
        <h3>New Workout</h3>
        <form>
          <label htmlFor='workoutName'>Name
            <input type='text' name='workoutName' placeholder='New Workout'/>
          </label>
          <button className='add'>Add Workout</button>
        </form>
        <button className="closeBtn" onClick={() => setPopupOn(false)}>X</button>
      </div>
    </div>
  )
}