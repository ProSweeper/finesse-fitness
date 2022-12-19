import { useRef } from 'react';
import './NewWorkoutPopup.css';
import * as workoutsAPI from '../../utilities/workout-api'

export default function NewWorkoutPopup({ setPopupOn, user }) {
  const nameRef = useRef();


  async function handleSubmit(evt) {
    evt.preventDefault();
    workoutsAPI.create({name: nameRef.current.value, user});
  }
  
  return (
    <div className='popup'>
      <div className='innerPopup'>
        <h3>New Workout</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor='workoutName'>Name
            <input 
              ref={nameRef} 
              type='text' 
              name='name' 
              placeholder='New Workout'
              required
            />
          </label>
          <button type='submit' className='add'>Add Workout</button>
        </form>
        <button className="closeBtn" onClick={() => setPopupOn(false)}>X</button>
      </div>
    </div>
  )
}